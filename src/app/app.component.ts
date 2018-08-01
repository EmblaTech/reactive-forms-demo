import { Component } from '@angular/core';

@Component({
  selector: 'demo-root',
  template: `
    <button (click)="toggleLinks()">nav</button>

    <div *ngIf="isShowLinks">
      <a href="template/1">template/1</a>
      <br>
      <a href="reactive/1">reactive/1</a>
      <br>
      <a href="reactive/2">reactive/2</a>
      <br>
      <a href="reactive/3">reactive/3</a>
      <br>
      <a href="reactive/4">reactive/4</a>
      <br>
      <a href="reactive/5">reactive/5</a>
      <br>
    </div>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  isShowLinks = false;

  toggleLinks = () => this.isShowLinks = !this.isShowLinks;
}
