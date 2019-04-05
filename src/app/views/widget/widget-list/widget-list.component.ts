import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {Widget} from '../../../models/widget.model.client';
import {PageService} from '../../../services/page.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widgets: Widget[];

  constructor(private widgetService: WidgetService,
              private pageService: PageService,
              private sharedService: SharedService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params.wid;
      this.pageId = params.pid;
    });
    this.pageService.findPageById(this.pageId)
      .subscribe(
        (data: any) => {
          this.widgets = data.widgets;
        }
      );
  }

  // receiving the emitted event
  reorderWidgets(indexes) {
    // console.log('indexes:' + indexes);
    // call widget service function to update widget as per index
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
      .subscribe(
        (data: any) => console.log(data)
      );
  }

}
