export const whatsapp = {
  ventas: '51900000000', // formato internacional, sin + ni espacios
  mensajes: {
    demostracion:
      'Hola, vi la página de Cuadrape y quiero una demostración. Mi hospedaje tiene ___ habitaciones.',
  },
} as const;

export const enlaceWhatsApp = (mensaje: string = whatsapp.mensajes.demostracion) =>
  `https://wa.me/${whatsapp.ventas}?text=${encodeURIComponent(mensaje)}`;
