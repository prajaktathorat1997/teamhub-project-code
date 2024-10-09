import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  incorrect: string = '';
  EMAIL_PATTERN =
    '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' +
    '[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
  constructor(
    private service: HttpService,
    private router: Router,
    private title: Title
  ) {}

  ngOnInit(): void {
    document.body.className = 'bg_background';
    this.title.setTitle('Login | ProjectWork');
  }
  onSubmit(f: NgForm) {
    let obj = {
      gmailId: f.value.emailid,
      password: f.value.password,
    };
    this.service.login(obj).subscribe(
      (response: any) => {
        console.log(response);
        console.log(response.msg);
        if (response.msg == 'invalid user') {
          console.log('hello');
          this.incorrect = response.msg;
        } else {
          sessionStorage.setItem('username', response.user.name);
          this.router.navigate(['home']);
        }
      }
      // ,
      // (error) => {
      //   if (error.status == 401) {
      //     this.incorrect = 'invalid user';
      //   }
      // }
    );
  }
  ngOnDestroy(): void {
    document.body.className = '';
  }
}
