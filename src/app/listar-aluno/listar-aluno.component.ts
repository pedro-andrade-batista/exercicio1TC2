// Pedro Andrade SC3006921

import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno.model'

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {
  aluno: Aluno = {
    nome: 'Pedro',
    dataIngresso: '20/02/2019',
    previsaoFormatura: '20/12/2021'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
