import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fooFeatureKey, FooState } from './foo.reducer';

export const selectFooState = createFeatureSelector<FooState>(fooFeatureKey);

// export const selectFooData = createSelector()
