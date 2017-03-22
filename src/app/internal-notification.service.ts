import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class InternalNotificationService {

  private sentNotificationSource = new Subject<string>();
  private sentAnotherNotificationSource = new Subject<string>();

  // Observable string streams
  notificationSent$ = this.sentNotificationSource.asObservable();
  anotherNotificationSent$ = this.sentAnotherNotificationSource.asObservable();

  // Service message commands
  sentNotification(value) {
    this.sentNotificationSource.next(value);
  }

  sentAnotherNotification(value){
    this.sentAnotherNotificationSource.next(value);
  }

}
