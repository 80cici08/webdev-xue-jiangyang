import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widget: any;
  defaultWidgetValues =
    {
      'HEADING': {widgetType: 'HEADING', 'size': 1},
      'IMAGE': {widgetType: 'IMAGE', width: '100%', url:''},
      'YOUTUBE': {widgetType: 'YOUTUBE', width: '100%'},
      'HTML': {widgetType: 'HTML', text:''},
      'TEXT': {widgetType: 'TEXT', placeholder: ''}
    };

  constructor(private widgetService: WidgetService,
              private router: Router,
              private sharedService: SharedService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params.wid;
      this.pageId = params.pid;
    });
  }

  createWidget(widgetType) {
    this.widget = this.defaultWidgetValues[widgetType];
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe(
        data => {
          this.widget = data;
          this.router.navigate(['/website', this.websiteId, 'page', this.pageId, 'widget', this.widget._id]);
        }
      );

  }

}
