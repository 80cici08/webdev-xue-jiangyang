module.exports = function (app) {

  // var websites = [
  //   {_id: '123', name: 'Facebook', developerId: '123', description: 'Lorem'},
  //   {_id: '234', name: 'Tweeter', developerId: '123', description: 'Lorem'},
  //   {_id: '345', name: 'Google', developerId: '234', description: 'Lorem'},
  //   {_id: '456', name: 'Apple', developerId: '234', description: 'Lorem'},
  // ];

  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsiteForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);

  var websiteModel = require('../model/website/website.model.server');

  // create website
  function createWebsite(req, res) {
    var website = req.body;
    var userId = req.params.userId;
    websiteModel.createWebsiteForUser(userId, website)
      .then(function (website) {
        res.status(200).send(website);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }

  // find all website
  function findAllWebsiteForUser(req, res) {
    var userId = req.params.userId;

    websiteModel.findAllWebistesForUser(userId)
      .then(function (websites) {
        res.status(200).send(websites);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }

  // find website by id
  function findWebsiteById(req, res){
    var websiteId =req.params.websiteId;

    websiteModel.findWebsiteById(websiteId)
      .then(function (website) {
        res.status(200).send(website);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }

  // update website
  function updateWebsite(req, res) {
    var websiteId = req.params.websiteId;
    var newWebsite = req.body;
    websiteModel.updateWebsite(websiteId, newWebsite)
      .then(function (website) {
        res.status(200).send(website);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }

  // delete website
  function deleteWebsite(req, res) {
    var websiteId = req.params.websiteId;
    websiteModel.deleteWebsite(websiteId)
      .then(function (website) {
        res.status(200).send(website);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }

}
