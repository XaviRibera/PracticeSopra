import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterButtonComponent } from './filter-button.component';

fdescribe('FilterButtonComponent', () => {
  let component: FilterButtonComponent;
  let fixture: ComponentFixture<FilterButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterButtonComponent],
    });
    fixture = TestBed.createComponent(FilterButtonComponent);
    component = fixture.componentInstance;
    component.filterType = 'filterMock';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should activate his own filter if it is selected', () => {
    component.changeFilter.subscribe((filterToSet: string) =>
      expect(filterToSet).toBe('filterMock')
    );
    component.onChangeFilter();
  });

  it('should set reset filter if it is selected', () => {
    component.isPicked = true;
    component.changeFilter.subscribe((filterToSet: string) =>
      expect(filterToSet).toBe('reset')
    );
    component.onChangeFilter();
  });
});
