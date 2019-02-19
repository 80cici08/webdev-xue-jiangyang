import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  website: any;
  websites = [{}];
  developerId: String;
  websiteId: String;
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
    });

    this.websites = this.websiteService.findWebsiteByUser(this.developerId);
  }

  editWebsite() {
    console.log("----"+this.website.name+"----");
    if (this.website.name === '') {
      this.errorFlag = true;
    } else {
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
