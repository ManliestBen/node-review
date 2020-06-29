const Cocktail = require('../models/cocktail');

module.exports = {
    create
}

function create(req, res) {
    Cocktail.create(req.body)
    .then(cocktail => {res.json(cocktail)})
    .catch(err => {res.status(500).json(err)})
}