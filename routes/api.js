var express = require('express');
var router = express.Router();
const cocktailCtrl = require('../controllers/cocktails')

router.post('/cocktails', cocktailCtrl.create);

module.exports = router;
