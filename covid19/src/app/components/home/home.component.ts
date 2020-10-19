import {Component, OnInit} from '@angular/core';
import {DatiCovid19} from '../../model/dati-covid19';
import {DatiService} from '../../shared/dati.service';
import {DatiProv} from '../../model/dati-prov';
import {DatiNazionali} from '../../model/dati-nazionali';

@Component({
  selector: 'app-home',
  template: `
    <div class="row">
      <div class="contInfo mb-1">
        <p class="titolo">Attuali positivi</p>
        <span class="totPos">{{ dati | sum:'totale_positivi' }}</span>
        <div class="sub">
          <p class="subtitolo"> Incremento</p>
          <span class="totPos" *ngFor="let dato of datiNazionali;  index as i; last as last">
            <div *ngIf="last">
<!--              {{datiNazionali[i - 1].nuovi_positivi}}-->
              {{dato.totale_positivi - datiNazionali[i - 1].totale_positivi }}
              <span style="font-size: 0.5em;color:lightgray">
                + ({{dato.totale_positivi - datiNazionali[i - 1].totale_positivi  -( datiNazionali[i - 1].totale_positivi - datiNazionali[i - 2].totale_positivi) }})
              </span>
            </div>
          </span>
        </div>
      </div>
      <div class="contInfo mb-1">
        <p class="titolo">Dimessi guariti</p>
        <span class="guariti">{{ dati | sum:'dimessi_guariti' }}</span>
        <div class="sub">
          <p class="subtitolo"> Incremento</p>
          <span class="guariti" *ngFor="let dato of datiNazionali;  index as i; last as last">
            <div *ngIf="last">
<!--              {{datiNazionali[i - 1].nuovi_positivi}}-->
              {{dato.dimessi_guariti - datiNazionali[i - 1].dimessi_guariti }}
              <span style="font-size: 0.5em;color:lightgray">
                + ({{dato.dimessi_guariti - datiNazionali[i - 1].dimessi_guariti  -( datiNazionali[i - 1].dimessi_guariti - datiNazionali[i - 2].dimessi_guariti) }})
              </span>
            </div>
          </span>
        </div>
      </div>
      <div class=" contInfo  mb-1">
        <p class="titolo">Deceduti</p>
        <span class="deceduti">{{ dati | sum:'deceduti' }}</span>
        <div class="sub">
          <p class="subtitolo"> Incremento</p>
          <span class="deceduti" *ngFor="let dato of datiNazionali;  index as i; last as last">
            <div *ngIf="last">
<!--              {{datiNazionali[i - 1].nuovi_positivi}}-->
              {{dato.deceduti - datiNazionali[i - 1].deceduti }}
              <span style="font-size: 0.5em;color:lightgray">
                + ({{dato.deceduti - datiNazionali[i - 1].deceduti  -( datiNazionali[i - 1].deceduti - datiNazionali[i - 2].deceduti) }})
              </span>
            </div>

          </span>
        </div>
      </div>
      <div class=" contInfo mb-1">
        <p class="titolo">Casi totali</p>
        <span class="totCasi">{{ dati | sum:'totale_casi' }}</span>
        <div class="sub">
          <p class="subtitolo"> Incremento</p>
          <span class="totCasi" *ngFor="let dato of datiNazionali;  index as i; last as last">
            <div *ngIf="last">
<!--              {{datiNazionali[i - 1].nuovi_positivi}}-->
              {{dato.nuovi_positivi}} <span style="font-size: 0.5em;color:lightgray">+ ({{dato.nuovi_positivi - datiNazionali[i - 1].nuovi_positivi }})</span>
            </div>

          </span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 regioni">
        <div class="head">
          <p>Regioni,casi totali,attuali ed incremento</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" *ngFor="let dato of dati |sort:'desc':'totale_casi'">
            {{dato.denominazione_regione}}:<span style="color:red">{{dato.totale_casi}} </span> (<span
            style="color: rgb(255, 170, 0);">{{dato.totale_positivi}}</span>)
            <span style="color: lightgray">+ {{dato.nuovi_positivi}}</span>
          </li>
        </ul>
      </div>
      <div class="col-md-3 regioni">
        <div class="head">
          <p>Province,casi totali ed incremento</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" *ngFor="let dato of datiProvincia |sort:'desc':'totale_casi'">
            {{dato.denominazione_provincia}}: <span style="color:red">{{dato.totale_casi }} </span>
          </li>
        </ul>
      </div>
    </div>


  `,
  styles: [
      `
      .totPos {
        color: rgb(255, 170, 0);
        stroke-width: 2;
        font-size: 5vw;
        line-height: normal;
      }

      .guariti {
        color: green;
        stroke-width: 2;
        font-size: 5vw;
        line-height: normal;
      }

      .deceduti {
        color: lightgrey;
        stroke-width: 2;
        font-size: 5vw;
        line-height: normal;
        width: 50%;
      }

      .totCasi {
        color: red;
        stroke-width: 2;
        font-size: 5vw;
        line-height: normal;
      }

      .contInfo {
        background-color: #343a40;
        padding: 10px;
        color: white;
        text-align: center !important;
        width: 24%;
        margin-left: 0.8%;
      }

      div.sub {
        background-color: #162940;
      }

      div.sub > span {
        font-size: 40px
      }

      p.titolo {
        text-align: left;
        font-size: 14px;
      }

      p.subtitolo {
        font-size: 14px;
        margin-bottom: 2px;
      }

      .list-group-item {
        background-color: #343a40 !important;
        color: lightgrey;
      }

      div.regioni {
        max-height: 388px;
        margin-left: 0.8%;
        overflow: scroll;
        overflow-x: hidden; /* Hide horizontal scrollbar */
      }

      div.head {
        max-height: 388px;
        color: lightgrey;
        font-size: 0.8em;
        background-color: #343a40 !important;
        width: auto;
        max-width: 345px;
        padding: 10px;
        margin-bottom: 0 !important;
      }

      /* width */
      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: rgb(255, 170, 0);
        border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #b30000;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  dati: DatiCovid19[];
  datiProvincia: DatiProv[];
  datiNazionali: DatiNazionali[];

  constructor(private datiService: DatiService) {
    this.getDati();
  }

// DATI REGIONALI
  getDati() {
    this.datiService.getDati()
      .subscribe(res => {
        this.dati = res;
        console.log(this.dati);
      });
  }

// DATI PROVINCIA
  getDatiProv() {
    this.datiService.getDatiPro()
      .subscribe(res => {
        this.datiProvincia = res;
        console.log(this.datiProvincia);
      });
  }

  // DATI NAZIONALI
  getDatiNaz() {
    this.datiService.getDatiNaz()
      .subscribe(res => {
        this.datiNazionali = res;
        console.log(this.datiNazionali);
      });
  }

  ngOnInit(): void {
    this.getDati();
    this.getDatiProv();
    this.getDatiNaz();
  }

}
