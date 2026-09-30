export const soles = (monto: number): string => `S/ ${monto}`;

// Devuelve el entero inmediatamente superior al costo diario,
// de modo que "menos de S/{n} al día" siempre sea verdad.
export const topeDiario = (mensual: number): number => Math.floor(mensual / 30) + 1;
