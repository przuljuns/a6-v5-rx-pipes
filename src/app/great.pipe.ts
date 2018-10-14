import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'great'
})
export class GreatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
