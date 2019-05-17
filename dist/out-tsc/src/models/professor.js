import * as tslib_1 from "tslib";
import { Usuario } from "./usuario";
var Professor = /** @class */ (function (_super) {
    tslib_1.__extends(Professor, _super);
    function Professor(id, nome, email, matricula, materias) {
        var _this = _super.call(this, id, nome, email) || this;
        _this._matricula = matricula;
        _this._materias = materias;
        return _this;
    }
    Object.defineProperty(Professor.prototype, "matricula", {
        /**
         * Getter matricula
         * @return {string}
         */
        get: function () {
            return this._matricula;
        },
        /**
         * Setter matricula
         * @param {string} value
         */
        set: function (value) {
            this._matricula = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Professor.prototype, "materias", {
        /**
         * Getter materias
         * @return {Array<Materia>}
         */
        get: function () {
            return this._materias;
        },
        /**
         * Setter materias
         * @param {Array<Materia>} value
         */
        set: function (value) {
            this._materias = value;
        },
        enumerable: true,
        configurable: true
    });
    return Professor;
}(Usuario));
export { Professor };
//# sourceMappingURL=professor.js.map