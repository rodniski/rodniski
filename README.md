<div align="center">

# Guilherme Rodniski

**Full-Stack Engineer · Multi-Platform Architect · Design Systems**

I build products that scale from the browser to the pocket — one API contract, three native clients, zero drift.

[![LinkedIn](https://img.shields.io/badge/-rodniski-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rodniski/)
[![Instagram](https://img.shields.io/badge/-@rodniski-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://instagram.com/rodniski)
[![GitHub](https://img.shields.io/badge/-rodniski-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/rodniski)
![Profile views](https://komarev.com/ghpvc/?username=rodniski&style=flat-square&color=0A66C2)

</div>

---

## 👋 About

Full-stack engineer specialized in **multi-platform architecture** and **design systems**. Currently at **Grupo Med4U**, leading **M4Labs** — the monorepo that powers every digital product in the group, making sure **the same data, under the same contract, lands identical on the web, on iPhone, and on Android**.

The trick is a single source of truth: a **Protobuf/Connect** contract that codegens type-safe clients for **TypeScript, Swift, and Kotlin**, all talking to a **Go Backend-for-Frontend** that fans out to a fleet of **Go microservices** on **GKE**. No drift, no per-platform reimplementation.

Core strengths: **monorepos** (Turborepo/Bun), **type-safe RPC contracts** (Protobuf + Connect via `buf`), **Go microservices** (chi · pgx · slog · Clean Architecture), **native apps** (SwiftUI + Jetpack Compose), and **headless design systems**. I went from intern to tech lead in under two years, shipping corporate SaaS, ERP (Protheus) integrations, and an e-commerce that generated **R$6M+/year**.

`Multi-Platform` · `Monorepo` · `Go` · `Protobuf/Connect` · `SvelteKit` · `SwiftUI` · `Design Systems` · `GKE`

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

### 🏗️ M4Labs — Multi-platform platform *(private · Grupo Med4U)*

> One Protobuf contract, a Go edge, three native clients, zero drift. The foundation behind every Med4U digital product.

![M4Labs — doctor dashboard (SvelteKit web client)](assets/m4labs-dashboard.png)

```
proto (labs.v1)  ──[ buf generate ]──►  type-safe Connect clients
  ├── Web      protoc-gen-es   →  TypeScript + @connectrpc/connect-web   (SvelteKit)
  ├── iOS      connect-swift   →  M4DocKit                               (SwiftUI)
  └── Android  connect-kotlin  →  (Jetpack Compose)
                          │
            Go BFF  (bff/labs · Connect edge: JWT + scopes + proto mapping)
                          │
            Go microservices  (chi · pgx · slog)  ──►  Helix gRPC  ──►  Oracle / Tasy
                                                    └►  PostgreSQL
```

| Layer | Tech |
|---|---|
| Monorepo | Turborepo + Bun |
| Web | SvelteKit 2 · Svelte 5 · Tailwind 4 |
| iOS | SwiftUI (iOS 26) · connect-swift |
| Android | Jetpack Compose · Material 3 |
| API contract | Protobuf + Connect (`buf`, protoc-gen-es / connect-swift) |
| BFF | Go · chi · Connect · JWT edge |
| Services | Go microservices · pgx · slog · Clean Architecture |
| Data | Oracle/Tasy via Helix gRPC · PostgreSQL |
| State | TanStack Query + Svelte runes (web) · `@Observable` (iOS) |
| Design System | shadcn-svelte → *Travertino & Pátina* (web) · *Lumen* (iOS) |
| Infra | GKE Autopilot · Terraform · Workload Identity · Cloud SQL |
| CI/CD | GitHub Actions · per-service deploy · Trivy / SBOM / cosign |

**Backbone**
- **bff/labs** — the Go Backend-for-Frontend: the single Connect edge for web + iOS + Android. Validates the JWT (httpOnly cookie for web, bearer for mobile), enforces per-RPC scopes, fans out to domain services, and maps internal protos → public `labs.v1`. Zero domain logic, no database.
- **Go service fleet** — `auth` (LDAP/AD + JWT), `helix` (gRPC gateway to Oracle/Tasy), `m4doc/{paciente,faturamento,nps}`, `m4admin/{alteracoes,encarreiramento,notification,obits}`, `monitor-pacientes`. Each is Clean Architecture: chi · pgx · slog · Connect.
- **Travertino & Pátina** — headless design system on top of shadcn-svelte: canonical semantic tokens, elevation-by-tone (no borders), `motion-sv` springs, `layerchart` dataviz.

**Apps**
- **labs (web)** — SvelteKit medical portal: doctor dashboard (KPI strips, NPS trend, billing candle charts), an agenda timeline with a free-text clinical-evolution (RTF→text) parser, GED document preview, and a command palette. Talks to the Go BFF over `connect-web`, cached with TanStack Query.
- **food (web)** — iFood IOP ordering PWA (SvelteKit + DaisyUI).
- **m4doc (iOS)** — native SwiftUI app, `connect-swift` straight to the BFF, custom GLSL→Metal shader background, *Lumen* theme.
- **m4doc (Android)** — native Jetpack Compose app, Material 3.

![M4Labs — sign-in screen with a custom GLSL→Metal kintsugi-marble shader](assets/m4labs-login.png)

---

## 🧬 Stack

<div align="center">

**Frontend & Mobile**

![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![SwiftUI](https://img.shields.io/badge/SwiftUI-F05138?style=for-the-badge&logo=swift&logoColor=white)
![Jetpack Compose](https://img.shields.io/badge/Jetpack_Compose-4285F4?style=for-the-badge&logo=jetpackcompose&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000)
![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs)
![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**Backend & Contracts**

![Golang](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)
![Protobuf](https://img.shields.io/badge/Protobuf-2C5FE3?style=for-the-badge&logo=protobuf&logoColor=white)
![gRPC](https://img.shields.io/badge/gRPC_/_Connect-244c5a?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Oracle](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white)

**Infra & Tooling**

![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000?style=for-the-badge&logo=bun)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
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

</div>
