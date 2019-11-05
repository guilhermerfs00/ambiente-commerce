import { Injectable } from '@angular/core';
import { Cliente } from '../resources/classes/cliente.class';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:4200/api/usuario/salvar/';
@Injectable()
export class ClienteService {

    constructor(
        private http: HttpClient ) {

    }

    salvarCliente(cliente: Cliente) {
        return this.http.post(API_URL, cliente).subscribe(res => {
            console.log(res);
        })
    }
}