const shortid = require('shortid');
const URL = require('../models/url-model');

async function newShortURLGenerate(req, res) {
    const body = req.body;
    if(!body) {
        return res.status(400).json({ error: 'url is required' });
    }
    const shortId = shortid();
    try {
        await URL.create({
            shortId: shortId,
            redirectUrl: body.url,
            visitHistory: []
        });   
    } catch (error) {
        console.log("Error while storing in DB", error);
    }

    return res.json({ id: shortId });
}

module.exports = {
    newShortURLGenerate,
}