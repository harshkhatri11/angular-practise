import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponentsRoutingModule } from './applications-components-routing.module';
import { TodolistComponent } from './todolist/todolist.component';

//:::::SharedModule::::::::::://
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [TodolistComponent],
  imports: [CommonModule, ApplicationsComponentsRoutingModule, SharedModule],
})
export class ApplicationsComponentsModule {}
