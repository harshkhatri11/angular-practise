import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTemplateTestComponent } from './dashboard-template-test.component';

describe('DashboardTemplateTestComponent', () => {
  let component: DashboardTemplateTestComponent;
  let fixture: ComponentFixture<DashboardTemplateTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTemplateTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTemplateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
