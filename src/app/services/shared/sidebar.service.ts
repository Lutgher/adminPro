import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any =[
    {
      titulo: 'principal',
      icono:'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Graficas', url: '/grafica1' },
        { titulo: 'Promesas', url: '/promesas' },
        { titulo: 'rxjs', url: '/rxjs' }
      ]
    },
    // {
    //   titulo: 'Mantenimientos',
    //   icono:'mdi mdi-folder-lock-open',
    //   submenu:[
    //     {titulo:'Usuarios', url:'/usuarios'},
    //     {titulo:'Hospitales', url:'/hospitales'},
    //     {titulo:'Medicos',url:'/medicos'}
    //   ]
    // },
    {
      titulo: 'Almacén',
      icono:'ti-truck',
      submenu:[
        {titulo:'Categorias',url:'/categorias'},
        {titulo:'Unidades de Medida',url:'/unidadmedida'},
        {titulo:'Cátalogo de Productos', url:'/producto'}
      ]
    },
    {
      titulo: 'Compras',
      icono:'mdi mdi-shopping',
      submenu:[
        {titulo:'Proveedores',url:'/proveedor'},
        {titulo:'Registro de Compras',url:'/compras'}
      ]
    },
    {
      titulo: 'Ventas',
      icono:'icon-basket-loaded',
      submenu:[
        {titulo:'Tipo Comprobante',url:'/tipoComprobante'}
      ]
    },
    {
      titulo: 'Recursos Humanos',
      icono:'icon-people',
      submenu:[
        {titulo:'Cargos',url:'/cargo'},
        {titulo:'Empleado', url:'/empleado'},
        {titulo:'Usuarios', url:'/usuarios'}
      ]
    }
  ]

  constructor() { }
}
