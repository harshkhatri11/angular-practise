import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonServerComponentsRoutingModule } from './json-server-components-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CrudComponent } from './crud/crud.component';
import { CrudDialogComponent } from './crud-dialog/crud-dialog.component';

//:::::SharedModule::::::::::://
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    CrudComponent,
    CrudDialogComponent,
  ],
  imports: [CommonModule, JsonServerComponentsRoutingModule, SharedModule],
})
export class JsonServerComponentsModule {}
