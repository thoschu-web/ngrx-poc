import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooComponent } from './foo.component';
import { StoreModule } from '@ngrx/store';
import * as fromFoo from './store/foo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FooEffects } from './store/foo.effects';

@NgModule({
  declarations: [FooComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromFoo.fooFeatureKey, fromFoo.reducer),
    EffectsModule.forFeature([FooEffects])
  ],
  exports: [FooComponent]
})
export class FooModule { }
