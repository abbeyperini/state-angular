import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectShibaCount, selectShibaData } from './state/shibas.selectors';
import { incrementByAmount } from './state/shibas.actions';
import { ShibaCounter } from './shibas/shiba-counter';
import { AsyncPipe } from '@angular/common';
@Component({
    selector: 'app-root',
    template: `
      <main class="main">
        <shiba-counter [count]="(count$ | async)!" [shibaData]="(shibaData$ | async)!" (incrementByAmount)="onIncrementByAmount($event)" />
      </main>
    `,
    imports: [ ShibaCounter, AsyncPipe ],
})
export class AppComponent {

  title = 'state-angular';

  count$;
  shibaData$;

  onIncrementByAmount(number: number) {
    this.store.dispatch(incrementByAmount({number}));
  }

  constructor(private store: Store) {
    this.count$ = this.store.select(selectShibaCount);
    this.shibaData$ = this.store.select(selectShibaData);
  }
}
