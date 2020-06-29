var express = require('express');
var router = express.Router();
const cocktailCtrl = require('../controllers/cocktails')

router.post('/cocktails', cocktailCtrl.create);
router.get('/cocktails', cocktailCtrl.index);
router.get('/cocktails/:id', cocktailCtrl.show);
router.delete('/cocktails/:id', cocktailCtrl.delete);
router.put('/cocktails/:id', cocktailCtrl.update);

module.exports = router;
