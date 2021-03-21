import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appEnterBackgroundDirective]'
})
export class EnterBackgroundDirective implements OnChanges {
  @Input() bgcolor: string;

  regex = /^([0-9A-Fa-f]{3}){1,2}$/;
  constructor(private readonly element: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.bgcolor.match(this.regex)) {
      this.element.nativeElement.style.backgroundColor = `#${this.bgcolor}`;
    }
    else {
      this.element.nativeElement.style.backgroundColor = '#FFFFFF';
    }
  }
}
