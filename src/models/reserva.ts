import {Lab} from "./lab";
import {Materia} from "./materia";

export interface Reserva {
    id:string;
    horarioComeco:Date;
    horarioFim:Date;
    dia: Date;
    materia:Materia;
    lab:Lab;
}
