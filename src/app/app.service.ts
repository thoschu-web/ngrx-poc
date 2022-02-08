import { Injectable } from '@angular/core';

import { Observable, shareReplay, startWith, Subject} from 'rxjs';
import { scan } from 'rxjs/operators';
import { dec, inc } from 'ramda';

import { AppServiceEnum } from './app.service.enum';
import { AppServiceInterface } from './app.service.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public static history: Array<AppServiceInterface>;
  public readonly state$: Observable<AppServiceInterface>;
  private readonly _messages$: Subject<AppServiceEnum>;
  private static readonly _initStateObject: AppServiceInterface = { counter: 77, other: Date.now().toString() };

  constructor() {
    this._messages$ = new Subject<AppServiceEnum>();
    this.state$ = this._messages$.pipe(
      startWith(AppServiceEnum.INIT),
      scan(this.calculateCounterState, Object.freeze<AppServiceInterface>(AppService._initStateObject)),
      shareReplay(1)
    );
  }

  public dispatch(event: AppServiceEnum): void {
    this._messages$.next(event);
  }

  private calculateCounterState(state: AppServiceInterface, event: AppServiceEnum): AppServiceInterface {
    let returnState: AppServiceInterface;

    switch(event) {
      case AppServiceEnum.INCREMENT: {
        returnState = AppService.handleCounterState(state, dec(state.counter));
        break;
      }
      case AppServiceEnum.DECREMENT: {
        returnState =  AppService.handleCounterState(state, inc(state.counter));
        break;
      }
      case AppServiceEnum.RESET: {
        returnState = AppService.handleCounterState(state, 0);
        break;
      }
      default: {
        returnState = state;
      }
    }

    return returnState;
  }

  private static handleCounterState(state: AppServiceInterface, counter: number): AppServiceInterface {
    return Object.freeze<AppServiceInterface>({
      ...state,
      counter
    });
  }
}
