
import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy{

  // intervalo;

  @Input() results: any[] = [];

  //results: any[] = [
  //  {
  //    "name": "juego 1",
  //    "value": 20
  //  },
  //  {
  //    "name": "juego 2",
  //    "value": 35
  //  },
  //  {
  //    "name": "juego 3",
  //    "value": 16
  //  },
  //  {
  //    "name": "juego 4",
  //    "value": 39
  //  }
  //];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  constructor() {

    // this.intervalo = setInterval( () => {

    //   console.log('tick');

    //   const newResults = [...this.results];


    //   for ( let i in newResults ) {

    //     newResults[i].value = Math.round( Math.random() * 500)

    //   }

    //   this.results = [...newResults];

    // }, 1500);

  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
    // clearInterval( this.intervalo ) // evita que se siga ejecutando infinitamente el setInterval y se chupe la memoria
  }

}
