import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "../http.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(private route: Router, private service: HttpService) {}

  onSubmit(f: NgForm) {
    let obj = {
      gmailId: f.value.gmailId,
      password: f.value.password,
      name: f.value.name,
      gender: f.value.gender,
    };
    this.service.register(obj).subscribe(
      (response) => {
        // Handle the successful response
        console.log('Registration successful:', response);
        this.route.navigate(['/home']);
      },
      (error) => {
        // Handle the error response
        console.error('Registration error:', error);
      }
    );
  }
}
