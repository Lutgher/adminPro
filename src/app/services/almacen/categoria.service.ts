import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../../models/categoria';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private _us: UsuarioService,
    private http: HttpClient
  ) { }

  cargarCategoria():Observable<any>{
    let url=URL_SERVICIOS+'/api/categoria';
    return this.http.get(url);
  }

  buscarCategoria(cat_desc: string): Observable<any>{
    let url=URL_SERVICIOS+'/api/categoria/busca/'+cat_desc;
    return this.http.get(url);
  }

  

}
