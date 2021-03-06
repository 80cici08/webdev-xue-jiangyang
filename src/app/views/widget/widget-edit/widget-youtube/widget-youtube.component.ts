import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {SharedService} from '../../../../services/shared.service';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;
  errorFlag: boolean;
  errorMsg = 'Please enter widget name.';

  constructor(private widgetService: WidgetService,
              private sharedService: SharedService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.errorFlag = false;
    this.widget = new Widget('','YOUTUBE', '');
  }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params.wid;
      this.pageId = params.pid;
      this.widgetId = params.wgid;
    });
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        data => {this.widget = data;}
      );
  }

  updateWidget() {
    if (this.widget.name === undefined || this.widget.name === '') {
      this.errorFlag = true;
    } else {
      this.widgetService.updateWidget(this.widgetId, this.widget)
        .subscribe(
          data => {
            this.router.navigate(['/website', this.websiteId, 'page', this.pageId, 'widget']);
          }
        );
    }
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(
        data => {
          this.router.navigate(['/website', this.websiteId, 'page', this.pageId, 'widget']);

        }
      );
  }
}
