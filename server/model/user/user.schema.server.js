var mongoose = require('mongoose');
var websiteSchema = require('../website/website.schema.server');

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  websites: [websiteSchema],
  dateCreated: {type: Date, defalut: Date.now()}
},{collection:'Users'});

module.exports = userSchema;
