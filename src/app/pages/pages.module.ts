import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

//NG2 charts
import { ChartsModule } from 'ng2-charts';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
//pipe module
import { PipesModule } from '../pipes/pipes.module';

//temporal

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficadonaComponent } from '../components/graficadona/graficadona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { UndmedidaComponent } from './undmedida/undmedida.component';
import { ProductosComponent } from './productos/productos.component';
import { CargoComponent } from './cargo/cargo.component';
import { TipocomprobanteComponent } from './tipocomprobante/tipocomprobante.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ComprasComponent } from './compras/compras.component';
import { EmpleadosComponent } from './empleados/empleados.component';




//componentes adicionales

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficadonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        CategoriaComponent,
        UndmedidaComponent,
        ProductosComponent,
        CargoComponent,
        TipocomprobanteComponent,
        ProveedoresComponent,
        ComprasComponent,
        EmpleadosComponent
    ],
    exports:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficadonaComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule
    ]
})

export class PagesModule{ }