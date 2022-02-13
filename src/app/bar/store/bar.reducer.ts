import { Action, createReducer, on } from '@ngrx/store';

import { BarInterface } from './bar.interface';
import * as BarActions from './bar.actions';

export const barFeatureKey = 'bar';

export interface State {
  bars: BarInterface[],
  loading: boolean
}

export const initialState: State = {
  bars: [{id: 1, bar: 'Tom Bar', other: false}],
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(BarActions.loadBars, (state, action) => {
    console.log(state);
    console.log(action);

    return state;
  }),
  on(BarActions.loadBarsSuccess, (state, action) => state),
  on(BarActions.loadBarsFailure, (state, action) => state),
);
