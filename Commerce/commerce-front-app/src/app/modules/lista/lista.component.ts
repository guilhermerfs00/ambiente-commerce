import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/salvarCliente.service';
import { Cliente } from 'src/app/resources/classes/cliente.class';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  cliente: Cliente;

  constructor(public clienteService: ClienteService) {

  }

  ngOnInit() {
    this.buscarLista();
  }

  public buscarLista() {
      this.clienteService.buscarLista().subscribe(lista =>{
         console.log(lista);
      }) 
  }

}
