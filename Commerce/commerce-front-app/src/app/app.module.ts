import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { HomeComponent } from './modules/home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { from } from 'rxjs';
import { ClienteService } from './services/salvarCliente.service';
import { ListaComponent } from './modules/lista/lista.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'cadastro', component: CadastroComponent },
  { path: 'lista', component: ListaComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent,
    ListaComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forRoot(
    appRoutes,
    ),
    FormsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
