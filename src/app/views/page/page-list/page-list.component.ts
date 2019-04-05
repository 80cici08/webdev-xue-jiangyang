import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../models/page.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  pages: Page[];
  userId: String;
  websiteId: String;

  constructor(private pageService: PageService,
              private sharedService: SharedService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params.wid;
    });

    this.pageService.findPageByWebsiteId(this.websiteId)
      .subscribe(
        (data: Page[]) => {
          this.pages = data;
        }
      );
  }

}
