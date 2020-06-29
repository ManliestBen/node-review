const Cocktail = require('../models/cocktail');

module.exports = {
    create,
    index,
    show,
    delete: deleteOne,
    update
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

function show(req, res) {
    Cocktail.findById(req.params.id)
    .then(cocktail => {res.json(cocktail)})
    .catch(err => {res.status(500).json(err)})
}

function deleteOne(req, res) {
    Cocktail.findByIdAndDelete(req.params.id)
    .then(cocktail => {res.json(cocktail)})
    .catch(err => {res.status(500).json(err)})
}

function update(req, res) {
    Cocktail.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(cocktail => {res.json(cocktail)})
    .catch(err => {res.status(500).json(err)})
}