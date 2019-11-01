import { Injectable } from '@angular/core';
import { Cliente } from '../resources/classes/cliente.class';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteService {

    url = 'localhost:8080';

    constructor(private http: HttpClient){

    }

    salvarCliente(cliente: Cliente) {
        return this.http.post(`http://localhost:8080/usuario/salvar/`, cliente).subscribe(res => {
            console.log(res);
        })
    }
}