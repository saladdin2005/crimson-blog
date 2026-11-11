/**
 * يدرج كتلة الترجمة المولّدة لـ daha-17 داخل src/data/sentenceTl.ts
 * بال POSITION الصحيح: نهاية كائن en، ثم نهاية كائن ar.
 */
import fs from 'node:fs';

const [, , tlPath, genPath] = process.argv;
const gen = fs.readFileSync(genPath, 'utf8');

// تقسيم المولَّد إلى كتلة en وكتلة ar
const mEn = gen.match(/\/\/ ===== en\.daha-17[^\n]*\n([\s\S]*?)\n\n\/\/ ===== ar\.daha-17/);
const mAr = gen.match(/\/\/ ===== ar\.daha-17[^\n]*\n([\s\S]*?)\n$/);
if (!mEn || !mAr) throw new Error('could not split generated blocks');
const enBlock = mEn[1];
const arBlock = mAr[1];

let src = fs.readFileSync(tlPath, 'utf8');
const nl = src.includes('\r\n') ? '\r\n' : '\n';
const lines = src.split(/\r?\n/);

// مواقع الإدراج: سطر "  }," الختامي لكل من en و ar
const enClose = lines.findIndex((l, i) => l === '  },' && lines.slice(0, i).some((x) => x === '  en: {'));
const arClose = lines.findIndex((l, i) => l === '  },' && lines.slice(0, i).some((x) => x === '  ar: {'));
if (enClose < 0 || arClose < 0) throw new Error('anchor not found');

// التحقق من عدم الإدراج مسبقاً
if (src.includes("'daha-17':")) throw new Error('daha-17 already present');

// الإدراج من الأسفل لأعلى كي لا تتحرّك الفهارس
lines.splice(arClose, 0, ...arBlock.split(/\r?\n/));
lines.splice(enClose, 0, ...enBlock.split(/\r?\n/));

fs.writeFileSync(tlPath, lines.join(nl), 'utf8');
console.log(`inserted en block at line ${enClose}, ar block (shifted) — total ${lines.length} lines`);
