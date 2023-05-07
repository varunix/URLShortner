const express = require('express');
const { newShortURLGenerate } = require('../controllers/url-controller');
const router = express.Router();

router.post('/', newShortURLGenerate);

module.exports = router;