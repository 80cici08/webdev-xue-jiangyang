import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  websites: Website[];
  developerId: String;
  websiteId: String;
  website: Website;
  websiteName: String;
  // websiteDesc: String;
  errorFlag: boolean;
  errorMsg = 'Please enter website name.';

  constructor(private websiteService: WebsiteService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { this.errorFlag = false; }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.developerId = params.uid;
      this.websiteId = params.wid;
      this.website = this.websiteService.findWebsiteById(this.websiteId);
      this.websiteName = this.website.name;
      // console.log(this.website);
    });

    this.websites = this.websiteService.findWebsiteByUser(this.developerId);
  }

  editWebsite() {
    if (this.website.name === '') {
      this.errorFlag = true;
    } else {
      this.website.name = this.websiteName;
      this.websiteService.updateWebsite(this.websiteId, this.website);
      this.router.navigate(['/user', this.developerId, 'website']);
    }
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId);
    this.router.navigate(['/user', this.developerId, 'website']);
    // console.log(this.websiteService.websites);
  }

}
