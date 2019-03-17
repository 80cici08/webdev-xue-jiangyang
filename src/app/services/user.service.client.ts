import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable()
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient) {
  }

  // users: User[] = [
  //   new User('123', 'alice', 'alice', 'Alice', 'Wonder', ''),
  //   new User('234', 'bob', 'bob', 'Bob', 'Marley', ''),
  //   new User('345', 'charly', 'charly', 'Charly', 'Garcia', ''),
  //   new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', ''),
  // ];

  createUser(user) {
    return this._http.post<User>(this.baseUrl + '/api/user/', user);
  }

  findUserById(userId) {
    return this._http.get<User>(this.baseUrl + '/api/user/' + userId);
  }

  findUserByUsername(username) {
    return this._http.get<User>(this.baseUrl + '/api/user?username=' + username);
  }

  findUserByCredentials(username, password) {
    console.log("baseUrl:" + this.baseUrl);
    return this._http.get<User>(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
  }

  updateUser(userId, user) {
    return this._http.put<User>(this.baseUrl + '/api/user/' + userId, user);
  }

  deleteUser(userId) {
    return this._http.delete(this.baseUrl + '/api/user/' + userId);
  }
}
