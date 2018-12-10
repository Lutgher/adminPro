import { Component, OnInit } from '@angular/core';
import { CompraService, ProveedorService, UndmedidaService } from 'src/app/services/service.index';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styles: []
})
export class ComprasComponent implements OnInit {

  comprobantes:any[]=[];
  unidades:any[]=[];
  proveedores:any={};

  constructor(
    private _compServ: CompraService,
    private _provServ: ProveedorService,
    private _undMedSe: UndmedidaService
  ) { }

  ngOnInit() {
    this.cargarComprobante();
    this.cargarUnidad();
  }

  cargarComprobante(){
    this._compServ.cargarTipoComprobante()
        .subscribe(resp=>{
          this.comprobantes=resp.result;
        });
  }
  cargarUnidad(){
    this._undMedSe.cargarUndMedida()
        .subscribe(resp=>{
          this.unidades=resp.result;
        });
  }
  buscarRuc(ruc: string){
    this._provServ.buscaProveRuc(ruc)
        .subscribe(resp=>{
          console.log(resp.restul);
          if(resp.result.length===0){
            swal('Error', 'No existe el proveedor, Ingrese un RUC Válido', 'error');
            return;
          }else{
            this.proveedores={
              pers_alias: resp.result[0].pers_alias
            };
          }
        });
  }


  cambioCompro(event){
    
  }
  cambioUnidad(event){

  }

}
