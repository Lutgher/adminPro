import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(
    private _us: UsuarioService,
    private http: HttpClient
  ) { }

  cargarCargo(): Observable<any>{
    let url=URL_SERVICIOS+'/api/cargo';
    return this.http.get(url);
  }

  cargarOperador():Observable<any>{
    let url=URL_SERVICIOS+'/api/operador';
    return this.http.get(url);
  }
  cargarTipoDoc(): Observable<any>{
    let url=URL_SERVICIOS+'/api/tipoDoc';
    return this.http.get(url);
  }
  cargarTipoPers(){
    let url=URL_SERVICIOS+'/api/tipoPersona';
    return this.http.get(url);
  }
  buscarCargo(cargo: string): Observable<any>{
    let url=URL_SERVICIOS+'/api/cargo/busca/'+cargo;
    return this.http.get(url);
  }
}
