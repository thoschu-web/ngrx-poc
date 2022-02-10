import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFoo from './foo.reducer';

export const selectFooState = createFeatureSelector<fromFoo.State>(
  fromFoo.fooFeatureKey
);
