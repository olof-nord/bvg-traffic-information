import { createReducer, on } from '@ngrx/store';
import * as moment from 'moment';

import * as dateActions from '@store/actions/date.actions';

export const dateFeatureKey = 'date';

export interface State {
  date: string;
}

export const initialState: State = {
  date: moment().format('YYYY-MM-DD')
};

export const reducer = createReducer(
  initialState,

  on(dateActions.loadDate, (state: State) => {
    return {
      ...state
    };
  }),

  on(dateActions.loadDateSuccess, (state: State, { date}) => {
    return {
      ...state,
      date
    };
  }),

  on(dateActions.setDate, (state: State, { date}) => {
    return {
      ...state,
      date
    };
  }),

  on(dateActions.setDateSuccess, (state: State, { date}) => {
    return {
      ...state,
      date
    };
  })


);

