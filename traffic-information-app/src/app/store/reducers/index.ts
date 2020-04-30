import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '@environments/environment';

import * as fromMessage from './message.reducer';
import * as fromDate from './date.reducer';

export interface State {
  messages: fromMessage.State;
  date: fromDate.State;
}

export const reducers: ActionReducerMap<State> = {
  messages: fromMessage.reducer,
  date: fromDate.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
