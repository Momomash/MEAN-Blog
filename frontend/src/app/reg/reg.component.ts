import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import VALIDATE_MESSAGES from '../../utils/enums/validateMessages';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss'],
})
export class RegComponent {
  regForm = new FormGroup({
    name: new FormControl('', Validators.required),
    login: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  get controls() {
    return this.regForm.controls as { [key: string]: AbstractControl };
  }

  get errors(): { [key: string]: string } {
    return {
      name: !this.controls['name'].valid ? VALIDATE_MESSAGES.REQUIRED : '',
      login: !this.controls['login'].valid ? VALIDATE_MESSAGES.REQUIRED : '',
      email: !this.controls['email'].valid ? VALIDATE_MESSAGES.REQUIRED : '',
      password: !this.controls['password'].valid ? VALIDATE_MESSAGES.REQUIRED : '',
    };
  }

  onSubmit() {
    console.log(this.regForm.value);
  }
}
