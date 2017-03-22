import {Component, OnInit, OnDestroy} from '@angular/core';
import {InternalNotificationService} from "../internal-notification.service";

@Component({
  selector: 'app-the-smallest-component',
  templateUrl: './the-smallest-component.component.html',
  styleUrls: ['./the-smallest-component.component.css']
})
export class TheSmallestComponentComponent implements OnInit{

  constructor(private internalNotificationService: InternalNotificationService) { }

  ngOnInit() {
  }

  pushChangesToTheBiggestComponent(value){
    this.internalNotificationService.sentNotification(value);
  }

}
