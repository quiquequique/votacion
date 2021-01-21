import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/interfaces';
import { GameService } from '../../services/game.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})

export class GotyComponent implements OnInit {

  juegos: Game[] = []

  constructor(private gameService: GameService) { }

  ngOnInit(): void {

    this.gameService.getNominados()
    .subscribe( res => {
      console.log( res );
      this.juegos = res;
    })

  }

  voto( id: string ){

    // console.log( id );
    this.gameService.votarJuego( id ).subscribe( (res: { ok: boolean, mensaje: string }) => {
      // console.log( res );
      if( res.ok ) {

        Swal.fire('Gracias', res.mensaje, 'success');

      }else{

        Swal.fire('Oops', res.mensaje, 'error');

      }

    });

  };

}
