// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { VehiculosComponent } from './paginas/vehiculos/vehiculos.component';
// import { CalificacionComponent } from './componentes/calificacion/calificacion.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalificacionComponent } from './componentes/calificacion/calificacion.component';
import { PaginacionTablaComponent } from './componentes/PaginacionTabla/PaginacionTabla.component';
import { UserInterceptor } from './interceptores/userInterceptor';
import { ClientesComponent } from './paginas/cliente/clientes.component';
import { LoginComponent } from './paginas/login/login.component';
import { VehiculoDetalleComponent } from './paginas/VehiculoDetalle/VehiculoDetalle.component';
import { VehiculosComponent } from './paginas/vehiculos/vehiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    CalificacionComponent,
    PaginacionTablaComponent,
    VehiculoDetalleComponent,
    LoginComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
