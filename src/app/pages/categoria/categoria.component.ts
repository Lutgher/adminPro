import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/service.index';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: []
})
export class CategoriaComponent implements OnInit {

  categorias:Categoria[]=[];

  constructor(
    private catServ: CategoriaService
  ) { }

  ngOnInit() {
    this.cargarCategoria();
  }

  cargarCategoria(){
    this.catServ.cargarCategoria().subscribe((resp:any)=>{
      this.categorias=resp.result;
    });
  }

  buscaCategoria(termino: string){
    if(termino.length<=0){
      this.cargarCategoria();
      return;
    }
    this.catServ.buscarCategoria(termino)
        .subscribe(resp=>{
          this.categorias=resp.result;
        });
  }
}
