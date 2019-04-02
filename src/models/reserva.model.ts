import {Lab} from "./lab.model";
import {Materia} from "./materia.model";

export interface Reserva {
    id:string;
    horarioComeco:Date;
    horarioFim:Date;
    dia: Date;
    materia:Materia;
    lab:Lab;
}
