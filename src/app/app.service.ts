import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { dec, inc } from 'ramda';

import { AppServiceEnum } from './app.service.enum';
import { AppServiceInterface } from './app.service.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public readonly state$: Observable<AppServiceInterface>;
  private readonly _state$: BehaviorSubject<AppServiceInterface>;
  private _state: AppServiceInterface;
  private static readonly initStateObject: AppServiceInterface = { counter: 1, other: Date.now().toString() };

  constructor() {
    this._state = Object.freeze<AppServiceInterface>(AppService.initStateObject);
    this._state$ = new BehaviorSubject<AppServiceInterface>(this._state);
    this.state$ =this._state$.asObservable();
  }

  private static handleCounterState(state: AppServiceInterface, counter: number): AppServiceInterface {
    return Object.freeze<AppServiceInterface>({
      ...state,
      counter
    });
  }

  private static handleOtherState(state: AppServiceInterface, other: string): AppServiceInterface {
    return Object.freeze<AppServiceInterface>({
      ...state,
      other
    });
  }

  private calculateCounterState(state: AppServiceInterface, event: AppServiceEnum): AppServiceInterface {
    switch(event) {
      case AppServiceEnum.INCREMENT: {
        const newCounterValue: number = dec(state.counter);
        const newOtherValue: string = this.createDateString(state);
        const incrementState: AppServiceInterface = AppService.handleCounterState(state, newCounterValue);
        const newState: AppServiceInterface = AppService.handleOtherState(incrementState, newOtherValue);

        return newState;

        break;
      }
      case AppServiceEnum.DECREMENT: {
        const newCounterValue: number = inc(state.counter);
        const newOtherValue: string = this.createDateString(state);
        const decrementState: AppServiceInterface = AppService.handleCounterState(state, newCounterValue);
        const newState: AppServiceInterface = AppService.handleOtherState(decrementState, newOtherValue);

        return newState;

        break;
      }
      case AppServiceEnum.RESET: {
        const newCounterValue: number = 0;
        const newOtherValue: string = this.createDateString(state);
        const resetState: AppServiceInterface = AppService.handleCounterState(state, newCounterValue);
        const newState: AppServiceInterface = AppService.handleOtherState(resetState, newOtherValue);

        return newState;

        break;
      }
      default: {
        return state;
      }
    }
  }

  private createDateString(state: AppServiceInterface): string {
    return state.other.concat(';', Date.now().toString());
  }

  public dispatch(event: AppServiceEnum): void {
    this._state = this.calculateCounterState(this._state, event);
    this._state$.next(this._state);
  }

  // public foo(): void {
  //   let messages = [AppServiceEnum.INCREMENT, AppServiceEnum.DECREMENT, AppServiceEnum.INCREMENT, AppServiceEnum.INCREMENT, AppServiceEnum.RESET];
  //
  //   const res: AppServiceInterface = messages.reduce(this.calculateCounterState, {
  //     counter: 0,
  //     other: 'Tom S.'
  //   });
  //
  //   console.log(res);
  // }
}
