import { Component, OnInit } from '@angular/core';
import { CargoService, UsuarioService, CiudadesService, PersonaService} from 'src/app/services/service.index';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styles: []
})
export class EmpleadoComponent implements OnInit {
  tipoDocs:any[]=[];
  operadores:any[]=[];
  deptos:any[]=[];
  provs:any[]=[];
  dists:any[]=[];
  cargos:any[]=[];
  
  persona={
    pers_apel_pat:'',
    pers_apel_mat:'',
    pers_nomb:'',
    pers_tipoDoc_code:'undefined',
    pers_nro_doc:'',
    pers_alias:'',
    pers_tipPers_code:'P',
    pers_usua: localStorage.getItem('id'),
    empl_sexo:'',
    empl_fech_nac:'',
    dire_desc:'',
    dire_refe:'',
    dire_dist_id:'',
    email_desc:'',
    fono_oper_code:'',
    fono_nro:'',
    fono_nro_ref:'',
    empl_carg_id:'',
    empl_fech_contr:'',
    empl_tiemp_contr:'',
    empl_salario:''
  }
  constructor(
    private _tipDocServ: CargoService,
    private _deptoServ: CiudadesService,
    private _us: UsuarioService,
    private _persServ: PersonaService
  ) { }

  ngOnInit() {
    this.cargarTipoDoc();
    this.cargarTipoOperador();
    this.cargarDepto();
    this.cargarCargo();
  }

  cargarTipoDoc(){
    this._tipDocServ.cargarTipoDoc()
        .subscribe(resp=>{
          this.tipoDocs=resp.result;
        });
  }
  cargarTipoOperador(){
    this._tipDocServ.cargarOperador()
        .subscribe(resp=>{
          this.operadores=resp.result;
        });
  }
  cargarCargo(){
    this._tipDocServ.cargarCargo()
        .subscribe(resp=>{
          this.cargos=resp.result;
        });
  }

  cargarDepto(){
    this._deptoServ.cargarDepartamento()
        .subscribe(resp=>{
          this.deptos=resp.result;
        });
  }
  cambiarDepto(prov_depto_id){
    this._deptoServ.cargarProvincia(prov_depto_id)
        .subscribe(resp=>{
          this.provs=resp.result;
        })
  }
  cambiarProv(dist_prov_id){
    this._deptoServ.cargarDistrito(dist_prov_id)
        .subscribe(resp=>{
          this.dists=resp.result;
        })
  }
  cambioDistr(event){

  }

  cambioTipoDoc(event){

  }
  cambioOperador(event){

  }
  cambioCargo(event){

  }


  guardarPersona(f:NgForm){
    if(f.invalid){
      return;
    }
    this._persServ.guardarPersona(this.persona)
        .subscribe();
    this._persServ.guardarDireccion(this.persona)
        .subscribe();
    this._persServ.guardarCorreo(this.persona)
        .subscribe();
    this._persServ.guardarFono(this.persona)
        .subscribe();
    this._persServ.guardarEmpleado(this.persona)
        .subscribe((resp:any)=>{
          this.persona={
            pers_apel_pat:'',
            pers_apel_mat:'',
            pers_nomb:'',
            pers_tipoDoc_code:'',
            pers_nro_doc:'',
            pers_alias:'',
            pers_tipPers_code:'P',
            pers_usua: localStorage.getItem('id'),
            empl_sexo:'',
            empl_fech_nac:'',
            dire_desc:'',
            dire_refe:'',
            dire_dist_id:'',
            email_desc:'',
            fono_oper_code:'',
            fono_nro:'',
            fono_nro_ref:'',
            empl_carg_id:'',
            empl_fech_contr:'',
            empl_tiemp_contr:'',
            empl_salario:''
          }
        });
  }
}
