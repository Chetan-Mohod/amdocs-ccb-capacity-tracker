import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './components/home/home.component';
import { AgGridModule } from 'ag-grid-angular';
import { ExtraComponent } from './components/extra/extra.component';
import { MyCellComponent } from './components/my-cell/my-cell.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddWorkTypeComponent } from './components/add-work-type/add-work-type.component';
import { OnshoreManagementComponent } from './components/onshore-management/onshore-management.component';
import { OffshoreManagementComponent } from './components/offshore-management/offshore-management.component';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component';
@NgModule({
  declarations: [
    ManagerDashboardComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    HomeComponent,
    ExtraComponent,
    MyCellComponent,
    OnshoreManagementComponent,
    OffshoreManagementComponent,
    ApplicationDetailsComponent, 
    AddWorkTypeComponent,       
  ],
  imports: [  
    CommonModule,  
    ManagerRoutingModule,
    AgGridModule,    
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    MatDialogModule, 
    ReactiveFormsModule,   
   ],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [ ManagerDashboardComponent ],  
})
export class ManagerModule { }
