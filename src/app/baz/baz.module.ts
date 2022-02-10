import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BazComponent } from './baz.component';
import { BazEffects } from './store/baz.effects';
import * as fromBaz from './store/baz.reducer';

@NgModule({
  declarations: [BazComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBaz.bazFeatureKey, fromBaz.reducer),
    EffectsModule.forFeature([BazEffects])
  ],
  exports: [BazComponent]
})
export class BazModule {
  constructor() {
    console.log(fromBaz.bazFeatureKey);
  }
}
