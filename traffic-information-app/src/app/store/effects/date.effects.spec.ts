import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DateEffects } from './date.effects';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from '@app/store/reducers';

describe('DateEffects', () => {
  const actions$: Observable<any> = new Observable<any>();
  let effects: DateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers })
      ],
      providers: [
        DateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject<DateEffects>(DateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
