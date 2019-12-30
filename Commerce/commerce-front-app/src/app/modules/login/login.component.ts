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

  ngOnInit() {
  }

  constructor(public validarLoginService: ValidarLoginService) {

  }

  login = new LoginClass();

  public verificarLogin() {
    this.validarLoginService.login(this.login).subscribe(data => {
      console.log(data);
    });
  }

}