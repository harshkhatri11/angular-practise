import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTemplateTestComponent } from './form-template-test/form-template-test.component';
import { TableTemplateTestComponent } from './table-template-test/table-template-test.component';
import { ChartTemplateTestComponent } from './chart-template-test/chart-template-test.component';
import { DashboardTemplateTestComponent } from './dashboard-template-test/dashboard-template-test.component';
import { DatasharingTemplateTestComponent } from './datasharing-template-test/datasharing-template-test.component';
import { ChildComponent } from './child/child.component';
import { TestComponentsRoutingModule } from './test-components-routing.module';

//:::::Shared module:::::::::::://
import { SharedModule } from '../shared.module';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';

@NgModule({
  declarations: [
    FormTemplateTestComponent,
    TableTemplateTestComponent,
    ChartTemplateTestComponent,
    DashboardTemplateTestComponent,
    DatasharingTemplateTestComponent,
    ChildComponent,
    DirectivesExampleComponent,
  ],
  imports: [CommonModule, TestComponentsRoutingModule, SharedModule],
})
export class TestComponentsModule {}
