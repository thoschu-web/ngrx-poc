import { Injectable } from '@angular/core';

import {BehaviorSubject, Observable, Subject} from 'rxjs';

export interface TestState {
  counter: number;
  other: any;
}

export enum ServiceEventEnum {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  INIT = 'INIT'
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _state: TestState;
  private readonly _state$: BehaviorSubject<TestState>;
  public readonly state$: Observable<TestState>;

  constructor() {
    this._state = Object.freeze<TestState>({
      counter: 1,
      other: 'Tom S.'
    });

    this._state$ = new BehaviorSubject<TestState>(this._state);
    this.state$ =this._state$.asObservable();
  }

  private static handleState(state: TestState, counter: number): TestState {
    return Object.freeze<TestState>({
      ...state,
      counter
    });
  }

  public dispatch(event: ServiceEventEnum): void {
    this._state = this.calculateState(this._state, event);
    this._state$.next(this._state);
  }

  private calculateState(state: TestState, event: ServiceEventEnum): TestState {
    switch(event) {
      case ServiceEventEnum.INCREMENT: {
        const incrementState: TestState = AppService.handleState(state, state.counter + 1);

        return incrementState;

        break;
      }
      case ServiceEventEnum.DECREMENT: {
        const decrementState: TestState = AppService.handleState(state, state.counter - 1);

        return decrementState;

        break;
      }
      case ServiceEventEnum.RESET: {
        const resetState: TestState = AppService.handleState(state, 0);

        return resetState;

        break;
      }
      default: {
        return state;
      }
    }
  }

  public foo(): void {
    let messages = [ServiceEventEnum.INCREMENT, ServiceEventEnum.DECREMENT, ServiceEventEnum.INCREMENT, ServiceEventEnum.INCREMENT, ServiceEventEnum.RESET];

    const res: TestState = messages.reduce(this.calculateState, {
      counter: 0,
      other: 'Tom S.'
    });

    console.log(res);
  }
}
