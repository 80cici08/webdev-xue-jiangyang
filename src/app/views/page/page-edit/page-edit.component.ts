import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  page: any;
  userId: String;
  websiteId: String;
  pageId: String;
  errorFlag: boolean;
  errorMsg = 'Please enter page name.';

  constructor(private pageService: PageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { this.errorFlag = false; }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.uid;
      this.websiteId = params.wid;
      this.pageId = params.pid;
    });
    this.page = this.pageService.fidnPageById(this.pageId);
  }

  deletePage() {
    this.pageService.deletePage(this.pageId);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
  }

  editPage() {
    if (this.page.name === undefined || this.page.name === '') {
      this.errorFlag = true;
    } else {
      this.pageService.updatePage(this.pageId, this.page);
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    }
  }

}
