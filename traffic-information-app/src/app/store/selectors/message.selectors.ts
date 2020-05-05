import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as moment from 'moment';

import * as fromMessages from '@store/reducers/message.reducer';
import * as fromRouter from '@ngrx/router-store';

import { Message } from '@api/models';

import { undergroundLines } from '@config/bvg/underground-lines';
import { tramLines } from '@config/bvg/tram-lines';
import { busLines } from '@config/bvg/bus-lines';
import { ferryLines } from '@config/bvg/ferry-lines';

export const selectRouterState = createFeatureSelector<fromRouter.RouterReducerState>('router');
export const selectMessagesState = createFeatureSelector<fromMessages.State>('messages');

// See https://ngrx.io/guide/router-store/selectors
export const {
  selectRouteParam
} = fromRouter.getSelectors(selectRouterState);

export const selectMessagesLoading = createSelector(
  selectMessagesState,
  state => state.isLoading
);

export const selectMessages = createSelector(
  selectMessagesState,
  state => state.messages
);

export const selectMessageById = (id: string) => createSelector(
  selectMessages,
  messages => messages.find(message => message.meldungsId === id)
);

export const selectMessageByCurrentId =  createSelector(
  selectMessages,
  selectRouteParam('id'),
  (messages, id) => messages.find(message => message.meldungsId === id)
);

export const selectUndergroundMessages = createSelector(
  selectMessages,
  messages => messages.filter(message => undergroundLines.map(entry => entry.line)
    .includes(message.linie))
);

export const selectTramMessages = createSelector(
  selectMessages,
  messages => messages.filter(message => tramLines.includes(message.linie))
);

export const selectBusMessages = createSelector(
  selectMessages,
  messages => messages.filter(message => busLines.includes(message.linie))
);

export const selectFerryMessages = createSelector(
  selectMessages,
  messages => messages.filter(message => ferryLines.includes(message.linie))
);

export const selectMessagesForLine = (line: string) => createSelector(
  selectMessages,
  messages => messages.filter(message => message.linie === line)
);

export const selectMostRecentValidMessageForLineAndDate = (line: string, date: string) => createSelector(
  selectUnorderedValidMessagesForLineAndDate(line, date),
  messages => messages.sort((message1, message2) =>
    orderByFromDate(message1, message2))[0]
);

export const selectValidMessagesForLineAndDate = (line: string, date: string) => createSelector(
  selectUnorderedValidMessagesForLineAndDate(line, date),
  messages => messages.sort((message1, message2) =>
    orderByFromDate(message1, message2))
);

export const selectAllValidMessagesForDate = (date: string) => createSelector(
  selectMessages,
  messages => messages.filter(message => isMessageBetweenFilter(date, message))
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

const selectUnorderedValidMessagesForLineAndDate = (line: string, date: string) => createSelector(
  selectMessagesForLine(line),
  messages => messages.filter(message => isMessageBetweenFilter(date, message))
);

const orderByFromDate = (message1: Message, message2: Message): number => {
  if (moment(message1.gueltigVonDatum).isBefore(message2.gueltigVonDatum)) {
    return 1;
  } else if (moment(message1.gueltigVonDatum).isAfter(message2.gueltigVonDatum)) {
    return -1;
  } else {
    return 0;
  }
};

export const selectMessagesError = createSelector(
  selectMessagesState,
  state => state.error
);
