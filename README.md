# 🍽️ Tattler API – MongoDB & Express Integration

**Tattler** is a restaurant directory application designed to offer users personalized culinary experiences across Mexico.  
The system leverages **Node.js**, **Express**, and **MongoDB** to manage and query restaurant and user data efficiently through a RESTful API.

This repository contains the backend implementation, database integration, and API routes for restaurant and user management.

---

## ⚙️ Installation and Usage

### 📦 Requirements
- **Node.js** v18 or higher  
- **MongoDB Server** v8.2 or compatible  
- **MongoDB Database Tools** *(for `mongoimport` and `mongodump`)*  
- **MongoDB Compass** *(optional for GUI visualization)*

---

### 🪜 Setup Steps

1. **Clone this repository**
   ```bash
   git clone https://github.com/Scar-AT/Challenge4-technoready.git
   cd Challenge4-technoready
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a file named `.env` in the root directory and define:
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017
   DB_NAME=ch4-nao
   PORT=4000
   ```

4. **Start MongoDB**
   Make sure MongoDB is running locally:
   ```bash
   mongod
   ```
   Default URI: `mongodb://127.0.0.1:27017`

5. **Import dataset**
   Import the CSV data into MongoDB using the provided script:
   ```bash
   node scripts/importCsv.js
   ```

6. **Run the API server**
   ```bash
   node src/server.js
   ```

   Once running, you should see:
   ```
   ✅ Connected to database: ch4-nao
   🟢 Server running on http://localhost:4000
   ```

---

## 🧠 API Overview

| Method | Endpoint | Description |
|--------|-----------|-------------|
| **GET** | `/api/restaurants` | Retrieve a list of restaurants |
| **POST** | `/api/restaurants` | Add a new restaurant |
| **GET** | `/api/users` | Retrieve all users |
| **POST** | `/api/users` | Add a new user |

### Example Request (POST `/api/users`)
```json
{
  "user_id": "U011",
  "name": "Ana Lilia",
  "email": "ana.lilia@tattler.com",
  "role": "tester"
}
```

---

## 🗂️ Repository Structure
```
Challenge4-technoready/
├── data/                       # CSV datasets for restaurants and users
│   ├── restaurants.csv
│   └── users.csv
│
├── backup/                     # MongoDB database backups
│   └── ch4-nao/
│
├── scripts/                    # Automation and utility scripts
│   ├── connectDB.js
│   ├── importCsv.js
│   ├── checkRestaurantsCount.js
│   └── checkUsersCount.js
│
├── src/
│   ├── models/                 # Mongoose models
│   │   ├── restaurant.model.js
│   │   └── user.model.js
│   ├── controllers/            # API controllers
│   │   ├── restaurant.controller.js
│   │   └── user.controller.js
│   ├── routes/                 # API routes
│   │   ├── restaurant.routes.js
│   │   └── user.routes.js
│   ├── app.js                  # Express app configuration
│   └── server.js               # Server entry point
│
├── docs/                       # Documentation and screenshots
│   └── screenshots/
│
├── .env                        # Environment variables
├── .gitignore                  # Ignored files and folders
├── package.json                # Node.js configuration
└── README.md                   # Project documentation
```

---

## 🧩 Versioning

This project follows **Semantic Versioning** (`MAJOR.MINOR.PATCH`) to maintain clarity across releases.

| Component | Meaning | Example | When to change it |
|------------|----------|----------|-------------------|
| **MAJOR** | Breaking changes or new architecture | `v2.0.0` | API structure or database schema changes |
| **MINOR** | New features or functionality | `v1.1.0` | Added endpoints, controllers, or automation scripts |
| **PATCH** | Fixes or documentation updates | `v1.1.1` | Bug fixes, readme updates, or optimization |

**Current version:** `v2.0.0`

---

**Maintained by:** [Scar-AT](https://github.com/Scar-AT)
