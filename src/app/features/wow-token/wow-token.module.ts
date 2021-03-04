import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@shared/modules/material/material.module';

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
    HttpClientModule,
    MaterialModule,
    WowTokenRoutingModule
  ]
})
export class WowTokenModule { }
