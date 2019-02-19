import {Injectable} from '@angular/core';

@Injectable()
export class WebsiteService {
  websites = [
    {'_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem'},

    {'_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem'},

    {'_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem'},

    {'_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem'},

    {'_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem'},

    {'_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem'},

    {'_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem'}
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
