# 🏥 MediFlow – Smart Hospital Queue Management System

MediFlow is a real-time hospital queue and patient management system built using React.  
It simulates a real hospital workflow with **priority-based queueing, live updates, and role-based dashboards** for Receptionists and Patients.

---

# 🚀 Project Overview

This project solves hospital waiting inefficiency by:
- Digitizing patient registration
- Prioritizing emergency & senior patients automatically
- Managing live queue updates across multiple pages
- Providing dashboards for staff and public (landing page)

---

# ⚙️ Tech Stack

- React.js
- React Router DOM
- Context API (Global State Management)
- JavaScript (Logic)
- CSS (UI Styling)
- Lucide React Icons

---

# 🧠 Core Concept

All pages share a **single global state** using React Context API:

```js
patients = [
  {
    token,
    name,
    age,
    gender,
    phone,
    priority: "emergency | senior | normal",
    status: "waiting | serving | completed"
  }
]
