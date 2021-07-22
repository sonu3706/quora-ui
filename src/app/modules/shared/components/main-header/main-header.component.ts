import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/utilities/data.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  public isUserLoggedIn: boolean = false;
  constructor(public router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.isUserLoggedIn().subscribe((state: boolean) => {
      this.isUserLoggedIn = state;
    });
  }

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
