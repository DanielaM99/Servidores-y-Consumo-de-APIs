# 🛒 Product Management - CRUD Project with JSON Server & Fetch API

This project allows you to manage a product list through a simple web interface. You can add, view, and delete products (even multiple at once) connected to a simulated API using **JSON Server**.

---

## 🚀 Main Features

✅ Add products through a form  
✅ View products in a dynamic table (modal popup)  
✅ Delete individual or multiple selected products  
✅ Basic validation and error handling  
✅ Communication with API using Fetch (GET, POST, DELETE)  
✅ Clean and commented code with camelCase naming  
✅ Organized folder structure (frontend/backend)

---

## 🗂️ Project Structure

```
project/
├── frontend/
│   ├── index.html         # Main user interface
│   ├── style.css          # Custom styles
│   └── main.js            # JavaScript logic (Fetch + DOM)
├── backend/
│   ├── db.json            # Simulated database for JSON Server
│   └── gestion_api.js     # Optional testing script (Node.js)
```

---

## ⚙️ Technologies Used

- HTML5, CSS3, JavaScript (vanilla)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JSON Server](https://github.com/typicode/json-server)
- Node.js (for running scripts and the mock API)

---

## ▶️ How to Run the Project

### 1. Install JSON Server
```bash
npm install -g json-server
```

### 2. Start the mock server
```bash
cd backend
json-server --watch db.json --port 3000
```

Your API will be available at:  
📍 `http://localhost:3000/productos`

### 3. Launch the App
- Go to the `frontend` folder
- Open `index.html` in your browser

---

## 🧪 Console Testing (Optional)

You can test CRUD operations directly by running:

```bash
cd backend
node gestion_api.js
```

Uncomment the function you want to test.

---

## 💡 How It Works

- Products are stored in `db.json` and retrieved via Fetch.
- The interface allows selecting and deleting multiple entries.
- A modal is used to keep the UI clean and user-friendly.

---

## 👩‍💻 Author

Project created for educational purposes to practice APIs, HTTP methods, and CRUD operations with a simulated server.
