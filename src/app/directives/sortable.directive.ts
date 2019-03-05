import {AfterViewInit, Directive} from '@angular/core';

@Directive({
  selector: '[appSortable]'
})
export class SortableDirective implements AfterViewInit{

  constructor() { }

  ngAfterViewInit() {
    // this.appSortable(this);
  }
}
