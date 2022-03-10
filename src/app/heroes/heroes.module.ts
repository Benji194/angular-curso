import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";
import { HeroeCoponenet } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
     declarations :[
          HeroeCoponenet,
          ListadoComponent
     ],
     exports: [
          ListadoComponent
     ],
     imports : [
          CommonModule
     ]
})
export class HeroesModule {

}