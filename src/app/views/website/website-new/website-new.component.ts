import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  websiteName: String;
  websiteDesc: String;
  websites: any;
  developerId: String;
  errorFlag: boolean;
  errorMsg = 'Please enter website name.';

  constructor(private websiteService: WebsiteService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { this.errorFlag = false; }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.developerId = params.uid;
    });
    this.websites = this.websiteService.findWebsiteByUser(this.developerId);
  }

  createWebsite() {
    if (this.websiteName === undefined) {
      this.errorFlag = true;
    } else {
      this.websiteService.createWebsite(this.developerId,{name: this.websiteName, description: this.websiteDesc});
      this.router.navigate(['user', this.developerId, 'website']);
    }
  }

}
