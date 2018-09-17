import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../services/service.index';
import { ModaUploadService } from './moda-upload.service';

@Component({
  selector: 'app-moda-upload',
  templateUrl: './moda-upload.component.html',
  styles: []
})
export class ModaUploadComponent implements OnInit {

  // oculto: string;
  imagenSubir: File;
  imagenTemp: string;

  constructor(
    public _subirArchivoService: SubirArchivoService,
    public _modalUploadService: ModaUploadService
  ) 
  { 
  }

  ngOnInit() {
  }

  cerrarModal(){
    this.imagenTemp=null;
    this.imagenSubir=null;

    this._modalUploadService.ocultarModal();
  }
  seleccionImage(archivo: File){
    if(!archivo){
      this.imagenSubir=null;
      return;
    }
    if(archivo.type.indexOf('image')<0){
      swal('Solo imagenes','El archivo seleccionado no es una imagen','error');
      this.imagenSubir=null;
      return;
    }
    this.imagenSubir=archivo;
    //javascript
    let reader=new FileReader();
    let urlImagenTemp=reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result;
  }

  subirImagen(){
    this._subirArchivoService.subirArchivo(this.imagenSubir, this._modalUploadService.tipo, this._modalUploadService.id)
      .then(resp=>{
        this._modalUploadService.notificacion.emit( resp );
        // this._modalUploadService.ocultarModal();
        this.cerrarModal();
      })
      .catch(err=>{
        console.log('Error en la carga... ',err);
      });
  }
}
