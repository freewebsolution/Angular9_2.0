import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, args: number = 10): string {
    let result = value;
    if (value) {
      if (value.length > args) {
        result = value.substring(0, args) + '...';
      } else {
        result = value;
      }
    }
    return result;
  }

}
