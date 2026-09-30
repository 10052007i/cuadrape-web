export interface Senal {
  titulo: string;
  descripcion: string;
  badge?: string;
}

export const senalesHospedajes: Senal[] = [
  {
    titulo: 'Liberación de habitación antes de tiempo',
    descripcion: 'Alerta cuando una habitación pagada por 4 horas figura libre a las 2 horas.',
    badge: 'Alerta clave',
  },
  {
    titulo: 'Diferencia en el arqueo del turno',
    descripcion: 'Reporte inmediato si el efectivo cobrado no coincide con el total registrado.',
  },
  {
    titulo: 'Ingresos marcados en método incorrecto',
    descripcion: 'Trazabilidad clara entre pagos digitales (Yape/Plin) y dinero efectivo.',
  },
  {
    titulo: 'Intentos de reasignación sin registro',
    descripcion: 'Registro automático de auditoría cuando se intenta volver a ocupar un cuarto.',
  },
];
