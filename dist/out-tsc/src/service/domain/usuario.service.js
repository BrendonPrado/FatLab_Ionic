import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from 'src/models/aluno';
import { Professor } from 'src/models/professor';
import { Admin } from 'src/models/admin';
import { API_CONFIG } from 'src/config/api.config';
var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.http = http;
        this.usuariosUrl = 'usuarios';
    }
    UsuarioService.prototype.delete = function (id) {
        return this.http.delete(API_CONFIG.baseUrl + "/" + this.usuariosUrl + "/" + id);
    };
    UsuarioService.prototype.saveDTO = function (usuario) {
        return this.http.post(API_CONFIG.baseUrl + "/" + this.usuariosUrl, usuario);
    };
    UsuarioService.prototype.findAll = function () {
        return this.http.get(API_CONFIG.baseUrl + "/" + this.usuariosUrl);
    };
    UsuarioService.prototype.usuarioConverter = function (usuario) {
        if (usuario.ra !== undefined) {
            usuario = new Aluno(usuario.id, usuario.nome, usuario.email, usuario.ra, null);
            return usuario;
        }
        if (usuario.matricula !== undefined) {
            usuario = new Professor(usuario.id, usuario.nome, usuario.email, usuario.matricula, null);
            return usuario;
        }
        else {
            usuario = new Admin(usuario.id, usuario.nome, usuario.email, usuario.senha, usuario.admin);
            return usuario;
        }
    };
    UsuarioService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UsuarioService);
    return UsuarioService;
}());
export { UsuarioService };
//# sourceMappingURL=usuario.service.js.map