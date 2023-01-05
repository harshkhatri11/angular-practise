import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { HighlightDirective } from './shared/pipes/highlight.pipe';

//::::::::: To create chart :::::::::::::::://
import { NgChartsModule } from 'ng2-charts';

//:::::::::: Import our own Custom Material Module :::::::::://

import { MateriaModule } from './material.module';

//:::::::: Ng Select module ::::::::::::::::::://

import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [FilterPipe, HighlightDirective],
  imports: [
    CommonModule,
    NgChartsModule,
    NgSelectModule,
    MateriaModule,
    NgChartsModule,
  ],

  exports: [
    FilterPipe,
    HighlightDirective,
    NgChartsModule,
    NgSelectModule,
    MateriaModule,
    NgChartsModule,
  ],
})
export class SharedModule {}
