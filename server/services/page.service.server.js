module.exports = function (app) {
  // var pages = [
  //   {"_id": "321", "name": "Post 1", "websiteId": "123", "description": "Lorem"},
  //   {"_id": "432", "name": "Post 2", "websiteId": "123", "description": "Lorem"},
  //   {"_id": "543", "name": "Post 3", "websiteId": "123", "description": "Lorem"}
  // ];

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  var pageModel = require('../model/page/page.model.server');

  function createPage(req, res) {
    var page = req.body;
    var websiteId = req.params.websiteId;
    pageModel.createPage(websiteId, page)
      .then(function (page) {
        res.status(200).send(page);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }


  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params.websiteId;
    pageModel.findAllPagesForWebsite(websiteId)
      .then(function (pages) {
        res.status(200).send(pages);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }


  function findPageById(req, res) {
    var pageId = req.params.pageId;
    pageModel.findPageById(pageId)
      .then(function (page) {
        res.status(200).send(page);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }


  function updatePage(req, res) {
    var pageId = req.params.pageId;
    var newPage = req.body;
    pageModel.updatePage(pageId, newPage)
      .then(function (page) {
        res.status(200).send(page);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }


  function deletePage(req, res) {
    var pageId = req.params.pageId;
    pageModel.deletePage(pageId)
      .then(function (page) {
        res.status(200).send(page);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }
}
