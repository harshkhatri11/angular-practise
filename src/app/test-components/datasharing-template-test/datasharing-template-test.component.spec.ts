import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasharingTemplateTestComponent } from './datasharing-template-test.component';

describe('DatasharingTemplateTestComponent', () => {
  let component: DatasharingTemplateTestComponent;
  let fixture: ComponentFixture<DatasharingTemplateTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasharingTemplateTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatasharingTemplateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
