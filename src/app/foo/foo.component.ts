import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable  } from "rxjs";
import { map } from "rxjs/operators";

import { FooInterface } from "./store/foo.interface";
import { loadFoos, loadFoosSuccess } from './store/foo.actions';
import { AppService } from "../app.service";
import {FooState} from "./store/foo.reducer";

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooComponent implements OnInit {
  public counter$: Observable<number>;
  public other$: Observable<string>;
  public state$: Observable<any> | undefined;

  constructor(private readonly appService: AppService, private readonly store: Store) {
    this.counter$ = appService.state$.pipe(map(state => state.counter));
    this.other$ = appService.state$.pipe(map(state => state.other));
  }

  ngOnInit(): void {
    const fooPayload: FooInterface[] = [{
      id: 77,
      foo: 'hello hamburg'
    }];

    this.store.dispatch(loadFoosSuccess({data: fooPayload}));
    //this.state$ = this.store.pipe(map((state) => state.foos.id))
  }
}
