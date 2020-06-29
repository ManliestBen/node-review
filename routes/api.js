var express = require('express');
var router = express.Router();
const cocktailCtrl = require('../controllers/cocktails')

router.post('/cocktails', cocktailCtrl.create);
router.get('/cocktails', cocktailCtrl.index);


module.exports = router;
