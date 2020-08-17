var express = require('express');
var router = express.Router();
const connectController =require('../controller/connect/connect');

router.get('/user',connectController.connect);

module.exports = router;
