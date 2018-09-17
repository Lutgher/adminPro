import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModaUploadService {
  public tipo: string;
  public id: string;
  public oculto: string='oculto';

  //suscribri para la notificación

  public notificacion=new EventEmitter<any>();

  constructor() { 
    console.log('Modal listo');
  }
  ocultarModal(){
    this.oculto='oculto';
    this.tipo=null;
    this.id=null;
  }
  mostrarModal(tipo: string, id: string){
    this.oculto='';
    this.id=id;
    this.tipo=tipo;
  }
}
