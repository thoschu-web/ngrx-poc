import { Action, createReducer, on } from '@ngrx/store';
import { dec, inc } from 'ramda';

import { FooInterface } from './foo.interface';
import { loadFoos, loadFoosSuccess, loadFoosFailure } from './foo.actions';

export const fooFeatureKey = 'foo';

export interface FooState {
  foos: FooInterface[],
  loading: boolean
}

export const initialState: FooState = {
  foos: [{id: 1, foo: 'Tom Foo'}],
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(loadFoos, (state: FooState, action: Action) => {
    console.log(action);
    const loading = true;
    return {...state, loading};
  }),
  on(loadFoosSuccess, (state, action) => {
    const newState: FooState = Object.freeze<FooState>({...state});

    console.log(state);
    console.log(action);
    return newState;
  }),
  on(loadFoosFailure, (state, action) => state),
);
