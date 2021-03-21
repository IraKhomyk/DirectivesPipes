import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective implements OnChanges {
  @Input('appHide') isHidden;

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef 
    ) {
    }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.isHidden){
      this.manageElementView();
    }
  }

  private manageElementView(): void {
    if (this.isHidden) {
      this.viewContainerRef.clear();
    } else {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
