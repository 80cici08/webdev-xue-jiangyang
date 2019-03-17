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
  errorFlag: boolean;
  errorMsg = 'Please enter website name.';

  constructor(private websiteService: WebsiteService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.errorFlag = false;
    this.website = new Website('','','','');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.developerId = params.uid;
      this.websiteId = params.wid;
      // const tmp: Website = this.websiteService.findWebsiteById(this.websiteId);
      // this.website = new Website(tmp._id, tmp.name, tmp.developerId, tmp.description);
    });

    this.websiteService.findWebsiteById(this.websiteId)
      .subscribe(
        (data: Website) => {
          this.website = data;
        }
      )

    this.websiteService.findWebsiteByUser(this.developerId)
      .subscribe(
        (data: Website[]) => {
          this.websites = data;
        }
      );
  }

  editWebsite() {
    if (this.website.name === undefined || this.website.name === '') {
      this.errorFlag = true;
    } else {
      this.websiteService.updateWebsite(this.websiteId, this.website)
        .subscribe(
          data => {
            this.router.navigate(['/user', this.developerId, 'website']);
          }
        );
    }
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId)
      .subscribe(
        data => {
          this.router.navigate(['/user', this.developerId, 'website']);
        },
        error => {
          console.log(error);
        }
      );
  }

}
