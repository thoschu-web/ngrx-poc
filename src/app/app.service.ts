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

  private static handleCounterState(state: AppServiceInterface, counter: number): AppServiceInterface {
    return Object.freeze<AppServiceInterface>({
      ...state,
      counter
    });
  }

  private calculateCounterState(state: AppServiceInterface, event: AppServiceEnum): AppServiceInterface {
    switch(event) {
      case AppServiceEnum.INCREMENT: {
        const newCounterValue: number = dec(state.counter);
        const incrementState: AppServiceInterface = AppService.handleCounterState(state, newCounterValue);

        return incrementState;

        break;
      }
      case AppServiceEnum.DECREMENT: {
        const newCounterValue: number = inc(state.counter);
        const decrementState: AppServiceInterface = AppService.handleCounterState(state, newCounterValue);

        return decrementState;

        break;
      }
      case AppServiceEnum.RESET: {
        const newCounterValue: number = 0;
        const resetState: AppServiceInterface = AppService.handleCounterState(state, newCounterValue);

        return resetState;

        break;
      }
      default: {
        console.log(state);
        return state;
      }
    }
  }

  public dispatch(event: AppServiceEnum): void {
    this._messages$.next(event);
  }
}
