import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { UndmedidaComponent } from './undmedida/undmedida.component';
import { ProductosComponent } from './productos/productos.component';
import { CargoComponent } from './cargo/cargo.component';
import { ProductoComponent } from './productos/producto.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ComprasComponent } from './compras/compras.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleados/empleado.component';
import { ProveedorComponent } from './proveedores/proveedor.component';



const pagesRoutes: Routes=[
    { 
        path:'', 
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children:[
            { path:'dashboard', component: DashboardComponent, data:{titulo: 'Dashboard' } },        
            { path:'progress', component: ProgressComponent, data:{titulo: 'Progress' } },
            { path:'grafica1', component: Graficas1Component, data:{titulo: 'Gráficas' } },
            { path:'promesas', component: PromesasComponent, data:{titulo: 'Promesas' } },
            { path:'rxjs', component: RxjsComponent, data:{titulo: 'Rxjs' } },
            { path:'account-settings', component: AccountSettingsComponent, data:{titulo: 'Configuración' } },
            { path:'perfil', component: ProfileComponent, data:{titulo: 'Perfil de usuario'}},
            //mantenimientos
            // { path:'hospitales', component: HospitalesComponent, data:{titulo: 'Mantenimiento de Hospitales'}},
            // { path:'medicos', component: MedicosComponent, data: {titulo: 'Mantenimiento de médicos'}},
            // { path:'medico/:id', component: MedicoComponent, data: {titulo: 'Actualizar médico'}},
            //almacen
            { path:'categorias', component: CategoriaComponent, data: {titulo:'Categorias de Productos'}},
            { path:'unidadmedida', component: UndmedidaComponent, data:{ titulo: 'Unidades de Medidas'}},
            { path:'producto', component: ProductosComponent, data:{titulo:'Catálogo de productos'}},
            { path:'producto/:id', component: ProductoComponent, data:{titulo:'Productos'}},
            //compras
            { path: 'proveedor', component: ProveedoresComponent, data:{titulo:'Proveedores'}},
            { path: 'compras', component: ComprasComponent, data:{titulo:'Registro de Compras'}},
            { path: 'proveedor/:id', component: ProveedorComponent, data:{ titulo: 'Proveedor'}},
            //recurHUma
            { path:'cargo', component: CargoComponent, data:{titulo:'Cargo'}},
            { path:'empleado', component: EmpleadosComponent, data:{titulo:'Empleados'}},
            { path:'empleado/:id', component: EmpleadoComponent, data: {titulo:'Empleados'}},
            { path:'usuarios', component: UsuariosComponent, data:{titulo: 'Mantenimiento de usuarios'}},
            { path:'', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES=RouterModule.forChild(pagesRoutes);