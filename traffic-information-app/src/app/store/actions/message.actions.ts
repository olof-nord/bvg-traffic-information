import { createAction, props } from '@ngrx/store';
import { Message } from '@api/models';

export const loadMessages = createAction(
  '[Message] Load Messages',
  props<{ params?: {
    verkehrsmittel?: number;
    linie?: string;
    abschnittbeginn?: string;
    abschnittbeginnId?: number;
    abschnittende?: string;
    abschnittendeId?: number;
    haltestelle?: string;
    haltId?: number;
    latitude?: number;
    longitude?: number;
    r?: number;
    typ?: number;
    datum?: string;
  } }>()
);

export const loadMessagesSuccess = createAction(
  '[Message] Load Messages Success',
  props<{ messages: Message[] }>()
);

export const loadMessagesFailure = createAction(
  '[Message] Load Messages Failure',
  props<{ error: string }>()
);
