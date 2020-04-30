import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from '@app/store/reducers';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DateSelectorComponent } from './date-selector.component';

describe('TimeSelectorComponent', () => {
  let component: DateSelectorComponent;
  let fixture: ComponentFixture<DateSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        FontAwesomeModule,
        NgbDatepickerModule,
        StoreModule.forRoot(reducers, { metaReducers })
      ],
      declarations: [
        DateSelectorComponent
      ]
    });

    fixture = TestBed.createComponent(DateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should contain the datepicker', () => {
    expect(fixture.nativeElement.querySelectorAll('.bvg-select-date').length)
      .toEqual(1);
  });
});
