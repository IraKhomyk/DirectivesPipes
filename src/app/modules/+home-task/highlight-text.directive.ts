import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})

export class HighlightTextDirective {

  @Input() highlightColor: string;
  regex = /^([0-9A-Fa-f]{3}){1,2}$/;

  constructor(private readonly element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.highlightColor.match(this.regex)) {
      this.highlight(`#${this.highlightColor}`);
    }
    else {
      this.highlight('#FF0000');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('#000000');
  }

  private highlight(color: string) {
    this.element.nativeElement.style.color = color;
  }
}
