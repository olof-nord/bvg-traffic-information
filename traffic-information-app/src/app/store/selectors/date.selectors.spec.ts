import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';

import { selectDate } from '@store/selectors/date.selectors';

describe('Date Selectors', () => {

  let mockStore: MockStore;
  const selectedDate = '2020-04-30';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore()
      ]
    });

    mockStore = TestBed.inject(MockStore);

  });

  it('should select the date', () => {
    mockStore.setState({
      date: {
        date: selectedDate
      }
    });
    mockStore.refreshState();

    expect(mockStore.select(selectDate)
      .subscribe(result => expect(result).toEqual(selectedDate))
    );
  });

});
