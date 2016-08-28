import {Component} from 'angular2/core';

@Component({
    selector:'lista-tarefas',
    template:`
    <div>
        <h1>Lista de Tarefas</h1>
        <ul>
            <li *ngFor="#tarefa of tarefas; #i = index">
                {{tarefa}} <a href="#" (click)="remover(i)">[X]</a>
            </li>
        </ul>
        <input type="text" name="tarefa" placeholder="Digite uma tarefa..."
            [(ngModel)]="txtTarefa">
        <button (click)="adicionar()">Adicionar</button>
    </div>`
})
export class ListaTarefas{
    
    //Array de tarefas
    public tarefas : string [] = [];
    
    //campo adicionar tarefa
    public txtTarefa : string;
    
    adicionar(){
        if(this.txtTarefa != ''){
            this.tarefas.push(this.txtTarefa);
            this.txtTarefa = '';
        }
    }
    
    remover(index:number){
        this.tarefas.splice(index, 1);
    }
}