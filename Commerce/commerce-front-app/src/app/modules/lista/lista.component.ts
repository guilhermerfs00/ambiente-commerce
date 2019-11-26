import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/salvarCliente.service';
import { Cliente } from 'src/app/resources/classes/cliente.class';
import { User } from 'src/app/resources/classes/usuarios.class';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  cliente: Cliente;

  users: User[];

  dadosUsuarioUnico: Cliente;

  alterarUsuario: boolean;
  
  public columns: string[] = ["id", "nome", "sobrenome", "email", "senha"];


  constructor(public clienteService: ClienteService) {

  }

  ngOnInit() {
    this.buscarLista();
    this.alterarUsuario = true;
  } 

  public buscarLista() {
    this.clienteService.buscarLista().subscribe(lista =>{
          this.users = lista; 
      }) 
  }

  alterarUsuarioBancoPorId(usuario: Cliente) {

    this.alterarUsuario = false;
    this.dadosUsuarioUnico = usuario;

  }

  salvarAlterarUsuarioBancoPorId(usuario: Cliente) {
    console.log(usuario);
    this.clienteService.alterarCliente(this.dadosUsuarioUnico).subscribe(data => {
      
    });
  }
  

}