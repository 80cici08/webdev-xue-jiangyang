import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  websiteName: String;
  websiteDesc: String;
  websites: Website[];
  developerId: String;

  errorFlag: boolean;
  errorMsg = 'Please enter website name.';

  @ViewChild('f') newWebsiteForm: NgForm;

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
    this.websiteName = this.newWebsiteForm.value.websiteName;
    this.websiteDesc = this.newWebsiteForm.value.websiteDesc;
    const website: Website = new Website('', this.websiteName, this.developerId, this.websiteDesc);

    if (this.websiteName === undefined) {
      this.errorFlag = true;
    } else {
      this.websiteService.createWebsite(this.developerId,{name: this.websiteName, description: this.websiteDesc});
      this.router.navigate(['user', this.developerId, 'website']);
    }
  }

}
