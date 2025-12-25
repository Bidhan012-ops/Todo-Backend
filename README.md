# 📝 To-Do App

A clean and responsive **To-Do Application** to help you organize tasks efficiently with date & time scheduling. Built with a modern UI and simple task management features.

---

## 🚀 Features

Based on the current UI and working behavior of the app, the following functionalities are implemented:

* ➕ **Add Task**

  * Enter task title
  * Select optional **date** and **time**
  * Click **ADD** to create a task

* ✏️ **Inline Edit Mode**

  * Tasks can be edited directly in input fields
  * Update task text, date, and time
  * Click **Done** to save changes

* ✅ **Mark as Complete**

  * Mark tasks as completed
  * Completed tasks show:

    * Strikethrough text
    * "Completed" status button

* 🔄 **Toggle Task State**

  * Incomplete → Complete
  * UI updates instantly without page refresh

* 🗑️ **Delete Task**

  * Remove tasks permanently

* 📊 **Live Task Counter**

  * Displays total number of tasks dynamically

* 🕒 **Date & Time Display**

  * Each task shows its scheduled date and time

* 🎨 **Visual Status Indicators**

  * Blue border → Active task
  * Green button → Completed
  * Red button → Delete action

---

## 🖼️ Preview

> Simple and user‑friendly task management interface

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* CSS / Tailwind (if applicable)
* React Icons

**State Management:**

* React Hooks (`useState`)

**Backend (if connected):**

* Node.js
* Express.js
* MongoDB

---

## 📂 Project Structure

```
todo-app/
├── src/
│   ├── components/
│   │   ├── TodoInput.jsx
│   │   ├── TodoItem.jsx
│   │   └── TodoList.jsx
│   ├── services/
│   │   └── todoservices.js
│   ├── App.jsx
│   └── main.jsx
├── public/
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the app

```bash
npm run dev
```

App will run on:

```
http://localhost:5173
```

---

## 🔐 Environment Variables (if backend used)

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

⚠️ **Do not push `.env` to GitHub**

---

## 📌 Usage

1. Enter a task name
2. Select date and time
3. Click **ADD**
4. Edit / Complete / Delete tasks as needed

---

## 🎯 Future Improvements

* 🔔 Task reminders / notifications
* 📱 Mobile optimization
* 🔄 Drag & drop task ordering
* 🔐 User authentication
* ☁️ Cloud sync

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Bidhan Bera**
CSE Student | MERN Stack Learner
Narula Institute of Technology

---

⭐ If you like this project, give it a star on GitHub!
