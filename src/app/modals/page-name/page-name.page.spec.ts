import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNamePage } from './page-name.page';

describe('PageNamePage', () => {
  let component: PageNamePage;
  let fixture: ComponentFixture<PageNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
