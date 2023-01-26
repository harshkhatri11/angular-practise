import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent,title:'Login' },
  { path: 'signup', component: SignupComponent,title:'Signup' },
  { path: 'crud', component: CrudComponent,title:'CRUD' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonServerComponentsRoutingModule {}
