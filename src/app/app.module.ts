import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InternalNotificationService} from "./internal-notification.service";
import { TheBiggestComponentComponent } from './the-biggest-component/the-biggest-component.component';
import { BiggerComponentComponent } from './bigger-component/bigger-component.component';
import { BigComponentComponent } from './big-component/big-component.component';
import { SmallComponentComponent } from './small-component/small-component.component';
import { SmallerComponentComponent } from './smaller-component/smaller-component.component';
import { TheSmallestComponentComponent } from './the-smallest-component/the-smallest-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TheBiggestComponentComponent,
    BiggerComponentComponent,
    BigComponentComponent,
    SmallComponentComponent,
    SmallerComponentComponent,
    TheSmallestComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [InternalNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
