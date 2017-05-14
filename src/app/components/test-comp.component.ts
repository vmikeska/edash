import { Component, Input } from '@angular/core';

@Component({
  selector: 'test-comp',
  templateUrl: './test-comp.html',
})

export class TestComp {
  @Input()
  public data = "nazdar";
}


