import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as BazActions from './baz.actions';



@Injectable()
export class BazEffects {

  loadBazs$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(BazActions.loadBazs),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => BazActions.loadBazsSuccess({ data })),
          catchError(error => of(BazActions.loadBazsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
