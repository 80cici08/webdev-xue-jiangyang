import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  page: any;
  userId: String;
  websiteId: String;
  errorFlag: boolean;
  errorMsg = 'Please enter page name.';

  constructor(private pageService: PageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { this.errorFlag = false; }

  ngOnInit() {
    this.page = {
      name: '',
      description: ''
    }
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.uid;
      this.websiteId = params.wid;
    });
  }

  createPage() {
    if (this.page.name === undefined || this.page.name === '') {
      this.errorFlag = true;
    } else {
      this.pageService.createPage(this.websiteId, this.page)
        .subscribe(
          data => {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
          }
        );
    }
  }

}
