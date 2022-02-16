import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { selectBarStateLoading } from './store/bar.selectors';
import { AppService } from "../app.service";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarComponent implements OnInit {
  public counter$: Observable<number>;
  public other$: Observable<string>;
  public loading$: Observable<boolean>;

  constructor(private readonly appService: AppService, private readonly store: Store) {
    this.counter$ = appService.state$.pipe(map(state => state.counter));
    this.other$ = appService.state$.pipe(map(state => state.other));

    this.loading$ = this.store.pipe(select(selectBarStateLoading));/*.subscribe((f) => {
      console.log(f);
      return f;
    });*/
  }

  ngOnInit(): void {

  }
}
