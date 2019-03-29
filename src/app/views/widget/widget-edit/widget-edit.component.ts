import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  widget: any;
  widgetId: String;

  constructor(private widgetService: WidgetService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.widget = new Widget('', '', '');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.widgetId = params.wgid;
    });

    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        data => {
          this.widget = data;
        }
      );
  }

}
