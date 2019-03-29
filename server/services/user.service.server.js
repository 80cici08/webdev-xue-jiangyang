module.exports = function (app) {

  app.get("/api/user/all", getAllUsers);
  app.post("/api/user", createUser);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/user", function (req, res) {
    if (typeof req.query["password"] === "undefined") {
      findUserByUsername(req, res);
    } else {
      findUserByCred(req, res);
    }
  });
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  var userModel = require('../model/user/user.model.server');

  // var users = [
  //   {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland"},
  //   {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
  //   {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
  //   {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
  // ];


  // get all users
  function getAllUsers(req, res) {
    userModel.findAll()
      .then(function (users) {
        res.status(200).send(users);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }

  // create user
  function createUser(req, res) {
    var user = req.body;
    userModel.createUser(user)
      .then(function (user) {
        res.status(200).send(user);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }


  // find user by userId
  function findUserById(req, res) {
    var id = req.params.userId;
    userModel.findUserById(id)
      .then(function (user) {
        res.status(200).send(user);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }

  // find user by username
  function findUserByUsername(req, res) {
    var username = req.query["username"];
    userModel.findUserByUsername(username)
      .then(function (user) {
        res.status(200).send(user);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });


  }

  // find user by credential
  function findUserByCred(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    userModel.findByCredential(username, password)
      .then(function (user) {
        res.status(200).send(user);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }


  // update user
  function updateUser(req, res) {
    var userId = req.params.userId;
    var newUser = req.body;
    userModel.updateUser(userId, newUser)
      .then(function (user) {
        res.status(200).send(user);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }

  // delete user
  function deleteUser(req, res) {
    var userId = req.params.userId;
    userModel.deleteUser(userId)
      .then(function (user) {
        res.status(200).send(user);
      }, function (error) {
        res.status(400).send({"errMsg": error.message});
      });
  }

}
