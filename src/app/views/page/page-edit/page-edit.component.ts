import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  page: Page;
  userId: String;
  websiteId: String;
  pageId: String;
  errorFlag: boolean;
  errorMsg = 'Please enter page name.';

  constructor(private pageService: PageService,
              private sharedService: SharedService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.errorFlag = false;
    this.page = new Page('', '', '');
  }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params.wid;
      this.pageId = params.pid;
    });

    this.pageService.findPageById(this.pageId)
      .subscribe(
        (data: Page) => {
          this.page = data;
        }
      );
    // const copy: Page = this.pageService.findPageById(this.pageId);
    // this.page = new Page(copy._id, copy.name, copy.websiteId, copy.title);
  }

  deletePage() {
    this.pageService.deletePage(this.pageId)
      .subscribe(
        data => {
          this.router.navigate(['/website', this.websiteId, 'page']);
        }
      );
  }

  editPage() {
    if (this.page.name === undefined || this.page.name === '') {
      this.errorFlag = true;
    } else {
      this.pageService.updatePage(this.pageId, this.page)
        .subscribe(
          (data: Page) => {
            this.router.navigate(['/website', this.websiteId, 'page']);
          }
        );
    }
  }

}
