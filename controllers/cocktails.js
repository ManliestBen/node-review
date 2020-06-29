const Cocktail = require('../models/cocktail');

module.exports = {
    create,
    index
}

function create(req, res) {
    Cocktail.create(req.body)
    .then(cocktail => {res.json(cocktail)})
    .catch(err => {res.status(500).json(err)})
}

function index(req, res) {
    Cocktail.find({})
    .then(cocktails => {res.json(cocktails)})
    .catch(err => {res.status(500).json(err)})
}