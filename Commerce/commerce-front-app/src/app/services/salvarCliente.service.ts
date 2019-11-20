import { Injectable } from '@angular/core';
import { Cliente } from '../resources/classes/cliente.class';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../resources/classes/usuarios.class';

@Injectable()
export class ClienteService {

    constructor(private http: HttpClient) {

    }
    
    private userUrl = 'http://localhost:8080/usuario';

    salvarCliente(cliente: Cliente) {
        return this.http.post(this.userUrl + '/salvar', cliente);
    }
    
    public buscarLista(): Observable<User[]> {
        return this.http.get<User[]>(this.userUrl + '/lista');
    }
}