import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/Cliente';
import { ClientesService } from 'src/app/servicios/Clientes.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  tituloPagina = "Registro";
  // cliente = { nombre: "", apellido: "", telefono: "", email: "" };
  // quiereContacto: boolean = false;
  formularioCliente: FormGroup;

 quiereContacto: boolean = false;

  constructor(private _router: Router,private clienteService: ClientesService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formularioCliente = this.formBuilder.group({
      "id": [null],
      "nombre": [null],
      "apellido": [null],
      "email": [null],
      "telefono": [null],
      
    });
  }

  contactar(){
      this.quiereContacto=!this.quiereContacto;
    }

  goInicio(): void {
    this._router.navigate(['/inicio']);
  }
  

  guardarCliente(): void {
    // alert( "En construccion" );
    // this._router.navigate( ["/vehiculos"] );
    let cliente: Cliente = { ...this.formularioCliente.value };
    console.log(cliente);
       
    if((this.quiereContacto && cliente.email==(null))||(this.quiereContacto && cliente.telefono==(null))){
      alert("Los campos email y telefono son requeridos");
    }else{
      this.clienteService.agregarCliente(cliente).subscribe((respuesta) => {
      alert(respuesta.mensaje);
      console.log(respuesta);
      
    },
      (errorHttp: HttpErrorResponse) => {
        console.log(errorHttp.error);
        let mensaje = errorHttp.error.mensaje;
        mensaje += errorHttp.error.error?.id ? (' - ' + errorHttp.error.error?.id) : "";
        mensaje += errorHttp.error.error?.nombre ? (' - ' + errorHttp.error.error?.nombre) : "";
        mensaje += errorHttp.error.error?.apellido ? (' - ' + errorHttp.error.error?.apellido) : "";
        mensaje += errorHttp.error.error?.email ? (' - ' + errorHttp.error.error?.email) : "";
        mensaje += errorHttp.error.error?.telefono ? (' - ' + errorHttp.error.error?.telefono) : "";
         alert(mensaje);
      });
    }

    
  }


}
