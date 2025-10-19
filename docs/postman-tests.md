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
    "address": {
      "coord": []
    },
    "_id": "68e8aa59a4cb930421b195da",
    "name": "Sol y Sazón",
    "borough": "Mérida",
    "cuisine": "Mexican",
    "description": "Modern Yucatecan fusion with open-air dining",
    "latitude": 20.967,
    "longitude": -89.623,
    "tags": "fine-dining;fusion;romantic",
    "grades": []
  }
]
```

**Postman Screenshot:**  
📸 *Saved under `/docs/screenshots/GETreq-restaurant.png`*

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
    "role": "user",
    "_id": "68e8aa59735913d7cd327946",
    "username": "scarlett",
    "email": "scarlett.ayon@tattler.com",
    "createdAt": "2025-03-03T00:00:00.000Z"
  }
]
```

**Postman Screenshot:**  
📸 *Saved under `/docs/screenshots/GET-req-users.png`*

---

## ➕ Test 3 – Add a New User

**Method:** `POST`  
**Endpoint:** `/api/users`  

**Request Body:**
```json
{
  "user_id": "U011",
  "name": "Ana Lilia",
  "email": "ana.lilia@tattler.com",
  "role": "tester"
}
```

### ✅ Expected Response
- **Status:** `201 Created`  
- **Body:**
```json
{
  "user_id": "U011",
  "name": "Ana Lilia",
  "email": "ana.lilia@tattler.com",
  "role": "tester",
  "_id": "68f4743d205fd01456f81635",
  "createdAt": "2025-10-19T05:16:45.530Z",
  "__v": 0
}
```

**Postman Screenshot:**  
📸 *Saved under `/docs/screenshots/POST-req-users.png`*

---

## 🍴 Test 4 – Add a New Restaurant

**Method:** `POST`  
**Endpoint:** `/api/restaurants`  

**Request Body:**
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

### ✅ Expected Response
- **Status:** `201 Created`  
- **Body:**
```json
{
  "restaurant_id": "R030",
  "name": "El Jardín del Sabor",
  "borough": "Oaxaca",
  "cuisine": "Mexican",
  "address": {
    "building": "45",
    "street": "Calle de Manuel García Vigil",
    "zipcode": "68000",
    "coord": [
      -96.7266,
      17.0732
    ]
  },
  "grades": [],
  "_id": "68f4b255da75c5b602eec795",
  "__v": 0
}
```

**Postman Screenshot:**  
📸 *Saved under `/docs/screenshots/POST-req-restaurants.png`*

---

## 🧩 Validation Checklist

| Test | Description | Status |
|------|--------------|:------:|
| ✅ `GET /api/restaurants` | Returns all restaurant documents | ✔️ |
| ✅ `POST /api/restaurants` | Adds a new restaurant | ✔️ |
| ✅ `GET /api/users` | Returns all user documents | ✔️ |
| ✅ `POST /api/users` | Adds a new user | ✔️ |

