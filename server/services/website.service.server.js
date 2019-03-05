module.exports = function (app) {

  var websites = [
    {_id: '123', name: 'Facebook', developerId: '123', description: 'Lorem'},
    {_id: '234', name: 'Tweeter', developerId: '123', description: 'Lorem'},
    {_id: '345', name: 'Google', developerId: '234', description: 'Lorem'},
    {_id: '456', name: 'Apple', developerId: '234', description: 'Lorem'},
  ];

  // create website
  app.post("/api/user/:userId/website", createWebsite);
  function createWebsite(req, res) {
    var website = req.body;
    var userId = req.params.userId;
    website._id = Math.random().toString().substr(2, 9);
    website.developerId = userId;
    websites.push(website);
    res.send(website);
  }

  // find all website
  app.get("/api/user/:userId/website", findAllWebsiteForUser);
  function findAllWebsiteForUser(req, res) {
    var userId = req.params.userId;

    const found = websites.filter(ele => {
      return ele.developerId === userId;
    });

    res.send(found);
  }

  // find website by id
  app.get("/api/website/:websiteId", findWebsiteById);
  function findWebsiteById(req, res){
    var websiteId =req.params.websiteId;

    for (const website of websites) {
      if (website._id === websiteId) {
        res.send(website);
        return;
      }
    }
    res.send({});
  }

  // update website
  app.put("/api/website/:websiteId", updateWebsite);
  function updateWebsite(req, res) {
    var websiteId = req.params.websiteId;
    var newWebsite = req.body;
    newWebsite._id = websiteId;
    for (let x = 0; x < websites.length; x++) {
      if (websites[x]._id === websiteId) {
        websites[x] = newWebsite;
        res.send(newWebsite);
        return;
      }
    }
    res.send({});
  }

  // delete website
  app.delete("/api/website/:websiteId", deleteWebsite);
  function deleteWebsite(req, res) {
    var websiteId = req.params.websiteId;
    for (let x = 0; x < websites.length; x++) {
      if (websites[x]._id === websiteId) {
        websites.splice(x, 1);
        res.send({message: "ok"});
        return;
      }
    }
    res.send({});
  }

}
