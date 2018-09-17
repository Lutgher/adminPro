import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModaUploadService } from '../components/moda-upload/moda-upload.service';

import { 
    SettingsService, 
    SharedService, 
    SidebarService, 
    UsuarioService, 
    LoginGuardGuard,
    SubirArchivoService
 } from "./service.index";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
    
  ],
  providers:[
    SettingsService,
    SharedService,
    SidebarService,
    UsuarioService,
    LoginGuardGuard,
    SubirArchivoService,
    ModaUploadService
  ],
  declarations: []
})
export class ServiceModule { }
