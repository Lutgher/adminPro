import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private _us: UsuarioService,
    private http: HttpClient
  ) { }

  cargarProductos(): Observable<any>{
    let url=URL_SERVICIOS+'/api/producto';
    return this.http.get(url);
  }

  guardarProd(producto: any){
    let url=URL_SERVICIOS+'/api/producto';
    url+='?token='+this._us.token;
    return this.http.post(url, producto)
              .pipe(
                map((resp:any)=>{
                  swal('Registro de Productos','Se registro correctamente', 'success');
                  return resp.result;
                })
              );
  }

  buscarProducto(producto: string ):Observable<any>{
    let url=URL_SERVICIOS+'/api/producto/busca/'+producto;
    return this.http.get(url);
  }

  buscaProductoId(idProd: string):Observable<any>{
    let url=URL_SERVICIOS+'/api/producto/'+idProd;
    return this.http.get(url);
  }
  
}
