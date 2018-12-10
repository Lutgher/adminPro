import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(
    private http: HttpClient
  ) { }
  
  cargarTipoComprobante():Observable<any>{
    let url=URL_SERVICIOS+'/api/tipocomprobante';
    return this.http.get(url);
  }

}
