import {Injectable} from '@angular/core';
import {Widget} from '../models/widget.model.client';

@Injectable()
export class WidgetService {
  widgets = [
    new Widget('123', 'HEADING', '321', '2', 'GIZMODO', '', ''),
    new Widget('234', 'HEADING', '321', '4', 'Lorem ipsum', '', ''),
    new Widget('345', 'IMAGE', '321', '', '', '100%', 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg'),
    new Widget('456', 'HEADING', '321', '3', 'Lorem ipsum', '', ''),
    new Widget('789', 'YOUTUBE', '321', '', '','100%', 'https://www.youtube.com/embed/APexI9Zb6iE'),
  ];

  createWidget(pageId, widget: any) {
    widget._id = Math.random().toString().substr(2, 9);
    widget.pageId = pageId;
    this.widgets.push(widget);
    return this.findWidgetById(widget._id);
  }

  findWidgetsByPageId(pageId) {
    const found = this.widgets.filter(ele => {
      return ele.pageId === pageId;
    });
    return found;
  }

  findWidgetById(widgetId) {
    for (const widget of this.widgets) {
      if (widget._id === widgetId) { return widget; }
    }
  }

  updateWidget(widgetId, widget) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets[x] = widget;
      }
    }
  }

  deleteWidget(widgetId) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets.splice(x, 1);
      }
    }
  }
}
