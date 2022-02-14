import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from '@ngrx/store';

import { BazInterface } from "./baz.interface";


export const loadBazs = createAction(
  '[Baz] Load Bazs'
);

export const loadBazsSuccess = createAction(
  '[Baz] Load Bazs Success',
  props<{ data: BazInterface[] }>()
);

export const loadBazsFailure = createAction(
  '[Baz] Load Bazs Failure',
  props<{ error: HttpErrorResponse }>()
);
