```markdown
# 🪶 Feather Next

A modern full-stack authentication-based web application built with **Next.js App Router**, **NextAuth**, and **React**.  
Feather Next demonstrates real-world authentication flows, protected routes, and clean client/server separation using the latest Next.js features.

🔗 **Live Demo**:  
https://feather-next-kz1k-84mk492tv-souravroy99s-projects.vercel.app  

📦 **GitHub Repository**:  
https://github.com/Souravroy99/Feather_NEXT

---

## 📌 Overview

Feather Next is a full-stack starter project focused on **authentication and dashboard access**.  
It showcases how to properly structure authentication flows in the **Next.js App Router**, including:

- Client & server component separation
- Credential-based authentication
- OAuth social login
- Protected dashboard routes
- Production-ready deployment on Vercel

This project is ideal as:
- A real-world **Next.js authentication reference**
- A **starter template** for SaaS or dashboard-based apps
- A **portfolio project** demonstrating full-stack skills

---

## 🚀 Features

- ✅ User Registration
- ✅ Email & Password Login
- ✅ Google OAuth Login
- ✅ Protected Dashboard Routes
- ✅ NextAuth Session Handling
- ✅ API Routes for Auth
- ✅ Clean UI with responsive design
- ✅ Deployed on Vercel

---

## 🛠 Tech Stack

**Frontend**
- Next.js (App Router)
- React
- CSS Modules

**Backend / Auth**
- NextAuth
- Credentials Provider
- Google OAuth Provider

**Deployment**
- Vercel

---

## 📂 Project Structure

```

Feather_NEXT/
├── app/
│   ├── api/
│   │   └── auth/                 # NextAuth API routes
│   ├── dashboard/
│   │   ├── (auth)/               # Login & Register pages
│   │   └── page.jsx              # Protected dashboard
│   ├── layout.js
│   └── page.js                   # Home page
│
├── components/                   # Reusable components
├── context/                      # Context providers
├── models/                       # Data models
├── utils/                        # Utility functions
├── public/                       # Static assets
│
├── next.config.mjs
├── package.json
└── README.md

````

---

## ⚙️ Getting Started (Local Setup)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Souravroy99/Feather_NEXT.git
cd Feather_NEXT
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🔐 Authentication Flow

* **Register**:
  Users can create an account via the registration form.

* **Login**:

  * Email & password authentication
  * Google OAuth login

* **Session Handling**:

  * Managed via NextAuth
  * Authenticated users are redirected to `/dashboard`
  * Unauthenticated users cannot access protected routes

---

## 🧠 Key Learnings from This Project

* Proper use of **Client vs Server Components**
* Handling **useSearchParams with Suspense**
* Structuring auth pages using route groups
* Implementing **NextAuth in App Router**
* Fixing prerender & CSR bailout issues
* Deploying production-ready Next.js apps on Vercel

---

## 🧪 Possible Improvements

* Add database integration (MongoDB / PostgreSQL)
* Implement password hashing & validation
* Add role-based access control
* Add dark mode
* Improve error handling UI
* Add tests for auth flows

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch

   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit changes
4. Push to your branch
5. Open a Pull Request

---
