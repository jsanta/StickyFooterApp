import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * Validates user and password (not really)
   * Actually it just navigates to the DashboardPage
  */
  doLogin() {
    console.log('doLogin()');
    this.router.navigate(['dashboard']);
  }

}
