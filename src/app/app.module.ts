import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GameComponent } from './games/game/game.component';
import { CountersComponent } from './games/counters/counters.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CountersComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
