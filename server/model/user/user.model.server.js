var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');

var userModel = mongoose.model("User",userSchema);


userModel.createUser = createUser;
userModel.findAll = findAll;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findByCredential = findByCredential;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;

module.exports = userModel;


/*function createUser(user) {
  return userModel.create(user, function (err, userSchema) {
    if(err){return handleError(err);}
  });
}*/
function createUser(user) {
  return userModel.create(user);
}

function findAll() {
  return userModel.find();
}

function findUserById(id) {
  return userModel.findById(id);
}

function findUserByUsername(username) {
  return userModel.findOne({username:username});
}

function findByCredential(username,password){
  return userModel.findOne({username:username,password:password});
}

function updateUser(userId,user) {
  return userModel.findOneAndUpdate({_id: userId}, {$set: user}, {new: true});
}

function deleteUser(userId){
  return userModel.findByIdAndDelete(userId);
}
