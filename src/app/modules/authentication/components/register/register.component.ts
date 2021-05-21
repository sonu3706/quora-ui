import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  genderControl = new FormControl('', [Validators.required]);
  constructor() {}

  ngOnInit(): void {
    this.formControlValueChange();
  }

  public formControlValueChange(): void {
    this.genderControl.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }
}
