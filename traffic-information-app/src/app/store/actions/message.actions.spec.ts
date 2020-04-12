import * as fromMessage from './message.actions';

describe('loadMessages', () => {
  it('should return an action', () => {
    expect(fromMessage.loadMessages({}).type).toBe('[Message] Load Messages');
  });
});
