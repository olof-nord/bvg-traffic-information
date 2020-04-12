import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MessageEffects } from './message.effects';

describe('MessageEffects', () => {
  const actions$: Observable<any> = new Observable<any>();
  let effects: MessageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        MessageEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<MessageEffects>(MessageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
