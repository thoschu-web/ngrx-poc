import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from '@ngrx/store';

import { BazInterface } from "./baz.interface";


export const loadBazs = createAction(
  '[BazInterface] Load Bazs'
);

export const loadBazsSuccess = createAction(
  '[BazInterface] Load Bazs Success',
  props<{ data: BazInterface[] }>()
);

export const loadBazsFailure = createAction(
  '[BazInterface] Load Bazs Failure',
  props<{ error: HttpErrorResponse }>()
);
