import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DatiCovid19} from '../model/dati-covid19';
import {Observable} from 'rxjs';
import {DatiProv} from '../model/dati-prov';
import {DatiNazionali} from '../model/dati-nazionali';

const APIREGIONI = `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json`;

const APIPROVINCE = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json';

const APINAZIONALE = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json';
@Injectable({
  providedIn: 'root'
})
export class DatiService {
  constructor(private http: HttpClient) { }
  // LETTURA DATI COVID REGIONI
  getDati(): Observable<DatiCovid19[]> {
    return  this.http.get<DatiCovid19[]>(APIREGIONI);
  }

  // LETTURA DATO COVID PROVINCE
  getDatiPro(): Observable<DatiProv[]> {
    return  this.http.get<DatiProv[]>(APIPROVINCE);
  }

  // LETTURA DATO COVID NAZIONALE
  getDatiNaz(): Observable<DatiNazionali[]> {
    return  this.http.get<DatiNazionali[]>(APINAZIONALE);
  }
}
