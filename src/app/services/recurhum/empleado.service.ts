import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(
    private http: HttpClient
  ) { }

  cargarEmpleado():Observable<any>{
    let url=URL_SERVICIOS+'/api/empleado';
    return this.http.get(url);
  }
  buscarEmpleado(nombres: string):Observable<any>{
    let url=URL_SERVICIOS+'/api/empleado/busca/'+nombres;
    return this.http.get(url);
  }
}
