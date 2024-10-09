import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Employee } from '../utility/Employee';
import { HttpService } from '../http.service';
import { DialogService } from '../dialog.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  empData: any[] = [];
  isRadioClick: boolean = false;
  modalRef!: BsModalRef;
  eid!: number;
  empObj: Employee = <Employee>{};
  nameSearch: string = '';
  p: number = 1;

  config = {
    animated: true,
    ignoreBackdropClick: true,
    class: 'alert alert-danger',
  };

  constructor(
    private http: HttpService,
    private modalservice: BsModalService,
    private dialogService: DialogService,
    private toaster: ToastrService,
    private title: Title
  ) {}
  ngOnInit(): void {
    this.getAllEmployee();
    this.title.setTitle('Dashboard | project');
  }

  getAllEmployee() {
    this.http.getAllEmployee().subscribe((response: any) => {
      console.log(response);
      this.empData = response;
    });
  }

  onRadio(item: any) {
    this.isRadioClick = true;
    this.empObj = item;
    this.eid = item.eid;
  }
  onUpdate(popup: TemplateRef<any>) {
    if (this.isRadioClick) {
      this.modalRef = this.modalservice.show(popup, this.config);
    } else {
      this.toaster.warning('Please Select the Record to be Updatted');
    }
    this.isRadioClick = false;
  }
  onDelete() {
    if (this.isRadioClick) {
      this.dialogService
        .OpenConfirmDialog('Are you sure to delete this record?')
        .afterClosed()
        .subscribe((result) => {
          console.log(result);
          if (result) {
            //delete a record
            this.http.deletRecord(this.eid).subscribe((respose) => {
              console.log(respose);
              this.toaster.success('Deleted Successfully!!! ');
              this.getAllEmployee();
            });
          } else {
            this.toaster.warning('Record is not deleted...');
          }
          this.isRadioClick = false;
          this.getAllEmployee();
        });
    } else {
      this.toaster.warning('Please Select the Record to delete');
    }
  }
  statusChange() {
    if (this.isRadioClick) {
      this.http.statusChange(this.eid).subscribe((response) => {
        console.log(response);

        this.toaster.success(response);
        this.getAllEmployee();
        this.isRadioClick = false;
      });
    } else {
      this.toaster.warning('Please Select the Record to change status!!!');
    }
  }
}
