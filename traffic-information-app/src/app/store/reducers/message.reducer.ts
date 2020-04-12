import { createReducer, on } from '@ngrx/store';
import { Message } from '@api/models';

export const messageFeatureKey = 'message';
import * as messageActions from '@store/actions/message.actions';

export interface State {
  messages: Message[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  messages: [],
  isLoading: true,
  error: null
};

export const reducer = createReducer(
  initialState,

  on(messageActions.loadMessages, (state: State) => {
    return {
      ...state,
      isLoading: true
    };
  }),

  on(messageActions.loadMessagesSuccess, (state: State, { messages }) => {
    return {
      ...state,
      isLoading: false,
      messages
    };
  }),

  on(messageActions.loadMessagesFailure, (state: State, { error }) => {
    return {
      ...state,
      isLoading: false,
      error
    };
  })

);
