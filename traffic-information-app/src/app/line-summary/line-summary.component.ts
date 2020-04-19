import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '@app/store/reducers';
import { Message } from '@api/models';
import { selectValidMessagesForLineAndDate } from '@store/selectors/message.selectors';

@Component({
  selector: 'app-line-summary',
  templateUrl: './line-summary.component.html',
  styleUrls: ['./line-summary.component.scss']
})
export class LineSummaryComponent implements OnInit {

  @Input()
  line: string;

  messages$: Observable<Array<Message>>;

  constructor(private store$: Store<State>) { }

  ngOnInit(): void {
    const today = new Date().toString();
    this.messages$ = this.store$.pipe(select(selectValidMessagesForLineAndDate(this.line, today)));
  }

}
