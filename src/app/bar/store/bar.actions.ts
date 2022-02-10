import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from '@ngrx/store';

import { BarInterface } from "./bar.interface";

export const loadBars = createAction(
  '[BarInterface] Load Bars'
);

export const loadBarsSuccess = createAction(
  '[BarInterface] Load Bars Success',
  props<{ data: BarInterface[] }>()
);

export const loadBarsFailure = createAction(
  '[BarInterface] Load Bars Failure',
  props<{ error: HttpErrorResponse }>()
);
