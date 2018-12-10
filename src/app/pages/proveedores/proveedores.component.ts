import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/service.index';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styles: []
})
export class ProveedoresComponent implements OnInit {

  proveedores: any[]=[];

  constructor(
    private _provServ: ProveedorService
  ) { }

  ngOnInit() {
    this.cargarProveedor();
  }

  cargarProveedor(){
    this._provServ.cargarProveedor()
        .subscribe(resp=>{
          this.proveedores=resp.result;
        })
  }

  buscarProveedor(termino: string){
    if(termino.length<=0){
      this.cargarProveedor();
      return;
    }
    this._provServ.buscaProveedor(termino)
        .subscribe(resp=>{
          this.proveedores=resp.result;
        })
  }

}
