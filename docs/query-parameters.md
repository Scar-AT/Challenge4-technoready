# 🔍 Query Parameters & Filtering

The `/api/restaurants` endpoint supports **search**, **filtering**, **sorting**, and **pagination** through query parameters.

| Parameter | Type | Description | Example |
|------------|------|-------------|----------|
| `name` | String | Filters restaurants whose names contain the given term (case-insensitive). | `/api/restaurants?name=luna` |
| `borough` | String | Filters restaurants located in the specified borough. | `/api/restaurants?borough=tijuana` |
| `cuisine` | String | Filters restaurants by cuisine type. | `/api/restaurants?cuisine=asian` |
| `sort` | String | Sorts results by a field; prefix with `-` for descending order. | `/api/restaurants?sort=name` or `/api/restaurants?sort=-borough` |
| `limit` | Number | Limits how many results are returned per page. | `/api/restaurants?limit=10` |
| `page` | Number | Specifies which result page to retrieve (works with `limit`). | `/api/restaurants?limit=5&page=2` |

---

## 🧠 Example Requests

```bash
# 1️⃣ Search by restaurant name
GET /api/restaurants?name=luna

# 2️⃣ Filter by borough and sort by name
GET /api/restaurants?borough=tijuana&sort=name

# 3️⃣ Get 10 Asian restaurants on page 2
GET /api/restaurants?cuisine=asian&limit=10&page=2
```

---

## ✅ Example JSON Response

```json
[
  {
    "address": {
      "coord": []
    },
    "_id": "68e8aa59a4cb930421b195de",
    "name": "La Ola Verde",
    "borough": "Tijuana",
    "cuisine": "Vegan",
    "description": "Vibrant vegan cafe offering cold-pressed juices and plant-based tacos",
    "latitude": 32.514,
    "longitude": -117.038,
    "tags": "eco-friendly;healthy;casual",
    "grades": []
  }
]
```
