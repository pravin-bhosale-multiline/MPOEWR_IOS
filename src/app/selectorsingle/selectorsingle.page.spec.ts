import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectorsinglePage } from './selectorsingle.page';

describe('SelectorsinglePage', () => {
  let component: SelectorsinglePage;
  let fixture: ComponentFixture<SelectorsinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorsinglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectorsinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
