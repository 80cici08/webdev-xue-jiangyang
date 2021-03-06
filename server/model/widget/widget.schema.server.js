var mongoose = require('mongoose');

var widgetSchema = mongoose.Schema({
  _page: {type : mongoose.Schema.ObjectId, ref: "Page"},
  widgetType: {type: String, enums:['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT']},
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  position: Number,
  dateCreated: {type: Date, defalut: Date.now()}
},{collection:'Widgets'});

module.exports = widgetSchema;
