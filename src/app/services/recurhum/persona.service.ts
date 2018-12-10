import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  constructor(
    private http: HttpClient
  ) { }

  guardarPersona(persona:any){
    let url=URL_SERVICIOS+'/api/persona';
    return this.http.post(url,persona)
              .pipe(
                map((resp:any)=>{
                  swal('Registro','Se registro correctamente','success');
                  return resp.result;
              }))
  }

  guardarDireccion(persona:any){
    let url=URL_SERVICIOS+'/api/direccion';
    return this.http.post(url, persona)
            .pipe(
              map((resp:any)=>{
                return resp.result;
              })
            );
  }
  guardarCorreo(persona:any){
    let url=URL_SERVICIOS+'/api/email';
    return this.http.post(url,persona)
            .pipe(
              map((resp:any)=>{
                return resp.result;
              })
            );
  }

  guardarFono(persona:any){
    let url=URL_SERVICIOS+'/api/fono';
    return this.http.post(url, persona)
              .pipe(
                map((resp:any)=>{
                  return resp.result;
                })
              );
  }

  guardarEmpleado(persona: any){
    let url=URL_SERVICIOS+'/api/empleado';
    return this.http.post(url, persona)
              .pipe(
                  map((resp:any)=>{
                    return resp.result;
                  })
              );
  }
}
