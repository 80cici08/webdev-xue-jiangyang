import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class WebsiteService {
  baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient) {}
  // websites = [
  //   new Website('123', 'Facebook', '123', 'Lorem'),
  //   new Website('234', 'Tweeter', '123', 'Lorem'),
  //   new Website('456', 'Gizmode', '234', 'Lorem'),
  //   new Website('890', 'Go', '234', 'Lorem'),
  // ];

  createWebsite(userId, website) {
    return this._http.post<Website>(this.baseUrl + '/api/user/' + userId + '/website', website);
  }

  findWebsiteByUser(userId) {
    return this._http.get<Website[]>(this.baseUrl + '/api/user/' + userId + '/website');
  }

  findWebsiteById(websiteId) {
    return this._http.get<Website>(this.baseUrl + '/api/website/' + websiteId);
  }

  updateWebsite(websiteId, website) {
    return this._http.put<Website>(this.baseUrl + '/api/website/' + websiteId, website);
  }

  deleteWebsite(websiteId) {
    return this._http.delete(this.baseUrl + '/api/website/' + websiteId);
  }
}
