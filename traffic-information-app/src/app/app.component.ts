import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Message } from '@api/models';

import { State } from '@app/store/reducers';
import { selectMessages, selectMessagesLoading } from '@store/selectors/message.selectors';
import * as messageActions from '@store/actions/message.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  messages$: Observable<Array<Message>>;
  messagesLoading$: Observable<boolean>;

  constructor(private store$: Store<State>) { }

  ngOnInit(): void {
    this.messages$ = this.store$.pipe(select(selectMessages));
    this.messagesLoading$ = this.store$.pipe(select(selectMessagesLoading));

    this.store$.dispatch(messageActions.loadMessages({ params: { datum: '2018-02-27T12:50:47' } }));
  }

}
