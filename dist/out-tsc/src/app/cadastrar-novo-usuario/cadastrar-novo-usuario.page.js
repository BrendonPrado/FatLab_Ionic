import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsuarioService } from 'src/service/domain/usuario.service';
var CadastrarNovoUsuarioPage = /** @class */ (function () {
    function CadastrarNovoUsuarioPage(service) {
        this.service = service;
    }
    CadastrarNovoUsuarioPage.prototype.ngOnInit = function () {
        this.usuario = {
            admin: false,
            matricula: '',
            tipo: ''
        };
    };
    CadastrarNovoUsuarioPage.prototype.save = function () {
        var _this = this;
        var resp;
        this.service.saveDTO(this.usuario).subscribe(function (response) {
            resp = response;
            _this.usuario = {
                admin: false,
                matricula: '',
                tipo: ''
            };
            alert('usuário cadastrado com sucesso');
        }, function (error) { return alert(error.message); });
        console.log(resp);
    };
    CadastrarNovoUsuarioPage = tslib_1.__decorate([
        Component({
            selector: 'app-cadastrar-novo-usuario',
            templateUrl: './cadastrar-novo-usuario.page.html',
            styleUrls: ['./cadastrar-novo-usuario.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioService])
    ], CadastrarNovoUsuarioPage);
    return CadastrarNovoUsuarioPage;
}());
export { CadastrarNovoUsuarioPage };
//# sourceMappingURL=cadastrar-novo-usuario.page.js.map