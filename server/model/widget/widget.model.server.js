var mongoose = require('mongoose');
var widgetSchema = require('./widget.schema.server');

var widgetModel = mongoose.model("Widget", widgetSchema);
var pageModel = require("../page/page.model.server");

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

module.exports = widgetModel;


function createWidget(pageId, widget) {
  widget._page = pageId;
  return widgetModel.create(widget)
    .then(function (widget) {
      pageModel.findPageById(pageId)
        .then(function (page) {
          page.widgets.push(widget);
          page.save();
        });
      return widget;
    });
}

function findAllWidgetsForPage(pageId) {
  return widgetModel.find({_page: pageId});
}

function findWidgetById(widgetId) {
  return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
  var pageId = widget._page;
  return widgetModel.findOneAndUpdate({_id: widgetId}, widget, {new: true})
    .then(function (widgetResponse) {
      pageModel.updateOne({"_id": pageId, "widgets._id": widgetId}, {"$set": {"widgets.$": widgetResponse}})
        .then(function (res) {
          // console.log(res);
        }, function (err) {
          console.log(err);
        });
      return widgetResponse;
    });
}

function deleteWidget(widgetId) {
  return widgetModel.findOneAndDelete({_id: widgetId})
    .then(function (responseWidget) {
      pageModel.findPageById({_id: responseWidget._page}).then(function (page) {
        page.widgets.pull({_id: widgetId});
        page.save();
      })
    });
}

function reorderWidget(pageId, startIndex, endIndex) {
  return pageModel.findPageById(pageId)
    .then(function (page) {
      array_swap(page.widgets, startIndex, endIndex);
      page.save();
    });
}

function array_swap(arr, startIndex, endIndex) {
  arr.splice(endIndex, 0, arr.splice(startIndex, 1)[0]);
};
