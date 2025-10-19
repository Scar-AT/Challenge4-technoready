# 🧪 API Testing with Postman

This section documents how each endpoint in the **Tattler API** was verified using **Postman**.  
All endpoints are functional and connected to the `ch4-nao` MongoDB database.

---

## ⚙️ Test Environment

| Component | Details |
|------------|----------|
| **Base URL** | `http://localhost:4000` |
| **Database** | `ch4-nao` |
| **Collections** | `restaurants`, `users` |
| **Testing Tool** | [Postman](https://www.postman.com/downloads/) |
| **Content-Type** | `application/json` |

---

## 🧠 Test 1 – Retrieve All Restaurants

**Method:** `GET`  
**Endpoint:** `/api/restaurants`  

### ✅ Expected Response
- **Status:** `200 OK`  
- **Body:** JSON array of restaurant documents  
- **Example:**
```json
[
  {
    "_id": "670b9d7f3e09e73c4df13b15",
    "name": "La Parrilla Mexicana",
    "borough": "Coyoacán",
    "cuisine": "Mexican",
    "address": {
      "building": "12",
      "street": "Av. Miguel Ángel de Quevedo",
      "zipcode": "04010"
    }
  }
]
```

**Postman Screenshot:**  
📸 *Saved under `/docs/screenshots/get-restaurants.png`*

---

## 👤 Test 2 – Retrieve All Users

**Method:** `GET`  
**Endpoint:** `/api/users`  

### ✅ Expected Response
- **Status:** `200 OK`  
- **Body:** JSON array of user documents  
- **Example:**
```json
[
  {
    "_id": "670ba1e03e09e73c4df13c02",
    "user_id": "U001",
    "name": "Daniel Smith",
    "email": "daniel@example.com",
    "role": "admin"
  }
]
```

**Postman Screenshot:**  
📸 *Saved under `/docs/screenshots/get-users.png`*

---

## ➕ Test 3 – Add a New User

**Method:** `POST`  
**Endpoint:** `/api/users`  

**Request Body:**
```json
{
  "user_id": "U010",
  "name": "Alice Walker",
  "email": "alice@example.com",
  "role": "tester"
}
```

### ✅ Expected Response
- **Status:** `201 Created`  
- **Body:**
```json
{
  "_id": "6710b44f92df2e00251b24ea",
  "user_id": "U010",
  "name": "Alice Walker",
  "email": "alice@example.com",
  "role": "tester",
  "__v": 0
}
```

**Postman Screenshot:**  
📸 *Saved under `/docs/screenshots/post-user.png`*

---

## 🍴 Test 4 – Add a New Restaurant

**Method:** `POST`  
**Endpoint:** `/api/restaurants`  

**Request Body:**
```json
{
  "restaurant_id": "R025",
  "name": "Casa de las Enchiladas",
  "borough": "Benito Juárez",
  "cuisine": "Mexican",
  "address": {
    "building": "55",
    "street": "Av. División del Norte",
    "zipcode": "03000"
  }
}
```

### ✅ Expected Response
- **Status:** `201 Created`  
- **Body:**
```json
{
  "_id": "6710b62e2f01a60029cd09bf",
  "restaurant_id": "R025",
  "name": "Casa de las Enchiladas",
  "borough": "Benito Juárez",
  "cuisine": "Mexican",
  "address": {
    "building": "55",
    "street": "Av. División del Norte",
    "zipcode": "03000"
  },
  "__v": 0
}
```

**Postman Screenshot:**  
📸 *Saved under `/docs/screenshots/post-restaurant.png`*

---

## 🧩 Validation Checklist

| Test | Description | Status |
|------|--------------|:------:|
| ✅ `GET /api/restaurants` | Returns all restaurant documents | ✔️ |
| ✅ `POST /api/restaurants` | Adds a new restaurant | ✔️ |
| ✅ `GET /api/users` | Returns all user documents | ✔️ |
| ✅ `POST /api/users` | Adds a new user | ✔️ |

