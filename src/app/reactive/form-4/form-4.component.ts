import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { CustomValidator } from './custom-validator';

@Component({
  selector: 'demo-form-3',
  template: `
    <h1>Model-driven form example 4</h1>

    <form [formGroup]="addFriendForm" (ngSubmit)="send()">

        <div>
            <label>Name</label>
            <input type="text" formControlName="name">
            <small *ngIf="userFormItems.name.invalid && userFormItems.name.touched">Name is required</small>
        </div>
        <div>
            <label>Email</label>
            <input type="text" formControlName="email">
            <span *ngIf="userFormItems.email.touched">
              <small *ngIf="userFormItems.email.errors?.required">E-mail is required</small>
              <small *ngIf="!userFormItems.email.errors?.required && userFormItems.email.errors?.email">Doesn't fit e-mail address format</small>
              <small *ngIf="userFormItems.email.errors?.notUnique">E-mail should be unique</small>
              <small *ngIf="userFormItems.email.pending">Validating...</small>
            </span>

        </div>
        <div>
          <label>Age group</label>
          <select formControlName="ageGroup">
            <option *ngFor="let ag of AGE_GROUPS" [ngValue]="ag">{{ag.name}}</option>
          </select>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>

    </form>
  `,
  styles: [`
    input.ng-invalid.ng-touched {
      border-color: red
    }
  `]
})
export class Form4Component implements OnInit {
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
    email: new FormControl(this.user.email, [Validators.required, Validators.email], [CustomValidator.notUnique]),
    ageGroup: new FormControl(this.user.ageGroup)
  };

  constructor(formBuilder: FormBuilder) {
    this.addFriendForm = formBuilder.group(this.userFormItems);
  }

  ngOnInit() { }

  send = () => console.log(this.addFriendForm.value);
}
