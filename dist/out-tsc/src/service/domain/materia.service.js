import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
var MateriaService = /** @class */ (function () {
    function MateriaService(http) {
        this.http = http;
        this.materiaUrl = 'materias';
    }
    MateriaService.prototype.save = function (materia) {
        return this.http.post(API_CONFIG.baseUrl + "/" + this.materiaUrl, materia);
    };
    MateriaService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], MateriaService);
    return MateriaService;
}());
export { MateriaService };
//# sourceMappingURL=materia.service.js.map