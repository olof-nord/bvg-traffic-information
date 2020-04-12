import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '@environments/environment';
import * as fromMessage from './message.reducer';

export interface State {
  messages: fromMessage.State;
}

export const reducers: ActionReducerMap<State> = {
  messages: fromMessage.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
