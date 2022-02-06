import {ChangeDetectionStrategy, Component} from '@angular/core';

import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import {AppService, ServiceEventEnum} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public readonly title = 'ngrx-poc';
  public counter$: Observable<number>;
  public other$: Observable<string>;

  constructor(public readonly appService: AppService) {
    this.counter$ = appService.state$.pipe(map(state => state.counter));
    this.other$ = appService.state$.pipe(map(state => state.other));
  }

  public increment(): void {
    this.dispatch(ServiceEventEnum.INCREMENT)
  }

  public decrement(): void {
    this.dispatch(ServiceEventEnum.DECREMENT)
  }

  public reset(): void {
    this.dispatch(ServiceEventEnum.RESET)
  }

  private dispatch(serviceEventEnum: ServiceEventEnum): void {
    this.appService.dispatch(serviceEventEnum);
  }

  ngOnInit(): void { }
}
