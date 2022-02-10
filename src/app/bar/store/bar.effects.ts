import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as BarActions from './bar.actions';



@Injectable()
export class BarEffects {

  loadBars$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(BarActions.loadBars),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => BarActions.loadBarsSuccess({ data })),
          catchError(error => of(BarActions.loadBarsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
