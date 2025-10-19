# 🍽️ Tattler API – Challenge 4 (Technoready / Digital NAO)

Tattler is a **Node.js + Express + MongoDB** RESTful API designed to manage restaurant and user data efficiently.  
The project demonstrates full-stack backend development — from data import and indexing to full CRUD operations and advanced query features.

---

## 🧭 Project Overview

| Focus | Main Deliverables |
|:--|:--|
| Database setup and connection | MongoDB configuration (`ch4-nao`), CSV import scripts, `.env` setup |
| API development and structure | Express app, server configuration, routes for Restaurants and Users |
| Advanced features + CRUD completion | Filtering, sorting, pagination, full CRUD for both collections, validation middleware, documentation |

---

## ⚙️ Technologies Used

- **Node.js** v18+
- **Express.js** – Routing and middleware
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for schema validation
- **dotenv** – Environment configuration
- **Postman** – API testing and validation
- **MongoDB Compass** – Visual database management

---

## 🪜 Installation & Setup

### 1️⃣ Clone this Repository
```bash
git clone https://github.com/Scar-AT/Challenge4-technoready.git
cd Challenge4-technoready
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a file named `.env` in the root directory:

```env
MONGO_URI=mongodb://127.0.0.1:27017
DB_NAME=ch4-nao
```

### 4️⃣ Import Sample Data
Import the sample datasets provided under `/data`:

```bash
npm run import-data
```

*(requires MongoDB Database Tools for `mongoimport`)*

### 5️⃣ Start the Server
```bash
node src/server.js
```

Server will start at:
```
http://localhost:4000
```

---

## 🧩 API Endpoints Overview

### 🏙️ **Restaurants**
| Method | Endpoint | Description |
|:--:|:--|:--|
| GET | `/api/restaurants` | Retrieve all restaurants |
| GET | `/api/restaurants/:id` | Retrieve one restaurant by ID |
| POST | `/api/restaurants` | Add a new restaurant |
| PUT | `/api/restaurants/:id` | Update a restaurant |
| DELETE | `/api/restaurants/:id` | Remove a restaurant |

### 👥 **Users**
| Method | Endpoint | Description |
|:--:|:--|:--|
| GET | `/api/users` | Retrieve all users |
| GET | `/api/users/:id` | Retrieve one user by ID |
| POST | `/api/users` | Add a new user |
| PUT | `/api/users/:id` | Update a user |
| DELETE | `/api/users/:id` | Remove a user |

---

## 🔍 Query Parameters (Advanced Search)

| Parameter | Type | Description | Example |
|------------|------|-------------|----------|
| `name` | String | Filters restaurants whose names contain a term | `/api/restaurants?name=luna` |
| `borough` | String | Filters restaurants by borough | `/api/restaurants?borough=tijuana` |
| `cuisine` | String | Filters restaurants by cuisine type | `/api/restaurants?cuisine=asian` |
| `sort` | String | Sort results ascending/descending | `/api/restaurants?sort=-name` |
| `limit` | Number | Limit number of results per page | `/api/restaurants?limit=5` |
| `page` | Number | Specify page for pagination | `/api/restaurants?limit=5&page=2` |

---

## 🧠 Example JSON (Restaurant)
```json
{
  "restaurant_id": "R030",
  "name": "El Jardín del Sabor",
  "borough": "Oaxaca",
  "cuisine": "Mexican",
  "description": "Authentic Oaxacan dishes with organic ingredients and traditional decor",
  "latitude": 17.0732,
  "longitude": -96.7266,
  "address": {
    "building": "45",
    "street": "Calle de Manuel García Vigil",
    "zipcode": "68000",
    "coord": [-96.7266, 17.0732]
  },
  "tags": "traditional;organic;family",
  "grades": []
}
```

---

## 🧪 Testing with Postman

All API routes and CRUD operations were tested using **Postman**.  
Screenshots of test results are available under:
```
docs/screenshots/
```

---

## 📂 Repository Structure

```
Challenge4-technoready/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── controllers/
│   │   ├── restaurant.controller.js
│   │   └── user.controller.js
│   ├── models/
│   │   ├── restaurant.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── restaurant.routes.js
│   │   └── user.routes.js
│   └── middlewares/
│       └── validateObjectId.js
│
├── scripts/
│   ├── connectDB.js
│   ├── importCsv.js
│   ├── indexes.js
│   ├── testConnection.js
│   ├── testRestaurants.js
│   └── testUsers.js
│
├── data/
│   ├── restaurants.csv
│   └── users.csv
│
├── docs/
│   ├── postman-tests.md
│   ├── query-parameters.md
│   ├── sp3-postman-tests.md
│   └── screenshots/
│       ├── added-users.png
│       ├── documents-mongoDB.png
│       ├── filter-restaurant-borough.png
│       ├── filter-restaurant-cuisine.png
│       ├── filter-restaurant-name.png
│       ├── GET-req-users.png
│       ├── GETreq-restaurant.png
│       ├── index-mongoDB.png
│       ├── pagination-restaurant.png
│       ├── POST-req-restaurants.png
│       ├── POST-req-users.png
│       ├── restaurants-mongoDB.png
│       ├── server-running.png
│       ├── sort-asc-restaurant-name.png
│       ├── sort-desc-restaurant-name.png
│       └── users-mongoDB.png
│
├── .gitignore
├── package.json
└── README.md
```

---

## 🧾 Versioning

This project follows **Semantic Versioning** (`MAJOR.MINOR.PATCH`):

| Version | Description |
|:--|:--|
| `v1.0.0` | MongoDB setup and import scripts |
| `v2.0.0` | Express API base, routes for Restaurants and Users |
| `v3.0.0` | Final version – Full CRUD, validation middleware, query filters, documentation, and tests |

---


**Version:** `v3.0.0`  
