import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;

  baseUrl = environment.baseUrl;

  constructor(private widgetService: WidgetService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.widget = new Widget('','IMAGE', '');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.uid;
      this.websiteId = params.wid;
      this.pageId = params.pid;
      this.widgetId = params.wgid;
    });
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        data => {
          this.widget = data;
        }
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
