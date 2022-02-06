import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {AppService} from "../app.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-baz',
  templateUrl: './baz.component.html',
  styleUrls: ['./baz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BazComponent implements OnInit {
  public counter$: Observable<number>;
  public other$: Observable<string>;

  constructor(private readonly appService: AppService) {
    this.counter$ = appService.state$.pipe(map(state => state.counter));
    this.other$ = appService.state$.pipe(map(state => state.other));
  }

  ngOnInit(): void { }
}
