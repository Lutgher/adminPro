import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UndmedidaService {

  constructor(
    private _us: UsuarioService,
    private http: HttpClient
  ) { }

  cargarUndMedida():Observable<any>{
    let url=URL_SERVICIOS+'/api/undMedida';
    return this.http.get(url);
  }

  buscarUndMedida(unidad: string): Observable<any>{
    let url=URL_SERVICIOS+'/api/undMedida/busca/'+unidad;
    return this.http.get(url);
  }
}
