import {Reserva} from './reserva';

export interface Lab {
    id: string;
    numero: string;
    reservas?: Array<Reserva>;
    capacidade?: number;
}
