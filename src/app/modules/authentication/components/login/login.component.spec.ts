import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../../material/material.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        BrowserAnimationsModule,
        MaterialModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('LoginComponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('[Email Valid] - Email should be valid', () => {
    let emailControl = component.loginForm.controls.email;
    emailControl.setValue('abc@abc.com');
    expect(emailControl.value).toBe('abc@abc.com');
    expect(emailControl.valid).toBeTrue();
    expect(emailControl.errors).toBeNull();
    expect(emailControl.hasError('email')).toBeFalse();
  });

  it('[Email Invalid] - Email should be Invalid', () => {
    let emailControl = component.loginForm.controls.email;
    emailControl.setValue('abc');
    expect(emailControl.value).toBe('abc');
    expect(emailControl.valid).toBeFalse();
    expect(emailControl.hasError('email')).toBeTrue();
  });

  it('[Email Required] - Email should be required should pass', () => {
    let emailControl = component.loginForm.controls.email;
    emailControl.setValue('abc@abc.com');
    expect(emailControl.value).toBe('abc@abc.com');
    expect(emailControl.valid).toBeTrue();
    expect(emailControl.hasError('required')).toBeFalse();
  });

  it('[Email Required Fail] - Email should be required should fail', () => {
    let emailControl = component.loginForm.controls.email;
    emailControl.setValue('');
    expect(emailControl.invalid).toBeTrue();
    expect(emailControl.hasError('required')).toBeTrue();
  });
});
