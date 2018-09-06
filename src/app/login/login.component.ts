import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';


declare function init_plugins();
declare const gapi: any;//libreria gapi 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email:string;
  recuerdame: boolean=false;

  auth2: any;

  constructor( 
    public router: Router,
    public _usuarioServices: UsuarioService
  ) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email=localStorage.getItem('email') || '';
    if( this.email.length > 1 ) this.recuerdame=true;
  }
  
  googleInit(){
    gapi.load('auth2',()=>{
      this.auth2 =  gapi.auth2.init({
        client_id:'514847810623-p505l1b3glmkq92ptrn1npuo9fd55n0t.apps.googleusercontent.com',
        cookiepolicy:'single_host_origin',
        scope:'profile email'
      });

      this.attachSignin(document.getElementById('btnGoogle'));
    });
  }


  attachSignin( element ){
    this.auth2.attachClickHandler( element,{},(googleUser)=>{
      // let profile=googleUser.getBasicProfile();
      let token=googleUser.getAuthResponse().id_token;
      this._usuarioServices.loginGoogle(token).subscribe(()=>{
        // this.router.navigate(['/dashboard']);
        window.location.href='#/dashboard';
      });

      // console.log(token);
    } );
  }

  ingresar( forma: NgForm){
    if(forma.invalid) return;

    let usuario=new Usuario(null, forma.value.email, forma.value.password);

    this._usuarioServices.login(usuario, forma.value.recuerdame)
      .subscribe(correcot=>this.router.navigate(['/dashboard']));



    // this._usuarioServices.login(usuario, forma.value.recuerdame)
    // .subscribe(resp=>{
    //   console.log(resp);
    // });
    // console.log(forma.valid);
    // console.log(forma.value);
    // this.router.navigate([ '/dashboard' ]);
  }

}
