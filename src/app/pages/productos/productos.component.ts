import { Component, OnInit } from '@angular/core';
import { ProductoService, CategoriaService, UndmedidaService } from 'src/app/services/service.index';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: []
})
export class ProductosComponent implements OnInit {


  productos:any[]=[];
  

  constructor(
    private prodServ: ProductoService
  ) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(){
    this.prodServ.cargarProductos()
        .subscribe(resp=>{
          this.productos=resp.result;
          console.log(this.productos);
        });
  }
  buscarProducto(termino: string){
    if(termino.length<=0){
      this.cargarProductos();
      return;
    }
    this.prodServ.buscarProducto(termino)
        .subscribe(resp=>this.productos=resp.result);
  }
 
}
