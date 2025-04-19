const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

router.post('/shorten', urlController.createShortUrl);
router.get('/shorten/:shortCode', urlController.getOriginalUrl);
router.get('/shorten/:shortCode/stats', urlController.getUrlStatistics);
router.delete('/shorten/:shortCode', urlController.deleteUrl);
module.exports = router;