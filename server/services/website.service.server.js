module.exports = function (app) {

  var websites = [
    {_id: '123', name: 'Facebook', developerId: '123', description: 'Lorem'},
    {_id: '234', name: 'Tweeter', developerId: '123', description: 'Lorem'},
    {_id: '345', name: 'Google', developerId: '234', description: 'Lorem'},
    {_id: '456', name: 'Apple', developerId: '234', description: 'Lorem'},
  ];

  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsiteForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);

  // create website
  function createWebsite(req, res) {
    var website = req.body;
    var userId = req.params.userId;

    // for (var i = 0; i < websites.length; i++) {
    //   if (websites[i].developerId === userId && websites[i].name === website.name) {
    //     res.status(404).send("This website is already exist.");
    //     return;
    //   }
    // }

    website._id = Math.random().toString().substr(2, 9);
    website.developerId = userId;
    websites.push(website);
    res.json(website);
  }

  // find all website
  function findAllWebsiteForUser(req, res) {
    var userId = req.params.userId;

    const found = websites.filter(ele => {
      return ele.developerId === userId;
    });

    res.json(found);
  }

  // find website by id
  function findWebsiteById(req, res){
    var websiteId =req.params.websiteId;

    for (const website of websites) {
      if (website._id === websiteId) {
        res.json(website);
        return;
      }
    }
    res.json({});
  }

  // update website
  function updateWebsite(req, res) {
    var websiteId = req.params.websiteId;
    var newWebsite = req.body;
    newWebsite._id = websiteId;
    for (let x = 0; x < websites.length; x++) {
      if (websites[x]._id === websiteId) {
        websites[x] = newWebsite;
        res.json(newWebsite);
        return;
      }
    }
    res.json({});
  }

  // delete website
  function deleteWebsite(req, res) {
    var websiteId = req.params.websiteId;
    for (let x = 0; x < websites.length; x++) {
      if (websites[x]._id === websiteId) {
        websites.splice(x, 1);
        res.json({message: "ok"});
        return;
      }
    }
    res.json({});
  }

}
