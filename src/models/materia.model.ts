import {Professor} from "./professor.model";
import {Reserva} from "./reserva.model";

export interface Materia {
    id:string;
    nome:string;
    professor:Professor;
    reservas:Array<Reserva>;
}
