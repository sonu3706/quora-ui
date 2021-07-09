import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RestService } from '../../../../services/utilities/rest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RestService<any>,
    private saveUserService: RestService<any>
  ) {
    this.createRegisterForm();
  }

  ngOnInit(): void {}

  /*Create form*/
  public createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    });
  }

  public onSubmit(): void {
    console.log(this.registerForm.value);
    if (this.registerForm.touched && this.registerForm.valid) {
      //  Make API call
      this.registerAccount();
    } else {
      console.log(this.registerForm.errors);
    }
  }

  public constructUserObject(): object {
    return {
      userEmail: this.registerForm.controls.email.value,
      firstName: this.registerForm.controls.firstName.value,
      lastName: this.registerForm.controls.lastName.value,
      gender: this.registerForm.controls.gender.value,
    };
  }

  public constructUserAuthObject(): object {
    return {
      userEmail: this.registerForm.controls.email.value,
      userPassword: this.registerForm.controls.password.value,
    };
  }

  /* Register user */
  public registerAccount(): void {
    const baseUrl: string = environment.baseUrl;
    const restUrl: string = `${environment.auth.restUrl} ${environment.auth.actionUrl.registerUrl}`;
    let userAuthObject = this.constructUserAuthObject();

    this.registerService
      .postDataApi(baseUrl, restUrl, userAuthObject)
      .subscribe(
        (data) => {
          if (data) {
            this.saveUser();
          }
        },
        (httpErrorResponse: HttpErrorResponse) => {
          console.error(httpErrorResponse);
        }
      );
  }

  /* Create user */
  public saveUser(): void {
    const baseUrl: string = environment.baseUrl;
    const restUrl: string = `${environment.users.restUrl} ${environment.auth.actionUrl.registerUrl}`
    let userObject = this.constructUserObject();

    this.saveUserService.postDataApi(baseUrl, restUrl, userObject).subscribe(
      (response) => {
        console.log(response);
      },
      (httpErrorResponse: HttpErrorResponse) => {
        console.log(httpErrorResponse);
        
      }
    );
  }
}
