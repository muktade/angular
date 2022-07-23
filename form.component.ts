import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { PasswordValidator } from './pass.Valid';

export interface User {
  userName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  user: User = {
    userName: '',
    email: '',
    password: '',
  };
  constructor() {
    this.user = {} as User;
    this.myFrom;
  }

  myFrom = new FormGroup({
    username: new FormControl(this.user.userName, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
      Validators.pattern('^[a-zA-Z]{1,100}$'),
    ]),
    email: new FormControl(this.user.email, [
      Validators.required,
      Validators.pattern('^[a-zA-Z._0-9]+@[a-zA-Z]+[.][a-zA-Z]{2,5}$'),
      // Validators.email,
    ]),
    password: new FormControl(this.user.password, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15),
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[()!@#$%&*?]).{1,100}$'
      ),
      // PasswordValidator.strong,
    ]),
  });

  get username() {
    return this.myFrom.get('username');
  }
  get email() {
    return this.myFrom.get('email');
  }
  get pass() {
    return this.myFrom.get('password');
  }
  onSubmit() {
    return console.log(this.myFrom.value);
  }
  ngOnInit(): void {}
}
