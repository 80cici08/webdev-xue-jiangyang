var mongoose = require('mongoose');
var widgetSchema = require('../widget/widget.schema.server')

var pageSchema = mongoose.Schema({
  _website: {type : mongoose.Schema.ObjectId, ref: "Website"},
  name: String,
  title: String,
  description: String,
  widgets: [widgetSchema],
  dateCreated: {type: Date, defalut: Date.now()}
},{collection:'Pages'});

module.exports = pageSchema;
