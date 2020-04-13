import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '@app/store/reducers';
import * as messageActions from '@store/actions/message.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store$: Store<State>) { }

  ngOnInit(): void {
    // Fetch all available messages
    this.store$.dispatch(messageActions.loadMessages({ params: {} }));
  }

}
