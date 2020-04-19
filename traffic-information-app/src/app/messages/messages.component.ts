import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Message } from '@api/models';
import { State } from '@app/store/reducers';

import {
  selectValidUndergroundMessagesForDate,
  selectValidTramMessagesForDate,
  selectValidBusMessagesForDate,
  selectValidFerryMessagesForDate,
  selectAllValidMessagesForDate,
  selectMessagesLoading
} from '@store/selectors/message.selectors';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {

  @Input()
  type: 'bus'|'ferry'|'tram'|'underground';

  messages$: Observable<Array<Message>>;
  messagesLoading$: Observable<boolean>;

  private subscriptions: Subscription = new Subscription();

  constructor(private store$: Store<State>) { }

  ngOnInit(): void {
    this.messagesLoading$ = this.store$.pipe(select(selectMessagesLoading));

    const today = new Date().toString();

    if (this.type === 'underground') {
      this.messages$ = this.store$.pipe(select(selectValidUndergroundMessagesForDate(today)));
    } else if (this.type === 'tram') {
      this.messages$ = this.store$.pipe(select(selectValidTramMessagesForDate(today)));
    } else if (this.type === 'bus') {
      this.messages$ = this.store$.pipe(select(selectValidBusMessagesForDate(today)));
    } else if (this.type === 'ferry') {
      this.messages$ = this.store$.pipe(select(selectValidFerryMessagesForDate(today)));
    } else {
      this.messages$ = this.store$.pipe(select(selectAllValidMessagesForDate(today)));
    }

  }

  noMessagesAvailable(): boolean {
    let fetchingMessages: boolean;
    let fetchedMessages: Message[] = [];

    this.subscriptions.add(
      this.messages$.subscribe((messages: Message[]) => {
        fetchedMessages = messages;
      })
    );

    this.subscriptions.add(
      this.messagesLoading$.subscribe((isLoading: boolean) => {
        fetchingMessages = isLoading;
      })
    );

    return !fetchingMessages && fetchedMessages.length === 0;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
