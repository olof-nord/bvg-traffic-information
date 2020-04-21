import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { DateSelectorComponent } from './date-selector.component';

describe('TimeSelectorComponent', () => {
  let component: DateSelectorComponent;
  let fixture: ComponentFixture<DateSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
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
      .toEqual(3);
  });
});
