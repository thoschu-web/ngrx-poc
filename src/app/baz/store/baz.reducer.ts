import { Action, createReducer, on } from '@ngrx/store';

import { BazInterface } from './baz.interface';
import * as BazActions from './baz.actions';

export const bazFeatureKey = 'baz';

export interface State {
  bars: BazInterface[],
  loading: boolean
}

export const initialState: State = {
  bars: [{id: 1, baz: 'Tom Baz', optional: false}],
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(BazActions.loadBazs, (state, action) => state),
  on(BazActions.loadBazsSuccess, (state, action) => state),
  on(BazActions.loadBazsFailure, (state, action) => state),
);
