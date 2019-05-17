import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Professor } from 'src/models/professor';
var MinhasMateriasPage = /** @class */ (function () {
    function MinhasMateriasPage() {
        this.materiasUsuario = new Array();
    }
    MinhasMateriasPage.prototype.ngOnInit = function () {
        var professor = new Professor('1', 'Joao Batata', 'jbatata@g.com', '28772398327', new Array());
        var materia1 = {
            id: '1',
            nome: 'Algoritmos',
            professor: professor,
            reservas: new Array(),
        };
        var materia2 = {
            id: '2',
            nome: 'LP',
            professor: professor,
            reservas: new Array(),
        };
        var materia3 = {
            id: '3',
            nome: 'PL',
            professor: professor,
            reservas: new Array(),
        };
        var lab1 = {
            id: '1',
            numero: '301',
            reservas: new Array()
        };
        var lab2 = {
            id: '2',
            numero: '200',
            reservas: new Array()
        };
        var reserva1 = {
            id: '1',
            horarioComeco: new Date(),
            horarioFim: new Date(),
            dia: new Date(),
            materia: materia1,
            lab: lab1
        };
        var reserva2 = {
            id: '2',
            horarioComeco: new Date(),
            horarioFim: new Date(),
            dia: new Date(),
            materia: materia1,
            lab: lab2
        };
        lab2.reservas.push(reserva2);
        lab1.reservas.push(reserva1, reserva2);
        materia1.reservas.push(reserva1, reserva2);
        this.materiasUsuario.push(materia1, materia2, materia3);
    };
    MinhasMateriasPage = tslib_1.__decorate([
        Component({
            selector: 'app-minhas-materias',
            templateUrl: './minhas-materias.page.html',
            styleUrls: ['./minhas-materias.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MinhasMateriasPage);
    return MinhasMateriasPage;
}());
export { MinhasMateriasPage };
//# sourceMappingURL=minhas-materias.page.js.map