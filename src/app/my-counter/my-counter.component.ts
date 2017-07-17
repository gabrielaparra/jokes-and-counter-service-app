import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';


@Component({
  selector: 'app-my-counter',
  templateUrl: 'my-counter.component.html',
  styles: [],
  // providers: [CounterService]
  // providers option is for creating a separate instance of
  // the service in each component
})

export class MyCounterComponent implements OnInit {
  constructor(private theCounter: CounterService) {}

  ngOnInit() {}

  incrementCounter() {
    this.theCounter.increment();
  }
}
