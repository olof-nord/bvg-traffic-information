import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromMessages from '@store/reducers/message.reducer';

export const selectMessagesState = createFeatureSelector<fromMessages.State>('messages');

export const selectMessagesLoading = createSelector(
  selectMessagesState,
  state => state.isLoading
);

export const selectMessages = createSelector(
  selectMessagesState,
  state => state.messages
);

export const selectMessagesError = createSelector(
  selectMessagesState,
  state => state.error
);
