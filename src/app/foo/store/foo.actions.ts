import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from '@ngrx/store';

import { FooInterface } from "./foo.interface";

export const loadFoos = createAction(
  '[Foo] Load Foos'
);

export const loadFoosSuccess = createAction(
  '[Foo] Load Foos Success',
  props<{ data: FooInterface[] }>()
);

export const loadFoosFailure = createAction(
  '[Foo] Load Foos Failure',
  props<{ error: HttpErrorResponse }>()
);
