import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  credentials: any = {};

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.loginService
      .login({
        email: this.credentials.username,
        password: this.credentials.password,
      })
      .subscribe({
        complete: () => {
          this.router.navigate(['/home']);
        },
        error: (err) => {console.error(err)}
      });
  }
}
