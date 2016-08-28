System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Lista;
    return {
        setters:[],
        execute: function() {
            Lista = (function () {
                function Lista(titulo, tarefas) {
                    if (tarefas === void 0) { tarefas = []; }
                    this.titulo = titulo;
                    this.tarefas = tarefas;
                }
                return Lista;
            }());
            exports_1("Lista", Lista);
        }
    }
});
//# sourceMappingURL=lista.js.map