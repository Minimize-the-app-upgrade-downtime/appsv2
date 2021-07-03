import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddofficeComponent } from './addoffice/addoffice.component'
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewOfficeComponent }  from './view-office/view-office.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import {  PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddepfComponent } from './addepf/addepf.component';
import { ViewEpfComponent  } from './view-epf/view-epf.component';

const routes: Routes = [
 
  { path:'add-office',component: AddofficeComponent},
  {path: 'add-employee', component: AddemployeeComponent},
  {path: 'add-epf',component: AddepfComponent},
  {path: 'view-office', component: ViewOfficeComponent},
  {path: 'view-employee', component: ViewEmployeeComponent },
  {path: 'view-epf',component:ViewEpfComponent},
  {path: '',component:AddofficeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
