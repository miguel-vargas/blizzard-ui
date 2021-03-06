import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  exports: [
    CardModule,
    SkeletonModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
