import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from '@ngrx/store';

import { FooInterface } from "./foo.interface";

export const loadFoos = createAction(
  '[FooInterface] Load Foos'
);

export const loadFoosSuccess = createAction(
  '[FooInterface] Load Foos Success',
  props<{ data: FooInterface[] }>()
);

export const loadFoosFailure = createAction(
  '[FooInterface] Load Foos Failure',
  props<{ error: HttpErrorResponse }>()
);
