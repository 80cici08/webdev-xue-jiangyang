import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Website} from '../../../models/website.model.client';
import {SharedService} from '../../../services/shared.service';

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
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { this.errorFlag = false; }

  ngOnInit() {
    this.developerId = this.sharedService.user['_id'];
    this.websiteService.findWebsiteByUser(this.developerId)
      .subscribe(
        (data: Website[]) => {
          this.websites = data;
        }
      );
  }

  createWebsite() {
    this.websiteName = this.newWebsiteForm.value.websiteName;
    this.websiteDesc = this.newWebsiteForm.value.websiteDesc;

    if (this.websiteName === undefined || this.websiteName === '') {
      this.errorFlag = true;
    } else {
      const website: Website = new Website(this.websiteName, this.developerId, this.websiteDesc);
      this.websiteService.createWebsite(this.developerId, website)
        .subscribe(
          data => {
            this.router.navigate(['website']);
          }
        );
    }
  }

}
