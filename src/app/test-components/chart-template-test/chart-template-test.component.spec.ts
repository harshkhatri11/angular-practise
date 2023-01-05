import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTemplateTestComponent } from './chart-template-test.component';

describe('ChartTemplateTestComponent', () => {
  let component: ChartTemplateTestComponent;
  let fixture: ComponentFixture<ChartTemplateTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTemplateTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartTemplateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
