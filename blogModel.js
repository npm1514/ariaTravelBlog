var mongoose = require('mongoose');

var blogModel = new mongoose.Schema({
    img: {type: String},
    description: {type: String},
    headline: {type: String},
    date: {type: Date, default: new Date()},
    location: {type: String}
});

module.exports = mongoose.model('Blog', blogModel);
