import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createRegisterForm();
  }

  ngOnInit(): void {
  }

  /*Create form*/
  public createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      gender: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required, Validators.min(8), Validators.maxLength(20)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.min(8), Validators.maxLength(20)])
    });
  }


  public onSubmit(): void {
    console.log(this.registerForm.value);
    if (this.registerForm.touched && this.registerForm.valid) {
    //  Make API call
    } else {
      console.log(this.registerForm.errors);
    }
  }
}
