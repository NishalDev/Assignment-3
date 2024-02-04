import { Directive, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
  standalone: true
})
export class FontSizeDirective implements OnChanges {

  constructor(private el: ElementRef) { }

  @Input('appFontSize') fontSize: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
    if (changes['fontSize'] && changes['fontSize'].currentValue) {
      const newFontSize = changes['fontSize'].currentValue;
      this.el.nativeElement.style.fontSize = `${newFontSize}px`;
    }
  }
}
