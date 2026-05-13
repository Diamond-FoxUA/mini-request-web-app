# Mini Request System (Technical Assignment)

A simplified web application for creating, managing, and processing service requests with distinct user roles (User and Manager). The application safely stores data locally and synchronizes status updates in real-time.

🚀 [Live Demo](https://mini-request-web-app.vercel.app/)

---

## 🛠️ Tech Stack

- **React.js** — Frontend framework
- **Zustand** — Global state management and LocalStorage syncing
- **Tailwind CSS** — Modern utility-first styling
- **Formik & Yup** — Form handling and strict validation

---

## ✨ Features

### General

- **Role Switcher:** Toggle between User and Manager views.
- **Data Persistence:** Automatically saves all changes to LocalStorage.
- **Form Validation:** Input validation for titles and descriptions.
- **Request List:** View all personal requests in a clean interface.
- **Delete:** Remove requests.
- **Sorting:** Organized all submissions by creation date.=

### User Role

- **Request Creation:** Create requests with automatic IDs, creation date and "new" status.
- **Edit:** Modify pending requests (status "new")

### Manager Role

- **Status Controls:** Move requests step-by-step (new ➡️ in progress ➡️ done).
- **Filters:** Filter tasks by status (All, New, In Progress, Done).

---

## 💻 Getting Started

1. Clone & Install

```
git clone https://github.com/Diamond-FoxUA/mini-request-web-app.git
cd mini-request-web-app
npm install
```

2. Run locally

```
npm run dev
```

Open the local URL displayed in your terminal.

## 📝 Implementation Overview

- **State:** Zustand handles application state and keeps data synced across user roles.
- **Validation:** Formik and Yup block invalid or empty request submissions.
- **Styling:** Tailwind CSS delivers a clean, responsive layout with zero custom CSS boilerplate.
