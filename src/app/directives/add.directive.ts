import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[add-host]',
})
export class AddDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}