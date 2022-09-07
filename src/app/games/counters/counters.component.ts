import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss'],
  animations: [
    trigger('answerAddedTrigger', [
      transition(':enter', [
        style({ flex: 0 }),
        animate('300ms', style({ flex: 1 })),
      ]),
    ]),
  ],
})
export class CountersComponent implements OnInit {
  @Input() game: any;

  ngOnInit(): void {
    //
  }
}
