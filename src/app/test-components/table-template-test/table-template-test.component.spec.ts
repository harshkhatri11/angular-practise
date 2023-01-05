import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTemplateTestComponent } from './table-template-test.component';

describe('TableTemplateTestComponent', () => {
  let component: TableTemplateTestComponent;
  let fixture: ComponentFixture<TableTemplateTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTemplateTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTemplateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
