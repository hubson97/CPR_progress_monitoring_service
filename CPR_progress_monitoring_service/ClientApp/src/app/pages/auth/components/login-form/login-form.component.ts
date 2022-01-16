import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Console } from 'node:console';

import { Login } from '../../models';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<Login>();
  public loginForm: FormGroup;
  public emailInit = 'instruktor@cprservice.com';
  public passwordInit = 'zaq1@WSX';

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(this.emailInit, [Validators.required, Validators.email]),
      password: new FormControl(this.passwordInit, [Validators.required])
    });
  }

  public login(): void {
    if (this.loginForm.valid) {
      let model: Login = {
        email: this.loginForm.controls["email"].value,
        password: this.loginForm.controls["password"].value
      };

      this.sendLoginForm.emit(model);
    }
  }
}
