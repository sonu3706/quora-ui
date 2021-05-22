import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../../material/material.module";
import {SharedModule} from "../../../shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ReactiveFormsModule, FormsModule, MaterialModule, SharedModule, BrowserAnimationsModule, BrowserModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[Email Check] - Should check email address is valid', () => {
    let emailControl = component.registerForm.controls.email;
    emailControl.setValue('chandanmishra3706@gmail.com');
    expect(emailControl.valid).toBeTruthy();
    expect(emailControl.errors).toBeNull();
  });
});
