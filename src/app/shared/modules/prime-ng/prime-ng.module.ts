import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  exports: [
    CardModule,
    SkeletonModule
  ]
})
export class PrimeNgModule { }
