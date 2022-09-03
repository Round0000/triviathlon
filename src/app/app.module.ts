import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SpeedQcmComponent } from './games/speed-qcm/speed-qcm.component';
import { WrittenAnswerComponent } from './games/written-answer/written-answer.component';
import { JoinComponent } from './games/join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeedQcmComponent,
    WrittenAnswerComponent,
    JoinComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
