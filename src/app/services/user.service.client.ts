import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {SharedService} from './shared.service';
import {Router} from '@angular/router';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient,
              private sharedService: SharedService,
              private router: Router) {
  }


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
    return this._http.get<User>(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
  }

  updateUser(userId, user) {
    return this._http.put<User>(this.baseUrl + '/api/user/' + userId, user);
  }

  deleteUser(userId) {
    return this._http.delete(this.baseUrl + '/api/user/' + userId);
  }

  login(username: String, password: String) {
    const body = {username: username, password: password};
    return this._http.post(this.baseUrl + '/api/login', body, {'withCredentials': true});
  }

  logout() {
    return this._http.post(this.baseUrl + '/api/logout', '', {'withCredentials': true});
  }

  register(username: String, password: String) {
    const user = {username: username, password: password};
    return this._http.post(this.baseUrl + '/api/register', user, {'withCredentials': true});
  }

  loggedIn() {
    return this._http.post(this.baseUrl + '/api/loggedin', '', {'withCredentials': true})
      .pipe(
        map((data: any) => {
          const user = JSON.stringify(data);
          console.log('loggedIn');
          console.log(user);

          if (user !== '0') {
            this.sharedService.user = user; // setting user as global variable using shared service
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }),
        );
  }

}
