import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionCardComponent } from './description-card.component';

describe('DescriptionCardComponent', () => {
  let component: DescriptionCardComponent;
  let fixture: ComponentFixture<DescriptionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionCardComponent]
    });
    fixture = TestBed.createComponent(DescriptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
