import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvisitschedulePage } from './arvisitschedule.page';

describe('ArvisitschedulePage', () => {
  let component: ArvisitschedulePage;
  let fixture: ComponentFixture<ArvisitschedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArvisitschedulePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArvisitschedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
