import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { DateSelectorComponent } from './date-selector.component';

describe('TimeSelectorComponent', () => {
  let component: DateSelectorComponent;
  let fixture: ComponentFixture<DateSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        FontAwesomeModule,
        NgbDatepickerModule
      ],
      declarations: [
        DateSelectorComponent
      ]
    });

    fixture = TestBed.createComponent(DateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should contain the three elements', () => {
    expect(fixture.nativeElement.querySelectorAll('.btn').length)
      .toEqual(1);
  });
});
