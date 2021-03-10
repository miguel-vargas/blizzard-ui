import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/modules/shared.module';

import { WowTokenRoutingModule } from './wow-token-routing.module';
import { CopperToGoldPipe } from './pipes/copper-to-gold.pipe';
import { EpochToDatePipe } from './pipes/epoch-to-date.pipe';
import { WowTokenComponent } from './components/wow-token.component';
import { WowTokenCardComponent } from './components/wow-token-card/wow-token-card.component';
import { LoadingCardComponent } from './components/loading-card/loading-card.component';
import { ErrorPanelComponent } from './components/error-panel/error-panel.component';

@NgModule({
  declarations: [
    CopperToGoldPipe,
    EpochToDatePipe,
    
    WowTokenComponent,
    WowTokenCardComponent,
    LoadingCardComponent,
    ErrorPanelComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WowTokenRoutingModule
  ]
})
export class WowTokenModule { }
