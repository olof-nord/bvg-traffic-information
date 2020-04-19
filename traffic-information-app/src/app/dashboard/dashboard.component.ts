import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { State } from '@app/store/reducers';
import {
  selectMessagesLoading,
  selectMessagesError
} from '@store/selectors/message.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  messagesLoading$: Observable<boolean>;
  messagesError$: Observable<string>;

  constructor(private store$: Store<State>) { }

  ngOnInit(): void {
    this.messagesLoading$ = this.store$.pipe(select(selectMessagesLoading));
    this.messagesError$ = this.store$.pipe(select(selectMessagesError));
  }

}
