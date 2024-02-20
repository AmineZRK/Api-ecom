// // config/dbConfig.js

// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://127.0.0.1:27017';

// const client = new MongoClient(uri);

// async function connectToDatabase() {
//     try {
//         await client.connect();
//         console.log('Connected to MongoDB');
//         return client.db('ecom'); 
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         throw error; // Rethrow the error to propagate it to the caller
//     }
// }
 
// module.exports = connectToDatabase;
