import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(el: ElementRef) { 
    console.log(el.nativeElement);
    el.nativeElement.style.color='pink';
  }

}
