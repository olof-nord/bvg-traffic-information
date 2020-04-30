import { createAction, props } from '@ngrx/store';

export const loadDate = createAction(
  '[Date] Load Date'
);

export const loadDateSuccess = createAction(
  '[Date] Load Date Success',
  props<{ date: string }>()
);

export const setDate = createAction(
  '[Date] Set Date',
  props<{ date: string }>()
);

export const setDateSuccess = createAction(
  '[Date] Set Date Success',
  props<{ date: string }>()
);
