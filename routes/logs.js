const express = require('express');
const router = express.Router();

const { getLog } = require('../controller/logs');

router.get('/logs', getLog);

module.exports = router;
