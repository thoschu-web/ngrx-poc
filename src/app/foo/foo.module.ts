import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FooComponent } from './foo.component';
import { fooFeatureKey, reducer } from './store/foo.reducer';
import { FooEffects } from './store/foo.effects';

@NgModule({
  declarations: [FooComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fooFeatureKey, reducer),
    EffectsModule.forFeature([FooEffects])
  ],
  exports: [FooComponent]
})
export class FooModule {}
