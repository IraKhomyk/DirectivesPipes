import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appEnterLettersNumbers]'
})
export class EnterLettersNumbersDirective {

  regexStr = "[A-Za-z0-9]+";

  constructor(private elementRef: ElementRef) { }

  @HostListener('keypress', ['$event'])
  onKeyPress(event) {
    return new RegExp(this.regexStr).test(event.key);
  }

  @HostListener('paste', ['$event'])
  blockPaste(event: ClipboardEvent) {
    this.validateFields(event);
  }
  validateFields(event: ClipboardEvent) {
    event.preventDefault();
    const pasteDate = event.clipboardData.getData('text/plain').replace(/[^a-zA-Z0-9 -]/g, '');
    document.execCommand('insertHTML, false, pasteData');
  }

}
