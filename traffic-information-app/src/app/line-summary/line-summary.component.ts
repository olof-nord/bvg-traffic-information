import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { State } from '@app/store/reducers';
import { Message } from '@api/models';
import { UndergroundLine } from '@config/bvg/underground-lines';

import {
  selectMessagesLoading,
  selectValidMessagesForLineAndDate
} from '@store/selectors/message.selectors';
import { undergroundLines, busColor, tramColor, ferryColor } from '@config/bvg';

@Component({
  selector: 'app-line-summary',
  templateUrl: './line-summary.component.html',
  styleUrls: ['./line-summary.component.scss']
})
export class LineSummaryComponent implements OnInit, OnDestroy {

  @Input()
  line: string;

  @Input()
  type: 'bus'|'ferry'|'tram'|'underground';

  messages$: Observable<Array<Message>>;
  messagesLoading$: Observable<boolean>;

  private subscriptions: Subscription = new Subscription();

  constructor(private store$: Store<State>) { }

  ngOnInit(): void {
    const today = new Date().toString();
    this.messages$ = this.store$.pipe(select(selectValidMessagesForLineAndDate(this.line, today)));
    this.messagesLoading$ = this.store$.pipe(select(selectMessagesLoading));
  }

  getBackgroundColor(): string {
    let backgroundColor = null;

    if (this.type === 'underground') {
      const foundLine: UndergroundLine = undergroundLines
        .find(entry => entry.line === this.line);
      backgroundColor = foundLine.color;
    } else if (this.type === 'tram') {
      backgroundColor = tramColor;
    } else if (this.type === 'bus') {
      backgroundColor = busColor;
    } else if (this.type === 'ferry') {
      backgroundColor = ferryColor;
    }

    return backgroundColor;
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
