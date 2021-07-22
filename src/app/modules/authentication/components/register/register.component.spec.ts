import {
  ComponentFixture,
  discardPeriodicTasks,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RestService } from '../../../../services/utilities/rest.service';
import { of } from 'rxjs';

describe('RegisterComponent', () => {
  let registerComponent: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let registerServiceSpy: RestService<any>;

  beforeEach(async () => {
    const registerSpyObject = jasmine.createSpyObj('RestService', [
      'postDataApi',
    ]);
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        SharedModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [{ provide: RestService, useValue: registerSpyObject }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    registerComponent = fixture.componentInstance;
    registerServiceSpy = TestBed.inject(RestService);
    fixture.detectChanges();
  });

  it('[Email Check] - Should check email address is valid', () => {
    let emailControl = registerComponent.registerForm.controls.email;
    emailControl.setValue('chandanmishra3706@gmail.com');
    expect(emailControl.valid).toBeTruthy();
    expect(emailControl.errors).toBeNull();
  });

  it('[Email valid check] - Should check email address is invalid', () => {
    let emailControl = registerComponent.registerForm.controls.email;
    emailControl.setValue('abc');
    expect(emailControl.invalid).toBeTrue();
    expect(emailControl.hasError('email')).toBeTruthy();
  });

  it('[Email is required success] - Should check email address is required', () => {
    let emailControl = registerComponent.registerForm.controls.email;
    emailControl.setValue('chandanmishra3706@gmail.com');
    expect(emailControl.valid).toBeTrue();
    expect(emailControl.value).toBe('chandanmishra3706@gmail.com');
  });

  it('[Email is required failure] - Should check email address is required', () => {
    let emailControl = registerComponent.registerForm.controls.email;
    emailControl.setValue('');
    expect(emailControl.invalid).toBeTrue();
    expect(emailControl.hasError('required')).toBeTrue();
  });

  it('[First Name is required Success]- First name is required', () => {
    let firstNameControl = registerComponent.registerForm.controls.firstName;
    firstNameControl.setValue('Alex');
    expect(firstNameControl.valid).toBeTruthy();
    expect(firstNameControl.errors).toBeNull();
    expect(firstNameControl.value).toBe('Alex');
  });

  it('[First Name is required Failure]- First name is required', () => {
    let firstNameControl = registerComponent.registerForm.controls.firstName;
    firstNameControl.setValue('');
    expect(firstNameControl.invalid).toBeTruthy();
    expect(firstNameControl.hasError('required')).toBeTrue();
  });

  it('[Last Name]- Last name is required', () => {
    let lastNameControl = registerComponent.registerForm.controls.lastName;
    lastNameControl.setValue('George');
    expect(lastNameControl.valid).toBeTruthy();
    expect(lastNameControl.errors).toBeNull();
    expect(lastNameControl.value).toBe('George');
  });

  it('[Last Name Missing] - LastName control should show error', () => {
    let lastNameControl = registerComponent.registerForm.controls.lastName;
    lastNameControl.setValue('');
    expect(lastNameControl.invalid).toBeTruthy();
    expect(lastNameControl.errors).not.toBeNull();
  });

  it('[Gender is required] - Gender is required', () => {
    let genderControl = registerComponent.registerForm.controls.gender;
    genderControl.setValue('MALE');
    expect(genderControl.valid).toBeTruthy();
    expect(genderControl.errors).toBeNull();
    expect(genderControl.value).toBe('MALE');
  });

  it('[Password Success] - Password is required', () => {
    let passwordControl = registerComponent.registerForm.controls.password;
    passwordControl.setValue('123456789');
    expect(passwordControl.valid).toBeTruthy();
    expect(passwordControl.errors).toBeNull();
    expect(passwordControl.value).toBe('123456789');
  });

  it('[Password Failure] - Password is required', () => {
    let passwordControl = registerComponent.registerForm.controls.password;
    passwordControl.setValue('');
    expect(passwordControl.invalid).toBeTruthy();
    expect(passwordControl.hasError('required')).toBeTrue();
  });

  it('[Password Min Length success] - Should be 8 chars', () => {
    let passwordControl = registerComponent.registerForm.controls.password;
    passwordControl.setValue('123456789');
    expect(passwordControl.value.toString().length).toBeGreaterThanOrEqual(8);
  });

  it('[Password Min Length failure] - Should be 8 chars', () => {
    let passwordControl = registerComponent.registerForm.controls.password;
    passwordControl.setValue('123456');
    expect(passwordControl.hasError('minlength')).toBeTrue();
  });

  it('[Password Max Length success] - Should be 20 chars', () => {
    let passwordControl = registerComponent.registerForm.controls.password;
    passwordControl.setValue('12345678912345678911');
    expect(passwordControl.value.toString().length).toBeLessThanOrEqual(20);
  });

  it('[Password Max Length failure] - Should be 20 chars', () => {
    let passwordControl = registerComponent.registerForm.controls.password;
    passwordControl.setValue('12345678912345678911222');
    expect(passwordControl.hasError('maxlength')).toBeTrue();
  });

  it('[Confirm Password] - Confirm password is required', () => {
    let confirmPasswordControl =
      registerComponent.registerForm.controls.confirmPassword;
    confirmPasswordControl.setValue('123456789');
    expect(confirmPasswordControl.valid).toBeTruthy();
    expect(confirmPasswordControl.errors).toBeNull();
    expect(confirmPasswordControl.value).toBe('123456789');
  });

  it('[Password and Confirm password] - Password and confirm password should match', () => {
    let passwordControl = registerComponent.registerForm.controls.password;
    passwordControl.setValue('123456789');
    let confirmPasswordControl =
      registerComponent.registerForm.controls.confirmPassword;
    confirmPasswordControl.setValue('123456789');
    expect(passwordControl.value).toBe(confirmPasswordControl.value);
  });

  it('[Register API Success] - Should register account and return', fakeAsync(() => {
    registerComponent.registerForm.controls.email.setValue('chandan@abc.com');
    registerComponent.registerForm.controls.password.setValue('12345678');

    // @ts-ignore
    registerServiceSpy.postDataApi.and.returnValue(of(true));
    registerComponent.registerAccount();

    expect(registerServiceSpy.postDataApi).toHaveBeenCalled();
    expect(registerServiceSpy.postDataApi).toHaveBeenCalledWith(
      'http://localhost:8082',
      '/api/v1/auth/register',
      getUserObject()
    );

    tick();
    flush();
    discardPeriodicTasks();
  }));
});

/* Private method to construct user object */
function getUserObject(): any {
  return { userEmail: 'chandan@abc.com', userPassword: '12345678' };
}
