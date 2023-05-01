import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor( private elementRef: ElementRef, private renderer : Renderer2) {

   }
   ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
   }

}
