import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'copperToGold'
})
export class CopperToGoldPipe implements PipeTransform {

  transform(value: string): number {
    return parseInt(value) / 10000;
  }

}
