var mongoose = require('mongoose');
var pageSchema = require('./page.schema.server');

var pageModel = mongoose.model("Page", pageSchema);


pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;

module.exports = pageModel;


function createPage(websiteId, page) {
  page._website = websiteId;
  return pageModel.create(page);
}

function findAllPagesForWebsite(websiteId) {
  return pageModel.find({_website: websiteId});
}

function findPageById(pageId) {
  return pageModel.findById(pageId);
}

function updatePage(pageId, page) {
  return pageModel.findOneAndUpdate({_id: pageId}, {$set: page}, {new: true});
}

function deletePage(pageId){
  return pageModel.remove({_id: pageId});
}


