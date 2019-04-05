import {Component, OnInit} from '@angular/core';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {WidgetService} from '../../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../../services/shared.service';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  searchText: String;
  photos: any;
  photo: any;
  error: String;

  constructor(private _flickrService: FlickrService,
              private widgetService: WidgetService,
              private sharedService: SharedService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params.wid;
      this.pageId = params.pid;
      this.widgetId = params.wgid;
    });
  }

  searchPhotos() {
    this._flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          this.photos = data.photos;
          this.photo = this.photos.photo;
        }
      );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    // const widget = {websiteId: this.websiteId, pageId: this.pageId, url: url};
    const widget = {_id: this.widgetId, _page: this.pageId, url: url};

    this.widgetService
      .updateWidget(this.widgetId, widget)
      .subscribe(
        (data: any) => {
          if (data) { this.router.navigate(['/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widgetId] );
          } else {
            this.error = 'failed!';
          }
        }
      );
  }
}
