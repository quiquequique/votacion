import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];

  constructor( private db: AngularFirestore) { }

  ngOnInit(): void {

    this.db.collection('goty').valueChanges()

        .pipe( map( ( res: Game[]) => {

          // return res.map( ({ name, votos }) => ({ name, value: votos })) version moderna

          return res.map( juego => {
            return {                              // tradicional
              name: juego.name,
              value: juego.votos
          }
        })
        })
      )

      .subscribe( res => {

        // console.log( res );
        this.juegos = res;

      })
  }

}
