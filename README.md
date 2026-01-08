# 🧠 LRU Cache Visualizer

An interactive **LRU (Least Recently Used) Cache Visualizer** built using **React** that demonstrates how an LRU cache works internally using a **HashMap** and a **Doubly Linked List**.  
The project visually shows cache operations, usage order, eviction, and time complexity.

---
## 🚀 Live Demo
👉 dapper-manatee-d62e13.netlify.app
---

## 📌 Features

- 🧠 Visualizes **LRU Cache** behavior step-by-step
- 🔑 Supports **PUT(key, value)** and **GET(key)** operations
- 🔄 Shows **MRU → LRU** order visually using arrows
- ❌ Automatically evicts **Least Recently Used** item on overflow
- 📊 Displays **GET result inside UI** (no popups)
- ⏱️ Shows **O(1) time complexity** for operations
- 🎨 Clean and professional UI layout

---

## 🧠 How LRU Cache Works

- **HashMap** provides O(1) access to cache entries
- **Doubly Linked List** maintains usage order
- Most Recently Used (MRU) element is near the head
- Least Recently Used (LRU) element is near the tail
- On `GET` or `PUT`, the accessed node is moved to MRU position
- On cache overflow, the LRU element is evicted

---

## 🛠️ Technologies Used

- **React (Create React App)**
- **JavaScript (ES6)**
- **CSS (Flexbox & Grid)**
- **Netlify** for deployment

---

## ⏱️ Time Complexity

| Operation | Time Complexity |
|---------|-----------------|
| GET     | O(1)            |
| PUT     | O(1)            |

---

## 📂 Project Structure

src/
├── logic/
│ └── LRUCache.js
├── components/
│ ├── CacheView.jsx
│ ├── Controls.jsx
├── App.jsx
├── App.css
└── index.js

---

## ▶️ How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/23wh1a655/lru-cache-visualizer.git
Navigate to the project folder:

cd lru-cache-visualizer
Install dependencies:


npm install
Start the development server:

npm start

Open in browser:
http://localhost:3000

🌐 Deployment
The project is deployed on Netlify using a production build:

npm run build
