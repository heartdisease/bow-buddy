import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private static readonly VERSION = '3.0.0a2';

  constructor(private router: Router) {}

  get appTitle(): string {
    return `BowBuddy ${HomePage.VERSION}`;
  }

  navigateToNewGame(): void {
    this.router.navigateByUrl('/new-game');
  }

  navigateToSettings(): void {
    //this.router.navigateByUrl('/new-game');
  }

  navigateToHallOfFame(): void {
    //this.router.navigateByUrl('/new-game');
  }
}
