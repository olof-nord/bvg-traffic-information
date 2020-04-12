import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';

import { selectMessages, selectMessagesError, selectMessagesLoading } from '@store/selectors/message.selectors';
import { Message } from '@api/models';

describe('Message Selectors', () => {
  let mockStore: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore()
      ]
    });

    mockStore = TestBed.inject(MockStore);

  });

  it('should correctly select the message loading', () => {
    mockStore.overrideSelector(
      selectMessagesLoading,
      true
    );

    expect(mockStore.select(selectMessagesLoading)
      .subscribe(result => expect(result).toBe(true))
    );

  });

  it('should correctly select the message error', () => {
    mockStore.overrideSelector(
      selectMessagesError,
      'Could not fetch BVG traffic information'
    );

    expect(mockStore.select(selectMessagesError)
      .subscribe(result => expect(result).toBe('Could not fetch BVG traffic information'))
    );

  });

  it('should correctly select the return messages', () => {

    const message: Message = {
      meldungsId: 'BVG174260',
      grundFahrplanabweichung: 0,
      prioritaet: 0,
      type: 0,
      verkehrsmittel: 0
    };

    mockStore.overrideSelector(
      selectMessages,
      [message]
    );

    expect(mockStore.select(selectMessages)
      .subscribe(result => expect(result[0]).toBe(message))
    );

  });

});
