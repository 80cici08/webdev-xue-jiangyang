module.exports = function (app) {
  var pages = [
    {"_id": "321", "name": "Post 1", "websiteId": "123", "description": "Lorem"},
    {"_id": "432", "name": "Post 2", "websiteId": "123", "description": "Lorem"},
    {"_id": "543", "name": "Post 3", "websiteId": "123", "description": "Lorem"}
  ];

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  function createPage(req, res) {
    var page = req.body;
    var websiteId = req.params.websiteId;
    page._id = Math.random().toString().substr(2, 9);
    page.websiteId = websiteId;
    pages.push(page);
    res.json(page);
  }


  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params.websiteId;
    const found = pages.filter(ele => {
      return ele.websiteId === websiteId;
    });

    res.json(found);
  }


  function findPageById(req, res) {
    var pageId = req.params.pageId;
    for (const page of pages) {
      if (page._id === pageId) {
        res.json(page);
        return;
      }
    }
    res.json({});
  }


  function updatePage(req, res) {
    var pageId = req.params.pageId;
    var newPage = req.body;
    newPage._id = pageId;
    for (let x = 0; x < pages.length; x++) {
      if (pages[x]._id === pageId) {
        pages[x] = newPage;
        res.json(newPage);
        return;
      }
    }
    res.json({});
  }


  function deletePage(req, res) {
    var pageId = req.params.pageId;
    for (let x = 0; x < pages.length; x++) {
      if (pages[x]._id === pageId) {
        pages.splice(x, 1);
        res.json({message: "ok"});
        return;
      }
    }
    res.json({});
  }
}
