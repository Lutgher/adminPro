import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  constructor(
    private _us: UsuarioService,
    private http: HttpClient
  ) { }

  cargarDepartamento(): Observable<any>{
    let url=URL_SERVICIOS+'/api/departamento';
    return this.http.get(url);
  }

  cargarProvincia(depto: any): Observable<any>{
    let url=URL_SERVICIOS+'/api/provincia/'+depto;
    return this.http.get(url);
  }

  cargarDistrito(prov: any): Observable<any>{
    let url=URL_SERVICIOS+'/api/distrito/'+prov;
    return this.http.get(url);
  }
}
