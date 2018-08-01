import { Component } from '@angular/core';

@Component({
  selector: 'demo-root',
  template: `
    <button (click)="toggleLinks()">nav</button>

    <div>
      <a href="template-1" *ngIf="isShowLinks">template-1</a>
    </div>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  isShowLinks = false;

  toggleLinks = () => this.isShowLinks = !this.isShowLinks;
}
