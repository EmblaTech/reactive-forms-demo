import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-template-1',
  template: `
    <h1>Template-driven form example</h1>

    <form #f="ngForm" (ngSubmit)="onSubmit()">

        <div>
            <label>Name</label>
            <input type="text" name="name" [(ngModel)]="user.name" required>
        </div>
        <div>
            <label>Email</label>
            <input type="text" name="email" [(ngModel)]="user.email" required>
        </div>
        <div>
          <label>Age group</label>
          <select name="ageGroup" [(ngModel)]="user.ageGroup">
            <option *ngFor="let ag of AGE_GROUPS" [ngValue]="ag">{{ag.name}}</option>
          </select>
        </div>

        <div>
            <button type="submit" [disabled]="!f.valid">Submit</button>
        </div>

    </form>
  `,
  styles: []
})
export class Form1Component implements OnInit {

  readonly AGE_GROUPS = [
    { name: 'Kid' },
    { name: 'Young adult' },
    { name: 'Adult' },
    { name: 'Senior citizen' }
  ];

  user = {
    name: 'Amarabandu Rupasingha',
    email: 'user1@mail.com',
    ageGroup: this.AGE_GROUPS[0]
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
  }

}
