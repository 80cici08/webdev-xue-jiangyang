import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';

@Injectable()
export class UserService {
  users: User[] = [
    new User('123', 'alice', 'alice', 'Alice', 'Wonder', ''),
    new User('234', 'bob', 'bob', 'Bob', 'Marley', ''),
    new User('345', 'charly', 'charly', 'Charly', 'Garcia', ''),
    new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', ''),
  ];

  createUser(user) {
    user._id = Math.random().toString().substr(2, 9);
    this.users.push(user);
    return user;
  }

  findUserById(userId) {
    return this.users.find(user => {
      return user._id === userId;
    });
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
