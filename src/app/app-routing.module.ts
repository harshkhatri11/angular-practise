import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  //Lazy loading test-components
  {
    path: 'test',
    loadChildren: () =>
      import('./test-components/test-components.module').then(
        (m) => m.TestComponentsModule
      ),
  },

  //Lazy loading json-server-components
  {
    path: 'json-server',
    loadChildren: () =>
      import('./json-server-components/json-server-components.module').then(
        (m) => m.JsonServerComponentsModule
      ),
  },

  //Lazy loading applications-components
  {
    path: 'applications',
    loadChildren: () =>
      import('./applications-components/applications-components.module').then(
        (m) => m.ApplicationsComponentsModule
      ),
  },

  // when your path is empty then if you want to redirect or load any component
  { path: '', redirectTo: 'test/form-test', pathMatch: 'full' },

  //Wild Card Route for 404 request
  {
    path: '**',
    pathMatch: 'full',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
