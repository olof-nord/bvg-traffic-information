import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';

import {
  selectAllMessages,
  selectMessagesError,
  selectMessagesLoading,
  selectBusMessages,
  selectTramMessages,
  selectUndergroundMessages
} from '@store/selectors/message.selectors';
import { Message } from '@api/models';

describe('Message Selectors', () => {
  let mockStore: MockStore;

  const busMessage: Message = {
    meldungsId: 'BVG254600',
    datum: '2020-01-10T12:45:10',
    type: 0,
    verkehrsmittel: 1,
    linie: '255',
    prioritaet: 3,
    grundFahrplanabweichung: 4
  };
  const ubahnMessage: Message = {
    meldungsId: 'BVG258847',
    datum: '2020-04-07T07:57:41',
    type: 0,
    verkehrsmittel: 1,
    linie: 'U1',
    prioritaet: 1,
    grundFahrplanabweichung: 2
  };
  const tramMessage: Message = {
    meldungsId: 'BVG244208',
    datum: '2019-07-08T12:10:46',
    type: 0,
    verkehrsmittel: 3,
    linie: 'M17',
    prioritaet: 1,
    grundFahrplanabweichung: 4
  };

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

  it('should correctly select all types of traffic status messages', () => {
    mockStore.setState({
      messages: {
        messages: [ busMessage, ubahnMessage, tramMessage ]
      }
    });
    mockStore.refreshState();

    expect(mockStore.select(selectAllMessages)
      .subscribe(result => expect(result).toEqual([busMessage, ubahnMessage, tramMessage]))
    );

  });

  it('should correctly select all bus traffic status messages', () => {
    mockStore.setState({
      messages: {
        messages: [ busMessage, ubahnMessage, tramMessage ]
      }
    });
    mockStore.refreshState();

    expect(mockStore.select(selectBusMessages)
      .subscribe(result => expect(result).toEqual([busMessage]))
    );

  });

  it('should correctly select all tram traffic status messages', () => {
    mockStore.setState({
      messages: {
        messages: [ busMessage, ubahnMessage, tramMessage ]
      }
    });
    mockStore.refreshState();

    expect(mockStore.select(selectTramMessages)
      .subscribe(result => expect(result).toEqual([tramMessage]))
    );

  });

  it('should correctly select all u-bahn traffic status messages', () => {
    mockStore.setState({
      messages: {
        messages: [ busMessage, ubahnMessage, tramMessage ]
      }
    });
    mockStore.refreshState();

    expect(mockStore.select(selectUndergroundMessages)
      .subscribe(result => expect(result).toEqual([ubahnMessage]))
    );

  });

});
