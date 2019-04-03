import { Usuario } from './usuario.model';
import { Materia } from './materia.model';

export class Aluno extends Usuario{
    private _ra: string;
    private _materias: Array<Materia>;


    constructor(id: string, nome: string, email: string, senha: string, admin: boolean, ra: string, materias: Array<Materia>) {
        super(id, nome, email, senha, admin);
        this._ra = ra;
        this._materias = materias;
    }

    /**
     * Getter ra
     * @return {string}
     */
    public get ra(): string {
    return this._ra;
    }

    /**
     * Setter ra
     * @param {string} value
     */
    public set ra(value: string) {
    this._ra = value;
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