import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/resources/classes/cliente.class';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  ngOnInit(){
  }


  cliente = new Cliente();

  salvar(form: NgForm) {
  

  form.reset({  primeiroNome: this.cliente.nome,
                sobrenome: this.cliente.sobrenome,
                senha:this.cliente.senha,
                email:this.cliente.email
                });
  }

}