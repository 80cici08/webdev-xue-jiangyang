import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';

@Injectable()
export class PageService {
  pages = [
    new Page('321', 'Post 1', '123', 'Lorem'),
    new Page('324', 'Post 2', '123', 'Lorem'),
    new Page('432', 'Post 3', '234', 'Lorem'),
    new Page('543', 'Post 4', '234', 'Lorem'),

  ];

  createPage(websiteId, page) {
    page._id = Math.random().toString().substr(2, 9);
    page.websiteId = websiteId;
    this.pages.push(page);
  }

  findPageByWebsiteId(websiteId) {
    const found = this.pages.filter(ele => {
      return ele.websiteId === websiteId;
    });

    return found;
  }

  findPageById(pageId) {
    for (const page of this.pages) {
      if (page._id === pageId) {
        return page;
      }
    }
  }

  updatePage(pageId, page) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages[x] = page;
      }
    }
  }

  deletePage(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages.splice(x, 1);
      }
    }
  }
}
