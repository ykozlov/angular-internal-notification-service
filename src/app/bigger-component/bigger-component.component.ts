import { Component, OnInit } from '@angular/core';
import {InternalNotificationService} from "../internal-notification.service";

@Component({
  selector: 'app-bigger-component',
  templateUrl: './bigger-component.component.html',
  styleUrls: ['./bigger-component.component.css']
})
export class BiggerComponentComponent implements OnInit {

  constructor(private internalNotificationService: InternalNotificationService) { }


  ngOnInit() {
  }

  pushChangesToSmallerComponent(value){
    this.internalNotificationService.sentAnotherNotification(value);
  }

}
