import { Injectable } from '@angular/core';
import { Cliente } from '../resources/classes/cliente.class';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../resources/classes/usuarios.class';
import { LoginClass } from '../resources/classes/login.class';

@Injectable()
export class ValidarLoginService {

    constructor(private http: HttpClient) {

    }
    
    private userUrl = 'http://localhost:8080/usuario';

    login(login: LoginClass) {
        return this.http.post(this.userUrl + '/verificar-login', login);
    }
}