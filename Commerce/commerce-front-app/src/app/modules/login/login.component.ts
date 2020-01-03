import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/salvarCliente.service';
import { Cliente } from 'src/app/resources/classes/cliente.class';
import { LoginClass } from 'src/app/resources/classes/login.class';
import { ValidarLoginService } from 'src/app/services/validarLogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  erroLogin: boolean;
  contErroLogin: number;

  ngOnInit() {
    this.erroLogin = false;
    this.contErroLogin = 0;
  }

  constructor(public validarLoginService: ValidarLoginService) {
  }

  login = new LoginClass();

  public verificarLogin() {
    
    this.contErroLogin++;

    if(this.contErroLogin > 3) {
      this.erroLogin = true;
    }
    this.validarLoginService.login(this.login).subscribe(data => {
      if (data === true) {
        localStorage.setItem('logado', "true");
      }
    });
  }

}