import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '@app/store/reducers';
import { selectMessageByCurrentId } from '@store/selectors/message.selectors';

import { Message } from '@api/models';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {

  message$: Observable<Message>;

  constructor(private store$: Store<State>) {}

  ngOnInit(): void {
    this.message$ = this.store$.pipe(select(selectMessageByCurrentId));
  }

}
