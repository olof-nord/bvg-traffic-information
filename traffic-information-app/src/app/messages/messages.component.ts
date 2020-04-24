import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Message } from '@api/models';
import { State } from '@app/store/reducers';

import {
  selectMessagesLoading,
  selectValidMessagesForLineAndDate
} from '@store/selectors/message.selectors';
import * as moment from 'moment';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  @Input()
  line: string;

  @Input()
  type: 'bus'|'ferry'|'tram'|'underground';

  messages$: Observable<Array<Message>>;
  messagesLoading$: Observable<boolean>;

  constructor(private store$: Store<State>) { }

  ngOnInit(): void {
    const today = moment().toISOString();
    this.messages$ = this.store$.pipe(select(selectValidMessagesForLineAndDate(this.line, today)));
    this.messagesLoading$ = this.store$.pipe(select(selectMessagesLoading));
  }

}
