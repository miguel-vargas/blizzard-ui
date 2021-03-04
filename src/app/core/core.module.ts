import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@shared/modules/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    CoreComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    CoreRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [CoreComponent]
})
export class CoreModule { }
