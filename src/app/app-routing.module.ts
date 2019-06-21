import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGameComponent } from './new-game/new-game.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'new-game', component: NewGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
