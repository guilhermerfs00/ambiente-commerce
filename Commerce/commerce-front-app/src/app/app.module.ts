import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { HomeComponent } from './modules/home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'cadastro', component: CadastroComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forRoot(
    appRoutes,
    ),
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
