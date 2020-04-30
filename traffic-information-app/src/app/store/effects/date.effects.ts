import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { State } from '@app/store/reducers';
import { selectDate } from '@store/selectors/date.selectors';
import * as dateActions from '@store/actions/date.actions';

@Injectable()
export class DateEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<State>
  ) {}

  loadDate$ = createEffect(() => this.actions$.pipe(
    ofType(dateActions.loadDate),
    switchMap(() => {
      return this.store$.select(selectDate).pipe(
        map((date: string) => {
          return dateActions.loadDateSuccess({ date });
        })
      );
    })
  ));

  setDate$ = createEffect(() => this.actions$.pipe(
    ofType(dateActions.setDate),
    switchMap(props => {
      return of(dateActions.setDateSuccess({ date: props.date }));
    })
  ));

}
