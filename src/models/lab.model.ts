import {Reserva} from "./reserva.model";

export interface Lab {
    id: string;
    numero: string;
    reservas:Array<Reserva>;
}
