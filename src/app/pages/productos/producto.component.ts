import { Component, OnInit } from '@angular/core';
import { CategoriaService, UndmedidaService, ProductoService, UsuarioService } from 'src/app/services/service.index';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  categorias: any[]=[];
  undidades: any[]=[];
  producto={
    prod_undMed_id:'',
    prod_cat_id:'',
    prod_nomb:'',
    prod_desc:'',
    prod_pres:'',
    prod_marc:'',
    prod_cont:'',
    prod_stock_min:'',
    prod_stock_med:'',
    prod_stock_nor:'',
    prod_prec_may:'',
    prod_prec_min:'',
    prod_prec_und:'',
    prod_stock:'',
    prod_stock_und:'',
    prod_codi_barr:'',
    prod_usua: localStorage.getItem('id')
  };

  constructor(
    private cateService: CategoriaService,
    private undMedServ: UndmedidaService,
    private prodServ: ProductoService,
    private _us:UsuarioService
  ) { 
    
  }

  ngOnInit() {
    this.cargarCategorias();
    this.cargarUnidades();
  }
  cargarCategorias(){
    this.cateService.cargarCategoria()
        .subscribe(resp=>{
          this.categorias=resp.result;
        })
  }
  cargarUnidades(){
    this.undMedServ.cargarUndMedida()
        .subscribe(resp=>{
          this.undidades=resp.result;
        });
  }
  guardarProducto(f: NgForm){
    if(f.invalid) return;
    this.prodServ.guardarProd(this.producto)
        .subscribe(resp=>{
          this.producto={
            prod_undMed_id:'',
            prod_cat_id:'',
            prod_nomb:'',
            prod_desc:'',
            prod_pres:'',
            prod_marc:'',
            prod_cont:'',
            prod_stock_min:'',
            prod_stock_med:'',
            prod_stock_nor:'',
            prod_prec_may:'',
            prod_prec_min:'',
            prod_prec_und:'',
            prod_stock:'',
            prod_stock_und:'',
            prod_codi_barr:'',
            prod_usua:localStorage.getItem('id')
          };
        });
  }

  cambiarCategoria(event){

  }
  cambiarUnidadMedida(prod_undMed_id){
    
  }

 

}
