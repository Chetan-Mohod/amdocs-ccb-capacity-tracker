import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ExtraComponent } from './components/extra/extra.component';
import { AddWorkTypeComponent } from './components/add-work-type/add-work-type.component';
import { OnshoreManagementComponent } from './components/onshore-management/onshore-management.component';
import { OffshoreManagementComponent } from './components/offshore-management/offshore-management.component';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component';

const routes: Routes = [
  { path: '',   
    component:ManagerDashboardComponent,   
    children:[
      { path: 'home', component: HomeComponent },
      { path: 'extra', component: ExtraComponent },
      { path: 'add-work-type', component: AddWorkTypeComponent },
      { path: 'onshore-management', component: OnshoreManagementComponent },
      { path: 'offshore-management', component: OffshoreManagementComponent },
      { path: 'application-details', component: ApplicationDetailsComponent },
      { path: '', redirectTo: '/manager/home', pathMatch: 'full' },
    ]},  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
