const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cocktailSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [String],
    alcoholic: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Cocktail', cocktailSchema);