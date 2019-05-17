import * as tslib_1 from "tslib";
import { Usuario } from './usuario';
var Admin = /** @class */ (function (_super) {
    tslib_1.__extends(Admin, _super);
    function Admin(id, nome, email, senha, admin) {
        return _super.call(this, id, nome, email) || this;
    }
    return Admin;
}(Usuario));
export { Admin };
//# sourceMappingURL=admin.js.map