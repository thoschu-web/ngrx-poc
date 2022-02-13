import { Action, createReducer, on } from '@ngrx/store';

import { FooInterface } from './foo.interface';
import * as FooActions from './foo.actions';

export const fooFeatureKey = 'foo';

export interface State {
  fooArr: FooInterface[],
  loading: boolean
}

export const initialState: State = {
  fooArr: [{id: 1, foo: 'Tom Foo'}],
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(FooActions.loadFoos, (state, action) => {
    console.log(state);
    console.log(action);
    return state;
  }),
  on(FooActions.loadFoosSuccess, (state, action) => state),
  on(FooActions.loadFoosFailure, (state, action) => state),
);
