import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewGameComponent } from './new-game/new-game.component';
import { StationSelectPlayerComponent } from './station-select-player/station-select-player.component';
import { StationSetScoreComponent } from './station-set-score/station-set-score.component';
import { FinalScoreComponent } from './final-score/final-score.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { AppSettingsComponent } from './app-settings/app-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    StationSelectPlayerComponent,
    StationSetScoreComponent,
    FinalScoreComponent,
    HallOfFameComponent,
    AppSettingsComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
