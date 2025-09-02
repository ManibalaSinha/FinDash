# FinDash – Financial Dashboard Platform

**FinDash** is a **data-driven, enterprise-grade financial dashboard platform** designed to deliver real-time portfolio insights, interactive trade views, and analytics for investment management. Built with modern frontend technologies, it demonstrates handling **large datasets, grid-based UI, and GraphQL integration** for fintech applications.

---

## 🔹 Features

* **Interactive Dashboard** – View portfolios, trades, and analytics with dynamic grid-based tables.
* **AG Grid Integration** – Enterprise-grade table functionality with sorting, filtering, pagination, and custom layouts.
* **Charts & Analytics** – ECharts for visualizing portfolio trends and investment data.
* **GraphQL API** – Efficient data fetching from backend microservices.
* **State Management** – Redux Toolkit ensures predictable and scalable frontend state.
* **Multi-Currency Support** – Handle multiple currencies and live calculations.
* **Telemetry & Security** – Logging, entitlement-based data filtering, and secure access control.
* **Responsive Design** – Works across devices with optimized layouts.

---

## 🔹 Tech Stack

**Frontend:**

* React.js
* Redux Toolkit
* AG Grid
* ECharts
* Apollo Client / GraphQL
* JavaScript (ES6+) / HTML / CSS

**Backend:**

* Node.js / Express
* GraphQL APIs
* Java microservices (optional integration)
* PostgreSQL / MongoDB

**Other Tools:**

* Git & GitHub
* npm / Webpack
* Docker (optional for deployment)

---

## 🔹 Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/ManibalaSinha/FinDash.git
cd FinDash/frontend
```

2. **Install dependencies**

```bash
npm install
```

> ⚠️ If you face dependency issues with GraphQL / Apollo Client, use:
> `npm install --legacy-peer-deps`

3. **Start the development server**

```bash
npm start
```

4. **Build for production**

```bash
npm run build
```

---

## 🔹 Deployment to GitHub Pages

1. Install `gh-pages`:

```bash
npm install --save gh-pages
```

2. Add `homepage` in `package.json`:

```json
"homepage": "https://ManibalaSinha.github.io/FinDash"
```

3. Add deploy scripts:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Deploy:

```bash
npm run deploy
```

> Your app will be live at: `https://ManibalaSinha.github.io/FinDash/`

---

## 🔹 Project Structure

```
FinDash/
├─ frontend/
│  ├─ public/
│  │  └─ index.html
│  ├─ src/
│  │  ├─ components/      # React components
│  │  ├─ redux/           # Redux slices & store
│  │  └─ App.js
│  └─ package.json
├─ backend/
│  ├─ server.js
│  └─ schema/             # GraphQL schemas
└─ README.md
```

---

## 🔹 Why This Project

FinDash demonstrates following in fintech/data-heavy environments**:

* Building **performance-optimized dashboards**
* Working with **complex grid-based UI** (AG Grid)
* Integrating **GraphQL APIs** and backend microservices
* Managing application state with **Redux Toolkit**
* Developing a **responsive, secure, and scalable** frontend
