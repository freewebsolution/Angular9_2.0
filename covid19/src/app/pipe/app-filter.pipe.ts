import { Pipe, PipeTransform } from '@angular/core';
import {DatiNazionali} from '../model/dati-nazionali';

@Pipe({
  name: 'appFilter',
  pure: false
})
export class AppFilterPipe implements PipeTransform {
  transform(items: any[], filter: DatiNazionali): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.nuovi_positivi.indexOf(filter.nuovi_positivi) !== -1);
  }
}
