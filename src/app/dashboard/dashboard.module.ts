import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { RegistrationComponent } from '../registration/registration.component';
import { FirstpageComponent } from '../firstpage/firstpage.component';
import { DetailsComponent } from '../details/details.component';
import { AddcomponentComponent } from '../addcomponent/addcomponent.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    HomeComponent,

    HeaderComponent,
    RegistrationComponent,

    DetailsComponent,
    AddcomponentComponent,
    UpdateEmployeeComponent,
    MatConfirmDialogComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MaterialModule,
    NgxPaginationModule,
  ],
})
export class DashboardModule {}
