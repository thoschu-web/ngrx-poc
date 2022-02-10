import { Action, createReducer, on } from '@ngrx/store';

import { BazInterface } from './baz.interface';
import * as BazActions from './baz.actions';

export const bazFeatureKey = 'baz';

export interface State {
  barArr: BazInterface[],
  loading: boolean
}

export const initialState: State = {
  barArr: [{id: 1, baz: 'Tom Baz', optional: false}],
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(BazActions.loadBazs, state => state),
  on(BazActions.loadBazsSuccess, (state, action) => state),
  on(BazActions.loadBazsFailure, (state, action) => state),
);
