# 🍽️ Tattler Database – MongoDB Setup

Tattler is a restaurant directory application designed to offer users personalized culinary experiences across Mexico. The system leverages **MongoDB** as a non-relational database to manage and query restaurant and user data efficiently.

This repository contains the configuration, data import, indexing, and backup setup for the MongoDB database that serves as the foundation for future API and application development.

---

## ⚙️ Installation and Usage

### 📦 Requirements
- **Node.js** v18 or higher  
- **MongoDB Server** v8.2 or compatible  
- **MongoDB Database Tools** (for `mongoimport` and `mongodump`)  
- **MongoDB Compass** *(optional, for GUI visualization)*

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
    DB_NAME=ch4-nao
    ```


4. **Start MongoDB**
Ensure MongoDB is running locally:
   ```bash
    mongod
    ```
The default URI is `mongodb://127.0.0.1:27017`


5. **Import dataset**
Import the CSV data into MongoDB:
    ```bash
    npm run import-data
    ```

6. **Create indexes**
    ```bash
    Import dataset
    ```
7.  **Backup database**
Export a backup of the database:
    ```bash
    mongodump --db ch4-nao --out ./backup
    ```

8. **Visualize in MongoDB Compass**
Connect using `mongodb://localhost:27017` to explore the database and its collections.


## 🗂️ Repository Structure
```
Challenge4-technoready/  
├── data/  
│   ├── restaurants.csv  
│   └── users.csv  
│  
├── backup/                   # MongoDB database backups  
│   └── backup-ch4-nao.zip  
│  
├── scripts/  # Automation and database utility scripts  
│   ├── connectDB.js  
│   ├── importCsv.js  
│   ├── indexes.js  
│   └── restoreDB.js  
│
├── docs/                     # Documentation and screenshots
│   └── screenshots/
│
├── .env                      # Environment configuration (excluded in .gitignore)
├── .gitignore                # Ignored files and folders
├── package.json              # Node project configuration and scripts
└── README.md                 # Project documentation
```


## 🧩 Versioning

This project follows the **Semantic Versioning** scheme:

## 🧩 Versioning Guidelines

This project follows the **Semantic Versioning** system (`MAJOR.MINOR.PATCH`) to ensure consistency across all releases.

| Component | Meaning | Example | When to change it |
|------------|----------|----------|-------------------|
| **MAJOR** | Significant changes that may not be backward compatible | `v2.0.0` | Introduced a new database structure, or API behavior changed |
| **MINOR** | Addition of new features or functionalities | `v1.1.0` | Added a new collection, script, or feature like indexes or backup automation |
| **PATCH** | Minor fixes, optimizations, or corrections | `v1.1.1` | Fixed typos, adjusted documentation, or small bug fixes |


Current version: `v1.1.0`

---

Maintained by **Scar-AT**