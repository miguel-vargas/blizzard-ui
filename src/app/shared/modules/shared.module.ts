import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  exports: [
    HttpClientModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
