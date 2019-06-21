import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGameComponent } from './new-game/new-game.component';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { FinalScoreComponent } from './final-score/final-score.component';
import { StationSelectPlayerComponent } from './station-select-player/station-select-player.component';
import { StationSetScoreComponent } from './station-set-score/station-set-score.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'new-game', component: NewGameComponent },
  { path: 'station-select-player', component: StationSelectPlayerComponent },
  { path: 'station-set-score', component: StationSetScoreComponent },
  { path: 'final-score', component: FinalScoreComponent },
  { path: 'hall-of-fame', component: HallOfFameComponent },
  { path: 'app-settings', component: AppSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
