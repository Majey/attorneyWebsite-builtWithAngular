import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <pm-header></pm-header>
    <router-outlet></router-outlet>
    <pm-footer></pm-footer>    
  `
})
export class AppComponent {
  title = 'attorney-website-angularVersion';
}
