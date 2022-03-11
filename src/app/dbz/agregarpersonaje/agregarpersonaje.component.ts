import { Component,Input, OnInit, Output , EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbs.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregarpersonaje',
  templateUrl: './agregarpersonaje.component.html',
  
})
export class AgregarpersonajeComponent  {


  // @Input()  personajes : Personaje[] = []
  // personajes : Personaje[] = []
  // @Input() 
  @Input()  nuevoPersonaje :Personaje  = {
    nombre: '',
    poder : 0
  }

  // @Output() onNuevoPersonaje : EventEmitter <Personaje> = new EventEmitter ();
  agregar(){
    // event.preventDefault()
    if (this.nuevoPersonaje.nombre.trim().length===0) { return ; }
    this.DbzService.agregarNuevoPersonaje(this.nuevoPersonaje);
    // console.log(this.nuevoPersonaje);
    // this.onNuevoPersonaje.emit(this.nuevoPersonaje)
    // this.personajes.push(this.nuevoPersonaje);
    this.personajeDefecto();
    // console.log(this.personajes);
    
  }


  personajeDefecto() : void{
    this. nuevoPersonaje  = {
      nombre: '',
      poder : 0
    }
  }

  constructor(private DbzService : DbzService) {
    }

}
