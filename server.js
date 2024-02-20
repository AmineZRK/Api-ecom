const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors');
const productsRoutes = require('./routes/productsRoutes');
const categoryRoutes = require('./routes/categoriesRoutes');

const app = express(); // Removed 'new' from express() instantiation

// Middleware
app.use(bodyParser.json());
app.use(cors());

const URI = "mongodb://127.0.0.1:27017/ecom";
mongoose.connect(URI)
    .then(() => {
        console.log('Connected to MongoDB');
        // Routes
        app.use('/api/v1/products', productsRoutes);
        app.use('/api/v1/category', categoryRoutes);

        app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
            );
            res.setHeader(
                "Access-Control-Allow-Methods",
                "GET, POST, PUT, DELETE, PATCH, OPTIONS"
            );
            next();
        });

        app.use('*', (req, res) => {
            res.status(404).json({ status: "fail", data: "Not Found" });
        });

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); // Exit the process if unable to connect to MongoDB
    });

module.exports = app; // Export the app instance
