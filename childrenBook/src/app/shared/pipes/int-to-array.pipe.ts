import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intToArray'
})
export class IntToArrayPipe implements PipeTransform {

  transform(value:number): any {
    return new Array(value);
  }

}
