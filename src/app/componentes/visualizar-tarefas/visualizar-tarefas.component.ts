import { Component, OnInit } from '@angular/core';
import {TarefaService} from "../../app-core/servicos/tarefa-service.service";

@Component({
  selector: 'app-visualizar-tarefas',
  templateUrl: './visualizar-tarefas.component.html',
  styleUrls: ['./visualizar-tarefas.component.css']
})


export class VisualizarTarefasComponent implements OnInit {

  i: number = 0;

  constructor(private tarefaService: TarefaService) { }

  addTarefa(){
    this.tarefaService.addtarefa('Tarefa' + this.i);
    this.i++;
  }


  ngOnInit(): void {


  }

}
