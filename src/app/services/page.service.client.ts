import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class PageService {
  // pages = [
  //   new Page('321', 'Post 1', '123', 'Lorem'),
  //   new Page('324', 'Post 2', '123', 'Lorem'),
  //   new Page('432', 'Post 3', '234', 'Lorem'),
  //   new Page('543', 'Post 4', '234', 'Lorem'),
  //
  // ];
  baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient) {
  }

  createPage(websiteId, page) {
    return this._http.post<Page>(this.baseUrl + '/api/website/' + websiteId + '/page', page);
  }

  findPageByWebsiteId(websiteId) {
    return this._http.get<Page[]>(this.baseUrl + '/api/website/' + websiteId + '/page');
  }

  findPageById(pageId) {
    return this._http.get<Page>(this.baseUrl + '/api/page/' + pageId);
  }

  updatePage(pageId, page) {
    return this._http.put<Page>(this.baseUrl + '/api/page/' + pageId, page);
  }

  deletePage(pageId) {
    return this._http.delete(this.baseUrl + '/api/page/' + pageId);
  }
}
