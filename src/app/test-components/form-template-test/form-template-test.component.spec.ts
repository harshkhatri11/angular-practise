import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateTestComponent } from './form-template-test.component';

describe('FormTemplateTestComponent', () => {
  let component: FormTemplateTestComponent;
  let fixture: ComponentFixture<FormTemplateTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTemplateTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTemplateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
