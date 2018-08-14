import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'demo-form-2',
  template: `
    <h1>Model-driven form example 2</h1>

    <form [formGroup]="addFriendForm" (ngSubmit)="send()">

        <div>
            <label>Name</label>
            <input type="text" formControlName="name">
        </div>
        <div>
            <label>Email</label>
            <input type="text" formControlName="email">
        </div>
        <div>
          <label>Age group</label>
          <select formControlName="ageGroup">
            <option *ngFor="let ag of AGE_GROUPS" [ngValue]="ag">{{ag.name}}</option>
          </select>
        </div>

        <div>
          <button type="submit" [disabled]="!addFriendForm.valid">Submit</button>
        </div>

    </form>
  `,
  styles: []
})
export class Form2Component implements OnInit {
  readonly AGE_GROUPS = [
    { name: 'Kid' },
    { name: 'Young adult' },
    { name: 'Adult' },
    { name: 'Senior citizen' }
  ];

  addFriendForm: FormGroup;

  private user = {
    name: 'Amarabandu Rupasingha',
    email: 'user1@mail.com',
    ageGroup: this.AGE_GROUPS[0]
  };

  userFormItems = {
    name: new FormControl(this.user.name, [Validators.required]),
    email: new FormControl(this.user.email, [Validators.required]),
    ageGroup: new FormControl(this.user.ageGroup)
  };

  constructor(formBuilder: FormBuilder) {
    this.addFriendForm = formBuilder.group(this.userFormItems);
  }

  ngOnInit() { }

  send = () => console.log(this.addFriendForm.value);
}
