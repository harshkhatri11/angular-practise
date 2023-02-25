import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { StepperOrientation } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [],
  imports: [
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    // MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    // MatTreeModule,
    MatSnackBarModule,
    MatSortModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    // MatSidenavModule,
    // MatChipsModule,
    // MatPaginatorModule,
    // MatMenuModule,
    // MatButtonToggleModule,
    // MatDialogModule,
    MatTableModule,
    MatBadgeModule,
    MatTabsModule,
    MatRadioModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTooltipModule,
    // MatListModule,
    MatSlideToggleModule,
    //NgxMatNativeDateModule,
    //NgxMatDatetimePickerModule,
    //NgxMatTimepickerModule,
    //MatSliderModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatPaginatorModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  exports: [
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    // MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    // MatTreeModule,
    MatSnackBarModule,
    MatSortModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    // MatSidenavModule,
    // MatChipsModule,
    // MatPaginatorModule,
    // MatMenuModule,
    // MatButtonToggleModule,
    // MatDialogModule,
    MatTableModule,
    MatBadgeModule,
    MatTabsModule,
    MatRadioModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTooltipModule,
    // MatListModule,
    MatSlideToggleModule,
    //NgxMatNativeDateModule,
    //NgxMatDatetimePickerModule,
    //NgxMatTimepickerModule,
    //MatSliderModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatPaginatorModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,useValue: { color: 'primary' }},{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]
})
export class MateriaModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: MateriaModule,
    };
  }
}
