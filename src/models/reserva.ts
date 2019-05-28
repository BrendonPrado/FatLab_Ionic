import { Lab } from './lab';
import { Materia } from './materia';
import { HorarioComecoFimAula } from './dto/horario-comeco-fim-aula';

export interface Reserva {
    id: string;
    diaMes: Date;
    materia: Materia;
    horarioComecoFimAula: HorarioComecoFimAula;
    lab: Lab;
}
