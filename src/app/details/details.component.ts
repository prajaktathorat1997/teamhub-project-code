import { Component, OnInit, TemplateRef } from '@angular/core';
import { Employee } from '../utility/Employee';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  empObj: Employee = <Employee>{};
  eid!: number;
  modalRef!: BsModalRef;
  config = {
    animated: true,
    ignoreBackdropClick: true,
    class: 'alert alert-danger',
  };
  constructor(
    private route: ActivatedRoute,
    private modalservice: BsModalService,
    private service: HttpService
  ) {}
  ngOnInit(): void {
    this.getId();
  }
  getId() {
    this.route.paramMap.subscribe((param) => {
      this.eid = Number(param.get('id'));
      this.service
        .getEmployeeById(param.get('id'))
        .subscribe((response: any) => {
          this.empObj = response;
          console.log(this.empObj);
        });
    });
  }

  onUpdate(popup: TemplateRef<any>) {
    this.modalRef = this.modalservice.show(popup, this.config);
  }
}
