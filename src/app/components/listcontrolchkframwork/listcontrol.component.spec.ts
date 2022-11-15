import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListcontrolComponentChk } from './listcontrolchk.component';

describe('ListcontrolComponent', () => {
  let component: ListcontrolComponentChk;
  let fixture: ComponentFixture<ListcontrolComponentChk>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcontrolComponentChk ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListcontrolComponentChk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
