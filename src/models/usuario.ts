export class Usuario {
    private _id: string;
    private _nome: string;
    private _email: string;
    private _senha: string;
    private _admin: boolean;


    constructor(id: string, nome: string, email: string, senha: string, admin: boolean) {
    this._id = id;
    this._nome = nome;
    this._email = email;
    this._senha = senha;
    this._admin = admin;
    }


    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Getter senha
     * @return {string}
     */
	public get senha(): string {
		return this._senha;
	}

    /**
     * Setter senha
     * @param {string} value
     */
	public set senha(value: string) {
		this._senha = value;
	}

    /**
     * Getter admin
     * @return {boolean}
     */
	public get admin(): boolean {
		return this._admin;
	}

    /**
     * Setter admin
     * @param {boolean} value
     */
	public set admin(value: boolean) {
		this._admin = value;
	}


}
