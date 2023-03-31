import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './paginas/vehiculos/vehiculos.component';
import { VehiculoDetalleComponent } from './paginas/VehiculoDetalle/VehiculoDetalle.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { ClientesComponent } from './paginas/cliente/clientes.component';


const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'clientes',
    component:ClientesComponent
  },
  {
    path: 'vehiculos',
    component:VehiculosComponent
  },
  {
    path: 'vehiculos/:codigo',
    component:VehiculoDetalleComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }