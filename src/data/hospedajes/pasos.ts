export interface Paso {
  numero: number;
  titulo: string;
  descripcion: string;
}

export const pasosHospedajes: Paso[] = [
  {
    numero: 1,
    titulo: 'Pide una demostración',
    descripcion: 'Escríbenos por WhatsApp y coordinamos una visita presencial en tu hospedaje.',
  },
  {
    numero: 2,
    titulo: 'Cargamos tus tarifas y habitaciones',
    descripcion: 'Configuramos tus tipos de cuarto, precios por hora y turnos.',
  },
  {
    numero: 3,
    titulo: 'Capacitación presencial por rol',
    descripcion: 'Enseña a tu personal en minutos. Solo requiere 3 toques en celular o PC.',
  },
  {
    numero: 4,
    titulo: 'Revisamos tu primer reporte',
    descripcion: 'Acompañamos el cierre de tu primer turno para asegurar que todo cuadre.',
  },
];
