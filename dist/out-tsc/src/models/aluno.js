import * as tslib_1 from "tslib";
import { Usuario } from './usuario';
var Aluno = /** @class */ (function (_super) {
    tslib_1.__extends(Aluno, _super);
    function Aluno(id, nome, email, ra, materias) {
        var _this = _super.call(this, id, nome, email) || this;
        _this._ra = ra;
        _this._materias = materias;
        return _this;
    }
    Object.defineProperty(Aluno.prototype, "ra", {
        /**
         * Getter ra
         * @return {string}
         */
        get: function () {
            return this._ra;
        },
        /**
         * Setter ra
         * @param {string} value
         */
        set: function (value) {
            this._ra = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Aluno.prototype, "materias", {
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
    return Aluno;
}(Usuario));
export { Aluno };
//# sourceMappingURL=aluno.js.map