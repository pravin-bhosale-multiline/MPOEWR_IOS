import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnplannedvisitPage } from './unplannedvisit.page';

describe('UnplannedvisitPage', () => {
  let component: UnplannedvisitPage;
  let fixture: ComponentFixture<UnplannedvisitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnplannedvisitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnplannedvisitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
