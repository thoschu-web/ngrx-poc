import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { AppService } from "./app.service";
import { AppServiceEnum } from './app.service.enum';

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

  constructor(private readonly appService: AppService) {
    this.counter$ = appService.state$.pipe(map(state => state.counter));
    this.other$ = appService.state$.pipe(map(state => state.other));
  }

  public increment(): void {
    this.dispatch(AppServiceEnum.INCREMENT)
  }

  public decrement(): void {
    this.dispatch(AppServiceEnum.DECREMENT)
  }

  public reset(): void {
    this.dispatch(AppServiceEnum.RESET)
  }

  private dispatch(serviceEventEnum: AppServiceEnum): void {
    this.appService.dispatch(serviceEventEnum);
  }
}
