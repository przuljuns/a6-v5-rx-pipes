import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'a6-v5-rx-pipes';

  subscription: Subscription;

  ngOnInit() {
    const obs = interval(1500);
    this.subscription = obs.subscribe(v => console.log(v));
  }

  onUnsubscribe() {
    this.subscription.unsubscribe();
  }
}
