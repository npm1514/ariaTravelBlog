var mongoose = require('mongoose');

var blogModel = new mongoose.Schema({
    img: String,
    detail: String,
    title: String,
    date: Date,
    dateDisplay: String,
    location: {
      address_string: String,
      lat: Number,
      lng: Number,
      city: String,
      state: String,
      country: String
    },
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
