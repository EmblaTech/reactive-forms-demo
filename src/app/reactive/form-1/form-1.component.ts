import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'demo-form-1',
  template: `
    <h1>Model-driven form example</h1>

    <form [formGroup]="addFriendForm" (ngSubmit)="onSubmit()">

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
          <button type="submit">Submit</button>
        </div>

    </form>
  `,
  styles: []
})
export class Form1Component implements OnInit {
  public addFriendForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.addFriendForm = formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      ageGroup: [null]
    });
  }

  ngOnInit() {
  }

  onSubmit() { }

}
