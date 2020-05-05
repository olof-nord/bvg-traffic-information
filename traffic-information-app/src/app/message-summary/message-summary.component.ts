import { Component, Input, OnInit } from '@angular/core';

import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { Message } from '@api/models';

@Component({
  selector: 'app-message-summary',
  templateUrl: './message-summary.component.html',
  styleUrls: ['./message-summary.component.scss']
})
export class MessageSummaryComponent implements OnInit {

  @Input()
  message: Message;

  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;

  constructor() { }

  ngOnInit(): void {}

}
