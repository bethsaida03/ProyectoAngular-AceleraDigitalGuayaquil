import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/Cliente';
import { ClientesService } from 'src/app/servicios/Clientes.service';
@Component({
  selector: 'app-Clientes',
  templateUrl: './Clientes.component.html',
  styleUrls: ['./Clientes.component.css']
})
export class ClientesComponent implements OnInit {

  
  ngOnInit() {
  }

  nuevoCliente: Cliente = {
    id: 0,
    nombre: '',
    apellido: ''
  };
  constructor(private ClientesService: ClientesService) {}

  // registrarCliente() {
  //   this.ClientesService.registrarCliente(this.nuevoCliente)
  //     .subscribe((cliente: any) => {
  //       console.log('Nuevo cliente registrado:', cliente);
  //       // Resetear el formulario
  //       this.nuevoCliente = {
  //         id: 0,
  //         nombre: '',
  //         apellido: ''
  //       };
  //     });
  // }
}
