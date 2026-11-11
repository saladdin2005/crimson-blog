/**
 * يولّد مدخلات sentenceTl لمقال daha-17 بربط الجمل المتناظرة بين اللغتين.
 * الاستخدام: node tools/gen-daha-tl.mjs <ar.md> <en.md> [out.txt]
 */
import fs from 'node:fs';
import { extract } from './extract-sentences.mjs';

const [, , arFile, enFile, outFile] = process.argv;
if (!arFile || !enFile) {
  console.error('usage: node tools/gen-daha-tl.mjs <ar.md> <en.md> [out.txt]');
  process.exit(1);
}

const ar = extract(arFile);
const en = extract(enFile);
if (ar.length !== en.length) {
  console.error(`COUNT MISMATCH: ar=${ar.length} en=${en.length}`);
  process.exit(1);
}

// تحقق: لا تعارضات معيارية داخل كل قائمة (وإلا تتطابق المفاتيح ويهمل أحدهما)
for (const [name, rows] of [['ar', ar], ['en', en]]) {
  const seen = new Set();
  for (const r of rows) {
    if (seen.has(r.norm)) console.error(`WARN dup norm in ${name}: ${r.norm}`);
    seen.add(r.norm);
  }
}

const q = JSON.stringify;

function block(rows, keyLang) {
  const lines = ["    'daha-17': {"];
  for (let i = 0; i < rows.length; i++) {
    const key = keyLang === 'ar' ? ar[i].text : en[i].text;
    const val = keyLang === 'ar' ? en[i].text : ar[i].text;
    // المفاتيح تُطبَّع لاحقاً بنormSentence في صفحة المقال
    lines.push(`      ${q(key)}: ${q(val)},`);
  }
  lines.push('    },');
  return lines.join('\n');
}

const text = [
  '// ===== en.daha-17 (إنجليزي ← عربي) =====',
  block(en, 'en'),
  '',
  '// ===== ar.daha-17 (عربي ← إنجليزي) =====',
  block(ar, 'ar'),
  '',
].join('\n');

if (outFile) {
  fs.writeFileSync(outFile, text, 'utf8');
  console.log(`ok: ${ar.length} pairs -> ${outFile}`);
} else {
  process.stdout.write(text);
}
