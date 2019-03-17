module.exports = function (app) {

  app.get("/api/user/all", getAllUsers);
  app.post("/api/user", createUser);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/user", function(req, res) {
    if(typeof req.query["password"] === "undefined") {
      findUserByUsername(req, res);
    } else {
      findUserByCred(req, res);
    }
  });
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];


  // get all users
  function getAllUsers(req, res) {
    res.json(users);
  }

  // create user
  function createUser(req, res) {
    var user = req.body;
    // for (var i = 0; i < users.length; i++) {
    //   if (users[i].username === user["username"]) {
    //     res.status(404).send({errMsg: "This username is already exist."});
    //     return;
    //   }
    // }
    user._id = Math.random().toString().substr(2, 9);
    users.push(user);
    res.json(user);
  }


  // find user by userId
  function findUserById(req, res) {
    var id = req.params.userId;
    var user = users.find(user => {
      return user._id === id;
    });
    res.json(user);
  }

  // find user by username
  function findUserByUsername(req, res) {
    var username = req.query["username"];
    var user = null;

    if (username){
      user = users.find(user => {
        return user.username === username
      });
    }
    res.json(user);
  }

  // find user by credential
  function findUserByCred(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    var user;

    if (username && password){
      user = users.find(user => {
        return user.username === username && user.password === password;
      });
    }
    res.json(user);
  }


  // update user
  function updateUser(req, res) {
    var userId = req.params.userId;
    var newUser = req.body;
    for(var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i].username = newUser.username;
        users[i].firstName = newUser.firstName;
        users[i].lastName = newUser.lastName;
        users[i].email = newUser.email;

        res.status(200).send(newUser);
        return;
      }
    }
    res.json({});
  }

  // delete user
  function deleteUser(req, res) {
    var userId = req.params.userId;
    for (let x = 0; x < users.length; x++) {
      if (users[x]._id === userId) {
        users.splice(x, 1);
        res.json({message: "ok"});
        return;
      }
    }
    res.json({});
  }

}
