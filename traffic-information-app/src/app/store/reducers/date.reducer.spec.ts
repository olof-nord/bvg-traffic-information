import { reducer, initialState } from './date.reducer';
import * as dateActions from '@store/actions/date.actions';
import * as moment from 'moment';

describe('Date Reducer', () => {
  it('an unknown action should return the previous state', () => {
    const action = {} as any;
    const result = reducer(initialState, action);

    expect(result).toBe(initialState);
  });

  it('loadDateSuccess action should return the date', () => {
    const selectedDate = '2020-02-29';
    const state = reducer(initialState, dateActions.loadDateSuccess({ date: selectedDate }));

    expect(state.date).toEqual(selectedDate);
  });

  it('setDate action should set the date', () => {
    const selectedDate = '2020-02-29';

    const state = reducer(initialState, dateActions.setDate({ date: selectedDate }));

    expect(state.date).toEqual(selectedDate);
  });

  it('setDateSuccess action should return the date', () => {
    const selectedDate = '2020-02-29';

    const state = reducer(initialState, dateActions.setDateSuccess({ date: selectedDate }));

    expect(state.date).toEqual(selectedDate);
  });

  it('the default selected date should be the current date', () => {
    const currentDate = moment().format('YYYY-MM-DD');

    expect(initialState.date).toEqual(currentDate);
  });

});
