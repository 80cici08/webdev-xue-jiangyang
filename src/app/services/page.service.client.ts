import {Injectable} from '@angular/core';

@Injectable()
export class PageService {
  pages = [
    {'_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem'},

    {'_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem'},

    {'_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem'}
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

  fidnPageById(pageId) {
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
