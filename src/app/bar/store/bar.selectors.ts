import { createFeatureSelector, createSelector } from '@ngrx/store';
import { barFeatureKey, BarState } from './bar.reducer';

export const selectBarStateSlice = createFeatureSelector<BarState>(
  barFeatureKey
);

export const selectBarStateLoading = createSelector(
  selectBarStateSlice,
  (state: BarState) => state.loading
);

export const selectBarStateBars = createSelector(
  selectBarStateSlice,
  (state: BarState) => state.bars
);
