import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';

@Injectable()
export class WebsiteService {
  websites = [
    new Website('123', 'Facebook', '123', 'Lorem'),
    new Website('234', 'Tweeter', '123', 'Lorem'),
    new Website('456', 'Gizmode', '234', 'Lorem'),
    new Website('890', 'Go', '234', 'Lorem'),
  ];

  createWebsite(userId, website) {
    website._id = Math.random().toString().substr(2, 9);
    website.developerId = userId;
    this.websites.push(website);
  }

  findWebsiteByUser(userId) {
    const found = this.websites.filter(ele => {
      return ele.developerId === userId;
    });

    return found;
  }

  findWebsiteById(websiteId) {
    for (const website of this.websites) {
      if (website._id === websiteId) {
        return website;
      }
    }
  }

  updateWebsite(websiteId, website) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites[x] = website;
      }
    }
  }

  deleteWebsite(websiteId) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        return this.websites.splice(x, 1);
      }
    }
  }
}
