var Usuario = /** @class */ (function () {
    function Usuario(id, nome, email) {
        this._id = id;
        this._nome = nome;
        this._email = email;
    }
    Object.defineProperty(Usuario.prototype, "id", {
        /**
         * Getter id
         * @return {string}
         */
        get: function () {
            return this._id;
        },
        /**
         * Setter id
         * @param {string} value
         */
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "nome", {
        /**
         * Getter nome
         * @return {string}
         */
        get: function () {
            return this._nome;
        },
        /**
         * Setter nome
         * @param {string} value
         */
        set: function (value) {
            this._nome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "email", {
        /**
         * Getter email
         * @return {string}
         */
        get: function () {
            return this._email;
        },
        /**
         * Setter email
         * @param {string} value
         */
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "funcao", {
        /**
         * Getter funcao
         * @return {Array<string>}
         */
        get: function () {
            return this._funcao;
        },
        /**
         * Setter funcao
         * @param {Array<string>} value
         */
        set: function (value) {
            this._funcao = value;
        },
        enumerable: true,
        configurable: true
    });
    return Usuario;
}());
export { Usuario };
//# sourceMappingURL=usuario.js.map