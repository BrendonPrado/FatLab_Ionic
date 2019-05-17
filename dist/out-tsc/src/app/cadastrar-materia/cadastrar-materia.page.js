import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MateriaService } from 'src/service/domain/materia.service';
var CadastrarMateriaPage = /** @class */ (function () {
    function CadastrarMateriaPage(service) {
        this.service = service;
    }
    CadastrarMateriaPage.prototype.ngOnInit = function () {
    };
    CadastrarMateriaPage.prototype.save = function () {
        var _this = this;
        var materia = {
            nome: this.nomeMateria,
            turma: this.turma.toUpperCase()
        };
        this.service.save(materia).subscribe(function (Response) {
            _this.nomeMateria = '';
            _this.turma = '';
            alert('Materia cadastrada com sucesso');
        }, function (error) {
            alert(error.message);
        });
    };
    CadastrarMateriaPage = tslib_1.__decorate([
        Component({
            selector: 'app-cadastrar-materia',
            templateUrl: './cadastrar-materia.page.html',
            styleUrls: ['./cadastrar-materia.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [MateriaService])
    ], CadastrarMateriaPage);
    return CadastrarMateriaPage;
}());
export { CadastrarMateriaPage };
//# sourceMappingURL=cadastrar-materia.page.js.map