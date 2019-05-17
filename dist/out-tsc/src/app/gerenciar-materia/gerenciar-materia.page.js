import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Professor } from 'src/models/professor';
var GerenciarMateriaPage = /** @class */ (function () {
    function GerenciarMateriaPage() {
        this.materias = new Array();
        this.reservasOn = new Array();
    }
    GerenciarMateriaPage.prototype.ngOnInit = function () {
        var professor = new Professor('1', 'Joao Batata', 'jbatata@g.com', '28772398327', new Array());
        var materia1 = {
            id: '1',
            nome: 'Algoritmos',
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
        lab1.reservas.push(reserva1);
        materia1.reservas.push(reserva1, reserva2);
        this.materias.push(materia1);
    };
    GerenciarMateriaPage.prototype.editarOn = function (id) {
        if (id === this.materiaAEditar) {
            this.materiaAEditar = '';
        }
        else {
            this.materiaAEditar = id;
        }
    };
    GerenciarMateriaPage.prototype.excluirMateria = function (id) {
        this.materias = this.materias.filter(function (materia) { return materia.id !== id; });
    };
    GerenciarMateriaPage.prototype.showReservasOn = function (id) {
        if (this.reservasOn.includes(id)) {
            this.reservasOn = this.reservasOn.filter(function (num) { return num !== id; });
        }
        else {
            this.reservasOn.push(id);
        }
    };
    GerenciarMateriaPage = tslib_1.__decorate([
        Component({
            selector: 'app-gerenciar-materia',
            templateUrl: './gerenciar-materia.page.html',
            styleUrls: ['./gerenciar-materia.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], GerenciarMateriaPage);
    return GerenciarMateriaPage;
}());
export { GerenciarMateriaPage };
//# sourceMappingURL=gerenciar-materia.page.js.map