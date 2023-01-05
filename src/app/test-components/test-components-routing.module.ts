import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../auth-guard.guard';
import { ChartTemplateTestComponent } from './chart-template-test/chart-template-test.component';
import { DashboardTemplateTestComponent } from './dashboard-template-test/dashboard-template-test.component';
import { DatasharingTemplateTestComponent } from './datasharing-template-test/datasharing-template-test.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { FormTemplateTestComponent } from './form-template-test/form-template-test.component';
import { TableTemplateTestComponent } from './table-template-test/table-template-test.component';

const routes: Routes = [
  { path: 'chart-test', component: ChartTemplateTestComponent },
  {
    path: 'dashboard-test',
    component: DashboardTemplateTestComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'datasharing-test', component: DatasharingTemplateTestComponent },
  { path: 'form-test', component: FormTemplateTestComponent },
  { path: 'table-test', component: TableTemplateTestComponent },
  { path: 'directives', component: DirectivesExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestComponentsRoutingModule {}
