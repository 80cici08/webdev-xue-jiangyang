module.exports = function (app) {
  var widgets = [
    {"_id": "123", "widgetType": 'HEADING', "pageId": "321", "size": 2, "text": "GIZMODO"},
    {"_id": "234", "widgetType": 'HEADING', "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
      "_id": "345", "widgetType": 'IMAGE', "pageId": "321", "width": "100%",
      "url": "http://lorempixel.com/400/200/"
    },
    {"_id": "456", "widgetType": 'HTML', "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    {"_id": "567", "widgetType": 'HEADING', "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
      "_id": "678", "widgetType": 'YOUTUBE', "pageId": "321", "width": "100%",
      "url": "https://www.youtube.com/embed/ZwKhufmMxko"
    },
    {"_id": "789", "widgetType": 'HTML', "pageId": "321", "text": "<p>Lorem ipsum</p>"}
  ];
  var multer = require('multer');// npm install multer --save
  var upload = multer({dest: __dirname + '../../src/assets/uploads'});

  app.post("/api/upload", upload.single('myFile'), uploadImage);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.put("/api/page/:pageId/widget", reorderWidgets);

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
    // widget = getWidgetById(widgetId);
    // widget.url = filename;
    var widget = {url: "assets/uploads/" + filename};

    var widget;
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widget = widgets[i];
      }
    }
    widget.url = 'uploads/' + filename;
    var callbackUrl = "http://localhost:3200/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId;
    res.redirect(callbackUrl);

  }

  function getWidgetById(widgetId) {
    for (const widget of widgets) {
      if (widget._id === widgetId) {
        return widget;
      }
    }
  }

  // create widget

  function createWidget(req, res) {
    var widget = req.body;
    var pageId = req.params.pageId;
    widget._id = Math.random().toString().substr(2, 9);
    widget.pageId = pageId;
    widgets.push(widget);
    res.json(widget);
  }

  // find all widgets for page

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params.pageId;
    const found = widgets.filter(ele => {
      return ele.pageId === pageId;
    });
    res.json(found);
  }

  // find widget by id

  function findWidgetById(req, res) {
    var widgetId = req.params.widgetId;
    for (const widget of widgets) {
      if (widget._id === widgetId) {
        res.json(widget);
        return;
      }
    }
    res.json({});
  }

  // update widget

  function updateWidget(req, res) {
    var widgetId = req.params.widgetId;
    var newWidget = req.body;
    newWidget._id = widgetId;
    for (let x = 0; x < widgets.length; x++) {
      if (widgets[x]._id === widgetId) {
        widgets[x] = newWidget;
        res.json(newWidget);
        return;
      }
    }
    res.json({});
  }

  // delete widget

  function deleteWidget(req, res) {
    var widgetId = req.params.widgetId;
    for (let x = 0; x < widgets.length; x++) {
      if (widgets[x]._id === widgetId) {
        widgets.splice(x, 1);
        res.json({message: "ok"});
        return;
      }
    }
    res.json({});
  }

  // reorder widgets

  function reorderWidgets(req, res) {
    var pageId = req.params.pageId;
    var startIndex = parseInt(req.query.start);
    var endIndex = parseInt(req.query.end);

    const wgs = widgets.filter(ele => {
      return ele.pageId === pageId;
    });

    for (const widget of wgs) {
      if (startIndex < endIndex) {
        if (widget.position === startIndex) {
          widget.position = endIndex;
        } else if (widget.position > startIndex
          && widget.position <= endIndex) {
          widget.position--;
        } else {
          if (widget.position === startIndex) {
            widget.position = endIndex;
          } else if (widget.position < startIndex
            && widget.position >= endIndex) {
            widget.position++;
          }
        }
      }
    }
    res.json({"message": "ok"});


  }
}
