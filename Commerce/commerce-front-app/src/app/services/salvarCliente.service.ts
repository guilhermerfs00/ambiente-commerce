import { Injectable } from '@angular/core';
import { Cliente } from '../resources/classes/cliente.class';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteService {

    constructor(
        private http: HttpClient ) {

    }
    
    private userUrl = 'http://localhost:8080/usuario';

    salvarCliente(cliente: Cliente) {
        return this.http.post(this.userUrl + '/salvar', cliente);
    }
}