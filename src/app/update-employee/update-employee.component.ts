import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../utility/Employee';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  @Input()
  parentObj: Employee = <Employee>{};
  @Input()
  eId!: number;
  allCountry: any[] = [];
  issubmitDissabled: boolean = true;
  backendResponse: string = '';

  constructor(private service: HttpService) {}
  ngOnInit(): void {
    this.getAllCountry();
  }

  getAllCountry() {
    this.service.getData().subscribe((response: any) => {
      this.allCountry = response;
    });
  }

  onUpdate() {
    this.parentObj.updatedBy = sessionStorage.getItem('username');
    this.parentObj.createdBy = sessionStorage.getItem('username');
    this.service
      .updateRecord(this.parentObj, this.eId)
      .subscribe((response) => {
        this.issubmitDissabled = false;
        this.backendResponse = response;
      });
  }
}
