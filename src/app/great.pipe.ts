import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'great'
})
export class GreatPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value + ' the great';
  }

}
