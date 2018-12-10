import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/service.index';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: []
})
export class EmpleadosComponent implements OnInit {

  empleados:any[]=[];
  constructor(
    private _empServ: EmpleadoService
  ) { }

  ngOnInit() {
      this.cargarEmpleado();

  }

  cargarEmpleado(){
    this._empServ.cargarEmpleado()
        .subscribe(resp=>{
          this.empleados=resp.result;
        });
  }

  buscarEmpleado(termino: string){
    if(termino.length<=0){
      this.cargarEmpleado();
      return;
    }
    this._empServ.buscarEmpleado(termino)
        .subscribe(resp=>{
          this.empleados=resp.result;
        })
  }

}
