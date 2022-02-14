import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from '@ngrx/store';

import { BarInterface } from "./bar.interface";

export const loadBars = createAction(
  '[Bar] Load Bars'
);

export const loadBarsSuccess = createAction(
  '[Bar] Load Bars Success',
  props<{ data: BarInterface[] }>()
);

export const loadBarsFailure = createAction(
  '[Bar] Load Bars Failure',
  props<{ error: HttpErrorResponse }>()
);
