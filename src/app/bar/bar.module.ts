import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarComponent } from './bar.component';
import { StoreModule } from '@ngrx/store';
import * as fromBar from './store/bar.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BarEffects } from './store/bar.effects';

import { loadBarsSuccess } from './store/bar.actions';

@NgModule({
  declarations: [BarComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBar.barFeatureKey, fromBar.reducer),
    EffectsModule.forFeature([BarEffects])
  ],
  exports: [BarComponent]
})
export class BarModule {}
