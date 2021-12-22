import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

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
    return this.regForm.controls as { [key: string]: AbstractControl; };
  }

  onSubmit() {
    console.log(this.regForm.value);
  }
}
