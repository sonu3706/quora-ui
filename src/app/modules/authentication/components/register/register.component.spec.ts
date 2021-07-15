import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

describe('RegisterComponent', () => {
  let registerComponent: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
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
        RouterTestingModule
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    registerComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(registerComponent).toBeTruthy();
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

  it('[Email is required failure] - Should check email address is required',  () => {
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

  it('[Password] - Password is required', () => {
    let passwordControl = registerComponent.registerForm.controls.password;
    passwordControl.setValue('123456789');
    expect(passwordControl.valid).toBeTruthy();
    expect(passwordControl.errors).toBeNull();
    expect(passwordControl.value).toBe('123456789');
  });

  it('[Password Min Length] - Should be 8 chars', () => {
    let passwordControl = registerComponent.registerForm.controls.password;
    passwordControl.setValue('123456789');
    expect(passwordControl.value.toString().length).toBeGreaterThanOrEqual(8);
  });

  it('[Password Max Length] - Should be 20 chars', () => {});

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
});
