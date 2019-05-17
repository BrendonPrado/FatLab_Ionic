import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Professor } from '../../models/professor';
var GerenciarLabPage = /** @class */ (function () {
    function GerenciarLabPage() {
        this.labs = new Array();
        this.reservasOn = new Array();
    }
    GerenciarLabPage.prototype.ngOnInit = function () {
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
        lab1.reservas.push(reserva1, reserva2);
        this.labs.push(lab1);
        this.labs.push(lab2);
    };
    GerenciarLabPage.prototype.editarOn = function (numero, evento) {
        if (numero == this.labAEditar) {
            this.labAEditar = '0';
        }
        else {
            this.labAEditar = numero;
        }
    };
    GerenciarLabPage.prototype.excluirLab = function (numero) {
        this.labs = this.labs.filter(function (lab) { return lab.numero !== numero; });
    };
    GerenciarLabPage.prototype.showReservasOn = function (numero) {
        if (this.reservasOn.includes(numero)) {
            this.reservasOn = this.reservasOn.filter(function (num) { return num !== numero; });
        }
        else {
            this.reservasOn.push(numero);
        }
    };
    GerenciarLabPage = tslib_1.__decorate([
        Component({
            selector: 'app-gerenciar-lab',
            templateUrl: './gerenciar-lab.page.html',
            styleUrls: ['./gerenciar-lab.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], GerenciarLabPage);
    return GerenciarLabPage;
}());
export { GerenciarLabPage };
//# sourceMappingURL=gerenciar-lab.page.js.map