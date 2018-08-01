import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-template-1',
  template: `
    <p>
      template-1 works!
    </p>
  `,
  styles: []
})
export class Template1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
