import * as tslib_1 from "tslib";
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from './auth.service';
var ControllService = /** @class */ (function () {
    function ControllService(storage, auth, alert) {
        this.storage = storage;
        this.auth = auth;
        this.alert = alert;
    }
    ControllService.prototype.checkUserAuth = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var usuario, alert_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usuario = this.storage.getLocalUser();
                        if (!!usuario) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alert.create({
                                header: " Fa\u00E7a Login",
                                message: 'Não autorizado, por favor entre!',
                                buttons: [{
                                        text: 'ok'
                                    }]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        this.auth.logout();
                        return [2 /*return*/, alert_1.present()];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ControllService.prototype.checkProfessorAuth = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user, usuario, alert_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.storage.getLocalUser();
                        usuario = this.storage.getUser();
                        if (!(!user || !usuario.funcao.includes('PROFESSOR'))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alert.create({
                                header: "Voc\u00EA n\u00E3o \u00E9 autorizado a essa fun\u00E7\u00E3o ",
                                message: 'Não autorizado, por favor entre novamente!',
                                cssClass: 'secondary',
                                buttons: [{
                                        text: 'ok'
                                    }]
                            })];
                    case 1:
                        alert_2 = _a.sent();
                        this.auth.logout();
                        return [2 /*return*/, alert_2.present()];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ControllService.prototype.checkAdminAuth = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user, usuario, alert_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.storage.getLocalUser();
                        usuario = this.storage.getUser();
                        if (!(!user || !usuario.funcao.includes('ADMIN'))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alert.create({
                                header: "Voc\u00EA n\u00E3o \u00E9 autorizado a essa fun\u00E7\u00E3o ",
                                message: 'Não autorizado, por favor entre novamente!',
                                cssClass: 'secondary',
                                buttons: [{
                                        text: 'ok'
                                    }]
                            })];
                    case 1:
                        alert_3 = _a.sent();
                        this.auth.logout();
                        return [2 /*return*/, alert_3.present()];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ControllService.prototype.checkProfessorAlunoAuth = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user, usuario, alert_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.storage.getLocalUser();
                        usuario = this.storage.getUser();
                        if (!(!user || !(usuario.funcao.includes('PROFESSOR') || usuario.funcao.includes('ALUNO')))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alert.create({
                                header: "Voc\u00EA n\u00E3o \u00E9 autorizado a essa fun\u00E7\u00E3o ",
                                message: 'Não autorizado, por favor entre novamente!',
                                cssClass: 'secondary',
                                buttons: [{
                                        text: 'ok'
                                    }]
                            })];
                    case 1:
                        alert_4 = _a.sent();
                        this.auth.logout();
                        return [2 /*return*/, alert_4.present()];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ControllService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [StorageService,
            AuthService,
            AlertController])
    ], ControllService);
    return ControllService;
}());
export { ControllService };
//# sourceMappingURL=controll.service.js.map