# 🧪 API Testing with Postman – Sprint 3

This document outlines the verification process for the **Tattler API** advanced features: **search**, **filtering**, **sorting**, and **pagination** implemented during Sprint 3.
All tests were conducted using **Postman**, connected to the local MongoDB database `ch4-nao`.

---

## ⚙️ Test Environment

| Component | Details |
|------------|----------|
| **Base URL** | `http://localhost:4000` |
| **Database** | `ch4-nao` |
| **Collection Tested** | `restaurants` |
| **Tool Used** | [Postman](https://www.postman.com/downloads/) |
| **Response Format** | `application/json` |

---

## 🔍 Test 1 – Search by Name

**Method:** `GET`  
**Endpoint:** `/api/restaurants?name=luna`

### ✅ Expected Behavior
Returns all restaurants whose names contain the term luna (case-insensitive).

**Screenshot:**  
📸 `/docs/screenshots/filter-restaurant-name.png`

---

## 🏙️ Test 2 – Filter by Borough

**Method:** `GET`  
**Endpoint:** `/api/restaurants?borough=tijuana`

### ✅ Expected Behavior
Returns only the restaurants located in *Tijuana*.

**Screenshot:**  
📸 `/docs/screenshots/filter-restaurant-borough.png`

---

## 🍝 Test 3 – Filter by Cuisine

**Method:** `GET`  
**Endpoint:** `/api/restaurants?cuisine=asian`

### ✅ Expected Behavior
Returns all restaurants offering Asian cuisine.

**Screenshot:**  
📸 `/docs/screenshots/filter-restaurant-cuisine.png`

---

## 🔠 Test 4 – Sort Ascending (A–Z)

**Method:** `GET`  
**Endpoint:** `/api/restaurants?sort=name`

### ✅ Expected Behavior
Results sorted alphabetically by restaurant name (ascending).

**Screenshot:**  
📸 `/docs/screenshots/sort-asc-restaurant-name.png`

---

## 🔽 Test 5 – Sort Descending (Z–A)

**Method:** `GET`  
**Endpoint:** `/api/restaurants?sort=-name`

### ✅ Expected Behavior
Results sorted in reverse alphabetical order (descending).

**Screenshot:**  
📸 `/docs/screenshots/sort-desc-restaurant-name.png`

---

## 📄 Test 6 – Pagination

**Method:** `GET`  
**Endpoint:** `/api/restaurants?limit=5&page=2`

### ✅ Expected Behavior
Returns the *second page* of restaurants, with *5 results per page*.

**Screenshot:**  
📸 `/docs/screenshots/pagination-restaurant.png`

---

## 🧩 Validation Checklist

| Test | Description | Status |
|------|--------------|:------:|
| `GET ?name=` | Search by name substring | ✔️ |
| `GET ?borough=` | Filter by borough | ✔️ |
| `GET ?cuisine=` | Filter by cuisine | ✔️ |
| `GET ?sort=name` | Sort ascending | ✔️ |
| `GET ?sort=-name` | Sort descending | ✔️ |
| `GET ?limit=5&page=2` | Pagination | ✔️ |

---

## 📂 Screenshot Directory

```
docs/
 └── screenshots/
     ├── added-users.png
     ├── documents-mongoDB.png
     ├── filter-restaurant-borough.png
     ├── filter-restaurant-cuisine.png
     ├── filter-restaurant-name.png
     ├── GET-req-users.png
     ├── GETreq-restaurant.png
     ├── index-mongoDB.png
     ├── pagination-restaurant.png
     ├── POST-req-restaurants.png
     ├── POST-req-users.png
     ├── restaurants-mongoDB.png
     ├── server-running.png
     ├── sort-asc-restaurant-name.png
     ├── sort-desc-restaurant-name.png
     └── users-mongoDB.png
```

---

**Maintained by:** Scar-AT  
**Version:** `v3.0.0`
