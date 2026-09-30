export interface Caracteristica {
  titulo: string;
  descripcion: string;
}

export const caracteristicasHospedajes: Caracteristica[] = [
  {
    titulo: 'Alquiler por horas y turnos flex',
    descripcion: 'Cobros por fracciones de tiempo, extensiones de estadía y tarifas nocturnas automáticas.',
  },
  {
    titulo: 'Cuadre por método de pago exacto',
    descripcion: 'Diferencia lo que ingresó por Yape, Plin, transferencia o efectivo en cada turno.',
  },
  {
    titulo: 'Control de ventas de friobar',
    descripcion: 'Registra el consumo de bebidas y snacks cobrados junto con la habitación.',
  },
  {
    titulo: 'Funciona en cualquier celular o PC',
    descripcion: 'Sin necesidad de comprar equipos especiales ni instalar programas pesados.',
  },
];
