import {Professor} from './professor';
import {Reserva} from './reserva';

export interface Materia {
    id: string;
    nome: string;
    turma?: string;
    professor?: Professor;
    reservas?: Array<Reserva>;
}
