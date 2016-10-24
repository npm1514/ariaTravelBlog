var mongoose = require('mongoose');

var blogModel = new mongoose.Schema({
    img: String,
    detail: String,
    title: String,
    date: Date,
    dateDisplay: String,
    location: String,
    links: [{
      url: String,
      title: String
    }],
    comments: [{
      comment: String,
      name: String,
      date: Date,
      dateDisplay: String
    }]
});

module.exports = mongoose.model('Blog', blogModel);
