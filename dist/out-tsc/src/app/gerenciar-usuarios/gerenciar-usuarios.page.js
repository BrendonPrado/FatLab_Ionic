import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsuarioService } from 'src/service/domain/usuario.service';
var GerenciarUsuariosPage = /** @class */ (function () {
    function GerenciarUsuariosPage(service) {
        this.service = service;
        this.usuarios = new Array();
    }
    GerenciarUsuariosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAll().subscribe(function (response) {
            _this.usuarios = response;
            _this.usuarios.forEach(function (usuario) {
                console.log(usuario.funcao);
            });
            _this.usuarios.forEach(function (usuario) {
                console.log(_this.isAluno(usuario));
            });
        });
    };
    GerenciarUsuariosPage.prototype.isAluno = function (usuario) {
        if (usuario.ra !== undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    GerenciarUsuariosPage.prototype.isProfessor = function (usuario) {
        if (usuario.matricula !== undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    GerenciarUsuariosPage.prototype.removerUsuario = function (id) {
        this.usuarios = this.usuarios.filter(function (user) { return user.id !== id; });
        this.service.delete(id).subscribe();
    };
    GerenciarUsuariosPage = tslib_1.__decorate([
        Component({
            selector: 'app-gerenciar-usuarios',
            templateUrl: './gerenciar-usuarios.page.html',
            styleUrls: ['./gerenciar-usuarios.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioService])
    ], GerenciarUsuariosPage);
    return GerenciarUsuariosPage;
}());
export { GerenciarUsuariosPage };
//# sourceMappingURL=gerenciar-usuarios.page.js.map