import {Component, OnInit} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {SharedService} from '../../../../services/shared.service';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget: any;
  errorFlag: boolean;
  errorMsg = 'Please enter widget name.';

  constructor(private activatedRoute: ActivatedRoute,
              private widgetService: WidgetService,
              private sharedService: SharedService,
              private router: Router) {
    this.errorFlag = false;
    this.widget = new Widget('TEXT', '', '', '', '', '', '');
  }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params.wid;
      this.pageId = params.pid;
      this.widgetId = params.wgid;
    });

    // fetching current widget based on widgetId
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        (data: any) => {
          this.widget = data;
        },
        (error: any) => console.log(error)
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
