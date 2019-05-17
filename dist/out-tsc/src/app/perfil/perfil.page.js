import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Usuario } from 'src/models/usuario';
import { StorageService } from 'src/service/storage.service';
import { AuthService } from 'src/service/auth.service';
import { ControllService } from 'src/service/controll.service';
var PerfilPage = /** @class */ (function () {
    function PerfilPage(storage, auth, controll) {
        this.storage = storage;
        this.auth = auth;
        this.controll = controll;
        this.campoSenha = 'password';
        this.editarOn = true;
        this.editarButtonText = 'Editar Informações';
    }
    PerfilPage.prototype.ngOnInit = function () {
        this.usuarioLogado = new Usuario('', '', '');
    };
    PerfilPage.prototype.ionViewWillEnter = function () {
        this.controll.checkUserAuth();
        this.usuarioLogado = this.storage.getUser();
    };
    PerfilPage.prototype.mostraSenha = function () {
        this.campoSenha = (this.campoSenha === 'text') ? 'password' : 'text';
    };
    PerfilPage.prototype.editarInfos = function () {
        this.editarOn = (this.editarOn === true) ? false : true;
        this.editarButtonText = (this.editarOn === true) ? 'Editar Informações' : 'Salvar Informações';
    };
    PerfilPage = tslib_1.__decorate([
        Component({
            selector: 'app-perfil',
            templateUrl: './perfil.page.html',
            styleUrls: ['./perfil.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [StorageService, AuthService, ControllService])
    ], PerfilPage);
    return PerfilPage;
}());
export { PerfilPage };
//# sourceMappingURL=perfil.page.js.map