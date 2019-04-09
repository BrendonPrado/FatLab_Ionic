import {Usuario} from "./usuario";
import {Materia} from "./materia";

export class Professor extends Usuario{
    private _matricula: string;
    private _materias: Array<Materia>;

   

    constructor(id: string, nome: string, email: string, senha: string, admin: boolean, matricula: string, materias: Array<Materia>) {
        super(id, nome, email, senha, admin);
        this._matricula = matricula;
        this._materias = materias;
    }

    /**
     * Getter matricula
     * @return {string}
     */
	public get matricula(): string {
		return this._matricula;
	}

    /**
     * Setter matricula
     * @param {string} value
     */
	public set matricula(value: string) {
		this._matricula = value;
	}


    /**
     * Getter materias
     * @return {Array<Materia>}
     */
    public get materias(): Array<Materia> {
    return this._materias;
    }

    /**
     * Setter materias
     * @param {Array<Materia>} value
     */
    public set materias(value: Array<Materia>) {
    this._materias = value;
    }
}
