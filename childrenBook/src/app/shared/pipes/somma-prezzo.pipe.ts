import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sommaPrezzo'
})
export class SommaPrezzoPipe implements PipeTransform {

  transform(value:number): any {
    // let sum = 0
    // for (let i = 0; i < value; i++) {
    //   sum += value[i][value];
    // }
    // console.log(sum)
    // return sum;
    // let myArr = String(value).split("").map((num) => {
    //   return Number(num)
    // })
    // return myArr
    // console.log(myArr)
  }
}
