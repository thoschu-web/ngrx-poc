import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';

import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import { loadFoos } from './store/foo.actions';
import {AppService} from "../app.service";

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooComponent implements OnInit {
  public counter$: Observable<number>;
  public other$: Observable<string>;

  constructor(private readonly appService: AppService, private readonly store: Store) {
    this.counter$ = appService.state$.pipe(map(state => state.counter));
    this.other$ = appService.state$.pipe(map(state => state.other));
  }

  ngOnInit(): void {
    this.store.dispatch(loadFoos());
  }
}
