import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor( 
      public _usuarioService: UsuarioService,
      public router: Router
  ){

  }
  canActivate(){
    if(this._usuarioService.estaLogueado()){
      console.log('paso el gard');
      return true;
    }else{
      console.log('bloqueado por el guard');
      this.router.navigate(['/login']);
      return false;
    }
    
  }
}
