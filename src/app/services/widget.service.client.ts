import {Injectable} from '@angular/core';

@Injectable()
export class WidgetService {
  widgets = [

    {'_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},

    {'_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},

    {
      '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',

      'url': 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg'
    },

    {'_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},

    {'_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},

    {
      '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',

      'url': 'https://www.youtube.com/embed/APexI9Zb6iE'
    },

    {'_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}

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
