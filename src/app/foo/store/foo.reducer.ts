import { Action, createReducer, on } from '@ngrx/store';
import { not } from 'ramda';

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
    return Object.freeze<FooState>({...state, loading});
  }),
  on(loadFoosSuccess, (state, action): FooState => {
    console.log(action);
    const loading = false;
    const foos = action.data;
    console.dir(Object.freeze<FooState>({...state, foos, loading}));
    return Object.freeze<FooState>({...state, foos, loading});
  }),
  on(loadFoosFailure, (state, action) => {
    console.log(action);
    const loading = false;
    return Object.freeze<FooState>({...state, loading});
  })
);
