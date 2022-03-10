import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
   heroes : string[] =['Spiderman','Ironman','Hulk','Thor','Capitanazo'];
   heroeBorado : string  = '';
  borrarHeroe(){
    // let bor=this.heroes.pop();
    this.heroeBorado  =  this.heroes.shift() || '';
    // console.log(bor);
    
  }

}
