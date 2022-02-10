import { Action, createReducer, on } from '@ngrx/store';

import { BarInterface } from './bar.interface';
import * as BarActions from './bar.actions';

export const barFeatureKey = 'bar';

export interface State {
  barArr: BarInterface[],
  loading: boolean
}

export const initialState: State = {
  barArr: [{id: 1, bar: 'Tom Bar', other: false}],
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(BarActions.loadBars, state => state),
  on(BarActions.loadBarsSuccess, (state, action) => state),
  on(BarActions.loadBarsFailure, (state, action) => state),
);
