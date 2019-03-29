var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server');

var websiteModel = mongoose.model("Website",websiteSchema);


websiteModel.createWebsiteForUser = createWebsiteForUser;
websiteModel.findAllWebistesForUser = findAllWebistesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;


function createWebsiteForUser(userId, website) {
  website._user = userId;
  return websiteModel.create(website);
}

function findAllWebistesForUser(userId) {
  return websiteModel.find({_user: userId});
}

function findWebsiteById(websiteId) {
  return websiteModel.findById(websiteId);
}


function updateWebsite(websiteId,website) {
  return websiteModel.findOneAndUpdate({_id: websiteId}, {$set: website}, {new: true});
}

function deleteWebsite(websiteId){
  return websiteModel.findByIdAndDelete(websiteId);
}
