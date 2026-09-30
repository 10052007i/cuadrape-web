import { site } from '../config/site';

export const urlAbsoluta = (ruta: string = ''): string => {
  const base = site.url.endsWith('/') ? site.url.slice(0, -1) : site.url;
  const path = ruta.startsWith('/') ? ruta : `/${ruta}`;
  return `${base}${path}`;
};
