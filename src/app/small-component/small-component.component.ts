import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {InternalNotificationService} from "../internal-notification.service";

@Component({
  selector: 'app-small-component',
  templateUrl: './small-component.component.html',
  styleUrls: ['./small-component.component.css']
})
export class SmallComponentComponent implements OnInit, OnDestroy {

  anotherSubscription: Subscription;

  anotherValue: string;

  constructor(private internalNotificationService: InternalNotificationService) {
  }

  ngOnInit() {
    this.anotherSubscription = this.internalNotificationService.anotherNotificationSent$
      .subscribe(notification => this.anotherValue = notification);
  }

  ngOnDestroy(): void {
    this.anotherSubscription.unsubscribe();
  }
}
