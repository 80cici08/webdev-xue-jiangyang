module.exports = function (app) {

  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];

  // get all users
  app.get("/api/user/all", getAllUsers);
  function getAllUsers(req, res) {
    res.send(users);
  }

  // create user
  app.post("/api/user", createUser);
  function createUser(req, res) {
    var user = req.body;
    user._id = Math.random().toString().substr(2, 9);
    users.push(user);
    res.send(user);
  }


  // find user by userId
  app.get("/api/user/:userId", findUserById);
  function findUserById(req, res) {
    var id = req.params.userId;

    for (var user of users){
      if(user._id === id){
        res.send(user);
        return;
      }
    }
    res.send({});
  }

  // find user by username
  app.get("/api/user", function(req, res) {
    if(typeof req.query["password"] === "undefined") {
      findUserByUsername(req, res);
    } else {
      findUserByCred(req, res);
    }
  });
  function findUserByUsername(req, res) {
    var username = req.query["username"];
    for (const user of users) {
      if (user.username === username) {
        res.send(user);
        return;
      }
    }
    res.send({});
  }

  // find user by credential
  function findUserByCred(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    for (const user of users) {
      if (user.username === username && user.password === password) {
        res.send(user);
        return;
      }
    }
    res.send({});
  }


  // update user
  app.put("/api/user/:userId", updateUser);
  function updateUser(req, res) {
    var userId = req.params.userId;
    var newUser = req.body;
    newUser._id = userId;
    for (let x = 0; x < users.length; x++) {
      if (users[x]._id === userId) {
        users[x] = newUser;
        res.send(newUser);
        return;
      }
    }
    res.send({});
  }

  // delete user
  app.delete("/api/user/:userId", deleteUser);
  function deleteUser(req, res) {
    var userId = req.params.userId;
    for (let x = 0; x < users.length; x++) {
      if (users[x]._id === userId) {
        users.splice(x, 1);
        res.send({message: "ok"});
        return;
      }
    }
    res.send({});
  }

}
