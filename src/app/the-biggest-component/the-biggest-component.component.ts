import {Component, OnInit, OnDestroy} from '@angular/core';
import {InternalNotificationService} from "../internal-notification.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-the-biggest-component',
  templateUrl: './the-biggest-component.component.html',
  styleUrls: ['./the-biggest-component.component.css']
})
export class TheBiggestComponentComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  value: string;

  constructor(private internalNotificationService: InternalNotificationService) { }

  ngOnInit() {
    this.subscription = this.internalNotificationService.notificationSent$
      .subscribe(notification => this.value = notification);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
