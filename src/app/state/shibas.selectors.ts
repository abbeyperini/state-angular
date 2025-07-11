import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ShibaData } from './dogApi.model';

type Count = {
  count: number;
}

export const selectFeatureShibas = createFeatureSelector<Count>('shibas');
export const selectFeatureShibaData = createFeatureSelector<ShibaData>('shibaData')

export const selectShibaCount = createSelector(selectFeatureShibas, (state: Count) => state.count);
export const selectShibaData = createSelector(selectFeatureShibaData, (state: ShibaData) => state);

