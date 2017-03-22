import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {InternalNotificationService} from "../internal-notification.service";

@Component({
  selector: 'app-smaller-component',
  templateUrl: './smaller-component.component.html',
  styleUrls: ['./smaller-component.component.css']
})
export class SmallerComponentComponent implements OnInit, OnDestroy {


  subscription: Subscription;
  anotherSubscription: Subscription;

  value: string;
  anotherValue: string;

  constructor(private internalNotificationService: InternalNotificationService) {
  }

  ngOnInit() {
    this.subscription = this.internalNotificationService.notificationSent$
      .subscribe(notification => this.value = notification);
    this.anotherSubscription = this.internalNotificationService.anotherNotificationSent$
      .subscribe(notification => this.anotherValue = notification);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.anotherSubscription.unsubscribe();
  }

}
