import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Employee } from '../utility/Employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcomponent',
  templateUrl: './addcomponent.component.html',
  styleUrls: ['./addcomponent.component.css'],
})
export class AddcomponentComponent implements OnInit {
  constructor(private service: HttpService, private route: Router) {}
  empObj: Employee = <Employee>{};
  allCountry: any[] = [];

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.service.getData().subscribe((response: any) => {
      this.allCountry = response;
      console.log(this.allCountry);
    });
  }

  onSubmit(f: NgForm) {
    this.empObj.updatedBy = sessionStorage.getItem('username');
    this.empObj.createdBy = sessionStorage.getItem('username');
    this.service
      .addemp(this.empObj)
      .subscribe((response: any) => console.log(response));
    this.route.navigate(['/home']);
  }
}
