import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable } from "rxjs";

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
    this.counter$ = appService.selector<number>('counter');
    this.other$ = appService.selector<string>('other');
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
    this.appService.action(serviceEventEnum);
  }
}
