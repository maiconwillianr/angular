System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ListaTarefas;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ListaTarefas = (function () {
                function ListaTarefas() {
                    //Array de tarefas
                    this.tarefas = [];
                }
                ListaTarefas.prototype.adicionar = function () {
                    if (this.txtTarefa != '') {
                        this.tarefas.push(this.txtTarefa);
                        this.txtTarefa = '';
                    }
                };
                ListaTarefas.prototype.remover = function (index) {
                    this.tarefas.splice(index, 1);
                };
                ListaTarefas = __decorate([
                    core_1.Component({
                        selector: 'lista-tarefas',
                        template: "\n    <div>\n        <h1>Lista de Tarefas</h1>\n        <ul>\n            <li *ngFor=\"#tarefa of tarefas; #i = index\">\n                {{tarefa}} <a href=\"#\" (click)=\"remover(i)\">[X]</a>\n            </li>\n        </ul>\n        <input type=\"text\" name=\"tarefa\" placeholder=\"Digite uma tarefa...\"\n            [(ngModel)]=\"txtTarefa\">\n        <button (click)=\"adicionar()\">Adicionar</button>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListaTarefas);
                return ListaTarefas;
            }());
            exports_1("ListaTarefas", ListaTarefas);
        }
    }
});
//# sourceMappingURL=lista-component.js.map