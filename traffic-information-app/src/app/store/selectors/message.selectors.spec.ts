import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';

import {
  selectAllMessages,
  selectMessagesError,
  selectMessagesLoading,
  selectBusMessages,
  selectTramMessages,
  selectUndergroundMessages,
  selectMessagesForLine,
  selectAllValidMessagesForDate,
  selectValidBusMessagesForDate,
  selectValidTramMessagesForDate,
  selectValidUndergroundMessagesForDate
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
    gueltigVonDatum: '2020-01-13',
    prioritaet: 3,
    grundFahrplanabweichung: 4
  };
  const ubahnMessage: Message = {
    meldungsId: 'BVG258847',
    datum: '2020-04-07T07:57:41',
    type: 0,
    verkehrsmittel: 1,
    linie: 'U1',
    gueltigVonDatum: '2020-04-14',
    gueltigBisDatum: '2020-06-15',
    prioritaet: 1,
    grundFahrplanabweichung: 2
  };
  const tramMessage: Message = {
    meldungsId: 'BVG244208',
    datum: '2019-07-08T12:10:46',
    type: 0,
    verkehrsmittel: 3,
    linie: 'M17',
    gueltigVonDatum: '2019-07-15',
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

  it('should correctly select all traffic status messages active on a specific date', () => {
    mockStore.setState({
      messages: {
        messages: [ busMessage, ubahnMessage, tramMessage ]
      }
    });
    mockStore.refreshState();

    // No messages are valid, as the earlies validFrom/gueltigVonDatum is in 2019
    expect(mockStore.select(selectAllValidMessagesForDate('2018-01-01'))
      .subscribe(result => {
        return expect(result).toEqual([]);
      })
    );

    // Only one message is valid, its validFrom/gueltigVonDatum is in June 2019
    expect(mockStore.select(selectAllValidMessagesForDate('2019-08-01'))
      .subscribe(result => {
        return expect(result).toEqual([ tramMessage ]);
      })
    );

    // Two messages are valid, their validFrom/gueltigVonDatum are in June 2019 and January 2020
    expect(mockStore.select(selectAllValidMessagesForDate('2020-02-01'))
      .subscribe(result => {
        return expect(result).toEqual([ busMessage, tramMessage ]);
      })
    );

    // All three messages are valid
    expect(mockStore.select(selectAllValidMessagesForDate('2020-04-16'))
      .subscribe(result => {
        return expect(result).toEqual([ busMessage, ubahnMessage, tramMessage ]);
      })
    );

  });

  it('should correctly select u-bahn traffic status messages active on a specific date', () => {
    mockStore.setState({
      messages: {
        messages: [ busMessage, ubahnMessage, tramMessage ]
      }
    });
    mockStore.refreshState();

    expect(mockStore.select(selectValidUndergroundMessagesForDate('2020-02-01'))
      .subscribe(result => {
        return expect(result).toEqual([]);
      })
    );

    expect(mockStore.select(selectValidUndergroundMessagesForDate('2020-04-16'))
      .subscribe(result => {
        return expect(result).toEqual([ ubahnMessage ]);
      })
    );

  });

  it('should correctly select tram status messages active on a specific date', () => {
    mockStore.setState({
      messages: {
        messages: [ busMessage, ubahnMessage, tramMessage ]
      }
    });
    mockStore.refreshState();

    expect(mockStore.select(selectValidTramMessagesForDate('2018-01-01'))
      .subscribe(result => {
        return expect(result).toEqual([]);
      })
    );

    expect(mockStore.select(selectValidTramMessagesForDate('2020-04-16'))
      .subscribe(result => {
        return expect(result).toEqual([ tramMessage ]);
      })
    );

  });

  it('should correctly select bus status messages active on a specific date', () => {
    mockStore.setState({
      messages: {
        messages: [ busMessage, ubahnMessage, tramMessage ]
      }
    });
    mockStore.refreshState();

    expect(mockStore.select(selectValidBusMessagesForDate('2018-01-01'))
      .subscribe(result => {
        return expect(result).toEqual([]);
      })
    );

    expect(mockStore.select(selectValidBusMessagesForDate('2020-04-16'))
      .subscribe(result => {
        return expect(result).toEqual([ busMessage ]);
      })
    );

  });

  it('should correctly select all traffic status messages for a specific line', () => {
    mockStore.setState({
      messages: {
        messages: [ busMessage, ubahnMessage, tramMessage ]
      }
    });
    mockStore.refreshState();

    expect(mockStore.select(selectMessagesForLine('U2'))
      .subscribe(result => {
        return expect(result).toEqual([]);
      })
    );

    expect(mockStore.select(selectMessagesForLine('U1'))
      .subscribe(result => {
        return expect(result).toEqual([ ubahnMessage ]);
      })
    );

  });

});
