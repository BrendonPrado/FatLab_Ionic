import {Usuario} from "./usuario.model";
import {Materia} from "./materia.model";

export interface Professor extends Usuario{
    matricula: string;
    materias: Array<Materia>;

}
