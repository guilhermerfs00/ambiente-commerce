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

  public users: User[];
  
  public columns: string[] = ["id", "nome", "sobrenome", "email", "senha"];


  constructor(public clienteService: ClienteService) {

  }

  ngOnInit() {
    this.buscarLista();
  } 

  public buscarLista() {
    this.clienteService.buscarLista().subscribe(lista =>{
          this.users = lista;
          console.log(this.users);
      }) 
  }
  

}
