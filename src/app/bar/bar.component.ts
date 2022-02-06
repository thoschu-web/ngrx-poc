import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {AppService} from "../app.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarComponent implements OnInit {
  public counter$: Observable<number>;
  public other$: Observable<string>;

  constructor(private readonly appService: AppService) {
    this.counter$ = appService.state$.pipe(map(state => state.counter));
    this.other$ = appService.state$.pipe(map(state => state.other));
  }

  ngOnInit(): void { }
}
