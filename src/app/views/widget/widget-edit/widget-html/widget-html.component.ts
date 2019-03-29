import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
    this.widget = new Widget('HTML', '', '', '', '', '', '');
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.uid;
      this.websiteId = params.wid;
      this.pageId = params.pid;
      this.widgetId = params.wgid;
    });

    // fetching current widget based on widgetId
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        (data: any) => {this.widget = data; } ,
        (error: any) => console.log(error)
      );

  }

  updateWidget() {
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe(
        data => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      );
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(
        data => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);

        }
      );
  }

}
