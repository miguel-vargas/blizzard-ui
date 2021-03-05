import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  exports: [
    HttpClientModule,
    FlexLayoutModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
