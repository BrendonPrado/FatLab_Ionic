import { Usuario } from './usuario.model';
import { Materia } from './materia.model';

export interface Aluno extends Usuario{
    ra: string;
    materias: Array<Materia>;
}