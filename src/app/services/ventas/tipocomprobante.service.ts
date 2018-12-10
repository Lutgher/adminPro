import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class TipocomprobanteService {

  constructor(
    private _us: UsuarioService,
    private http: HttpClient
  ) { }

  cargarTipoComprobante(){
    let url=URL_SERVICIOS+'/api/tipocomprobante';
    return this.http.get(url);
  }
}
