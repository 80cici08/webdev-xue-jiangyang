var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

var bcrypt = require("bcrypt-nodejs");

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
  app.post('/api/login', passport.authenticate('local'), login);
  app.get('/facebook/login', passport.authenticate('facebook', {scope: 'email'}));
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/profile',
    failureRedirect: '/login'
  }));
  app.post('/api/logout', logout);
  app.post('/api/register', register);
  app.post('/api/loggedin', loggedin);

  var userModel = require('../model/user/user.model.server');

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


  // passport config
  passport.use(new LocalStrategy(localStrategy));
  var facebookConfig = {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL
  };
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel.findUserById(user._id)
      .then(function (user) {
          done(null, user);
        },
        function (err) {
          done(err, null);
        });
  }

  function localStrategy(username, password, done) {
    userModel
      .findUserByUsername(username)
      .then(
        function (user) {
          if (user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function (err) {
          res.sendStatus(400).send(err);
        });
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel.findUserByFacebookId(profile.id).then(function (user) {
      if (user) {
        return done(null, user);
      } else {
        var names = profile.displayName.split(" ");
        var newFacebookUser = {
          lastName: names[1],
          firstName: names[0],
          email: profile.emails ? profile.emails[0].value : "",
          facebook: {id: profile.id, token: token}
        };
        return userModel.createUser(newFacebookUser);
      }
    }, function (err) {
      if (err) {
        return done(err);
      }
    }).then(function (user) {
      return done(null, user);
    }, function (err) {
      if (err) {
        return done(err);
      }
    });
  }

  function login(req, res) {
    // use req.user instead of req.body
    var user = req.user;
    return res.json(user);
  }

  function logout(req, res) {
    req.logOut();
    console.log('logged out...');
    res.send(200);
  }

  function register(req, res) {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel.createUser(user)
      .then(function (user) {
        if (user) {
          req.login(user, function (err) {
            if (err) {
              res.status(400).send(err);
            } else res.json(user);
          })
        }
      });
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }
}
