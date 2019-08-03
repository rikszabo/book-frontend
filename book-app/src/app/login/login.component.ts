import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HelperserviceService } from '../helperservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private header: HeaderComponent, private _helperService: HelperserviceService) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  goLogin() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this._helperService.login(this.loginForm.value)
        .subscribe(
          data => {
            console.log('token: ', data);
            localStorage.setItem('token', data.toString());
            localStorage.setItem('loggedIn', JSON.stringify(true));
            console.log('loggedin true')

            this._helperService.getUserName()
              .subscribe(
                data => {
                  localStorage.setItem('username', data.toString());
                  console.log('Username: ', data);
                  this.close();
                  localStorage.setItem('logButton', JSON.stringify(false));
                  localStorage.setItem('regButton', JSON.stringify(false));
                  localStorage.setItem('logoutButton', JSON.stringify(true));
                  this.header.refresh();
                },
                error => {
                  console.log(error)
                  this.header.loginError();
                }
              )
          },
          error => {
            console.log('Not valid login', error)
          }
        );
    }
  }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  close() {
    this.header.login = false;
  }
}
