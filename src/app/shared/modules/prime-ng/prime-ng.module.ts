import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { SkeletonModule } from 'primeng/skeleton';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  exports: [
    CardModule,
    PanelModule,
    SkeletonModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
