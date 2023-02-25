import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponentsRoutingModule } from './applications-components-routing.module';
import { TodolistComponent } from './todolist/todolist.component';

//:::::SharedModule::::::::::://
import { SharedModule } from '../shared.module';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';

@NgModule({
  declarations: [TodolistComponent, EmployeeManagementComponent],
  imports: [CommonModule, ApplicationsComponentsRoutingModule, SharedModule],
})
export class ApplicationsComponentsModule {}
