import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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

  it('[First Name]- First name is required', () => {
    let firstNameControl = registerComponent.registerForm.controls.firstName;
    firstNameControl.setValue('Alex');
    expect(firstNameControl.valid).toBeTruthy();
    expect(firstNameControl.errors).toBeNull();
    expect(firstNameControl.value).toBe('Alex');
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

  it('[Gender is required] - Gender is required', () => {});
  it('[Password] - Password is required', () => {});
  it('[Password Min Length] - Should be 8 chars', () => {});
  it('[Password Max Length] - Should be 20 chars', () => {});
  it('[Confirm Password] - Confirm password is required', () => {});
  it('[Password and Confirm password] - Password and confirm password should match', () => {});
});
