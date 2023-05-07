const express = require('express');
const { newShortURLGenerate, getAnalytics } = require('../controllers/url-controller');
const router = express.Router();

router.post('/', newShortURLGenerate);
router.get('/analytics/:shortId', getAnalytics)

module.exports = router;