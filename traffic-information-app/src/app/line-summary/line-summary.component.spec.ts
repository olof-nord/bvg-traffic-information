import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { metaReducers, reducers } from '@app/store/reducers';

import { LineSummaryComponent } from './line-summary.component';

describe('LineSummaryComponent', () => {
  let component: LineSummaryComponent;
  let fixture: ComponentFixture<LineSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, { metaReducers })
      ],
      declarations: [
        LineSummaryComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
