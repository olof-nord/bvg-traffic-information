import { reducer, initialState } from './message.reducer';

import * as messageActions from '@store/actions/message.actions';
import { Message } from '@api/models/message';

describe('Message Reducer', () => {
  it('an unknown action should return the previous state', () => {
    const action = {} as any;
    const state = reducer(initialState, action);

    expect(state).toBe(initialState);
  });

  it('loadMessages action should set loading to true', () => {
    const state = reducer(initialState, messageActions.loadMessages);

    expect(state.isLoading).toEqual(true);
    expect(state.messages).toEqual([]);
    expect(state.error).toEqual(null);
  });

  it('loadMessagesFailure action should set the error message', () => {
    const state = reducer(initialState, messageActions.loadMessagesFailure({ error: 'Could not fetch BVG traffic information' }));

    expect(state.isLoading).toEqual(false);
    expect(state.messages).toEqual([]);
    expect(state.error).toEqual('Could not fetch BVG traffic information');
  });

  it('loadMessagesSuccess action should return the messages', () => {
    const message: Message = {
      meldungsId: 'BVG174260',
      grundFahrplanabweichung: 0,
      prioritaet: 0,
      type: 0,
      verkehrsmittel: 0
    };
    const state = reducer(initialState, messageActions.loadMessagesSuccess({ messages: [message] }));

    expect(state.isLoading).toEqual(false);
    expect(state.messages).toEqual([message]);
    expect(state.error).toEqual(null);
  });


});
