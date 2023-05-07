const express = require('express');
const { connectToMongoDB } = require('./connection');
const urlRoute = require('./routes/url-route');
const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url').then(console.log("Mongodb connected"));

app.use(express.json());

app.use('/url', urlRoute);

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));