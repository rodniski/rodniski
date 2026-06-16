<div align="center">

# Guilherme Rodniski

**Full-Stack Engineer · Multi-Platform Architect · Design Systems**

I build products that scale from the browser to the pocket — one API contract, three native platforms, zero drift.

[![LinkedIn](https://img.shields.io/badge/-rodniski-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rodniski/)
[![Instagram](https://img.shields.io/badge/-@rodniski-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://instagram.com/rodniski)
[![GitHub](https://img.shields.io/badge/-rodniski-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/rodniski)
![Profile views](https://komarev.com/ghpvc/?username=rodniski&style=flat-square&color=0A66C2)

</div>

---

## 👋 About

Full-stack engineer specialized in **multi-platform architecture** and **design systems**. Currently at **Grupo Med4U**, leading **Med4Labs** — a monorepo that powers every digital product in the group, making sure **the same data, under the same contract, lands identical on the web, on iPhone, and on Android**.

Core strengths: **monorepos** (Turborepo/Bun), **type-safe API contracts** (OpenAPI → codegen for TypeScript + Kotlin Multiplatform), **native apps** (SwiftUI + Jetpack Compose), and **headless design systems**. I went from intern to tech lead in under two years, shipping corporate SaaS, ERP (Protheus) integrations, and an e-commerce that generated **R$6M+/year**.

`Multi-Platform` · `Monorepo` · `Kotlin Multiplatform` · `SwiftUI` · `Design Systems` · `OpenAPI Codegen` · `Next.js` · `Type-Safe Contracts`

---

## 🚀 Featured

### 🔨 [Anvil](https://github.com/rodniski/anvil) — Native macOS build orchestrator · **Open Source**

[![Release](https://img.shields.io/github/v/release/rodniski/anvil?style=flat-square&color=0E2F63)](https://github.com/rodniski/anvil/releases)
[![Platform](https://img.shields.io/badge/platform-macOS%2026-0E2F63?style=flat-square)](https://github.com/rodniski/anvil)
[![SwiftUI](https://img.shields.io/badge/SwiftUI-F05138?style=flat-square&logo=swift&logoColor=white)](https://github.com/rodniski/anvil)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](https://github.com/rodniski/anvil/blob/main/LICENSE)

A **SwiftUI** app that detects, configures, and runs builds across a multi-platform monorepo from one window. It auto-detects **iOS, Android, Bun, and Docker** components, discovers their schemes / flavors / scripts / services, and gives each one its own Build/Run with **live CPU & memory telemetry** — all wrapped in a hand-drawn blueprint aesthetic (SVG path tracing + a live Metal background).

> The tool I built to tame my own multi-platform workflow — and the clearest proof of what I do day to day.

![Anvil build dashboard](https://raw.githubusercontent.com/rodniski/anvil/main/docs/dashboard.png)

### 🏗️ Med4Labs — Multi-platform monorepo *(private · Grupo Med4U)*

> One OpenAPI spec, three native platforms, zero drift. The foundation behind every Med4U digital product.

```
openapi.yaml → spec.mjs (mapping rules)
  ├── TypeScript: transport types + canonical mappers + React Query hooks
  └── KMP: Kotlin canonical models + repositories
        ├── Android: direct Gradle dependency
        └── iOS: XCFramework embedded in Xcode
```

| Layer | Tech |
|---|---|
| Monorepo | Turborepo + Bun |
| Web | Next.js 16, React 19, Tailwind 4 |
| iOS | SwiftUI, iOS 26+ |
| Android | Jetpack Compose, Material 3 Expressive |
| Cross-platform | Kotlin Multiplatform (Ktor, Coroutines) |
| API contract | OpenAPI spec → codegen TS + KMP |
| State | Zustand (client) + TanStack Query (server) |
| Motion | motion/react, Three.js / R3F |
| Design System | @base-ui/react headless → @labs/ui |

**Key packages**
- **@labs/ui** — HIG-inspired design system: glass surfaces, spring animations, semantic tokens. Avatar, Badge, Card, Chart, Table, Toast, Sidebar, and more.
- **@labs/vitalis-api** — API connector with full codegen. `bun run generate` produces TS types, Kotlin mappers, Maven publish, and XCFramework assembly.
- **@labs/config** — Single source of truth: ESLint, Tailwind tokens, TypeScript configs, tsup presets.

**Apps**
- **med4doc/web** — Medical dashboard with animated KPI strips, a 3D ranking over procedural terrain (simplex noise + Three.js), a clinical-evolution timeline with a free-text medical parser, and revenue candle charts.
- **med4doc/swift** — Native iOS app in SwiftUI, integrating KMP via XCFramework.
- **med4doc/kotlin** — Native Android app in Jetpack Compose + Material 3 Expressive.
- **docs** — Interactive design-system documentation.
- **trunfo** — HR profile-card generator with image export.

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
![Kotlin Multiplatform](https://img.shields.io/badge/Kotlin_Multiplatform-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)
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

## 📂 Earlier work

<details>
<summary><b>RodoApp</b> — Corporate SaaS</summary>
<br>

Internal platform: corporate email-signature generator, tire-dispatch control with tracking, pre-document posting integrated with the Protheus ERP, and integration with TOTVS and ConexaoNFE web services for XML processing. Frontend in Next.js + shadcn/ui + Tailwind CSS.

</details>

<details>
<summary><b>SystemWiser</b> — HR Portal & Website</summary>
<br>

**HR Portal (Unibraspe):** online payslip generation, time-bank control, and income-statement issuing.

**Official Website:** institutional site with responsive design, optimized SEO (high Lighthouse score), and animations with Framer Motion + Lottie.

</details>

<details>
<summary><b>Ecoflow</b> — Shopify E-commerce · R$6M+/year</summary>
<br>

Shopify store integrated via Lexos for marketplaces and the Protheus ERP. End-to-end automation of orders, inventory, and billing — a success case blending technology, automation, and sales strategy.

</details>

---

## 📊 GitHub

<div align="center">

![Stats](https://github-readme-stats.vercel.app/api?username=rodniski&show_icons=true&hide_border=true&theme=tokyonight)
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=rodniski&layout=compact&hide_border=true&theme=tokyonight)

</div>

---

<div align="center">

*Always chasing the next architectural challenge.* 🧱
