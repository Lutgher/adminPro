import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/service.index';
import { Cargo } from '../../models/cargo';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styles: []
})
export class CargoComponent implements OnInit {


  cargos: Cargo[]=[];

  constructor(
    private cargoServ: CargoService
  ) { }

  ngOnInit() {
    this.cargarCargo();
  }

  cargarCargo(){
    this.cargoServ.cargarCargo()
        .subscribe((resp:any)=>{
          this.cargos=resp.result;
          console.log(this.cargos);
        });
  }

  buscarCargo(termino: string){
    if(termino.length<=0){
      this.cargarCargo();
      return;
    }
    this.cargoServ.buscarCargo(termino)
        .subscribe(resp=>{
          this.cargos=resp.result;
        });
  }

}
