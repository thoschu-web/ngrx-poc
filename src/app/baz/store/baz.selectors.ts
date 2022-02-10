import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBaz from './baz.reducer';

export const selectBazState = createFeatureSelector<fromBaz.State>(
  fromBaz.bazFeatureKey
);
