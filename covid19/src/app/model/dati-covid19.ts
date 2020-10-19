export interface DatiCovid19 {
  data: string;
  stato: string;
  codice_regione: number;
  denominazione_regione: string;
  ricoverati_con_sintomi: number;
  terapia_intensiva: number;
  totale_ospedalizzati: number;
  isolamento_domiciliare: number;
  totale_positivi: number;
  variazione_totale_positivi: number;
  nuovi_positivi: number;
  dimessi_guariti: number;
  deceduti: number;
  casi_da_sospetto_diagnostico: number;
  totale_casi: number;
  tamponi: number;
  casi_testati: number;
  note: string;
}
