import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { FgiService } from '@api/services/fgi.service';
import { Message } from '@api/models';
import * as messageActions from '@store/actions/message.actions';

@Injectable()
export class MessageEffects {
  private errorMessage = 'Could not fetch BVG traffic information';

  constructor(
    private actions$: Actions,
    private apiService: FgiService
  ) {}

  loadMessages$ = createEffect(() => this.actions$.pipe(
    ofType(messageActions.loadMessages),
    switchMap(( props) =>
      this.apiService.getFgi(props.params).pipe(
          map((messages: Message[]) => {
            return messageActions.loadMessagesSuccess({ messages });
          }),
          catchError(() => {
            return of(messageActions.loadMessagesFailure({ error: this.errorMessage }));
          })
        ))
    )
  );

}
