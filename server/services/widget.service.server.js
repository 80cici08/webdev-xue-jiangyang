module.exports = function (app) {
  // var widgets = [
  //   {"_id": "123", "widgetType": 'HEADING', "pageId": "321", "size": 2, "text": "GIZMODO"},
  //   {"_id": "234", "widgetType": 'HEADING', "pageId": "321", "size": 4, "text": "Lorem ipsum"},
  //   {
  //     "_id": "345", "widgetType": 'IMAGE', "pageId": "321", "width": "100%",
  //     "url": "http://lorempixel.com/400/200/"
  //   },
  //   {"_id": "456", "widgetType": 'HTML', "pageId": "321", "text": "<p>Lorem ipsum</p>"},
  //   {"_id": "567", "widgetType": 'HEADING', "pageId": "321", "size": 4, "text": "Lorem ipsum"},
  //   {
  //     "_id": "678", "widgetType": 'YOUTUBE', "pageId": "321", "width": "100%",
  //     "url": "https://www.youtube.com/embed/ZwKhufmMxko"
  //   },
  //   {"_id": "789", "widgetType": 'HTML', "pageId": "321", "text": "<p>Lorem ipsum</p>"}
  // ];
  var multer = require('multer');// npm install multer --save
  var upload = multer({dest: __dirname + '/../../src/assets/uploads'});

  app.post("/api/upload", upload.single('myFile'), uploadImage);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.put("/api/page/:pageId/widget", reorderWidgets);

  var widgetModel = require('../model/widget/widget.model.server');

  function uploadImage(req, res) {
    var widgetId = req.body.widgetId;
    // var width = req.body.width;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var myFile = req.file;
    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename; // new file name in upload folder
    var path = myFile.path; // full path of uploaded file
    var destination = myFile.destination; // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;
    // widget.url = filename;
    var widget = {url: "assets/uploads/" + filename};

    widget.url = 'uploads/' + filename;
    widgetModel.updateWidget(widgetId, widget)
      .then(function (widget) {
        // var callbackUrl = "http://localhost:3200/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId;
        var callbackUrl = "https://webdev-xue-jiangyang.herokuapp.com/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId;
        res.redirect(callbackUrl)
      });

    // for (var i = 0; i < widgets.length; i++) {
    //   if (widgets[i]._id === widgetId) {
    //     widget = widgets[i];
    //   }
    // }


    ;

  }


  // create widget

  function createWidget(req, res) {
    var widget = req.body;
    var pageId = req.params.pageId;
    widgetModel.createWidget(pageId, widget)
      .then(function (widget) {
        res.status(200).send(widget);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }

  // find all widgets for page

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params.pageId;
    widgetModel.findAllWidgetsForPage(pageId)
      .then(function (widgets) {
        res.status(200).send(widgets);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }

  // find widget by id

  function findWidgetById(req, res) {
    var widgetId = req.params.widgetId;
    widgetModel.findWidgetById(widgetId)
      .then(function (widget) {
        res.status(200).send(widget);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }

  // update widget

  function updateWidget(req, res) {
    var widgetId = req.params.widgetId;
    var newWidget = req.body;
    widgetModel.updateWidget(widgetId, newWidget)
      .then(function (widget) {
        res.status(200).send(widget);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }

  // delete widget

  function deleteWidget(req, res) {
    var widgetId = req.params.widgetId;
    widgetModel.deleteWidget(widgetId)
      .then(function (widget) {
        res.status(200).send(widget);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }

  // reorder widgets

  function reorderWidgets(req, res) {
    var pageId = req.params.pageId;
    var startIndex = parseInt(req.query.start);
    var endIndex = parseInt(req.query.end);
    widgetModel.reorderWidget(pageId, startIndex, endIndex)
      .then(function (widgets) {
        // console.log("widgets:"+ widgets);
        res.status(200).send({"errCode": 0});
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });

  }
}
