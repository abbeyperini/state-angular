import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShibaData } from '../state/dogApi.model';

@Component({
  selector: 'shiba-counter',
  template: `
    <span>Shibas: {{ count }}</span>
    <form (ngSubmit)="onSubmit()">
      <label for='number'>Number</label>
      <input id='number' type="number" name="number" [formControl]="number"/>
      <button type="submit">Add Shibas</button>
    </form>
    @if (shibaData.pending) {
      <p>Pending</p>
    }
    @if (shibaData.error) {
      <p>{{ shibaData.error }}</p>
    }
    <div class="shiba-group">
      @for (shiba of shibaData.shibas; track shiba) {
        <img [src]="shiba" alt="shiba" />
      }
    </div>
  `,
  styleUrl: './shiba-counter.css',
  imports: [FormsModule, ReactiveFormsModule],
})
export class ShibaCounter {
  @Input() count = 0;
  @Input() shibaData: ShibaData = {
    error: null,
    pending: false,
    shibas: [],
  };
  @Output() incrementByAmount = new EventEmitter<number>();
  number = new FormControl(0);

  onSubmit() {
    this.incrementByAmount.emit(this.number.value!);
  }
}