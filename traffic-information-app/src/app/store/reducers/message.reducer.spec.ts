import { reducer, initialState } from './message.reducer';

import * as messageActions from '@store/actions/message.actions';

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

});
