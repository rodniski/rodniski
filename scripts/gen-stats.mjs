// Gera assets/stats.svg a partir da GraphQL do GitHub, incluindo repositórios privados.
//
// Uso:
//   STATS_TOKEN=<pat> node scripts/gen-stats.mjs     # dados reais (PAT classic, escopo `repo`)
//   node scripts/gen-stats.mjs --sample              # dados de exemplo (sem rede), só p/ preview
//
// Requer que "Include private contributions on my profile" esteja LIGADO no GitHub
// para que totalCommitContributions reflita os commits privados.

import { writeFileSync, mkdirSync } from "node:fs";

const SAMPLE = process.argv.includes("--sample");
const TOKEN = process.env.STATS_TOKEN;
if (!TOKEN && !SAMPLE) {
  console.error("STATS_TOKEN ausente (ou rode com --sample).");
  process.exit(1);
}

const MONO = "ui-monospace, 'JetBrains Mono', SFMono-Regular, Consolas, monospace";
const SANS = "ui-sans-serif, system-ui, 'Segoe UI', Roboto, sans-serif";
const FR = "'Fraunces', Georgia, 'Times New Roman', serif";

const fmt = (n) => n.toLocaleString("pt-BR");
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const API = "https://api.github.com/graphql";

async function gql(query, variables = {}) {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Authorization: `bearer ${TOKEN}`,
      "Content-Type": "application/json",
      "User-Agent": "rodniski-stats",
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`GraphQL HTTP ${res.status}: ${await res.text()}`);
  const json = await res.json();
  if (json.errors) throw new Error("GraphQL: " + JSON.stringify(json.errors));
  return json.data;
}

async function collect() {
  // fase 1 — perfil
  const base = await gql(`query{
    viewer{
      createdAt
      pullRequests{ totalCount }
      repositories(ownerAffiliations:[OWNER], isFork:false){ totalCount }
    }
  }`);
  const v = base.viewer;
  const createdYear = new Date(v.createdAt).getUTCFullYear();
  const nowYear = new Date().getUTCFullYear();

  // fase 2 — commits por ano (histórico completo, inclui privado via aliases num só request)
  const aliases = [];
  for (let y = createdYear; y <= nowYear; y++) {
    aliases.push(
      `y${y}: contributionsCollection(from:"${y}-01-01T00:00:00Z", to:"${y}-12-31T23:59:59Z"){ totalCommitContributions restrictedContributionsCount }`
    );
  }
  const cd = await gql(`query{ viewer{ ${aliases.join("\n")} } }`);
  let totalCommits = 0;
  let thisYear = 0;
  for (let y = createdYear; y <= nowYear; y++) {
    const c = cd.viewer[`y${y}`] || {};
    // com a opção de contribuições privadas LIGADA, restricted ~ 0 e o privado já entra em total.
    const n = (c.totalCommitContributions || 0) + (c.restrictedContributionsCount || 0);
    totalCommits += n;
    if (y === nowYear) thisYear = n;
  }

  // fase 3 — linguagens + stars (paginado, inclui privado, sem forks)
  const langSize = new Map();
  const langColor = new Map();
  let stars = 0;
  let cursor = null;
  let hasNext = true;
  while (hasNext) {
    const page = await gql(
      `query($cursor:String){
        viewer{
          repositories(first:100, after:$cursor, ownerAffiliations:[OWNER], isFork:false, orderBy:{field:UPDATED_AT, direction:DESC}){
            pageInfo{ hasNextPage endCursor }
            nodes{
              stargazerCount
              languages(first:10, orderBy:{field:SIZE, direction:DESC}){
                edges{ size node{ name color } }
              }
            }
          }
        }
      }`,
      { cursor }
    );
    const repos = page.viewer.repositories;
    for (const r of repos.nodes) {
      stars += r.stargazerCount || 0;
      for (const e of r.languages?.edges || []) {
        langSize.set(e.node.name, (langSize.get(e.node.name) || 0) + e.size);
        if (e.node.color) langColor.set(e.node.name, e.node.color);
      }
    }
    hasNext = repos.pageInfo.hasNextPage;
    cursor = repos.pageInfo.endCursor;
  }

  const totalBytes = [...langSize.values()].reduce((a, b) => a + b, 0) || 1;
  const topLangs = [...langSize.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, size]) => ({
      name,
      pct: Math.round((size / totalBytes) * 100),
      color: langColor.get(name) || "#8B928C",
    }));

  return {
    commits: totalCommits,
    thisYear,
    prs: v.pullRequests.totalCount,
    repos: v.repositories.totalCount,
    stars,
    topLangs,
  };
}

function sampleData() {
  return {
    commits: 4873,
    thisYear: 1920,
    prs: 214,
    repos: 48,
    stars: 37,
    topLangs: [
      { name: "Go", pct: 38, color: "#00ADD8" },
      { name: "TypeScript", pct: 27, color: "#3178C6" },
      { name: "Swift", pct: 18, color: "#F05138" },
      { name: "Kotlin", pct: 9, color: "#A97BFF" },
      { name: "Shell", pct: 5, color: "#89E051" },
    ],
  };
}

function render(d) {
  // herói de commits: "commits" posicionado após o número (largura ~ 0.60em em mono)
  const heroStr = fmt(d.commits);
  const heroX = 28 + Math.round(heroStr.length * 0.6 * 54) + 14;

  // barra de linguagens (track 324..463, w=139): segmentos por % absoluto, sobra = track
  let bx = 324;
  let segs = "";
  for (const l of d.topLangs) {
    const w = Math.max(3, Math.round((l.pct / 100) * 139));
    segs += `<rect x="${bx}" y="54" width="${w}" height="9" rx="4.5" fill="${l.color}"/>`;
    bx += w + 1;
  }

  // legenda (até 5 linhas)
  let ly = 89;
  let legend = "";
  for (const l of d.topLangs) {
    const nm = l.name.length > 13 ? l.name.slice(0, 12) + "…" : l.name;
    legend += `<rect x="324" y="${ly - 9}" width="9" height="9" rx="2" fill="${l.color}"/>`;
    legend += `<text x="340" y="${ly}" fill="#E9E5DC" font-size="13" font-family="${FR}">${esc(nm)}</text>`;
    legend += `<text x="463" y="${ly}" fill="#8B928C" font-size="12" font-family="${MONO}" text-anchor="end">${l.pct}%</text>`;
    ly += 22;
  }

  return `<svg width="495" height="210" viewBox="0 0 495 210" role="img" xmlns="http://www.w3.org/2000/svg">
<title>Estatísticas de GitHub de Guilherme Rodniski</title>
<desc>${fmt(d.commits)} commits (inclui privados), ${fmt(d.prs)} pull requests, ${fmt(d.repos)} repositórios, ${fmt(d.stars)} stars. Linguagens: ${d.topLangs.map((l) => `${l.name} ${l.pct}%`).join(", ")}.</desc>
<rect x="0" y="0" width="495" height="210" rx="18" fill="#161B1A"/>
<line x1="300" y1="34" x2="300" y2="176" stroke="#2A312F" stroke-width="1"/>
<text x="28" y="42" fill="#B9A87E" font-size="11" letter-spacing="2" font-family="${MONO}">GITHUB · INCL. PRIVATE</text>
<text x="28" y="98" fill="#E9E5DC" font-size="54" font-weight="600" font-family="${MONO}">${fmt(d.commits)}</text>
<text x="${heroX}" y="98" fill="#8B928C" font-size="14" font-family="${SANS}">commits</text>
<text x="28" y="120" fill="#37A88C" font-size="12" font-family="${MONO}">▲ ${fmt(d.thisYear)} este ano</text>
<text x="28" y="166" fill="#C2814B" font-size="22" font-weight="600" font-family="${MONO}">${fmt(d.prs)}</text>
<text x="28" y="184" fill="#8B928C" font-size="11" font-family="${SANS}">pull requests</text>
<text x="120" y="166" fill="#37A88C" font-size="22" font-weight="600" font-family="${MONO}">${fmt(d.repos)}</text>
<text x="120" y="184" fill="#8B928C" font-size="11" font-family="${SANS}">repositórios</text>
<text x="200" y="166" fill="#D2B05A" font-size="22" font-weight="600" font-family="${MONO}">${fmt(d.stars)}</text>
<text x="200" y="184" fill="#8B928C" font-size="11" font-family="${SANS}">stars</text>
<text x="324" y="42" fill="#B9A87E" font-size="11" letter-spacing="2" font-family="${MONO}">LINGUAGENS</text>
<rect x="324" y="54" width="139" height="9" rx="4.5" fill="#2A312F"/>
${segs}
${legend}
</svg>
`;
}

const data = SAMPLE ? sampleData() : await collect();
mkdirSync("assets", { recursive: true });
writeFileSync("assets/stats.svg", render(data));
console.log(
  `stats.svg gerado — commits ${fmt(data.commits)} · prs ${fmt(data.prs)} · repos ${fmt(data.repos)} · stars ${fmt(data.stars)} · langs ${data.topLangs.map((l) => l.name).join("/")}${SAMPLE ? " (SAMPLE)" : ""}`
);
