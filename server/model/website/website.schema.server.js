var mongoose = require('mongoose');
var pageSchema = require('../page/page.schema.server');
var websiteSchema = new mongoose.Schema({
  _user: {type : mongoose.Schema.ObjectId, ref: "User"},
  name: String,
  description: String,
  pages:[pageSchema],
  dateCreated: {type: Date, defalut: Date.now()}
}, {collection: 'Websites'});

module.exports = websiteSchema;
