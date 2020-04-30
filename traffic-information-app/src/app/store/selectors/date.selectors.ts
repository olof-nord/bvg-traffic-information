import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDate from '@store/reducers/date.reducer';

export const selectDateState = createFeatureSelector<fromDate.State>('date');

export const selectDate = createSelector(
  selectDateState,
  state => state.date
);
