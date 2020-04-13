import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Message } from '@api/models';

import { State } from '@app/store/reducers';
import { selectTramMessages, selectMessagesLoading } from '@store/selectors/message.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  messages$: Observable<Array<Message>>;
  messagesLoading$: Observable<boolean>;

  constructor(private store$: Store<State>) { }

  ngOnInit(): void {
    this.messages$ = this.store$.pipe(select(selectTramMessages));
    this.messagesLoading$ = this.store$.pipe(select(selectMessagesLoading));
  }

}
