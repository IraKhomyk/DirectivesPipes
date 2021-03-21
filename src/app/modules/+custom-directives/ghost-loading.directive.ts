import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appGhostLoading]'
})
export class GhostLoadingDirective implements OnChanges {
  @Input() isLoading = false;
  @Input() isChild = false;

  private readonly parentLoadingClass = 'parent-ghost';
  private readonly childLoadingClass = 'child-ghost';

  constructor(private readonly elementRef: ElementRef) {
  }  
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isLoading) {
      this.setElementClass();
  }
} 
  private setElementClass(): void {
    const elementClass = this.isChild ? this.childLoadingClass : this.parentLoadingClass;

    if (this.isLoading) {
      this.elementRef.nativeElement.classList.add(elementClass);
    } else {
      this.elementRef.nativeElement.classList.remove(elementClass);
    }
  }
}

