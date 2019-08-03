import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { User } from '../user.model';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { HelperserviceService } from '../helperservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  user: User;
  myForm: FormGroup;
  successMessage: String = '';

  constructor(private header: HeaderComponent, private _helperService: HelperserviceService) {
    this.myForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      cnfpassword: new FormControl(null, this.passValidator)
    });

    this.myForm.controls.password.valueChanges
      .subscribe(
        x => this.myForm.controls.cnfpassword.updateValueAndValidity()
      );
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }
    return null;
  }

  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }

  close() {
    this.header.registration = false;
  }

  goRegistration() {
    console.log(this.myForm.value);

    if (this.myForm.valid) {
      this._helperService.submitRegister(this.myForm.value)
        .subscribe(
          data =>{ this.successMessage = 'Registration Success';
                   this.close();
        },
          error => this.successMessage = 'Error'
        );
    }
  }
  
}
