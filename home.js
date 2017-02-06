var express = require('express');
var router = express.Router();

router.use('/', express.static('html'));

module.exports = router;