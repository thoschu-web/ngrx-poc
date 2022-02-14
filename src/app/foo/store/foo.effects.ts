import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as FooActions from './foo.actions';

@Injectable()
export class FooEffects {
  public readonly loadFoos$: Observable<any>;

  constructor(private readonly actions$: Actions) {
    this.loadFoos$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(FooActions.loadFoos),
        concatMap(() =>
          /** An EMPTY observable only emits completion. Replace with your own observable API request */
          EMPTY.pipe(
            map(data => FooActions.loadFoosSuccess({ data })),
            catchError(error => of(FooActions.loadFoosFailure({ error }))))
        )
      );
    });
  }
}
