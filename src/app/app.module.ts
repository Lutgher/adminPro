import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas
import { APP_ROUTES } from './app.routes';
//moduloes
import { PagesModule } from './pages/pages.module';
//temporal
import { FormsModule } from '../../node_modules/@angular/forms';
//APP_ROUTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// import { IncrementadorComponent } from './components/incrementador/incrementador.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    // IncrementadorComponent
  ],
  imports: [
    BrowserModule, 
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
