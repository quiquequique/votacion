import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = [];

  constructor( private http: HttpClient ) {}

 // forma directa, cada vez que se activa dispara el request de get por internet
  // getNominados(){

    // return this.http.get<Game[]>(`${ environment.url }/api/goty`);

  // }

  // alternativa guardando en casche para cosas no muy dinamicas con mejor performance
  getNominados(){

    if( this.juegos.length > 0 ){

      console.log( 'Desde cache ');

      return of( this.juegos );

    }else{

      console.log( 'desde internet' );

      return this.http.get<Game[]>(`${ environment.url }/api/goty`)
        .pipe( tap(
          juegos => this.juegos = juegos
        )
      );
    }
  }

  votarJuego( id: string ){

   return this.http.post(`${ environment.url }/api/goty/${ id }`,{}).pipe(

    catchError( err => {

      console.log('error en la peticion');
      // console.log( err );

      return of( err.error )

    })

   )

  }
}
