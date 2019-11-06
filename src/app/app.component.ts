import { Component } from '@angular/core';
import { BugDirective } from './bug.directive';



@Component({
  selector: 'app-root',
  template: `
    <h1 bug #ref="bug">Bug Bug Bug</h1>
    <button (click)="test(ref)">:(</button>
  `,
  styles: []
})
export class AppComponent {
  test(bug: BugDirective) {}
}
