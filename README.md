# TrustBank (Finance SaaS)

<div align="center">
  <br />
    <a href="https://trust-bank.onojah.com/" target="_blank">
      <img src="https://i.imgur.com/iKF2DDo.png" alt="Trust Bank Dashboard">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_._JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
  <h3 align="center">A Finance SaaS Platform</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

A Finance SaaS Platform with ability to track your income and expenses, categorize transactions and assign them to specific accounts, as well as importing transactions using a CSV file.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next JS
- TypeScript
- Hono JS
- Clerk JS
- Shadcn/ui
- Tailwind CSS
- PostgreSQL
- Drizzle ORM

Application Link: [https://trust-bank.onojah.com/](https://trust-bank.onojah.com/)

## <a name="features">🔋 Features</a>

👉 **Robust Authentication**: Secure and reliable user login and registration system.

👉 **User Dashboard**: View and manage your data transactions, income and expenses through interractive charts. Filter transactions through date ranges and different accounts.

👉 **Transactions Page**: Dedicated transactions page for users to add, sort, search, edit and delete transactions. Bulk transactions imports via CSV files and ability to delete bulk transactions.

👉 **Accounts Page**: Dedicated accounts page for users to add, sort, search, edit and delete accounts.

👉 **Categories Page**: Dedicated categires page for users to add, sort, search, edit and delete categories.

👉 **Responsive Design**: Fully functional and visually appealing across all devices and screen sizes.

and many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [bun](https://bun.sh/) or [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/JayOnojah/trust-bank.git
cd trust-bank
```

**Installation**

Install the project dependencies using npm:

```bash
bun install
```

or

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

DATABASE_URL=

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Replace the placeholder values with your actual PostgresSQL Database (connection string) & Clerk credentials. You can obtain these credentials by signing up on the [Neon - Serverless Postgres Platform](https://neon.tech/) and [Clerk](https://clerk.com/) websites.

**Running the Project**

```bash
bun run dev
```

or

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
