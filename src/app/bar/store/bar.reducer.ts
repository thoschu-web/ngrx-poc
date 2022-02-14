import { Action, createReducer, on } from '@ngrx/store';

import { BarInterface } from './bar.interface';
import * as BarActions from './bar.actions';

export const barFeatureKey = 'bar';

export interface BarState {
  bars: BarInterface[],
  loading: boolean
}

export const initialState: BarState = {
  bars: [{id: 1, bar: 'Tom Bar', other: false}],
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(BarActions.loadBars, (state: BarState, action: Action) => {
    console.log(state);
    console.log(action);
    return state;
  }),
  on(BarActions.loadBarsSuccess, (state: BarState, action: Action) => state),
  on(BarActions.loadBarsFailure, (state: BarState, action: Action) => state),
);
