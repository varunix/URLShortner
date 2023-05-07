const mongoose = require('mongoose');

async function connectToMongoDB(url) {
    try {
        return mongoose.connect(url);
    } catch (error) {
        console.log('Error while connecting to DB');
    }
}

module.exports = {
    connectToMongoDB,
}