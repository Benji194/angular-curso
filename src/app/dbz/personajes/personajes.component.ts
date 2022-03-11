import { Component, Input } from '@angular/core';
import { retry } from 'rxjs';
import { Personaje } from '../interfaces/dbs.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})

export class PersonajesComponent  {
  // @Input('data')  personajes : any[] = []
  // @Input()  personajes : Personaje[] = [];
  get personajes(){
    return this.DbzService.personajes;
  }

  constructor(private DbzService : DbzService) {
 
  }


}


