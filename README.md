# TaskFlow DB – Task 4: Database Integration (MongoDB/Mongoose)

**Tagline:** Cloud-powered data persistence for task management

---

## 📌 Project Overview
TaskFlow DB is a backend API for task management that uses **MongoDB Atlas** as a cloud database via **Mongoose ODM**.  
This project is the Task 4 deliverable – transitioning from in-memory storage to a fully persistent, cloud-backed database.

---

## 🚀 Features
- MongoDB Atlas integration
- Mongoose schema with validation and indexing
- CRUD operations for tasks
- Auto-increment **numeric taskId** (1, 2, 3…)
- Centralized error handling middleware
- Environment-based configuration
- Tested with Postman for persistence after server restarts

---

## 🛠️ Tech Stack
- **Node.js** – Server runtime
- **Express.js** – API framework
- **MongoDB Atlas** – Cloud database
- **Mongoose** – ODM for MongoDB
- **dotenv** – Environment variable management
- **Postman** – API testing

---

## 📂 Folder Structure
```taskflow-db/
│
├── models/
│ ├── Task.js # Mongoose schema for tasks
│ └── Counter.js # Sequence counter for auto-increment taskId
│
├── src/
│ ├── controllers/
│ │ └── taskController.js
│ ├── middleware/
│ │ └── errorHandler.js
│ │ └── security.js
│ └── routes/
│ └── taskRoutes.js
│
├── db/
│ └── connect.js # MongoDB connection logic
│
├── .env # Environment variables (NOT committed)
├── server.js # Main server entry point
└── package.json
```
