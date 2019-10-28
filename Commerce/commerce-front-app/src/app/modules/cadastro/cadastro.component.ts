import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/resources/classes/cliente.class';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCliente: FormGroup;
  constructor() { }

  ngOnInit() {
    this.createForm(new Cliente());
  }

  onSubmit(){
    console.log(this.formCliente.value);
  }

  createForm(cliente: Cliente) {
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome),
      sobrenome: new FormControl(cliente.sobrenome),
      email: new FormControl(cliente.email),
      senha: new FormControl(cliente.senha)
    })
  }
}
