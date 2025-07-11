import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectShibaCount } from './state/shibas.selectors';
// import { ShibasService } from './shibas/shibas.service';
import { incrementByAmount } from './state/shibas.actions';
// import { provideStore } from '@ngrx/store';
// import { provideEffects } from '@ngrx/effects';
// import * as shibasEffects from './shibas/shibas.effects';
import { ShibaCounter } from './shibas/shiba-counter';
import { AsyncPipe } from '@angular/common';
@Component({
    selector: 'app-root',
    template: `
      <main class="main">
        <shiba-counter [count]="(count$ | async)!" (incrementByAmount)="onIncrementByAmount($event)" />
      </main>
    `,
    imports: [ ShibaCounter, AsyncPipe ],
})
export class AppComponent {

  title = 'state-angular';

  count$;

  onIncrementByAmount(number: number) {
    this.store.dispatch(incrementByAmount({number}));
  }

  constructor(private store: Store) {
    this.count$ = this.store.select(selectShibaCount);
  }
}
