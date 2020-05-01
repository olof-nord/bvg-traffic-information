import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbDateStruct, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

import { State } from '@app/store/reducers';
import * as dateActions from '@store/actions/date.actions';

import { selectDate } from '@store/selectors/date.selectors';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent implements OnInit, OnDestroy {

  selectedDate$: Observable<string>;

  currentDate: NgbDateStruct;
  faCalendarAlt = faCalendarAlt;

  private subscriptions: Subscription = new Subscription();

  constructor(private ngbDateParserFormatter: NgbDateParserFormatter,
              private store$: Store<State>) {}

  ngOnInit(): void {
    this.selectedDate$ = this.store$.pipe(select(selectDate));

    this.subscriptions.add(this.selectedDate$.subscribe((date: string) => {
      this.currentDate = this.ngbDateParserFormatter.parse(date);
    }));
  }

  onDateSelect(date: NgbDate): void {
    if (this.currentDate) {
      this.currentDate = date;

      const dateToString = this.ngbDateParserFormatter.format(this.currentDate);
      this.store$.dispatch(dateActions.setDate({ date: dateToString }));
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
