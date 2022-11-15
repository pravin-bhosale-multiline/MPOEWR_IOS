import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditTravelExpensePage } from './addedit-travel-expense.page';

describe('AddeditTravelExpensePage', () => {
  let component: AddeditTravelExpensePage;
  let fixture: ComponentFixture<AddeditTravelExpensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditTravelExpensePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditTravelExpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
