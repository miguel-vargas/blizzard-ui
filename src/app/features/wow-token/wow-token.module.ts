import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/modules/shared.module';

import { WowTokenRoutingModule } from './wow-token-routing.module';
import { CopperToGoldPipe } from './pipes/copper-to-gold.pipe';
import { EpochToDatePipe } from './pipes/epoch-to-date.pipe';
import { WowTokenComponent } from './components/wow-token.component';

@NgModule({
  declarations: [
    CopperToGoldPipe,
    EpochToDatePipe,
    
    WowTokenComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WowTokenRoutingModule
  ]
})
export class WowTokenModule { }
