import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: 'todo-list', component: TodolistComponent,title:'TO DO List' },
  { path: 'ems', component: EmployeeManagementComponent,title:'EMS' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationsComponentsRoutingModule {}
