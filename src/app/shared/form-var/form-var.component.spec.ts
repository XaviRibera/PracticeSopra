import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVarComponent } from './form-var.component';

describe('FormVarComponent', () => {
  let component: FormVarComponent;
  let fixture: ComponentFixture<FormVarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    fixture = TestBed.createComponent(FormVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
