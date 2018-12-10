import { Component, OnInit } from '@angular/core';
import { UndMedida } from '../../models/undmedidas';
import { UndmedidaService } from 'src/app/services/service.index';

@Component({
  selector: 'app-undmedida',
  templateUrl: './undmedida.component.html',
  styles: []
})
export class UndmedidaComponent implements OnInit {

  // undMedidas: UndMedida[]=[];
  undMedidas:any[]=[];

  constructor(
    private _undMedServ: UndmedidaService
  ) { }

  ngOnInit() {
    this.cargarUnd();
  }

  cargarUnd(){
    this._undMedServ.cargarUndMedida()
        .subscribe(resp=>{
          this.undMedidas=resp.result;
        });
  }

  buscarUnidad(termino: string){
    if(termino.length<=0){
      this.cargarUnd();
      return;
    }

    this._undMedServ.buscarUndMedida(termino)
        .subscribe(resp=>{
          this.undMedidas=resp.result;
        });
  }

}
