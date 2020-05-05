import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '@environments/environment';

import * as fromRouter from '@ngrx/router-store';
import * as fromMessage from './message.reducer';
import * as fromDate from './date.reducer';

export interface State {
  router: fromRouter.RouterReducerState<any>;
  messages: fromMessage.State;
  date: fromDate.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  messages: fromMessage.reducer,
  date: fromDate.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
