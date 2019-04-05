import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

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
              private sharedService: SharedService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { this.errorFlag = false; }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.page = {
      name: '',
      description: ''
    }
    this.activatedRoute.params.subscribe(params => {
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
            this.router.navigate(['/website', this.websiteId, 'page']);
          }
        );
    }
  }

}
