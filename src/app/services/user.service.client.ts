import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },

    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },

    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },

    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
  ];

  createUser(user) {
    user._id = Math.random().toString().substr(2, 9);
    this.users.push(user);
    return user;
  }

  findUserById(userId) {
    for (const user of this.users) {
      if (user._id === userId) {
        return user;
      }
    }
  }

  findUserByUsername(username) {
    for (const user of this.users) {
      if (user.username === username) {
        return user;
      }
    }
  }

  findUserByCredentials(username, password) {
    for (const user of this.users) {
      if (user.username === username && user.password === password) {
        return user;
      }
    }
  }

  updateUser(userId, user) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users[x] = user;
      }
    }
  }

  deleteUser(userId) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        return this.users.splice(x, 1);
      }
    }
  }
}
