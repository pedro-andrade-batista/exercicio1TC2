// Pedro Andrade SC3006921

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarAlunoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
