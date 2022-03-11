import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbs.interfaces';

@Injectable()
export class DbzService {
     private _personajes: Personaje[] = [
          {
            nombre :'Goku',
            poder :15000
          },
          {
            nombre :'Vegetta',
            poder :7500
          },
          {
            nombre :'Krillin',
            poder :5000
          },
        ];
     get personajes(): Personaje[]{
        return  [...this._personajes];
     }

     constructor() {
          // console.log('Servicio inicializado');
     }

     agregarNuevoPersonaje(personaje : Personaje ){
          this._personajes.push(personaje);
     }
}