import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  private static readonly VERSION = "3.0.0a1";

  get appTitle(): string {
    return `BowBuddy ${HomePage.VERSION}`;
  }
}
