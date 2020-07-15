import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'epochToDate'
})
export class EpochToDatePipe implements PipeTransform {

  transform(value: string): Date {
    return new Date(parseInt(value));
  }

}
