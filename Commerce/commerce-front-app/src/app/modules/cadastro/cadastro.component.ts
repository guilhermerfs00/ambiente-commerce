import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/resources/classes/cliente.class';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ClienteService } from 'src/app/services/salvarCliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  ngOnInit() {
  }

  constructor(public clienteService: ClienteService) {

  }

  cliente = new Cliente();

  public salvarCliente() {
    this.clienteService.salvarCliente(this.cliente);
  }

  salvar(form: NgForm) {
    form.reset({
      nome: this.cliente.nome,
      sobrenome: this.cliente.sobrenome,
      senha: this.cliente.senha,
      email: this.cliente.email
    });
  }

}