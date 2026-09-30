import fs from 'node:fs';
import path from 'node:path';

function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

const distDir = path.resolve('dist');
const frasesPath = path.resolve('scripts/frases-prohibidas.json');

if (!fs.existsSync(distDir)) {
  console.error('❌ Error: El directorio dist/ no existe. Ejecuta `npm run build` primero.');
  process.exit(1);
}

if (!fs.existsSync(frasesPath)) {
  console.error('❌ Error: El archivo scripts/frases-prohibidas.json no existe.');
  process.exit(1);
}

const frasesProhibidas = JSON.parse(fs.readFileSync(frasesPath, 'utf-8'));
let hasError = false;

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  return results;
}

const htmlFiles = getAllHtmlFiles(distDir);

for (const htmlFile of htmlFiles) {
  const content = fs.readFileSync(htmlFile, 'utf-8');
  const normalizedContent = normalize(content);

  for (const frase of frasesProhibidas) {
    const normalizedFrase = normalize(frase);
    if (normalizedContent.includes(normalizedFrase)) {
      console.error(`❌ Frase prohibida encontrada en ${path.relative(process.cwd(), htmlFile)}: "${frase}"`);
      hasError = true;
    }
  }
}

if (hasError) {
  console.error('\n❌ Error en la verificación de contenido prohibido.');
  process.exit(1);
} else {
  console.log('✅ Verificación de contenido prohibido completada con éxito.');
}
