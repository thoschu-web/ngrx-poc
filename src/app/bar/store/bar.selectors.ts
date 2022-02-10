import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBar from './bar.reducer';

export const selectBarState = createFeatureSelector<fromBar.State>(
  fromBar.barFeatureKey
);
