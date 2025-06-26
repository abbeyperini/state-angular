import { Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'shiba-counter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shiba-counter.html',
  styleUrl: './shiba-counter.css'
})
export class ShibaCounter {
  shibas = signal([]);
  count = signal(0);
  number = 0;

  handleIncrement() {
    console.log(this.number)
  }
}