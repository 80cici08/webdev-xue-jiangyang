import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appChangeBgColor]'
})
export class ChangeBgColorDirective {
  @Input() changeBgColor: string;

  @HostListener('click') onClick() {
    this.changeMe(this.changeBgColor);
  }

  constructor(private  el: ElementRef) { }

  private changeMe(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
