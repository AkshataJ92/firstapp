import { Directive, HostListener, HostBinding } from '@angular/core';


@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor() { }
@HostListener("mouseover")
mouseover() {
this.Backgroundcolor='red';
}
@HostListener("mouseleave")
mouseleave() {
this.Backgroundcolor='white';
}
@HostBinding('style.backgroundColor')
Backgroundcolor:string;
}
