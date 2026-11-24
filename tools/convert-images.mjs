/**
 * تحويل صور المقالات المعتمدة إلى WebP مع تصغير الأبعاد الضخمة.
 * الاستخدام: node tools/convert-images.mjs [--dry]
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const HERE = decodeURIComponent(new URL(import.meta.url).pathname).replace(/^\//, '');
const ROOT = path.resolve(path.dirname(HERE), '..');
const DIR = path.join(ROOT, 'public', 'images');
const DRY = process.argv.includes('--dry');

// الملفات المعتمدة في الكود (تُحدَّث مراجعها بعد التحويل)
const CONVERT = [
  '1077064067154767482.jfif',
  '80s-three-girls.png',
  'daha-17.jpg',
  'Dune-thambl-image-1.jpg',
  'duun-chalamet-smile.jpg',
  'duun-director-actress.jfif',
  'holdovers-poster.jpg',
  'little-women.jpg',
  'logo-crimson.png',
  'lost-in-translation.jpg',
  'richdad-poordad.jpg',
  'wonderful-life.jpg',
  'young-sherlock-cast.jpg',
  'young-sherlock-holmes.jpg',
  'young-sherlock-moriarty.jpg',
  'young-sherlock-street.jpg',
  'young-sherlock.jpg',
  'eva-hoffman.jpg',
  'krakow-1950s.jpg',
  'batory-ship.jpg',
  'walter-moberly-classroom.jpg',
  // صور WebP موجودة لكنها كبيرة (أبعاد أو حجم) → إعادة ترميز فقط عند الفائدة
  'daha-17-3.webp',
  'daha-17-4.webp',
];

const MAX_DIM = 1600; // أقصى بعد (عرض أو ارتفاع) بعد التحويل
const isLogo = (f) => f.startsWith('logo-crimson');

let savedTotal = 0;
let origTotal = 0;
for (const name of CONVERT) {
  const src = path.join(DIR, name);
  if (!fs.existsSync(src)) { console.log('MISSING', name); continue; }
  const ext = path.extname(name).toLowerCase();
  const base = name.slice(0, -ext.length);
  const outName = `${base}.webp`;
  const out = path.join(DIR, outName);
  const tmp = out + '.tmp';
  const orig = fs.statSync(src).size;
  origTotal += orig;

  const meta = await sharp(src).metadata();
  const maxDim = isLogo(name) ? 320 : MAX_DIM;
  const quality = isLogo(name) ? 85 : 75;
  const needsResize = Math.max(meta.width ?? 0, meta.height ?? 0) > maxDim;

  let pipeline = sharp(src).webp({ quality, effort: 4 });
  if (needsResize) {
    pipeline = pipeline.resize({ width: maxDim, height: maxDim, fit: 'inside', withoutEnlargement: true });
  }
  if (DRY) {
    console.log(`DRY  ${name} (${Math.round(orig / 1024)}KB, ${meta.width}x${meta.height}) -> ${outName}`);
    continue;
  }
  const buf = await pipeline.toBuffer();
  fs.writeFileSync(tmp, buf);
  const now = buf.length;
  if (path.resolve(src) === path.resolve(out)) {
    // إعادة ترميز ملف WebP: لا نستبدل إلا إذا كبرت الفائدة فعلاً
    if (now >= orig) { fs.unlinkSync(tmp); console.log(`keep ${name} (${Math.round(orig / 1024)}KB — لم تفد إعادة الترميز)`); continue; }
    fs.renameSync(tmp, out);
  } else {
    fs.renameSync(tmp, out);
    fs.unlinkSync(src);
  }
  savedTotal += orig - now;
  console.log(`${name} (${Math.round(orig / 1024)}KB, ${meta.width}x${meta.height}) -> ${outName} (${Math.round(now / 1024)}KB)`);
}
console.log(`\noriginal total: ${Math.round(origTotal / 1024)}KB, after: ${Math.round((origTotal - savedTotal) / 1024)}KB, saved: ${Math.round(savedTotal / 1024)}KB`);
