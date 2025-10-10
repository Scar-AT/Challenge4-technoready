// indexes.js
// -------------------
// Script to create MongoDB Indexes
// Run this file once your MongoDB server is running and your database is created.
// Example: `mongosh "mongodb://localhost:27017/ch4-nao" indexes.js`

// Switch to your project database (replace 'ch4-nao' if different)
use('ch4-nao');

//Confirmation message
print("Connected to database: " + db.getName());

// =====================================================
// ------- RESTAURANT COLLECTION INDEXES --------------
// =====================================================

// Basic index for searching restaurants by Name
db.restaurants.createIndex(
    { name : 1 },
    { name: "idx_name_asc" }
);

// Coumpound index
// Filters restaurants like "Mexican in Queens"
db.restaurants.createIndex(
    {   
        borough: 1, 
        cuisine: 1
    },
    { name : "idx_borough_cuisine"}
);


// Text index: enables keyword search in description or tags
db.restaurants.createIndex(
    {
        description: "text",
        tags : "text"
    },
    { name : "idx_text_search" }
);

// Geospatial index: allows “near me” queries by coordinates
db.restaurants.createIndex(
    { location: "2dsphere" },
    { name: "idx_location_2dsphere" }
);

// Multikey index: index elements inside the tags array
db.restaurants.createIndex(
    { tags: 1 },
    { name: "idx_tags_multikey" }
);

// 6️⃣ Multikey index for grades array (inside nested objects)
db.restaurants.createIndex(
    { "grades.score": -1 },
    { name: "idx_grades_score_desc" }
);

print(" ✅ Indexes created successfully on 'restaurants' collection!");

// =====================================================
//  --------- USERS COLLECTION INDEXES --------- 
// =====================================================

// 1: Ensure unique email addresses
db.users.createIndex(
    { email: 1 },
    { 
        unique: true, 
        name: "idx_users_unique_email" 
    }
);

// 2: Optimize username lookups
db.users.createIndex(
    { username: 1 },
    { name: "idx_users_username" }
);

// 3: Sort or filter by registration date
db.users.createIndex(
    { createdAt: -1 },
    { name: "idx_users_createdAt_desc" }
);

print("✅ User indexes created successfully.\n");


// ----- Creation of all indexes msg ------
print("🎉 All indexes created successfully!");
printjson(db.getCollectionNames());

