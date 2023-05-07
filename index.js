const express = require('express');
const { connectToMongoDB } = require('./connection');
const urlRoute = require('./routes/url-route');
const URL = require('./models/url-model');
const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url').then(console.log("Mongodb connected"));

app.use(express.json());

app.use('/url', urlRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId,
    }, {
        $push: {
            visitHistory: {
                timestamps: Date.now(),
            },
        }
    });

    return res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));