import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbs.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {
  // personajes : Personaje[]=[];

  nuevoPersonaje :Personaje ={
    nombre : 'Maestro Roshi',
    poder  :  9000
  }

  // get personajes():Personaje[]{
  //   return this.DbzService.personajes;
  // }


  // agregarNuevoPersonaje(argumento : Personaje ){
  //   // console.log(argumento);
  //   this.personajes.push(argumento);
  // }


  // cambiarNombre(event :any){
  //   console.log(event.target.value );
    
  // }

  // constructor(private DbzService : DbzService) {
  //   // this.personajes=this.DbzService.personajes
  // }

  constructor() {
    
  }
  
}
