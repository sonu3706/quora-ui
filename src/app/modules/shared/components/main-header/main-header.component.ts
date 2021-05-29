import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  public navigateToRegister(): void {
    this.router.navigate(['/auth/register']).then((response) => {
      console.log('Navigated to Register page', response);
    });
  }

  public navigateToLogin(): void {
    this.router.navigate(['/auth/login']).then((response) => {
      console.log('Navigated to login page', response);
    });
  }
}
