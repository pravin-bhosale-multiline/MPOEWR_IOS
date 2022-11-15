import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportcategoryPage } from './reportcategory.page';

describe('ReportcategoryPage', () => {
  let component: ReportcategoryPage;
  let fixture: ComponentFixture<ReportcategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportcategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportcategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
