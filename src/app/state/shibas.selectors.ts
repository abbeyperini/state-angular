import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ShibaData } from './dogApi.model';

type Count = {
  count: number;
}

export const selectFeatureShibas = createFeatureSelector<Count>('shibas');

export const selectShibaCount = createSelector(selectFeatureShibas, (state: Count) => state.count);
