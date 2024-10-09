import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { DetailsComponent } from './details/details.component';
import { AddcomponentComponent } from './addcomponent/addcomponent.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'first' },
  { path: 'first', component: FirstpageComponent },

  { path: 'login', component: LoginComponent },
  { path: 'reg', component: RegistrationComponent },
  {
    path: 'home',

    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
