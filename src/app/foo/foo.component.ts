import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable  } from "rxjs";
import { map } from "rxjs/operators";

import { FooInterface } from "./store/foo.interface";
import { loadFoos, loadFoosSuccess, loadFoosFailure } from './store/foo.actions';
import { AppService } from "../app.service";

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
  public loading$: Observable<boolean>;

  constructor(private readonly appService: AppService, private readonly store: Store) {
    this.counter$ = appService.state$.pipe(map(state => state.counter));
    this.other$ = appService.state$.pipe(map(state => state.other));

    console.log(store);



    this.loading$ = this.store.pipe<boolean>(map((state) => {
      // @ts-ignore
      console.dir(state.foo.loading);
      // @ts-ignore
      return state.foo.loading;
    }));
  }

  ngOnInit(): void {
    const fooPayload: FooInterface[] = [{
      id: 77,
      foo: 'hello hamburg'
    }];

    this.store.dispatch(loadFoosSuccess({data: fooPayload}));
  }

  public click(): void {}
}
