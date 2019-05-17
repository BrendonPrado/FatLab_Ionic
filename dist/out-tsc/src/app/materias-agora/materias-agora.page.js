import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Professor } from 'src/models/professor';
var MateriasAgoraPage = /** @class */ (function () {
    function MateriasAgoraPage() {
    }
    MateriasAgoraPage.prototype.ngOnInit = function () {
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
        materia1.reservas.push(reserva1, reserva2);
        this.materiaAgora = materia1;
    };
    MateriasAgoraPage = tslib_1.__decorate([
        Component({
            selector: 'app-materias-agora',
            templateUrl: './materias-agora.page.html',
            styleUrls: ['./materias-agora.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MateriasAgoraPage);
    return MateriasAgoraPage;
}());
export { MateriasAgoraPage };
//# sourceMappingURL=materias-agora.page.js.map