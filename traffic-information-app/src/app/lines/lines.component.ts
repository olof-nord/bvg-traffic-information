import { Component, Input, OnInit } from '@angular/core';

import { undergroundLines, tramLines, busLines, ferryLines } from '@config/bvg';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {

  @Input()
  type: 'bus'|'ferry'|'tram'|'underground';

  lines: string[];

  constructor() {}

  ngOnInit(): void {
    if (this.type === 'underground') {
      this.lines = undergroundLines.map(entry => entry.line);
    } else if (this.type === 'tram') {
      this.lines = tramLines;
    } else if (this.type === 'bus') {
      this.lines = busLines;
    } else if (this.type === 'ferry') {
      this.lines = ferryLines;
    }
  }

}
