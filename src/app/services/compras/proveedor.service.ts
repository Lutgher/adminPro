import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(
    private http: HttpClient
  ) { }

  cargarProveedor(): Observable<any>{
    let url=URL_SERVICIOS+'/api/proveedor';
    return this.http.get(url);
  }

  buscaProveedor(proveedor: string):Observable<any>{
    let url=URL_SERVICIOS+'/api/proveedor/busca/'+proveedor;
    return this.http.get(url);
  }

  guardar(persona:any){
    let url=URL_SERVICIOS+'/api/proveedor';
    return this.http.post(url, persona)
              .pipe(
                map((resp:any)=>{
                  return resp.result;
                })
              );
  }

  buscaProveRuc(ruc: any):Observable<any>{
    let url=URL_SERVICIOS+'/api/proveedor/ruc/'+ruc;
    return this.http.get(url);
  }

}
