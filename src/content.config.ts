import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const producto = z.enum(['hospedajes']);

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    producto,
    pregunta: z.string(),
    orden: z.number(),
    publicado: z.boolean().default(false),
  }),
});

const resultados = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resultados' }),
  schema: z
    .object({
      producto,
      contexto: z.string(),
      cifras: z.array(z.object({ valor: z.string(), etiqueta: z.string() })).max(3),
      cita: z.string().optional(),
      permiso: z.enum(['ninguno', 'anonimo', 'con-nombre']),
      nombreHotel: z.string().optional(),
      publicado: z.boolean().default(false),
    })
    .refine((d) => !d.publicado || d.permiso !== 'ninguno', {
      message: 'No se publica un resultado sin permiso escrito del hotel',
    })
    .refine((d) => d.permiso === 'con-nombre' || !d.nombreHotel, {
      message: 'nombreHotel solo se permite con permiso con-nombre',
    }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    titulo: z.string(),
    actualizado: z.coerce.date(),
  }),
});

export const collections = { faq, resultados, legal };
