import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { shibasReducer } from './state/shibas.reducer';
import { dogApiReducer } from './state/dogApi.reducer';
import * as ShibaEffects from './shibas/shibas.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(), provideEffects(ShibaEffects), provideState({ name: "shibas", reducer: shibasReducer }), provideState({name: "shibaData", reducer: dogApiReducer }), provideStoreDevtools()]
};
