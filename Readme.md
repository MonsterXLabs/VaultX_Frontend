<!-- README.md -->

![tw-banner](https://github.com/thirdweb-example/vite-starter/assets/57885104/cfe2164b-b50b-4d8e-aaaa-31331da2d647)


<h1 align="center">VaultX Frontend</h1>

<!-- GitHub badges -->
<p align="center">
  <img alt="GitHub Repo stars"
       src="https://img.shields.io/github/stars/MonsterXLabs/VaultX_Frontend?style=social">
  <img alt="GitHub forks"
       src="https://img.shields.io/github/forks/MonsterXLabs/VaultX_Frontend?style=social">
  <img alt="GitHub pull requests"
       src="https://img.shields.io/github/issues-pr/MonsterXLabs/VaultX_Frontend?color=blue">
  <img alt="GitHub issues"
       src="https://img.shields.io/github/issues/MonsterXLabs/VaultX_Frontend?color=yellow">
</p>

---

## 🚀 Introduction
**VaultX Frontend** is the public‑facing web application for the VaultX ecosystem.  
Bootstrapped with **Create React App** and enhanced via **react‑app‑rewired** for custom configuration, it offers TypeScript, Tailwind CSS, and a modern Web3 stack (ethers, wagmi, thirdweb, Web3Modal) out of the box.

Key highlights
- **React 18** UI with component‑first architecture  
- **Tailwind CSS** utility‑driven styling  
- **Redux Toolkit + Persist** for global state management  
- **Web3 wallets** (Coinbase Wallet, MetaMask, etc.) and smart‑contract hooks  
- Ready‑made integrations for React Query, Toast notifications, and more

---

## 📋 Requirements
| Tool | Minimum Version | Purpose |
| ---- | -------------- | ------- |
| **Node.js** | ≥ 18 | Runs dev server & builds |
| **Yarn** | ≥ 1.22 | Dependency manager |
| **Git** | Any | Clone / contribute |
| **.env** | — | Configure API endpoints, keys |

> Copy `.env.example` (if present) to `.env` and supply values such as `REACT_APP_API_URL`, `REACT_APP_ALCHEMY_KEY`, etc.

---

## 🛠 Quick Start

```bash
# 1 · Clone
git clone https://github.com/MonsterXLabs/VaultX_Frontend.git
cd VaultX_Frontend

# 2 · Install dependencies
yarn            # or npm install

# 3 · Run the app (development mode)
yarn start      # open http://localhost:3000

# 4 · Create a production build
yarn build      # outputs to /build

# 5 · Run tests
yarn test       # interactive watch mode
```
# 📁 Directory Structure
```bash
VaultX_Frontend/
│
├── assets/img/            # Static image assets
├── build/                 # Production build output (auto‑generated)
├── public/                # CRA public folder (static HTML, favicon, etc.)
├── src/                   # Application source
│   ├── components/        # Reusable React components
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page‑level views / routes
│   ├── redux/             # State slices, store config
│   ├── styles/            # Tailwind base / globals
│   └── index.tsx          # React entry point
│
├── .env                   # Runtime environment variables
├── index.html             # CRA HTML template
├── tailwind.config.js     # Tailwind theme & plugins
├── tsconfig.json          # TypeScript config
├── package.json           # Scripts & dependencies
└── README.md              # ← You are here
```

# 💡 Tips & Customisation
Override CRA config in config‑overrides.js (via react‑app‑rewired) without ejecting.

Theming: Extend Tailwind colors or switch to dark mode in tailwind.config.js.

Path aliases: Add custom aliases in tsconfig.json & webpack override for cleaner imports.

Web3 Providers: Swap RPC endpoints via .env (REACT_APP_RPC_URL) as needed.

CI/CD: Recommended GitHub Action → yarn install && yarn test && yarn build.

# 🤝 Contributing
Fork the repository

Create a branch: git checkout -b feature/awesome‑thing

Commit your changes: git commit -m "feat: add awesome thing"

Push to GitHub: git push origin feature/awesome‑thing

Open a pull request 🚀

Please run yarn lint && yarn test before submitting PRs.

# 👨‍💻 Developed By
Made with ❤️ by MonsterXLabs

