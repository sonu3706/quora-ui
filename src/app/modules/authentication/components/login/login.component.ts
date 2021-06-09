import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RestService } from '../../../../services/utilities/rest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({});

  constructor(private loginService: RestService<any>, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {}

  public createForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    });
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form valid');
    } else {
      console.log(this.loginForm.errors);
    }
  }

  public constructLoginObject(): object {
    return {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
    };
  }

  private loginAccount(): void {
    const baseUrl: string = '';
    const restUrl: string = '';
    let loginObject = this.constructLoginObject();

    this.loginService.postDataApi(baseUrl, restUrl, loginObject).subscribe(
      (data: any) => {
        if (data) {
          this.router
            .navigate(['/home/dashboard'])
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error occurred while making login API call ', error);
      }
    );
  }
}
