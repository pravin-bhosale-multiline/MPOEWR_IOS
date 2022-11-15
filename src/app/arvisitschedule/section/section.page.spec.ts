import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SectionPage } from './section.page';

describe('SectionPage', () => {
  let component: SectionPage;
  let fixture: ComponentFixture<SectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
