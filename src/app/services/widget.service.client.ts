import {Injectable} from '@angular/core';
import {Widget} from '../models/widget.model.client';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WidgetService {
  // widgets = [
  //   new Widget('123', 'HEADING', '321', '2', 'GIZMODO', '', ''),
  //   new Widget('234', 'HEADING', '321', '4', 'Lorem ipsum', '', ''),
  //   new Widget('345', 'IMAGE', '321', '', '', '100%', 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg'),
  //   new Widget('456', 'HEADING', '321', '3', 'Lorem ipsum', '', ''),
  //   new Widget('789', 'YOUTUBE', '321', '', '', '100%', 'https://www.youtube.com/embed/APexI9Zb6iE'),
  // ];
  baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient) {
  }

  createWidget(pageId, widget) {
    return this._http.post<Widget>(this.baseUrl + '/api/page/' + pageId + '/widget', widget);
  }

  findWidgetsByPageId(pageId) {
    return this._http.get<Widget[]>(this.baseUrl + '/api/page/' + pageId + '/widget');
  }

  findWidgetById(widgetId) {
    return this._http.get<Widget>(this.baseUrl + '/api/widget/' + widgetId);
  }

  updateWidget(widgetId, widget) {
    return this._http.put<Widget>(this.baseUrl + '/api/widget/' + widgetId, widget);
  }

  deleteWidget(widgetId) {
    return this._http.delete(this.baseUrl + '/api/widget/' + widgetId);
  }

  reorderWidgets(startIndex, endIndex, pageId) {

    const url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
    return this._http.put(url, '');
  }
}
