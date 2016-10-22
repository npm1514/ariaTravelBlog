var mongoose = require('mongoose');

var blogModel = new mongoose.Schema({
    img: {type: String},
    detail: {type: String},
    title: {type: String},
    date: {type: Date, default: new Date()},
    location: {type: String},
    comments: [{
      comment: String,
      name: String,
      date: Date
    }]
});

module.exports = mongoose.model('Blog', blogModel);
