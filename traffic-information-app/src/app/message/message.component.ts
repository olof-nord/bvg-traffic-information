import { Component, Input, OnInit } from '@angular/core';

import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { Message } from '@api/models';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input()
  message: Message;

  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;

  constructor() { }

  ngOnInit(): void {}

}
