import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private listaTarefas: string[] =[];

  constructor() { }

  addtarefa(tarefa: string){
    this.listaTarefas.push(tarefa);
    console.log("TAREFAS ADICIONADAS", this.listaTarefas);
  }
}
