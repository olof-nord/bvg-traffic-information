import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as moment from 'moment';

import * as fromMessages from '@store/reducers/message.reducer';
import { Message } from '@api/models';

import { undergroundLines } from '@config/bvg/underground-lines';
import { tramLines } from '@config/bvg/tram-lines';
import { busLines } from '@config/bvg/bus-lines';
import { ferryLines } from '@config/bvg/ferry-lines';

export const selectMessagesState = createFeatureSelector<fromMessages.State>('messages');

export const selectMessagesLoading = createSelector(
  selectMessagesState,
  state => state.isLoading
);

export const selectAllMessages = createSelector(
  selectMessagesState,
  state => state.messages
);

export const selectUndergroundMessages = createSelector(
  selectMessagesState,
  state => state.messages.filter(message => undergroundLines.includes(message.linie))
);

export const selectTramMessages = createSelector(
  selectMessagesState,
  state => state.messages.filter(message => tramLines.includes(message.linie))
);

export const selectBusMessages = createSelector(
  selectMessagesState,
  state => state.messages.filter(message => busLines.includes(message.linie))
);

export const selectFerryMessages = createSelector(
  selectMessagesState,
  state => state.messages.filter(message => ferryLines.includes(message.linie))
);

export const selectMessagesForLine = (line: string) => createSelector(
  selectMessagesState,
  state => state.messages.filter(message => message.linie === line)
);

export const selectAllValidMessagesForDate = (date: string) => createSelector(
  selectMessagesState,
  state => state.messages.filter(message => isMessageBetweenFilter(date, message))
);

export const selectValidUndergroundMessagesForDate = (date: string) => createSelector(
  selectUndergroundMessages,
  messages => messages.filter(message => isMessageBetweenFilter(date, message))
);

export const selectValidTramMessagesForDate = (date: string) => createSelector(
  selectTramMessages,
  messages => messages.filter(message => isMessageBetweenFilter(date, message))
);

export const selectValidBusMessagesForDate = (date: string) => createSelector(
  selectBusMessages,
  messages => messages.filter(message => isMessageBetweenFilter(date, message))
);

export const selectValidFerryMessagesForDate = (date: string) => createSelector(
  selectFerryMessages,
  messages => messages.filter(message => isMessageBetweenFilter(date, message))
);

// See Moment.js isBetween description here:
// https://momentjs.com/docs/#/query/is-between/
const isMessageBetweenFilter = (date: string, message: Message) => {
  const includeBothStartAndEnd = '[]';
  return moment(date).isBetween(message.gueltigVonDatum, message?.gueltigBisDatum, 'day', includeBothStartAndEnd);
};

export const selectMessagesError = createSelector(
  selectMessagesState,
  state => state.error
);
