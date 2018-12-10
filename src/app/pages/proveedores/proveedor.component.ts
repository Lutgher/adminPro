import { Component, OnInit } from '@angular/core';
import { CargoService, UsuarioService, CiudadesService, PersonaService, ProveedorService } from 'src/app/services/service.index';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styles: []
})
export class ProveedorComponent implements OnInit {
  operadores:any[]=[];
  deptos:any[]=[];
  provs:any[]=[];
  dists:any[]=[];
  cargos:any[]=[];
  persona={
    pers_apel_pat:'',
    pers_apel_mat:'',
    pers_nomb:'',
    pers_tipoDoc_code:'06',
    pers_nro_doc:'',
    pers_alias:'',
    pers_tipPers_code:'J',
    pers_usua: localStorage.getItem('id'),
    empl_sexo:'',
    empl_fech_nac:'',
    dire_desc:'',
    dire_refe:'sin ref',
    dire_dist_id:'',
    fono_oper_code:'',
    fono_nro:'',
    fono_nro_ref:''
  }
  constructor(
    private _tipDocServ: CargoService,
    private _deptoServ: CiudadesService,
    private _us: UsuarioService,
    private _persServ: PersonaService,
    private _compServ: ProveedorService
  ) { }

  ngOnInit() {
      this.cargarDepto();
      this.cargarTipoOperador();
  }

  cargarTipoOperador(){
    this._tipDocServ.cargarOperador()
        .subscribe(resp=>{
          this.operadores=resp.result;
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
  cambioOperador(event){

  }

  guardarPersona(f:NgForm){
    if(f.invalid) return;
    this._persServ.guardarPersona(this.persona)
        .subscribe((resp:any)=>{

          this._persServ.guardarDireccion(this.persona)
          .subscribe();
          this._persServ.guardarFono(this.persona)
          .subscribe();
          this._compServ.guardar(this.persona)
              .subscribe((resp:any)=>{
                this.persona={
                  pers_apel_pat:'',
                  pers_apel_mat:'',
                  pers_nomb:'',
                  pers_tipoDoc_code:'06',
                  pers_nro_doc:'',
                  pers_alias:'',
                  pers_tipPers_code:'J',
                  pers_usua: localStorage.getItem('id'),
                  empl_sexo:'',
                  empl_fech_nac:'',
                  dire_desc:'',
                  dire_refe:'sin ref',
                  dire_dist_id:'',
                  fono_oper_code:'',
                  fono_nro:'',
                  fono_nro_ref:''
                }
              });


        });
    
  }

}
