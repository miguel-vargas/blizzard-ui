import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';

import { MaterialModule } from '@shared/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CopperToGoldPipe } from '@shared/pipes/copper-to-gold.pipe';
import { EpochToDatePipe } from '@shared/pipes/epoch-to-date.pipe';
import { DotnetCoreTokensComponent } from './components/dotnet-core-tokens/dotnet-core-tokens.component';
import { SpringBootTokensComponent } from './components/spring-boot-tokens/spring-boot-tokens.component';

@NgModule({
  declarations: [
    CoreComponent,
    CopperToGoldPipe,
    EpochToDatePipe,
    DotnetCoreTokensComponent,
    SpringBootTokensComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    CoreRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [CoreComponent]
})
export class CoreModule { }
