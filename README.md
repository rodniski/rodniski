<div align="center">

# Hey, I'm Rodniski 👋

**Full Stack Developer · Multi-Platform Architect · Design System Enthusiast**

Construindo produtos que escalam — do browser ao bolso.

[![LinkedIn](https://img.shields.io/badge/-rodniski-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rodniski/)
[![Instagram](https://img.shields.io/badge/-@rodniski-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://instagram.com/rodniski)
[![GitHub](https://img.shields.io/badge/-rodniski-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/rodniski)

</div>

---

Atualmente no **Grupo Med4U**, liderando a arquitetura do **Med4Labs** — um monorepo multi-plataforma que serve como fundação de todos os produtos digitais do grupo. Minha obsessão é garantir que o mesmo dado, com o mesmo contrato, chegue perfeito no browser, no iPhone e no Android.

Antes disso, construí SaaS corporativo, integrações com ERP Protheus, e-commerces que faturaram milhões, e evoluí de estagiário a líder técnico em menos de dois anos.

---

## 🧬 Stack

<div align="center">

**Frontend & Mobile**

![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=000)
![SwiftUI](https://img.shields.io/badge/SwiftUI-F05138?style=for-the-badge&logo=swift&logoColor=white)
![Jetpack Compose](https://img.shields.io/badge/Jetpack_Compose-4285F4?style=for-the-badge&logo=jetpackcompose&logoColor=white)
![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**Backend & Cross-Platform**

![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Rust](https://img.shields.io/badge/Rust-000?style=for-the-badge&logo=rust)
![Golang](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)
![Kotlin](https://img.shields.io/badge/Kotlin_Multiplatform-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)

**Tooling & Infra**

![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000?style=for-the-badge&logo=bun)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000?style=for-the-badge&logo=threedotjs)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

</div>

---

## 🏗️ Med4Labs — O projeto principal

> Monorepo multi-plataforma do Grupo Med4U. Um OpenAPI spec, três plataformas, zero drift.

```
openapi.yaml → spec.mjs (mapping rules)
  ├── TypeScript: transport types + canonical mappers + React Query hooks
  └── KMP: Kotlin canonical models + repositories
        ├── Android: Gradle dependency direto
        └── iOS: XCFramework embedado no Xcode
```

**O que tem dentro:**

| Camada | Tecnologia |
|---|---|
| Monorepo | Turborepo + Bun |
| Web | Next.js 16, React 19, Tailwind 4 |
| iOS | SwiftUI, iOS 26+ |
| Android | Jetpack Compose, Material 3 Expressive |
| Cross-platform | Kotlin Multiplatform (Ktor, Coroutines) |
| Contrato API | OpenAPI spec → codegen TS + KMP |
| State | Zustand (client) + TanStack Query (server) |
| Animação | motion/react, Three.js/R3F |
| Design System | @base-ui/react headless → @labs/ui |

**Packages principais:**
- **@labs/ui** — Design system HIG-inspired com surface glass, spring animations e tokens semânticos. Avatar, Badge, Card, Chart, Table, Toast, Sidebar e mais.
- **@labs/vitalis-api** — Connector de API com codegen completo. `bun run generate` produz types TS, mappers Kotlin, Maven publish e XCFramework assembly.
- **@labs/config** — Source of truth: ESLint, Tailwind tokens, TypeScript configs, tsup presets.

**Apps:**
- **med4doc/web** — Dashboard médico com KPI strips animados, ranking 3D com montanha procedural (simplex noise + Three.js), timeline de evoluções clínicas com parser de texto livre médico, candle charts de faturamento.
- **med4doc/swift** — App iOS nativo em SwiftUI com integração KMP via XCFramework.
- **med4doc/kotlin** — App Android nativo em Jetpack Compose + Material 3 Expressive.
- **docs** — Documentação interativa do design system.
- **trunfo** — Gerador de cards de perfil pro RH com export de imagem.

---

## 📂 Projetos anteriores

<details>
<summary><b>RodoApp</b> — SaaS Corporativo</summary>
<br>

Plataforma interna com gerador de assinaturas corporativas, controle de saída de pneus com rastreamento, lançamento de pré-documentos integrado ao ERP Protheus, e integração com Webservices TOTVS e ConexaoNFE para processamento de XMLs. Frontend em Next.js + ShadCN + TailwindCSS.

</details>

<details>
<summary><b>SystemWiser</b> — Portal RH & Website</summary>
<br>

**Portal RH (Unibraspe):** Geração de holerites online, controle de banco de horas e emissão de informe de rendimentos.

**Website Oficial:** Site institucional com design responsivo, SEO otimizado (alta pontuação Lighthouse) e animações com Framer Motion + Lottie.

</details>

<details>
<summary><b>Ecoflow</b> — E-commerce Shopify · +R$6M/ano</summary>
<br>

E-commerce na Shopify com integração via Lexos para marketplaces e ERP Protheus. Automação completa de pedidos, estoques e faturamento. Case de sucesso unindo tecnologia, automação e estratégia de vendas.

</details>

---

## 📊 GitHub Stats

<div align="center">

<img src="https://github-readme-streak-stats.herokuapp.com/?user=rodniski&theme=github-dark-blue&hide_border=true" />

</div>

---

<div align="center">

*Sempre em busca do próximo desafio arquitetural.* 🧱

</div>
