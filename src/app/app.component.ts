import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShibaCounter } from "./shiba-counter.js";

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet, ShibaCounter],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'state-angular';
}
