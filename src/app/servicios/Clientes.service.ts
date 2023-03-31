import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";

  agregarCliente(cliente:Cliente){
    let body = this.getParamsCliente(cliente);
    return this.http.post<any>(this.baseUrl+'cliente/', body);
  }
  getParamsCliente(cliente:Cliente){
    let body = new HttpParams();
    body = cliente.id ? body.set('id',cliente.id) : body;
    body = cliente.nombre ? body.set('nombre',cliente.nombre) : body;
    body = cliente.apellido ? body.set('apellido',cliente.apellido) : body;
    body = cliente.email ? body.set('email',cliente.email) : body;
    body = cliente.telefono ? body.set('telefono',cliente.telefono) : body;
    return body;
  }

}
