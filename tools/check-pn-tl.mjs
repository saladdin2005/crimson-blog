/**
 * يفحص تغطية خريطة paper-notebook مصدرياً (قبل البناء):
 * يستخرج مفاتيح كتلة paper-notebook من sentenceTl.ts (HEAD والملف الحالي)
 * ويطابقها (بعد normSentence) مع جمل المقال في HEAD والملف الحالي.
 * الاستخدام: node tools/check-pn-tl.mjs
 */
import fs from 'node:fs';
import { execSync } from 'node:child_process';
import { extract, normSentence } from './extract-sentences.mjs';

const T = process.env.TEMP;

function mapBlock(src, section, article) {
  const start = src.indexOf(`  ${section}: {`);
  if (start < 0) throw new Error(`section ${section} not found`);
  const seg = src.slice(start);
  const bStart = seg.indexOf(`'${article}':`);
  if (bStart < 0) throw new Error(`article ${article} not found in ${section}`);
  const bEnd = seg.indexOf("\n    '", bStart + 10);
  return seg.slice(bStart, bEnd < 0 ? seg.length : bEnd);
}

/** تطيير مفاتيح الكتلة: يدعم 'key': و "key": مهما طال السطر */
function mapKeys(block) {
  const keys = [];
  const re = /^\s{6}(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")\s*:/gm;
  let m;
  while ((m = re.exec(block))) {
    const raw = m[1] ?? '"' + m[2] + '"';
    // فك الترحين الأساسي للنص المفرد المغلَّف بـ JSON.stringify
    const text = m[1] != null ? m[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\') : JSON.parse('"' + m[2] + '"');
    keys.push(text);
  }
  return keys;
}

function load(path) {
  return fs.readFileSync(path, 'utf8');
}

// نسخ HEAD
execSync('git show HEAD:src/data/sentenceTl.ts > "%TEMP%\\tl-head.ts"', { shell: 'cmd.exe' });
execSync('git show HEAD:src/content/articles/ar/paper-notebook.md > "%TEMP%\\pn-head.md"', { shell: 'cmd.exe' });

const curTl = load('src/data/sentenceTl.ts');
const headTl = load(T + '\\tl-head.ts');
const headMd = extract(T + '\\pn-head.md');
const curMd = extract('src/content/articles/ar/paper-notebook.md');

for (const [name, tl] of [['HEAD', headTl], ['CURRENT', curTl]]) {
  const block = mapBlock(tl, 'ar', 'paper-notebook');
  const keys = mapKeys(block);
  const normKeys = new Set(keys.map(normSentence));
  console.log(`\n=== sentenceTl.ts (${name}) ar.paper-notebook ===`);
  console.log(`parsed keys: ${keys.length}`);
  const headHit = headMd.filter((s) => normKeys.has(normSentence(s.text))).length;
  const curHit = curMd.filter((s) => normKeys.has(normSentence(s.text))).length;
  console.log(`vs HEAD article    : ${headHit}/${headMd.length}`);
  console.log(`vs CURRENT article : ${curHit}/${curMd.length}`);
  console.log(`keys mention كريم: ${keys.some((k) => k.includes('كريم'))}`);
  console.log('sample keys:');
  for (const k of keys.slice(0, 4)) console.log('  - ' + k.slice(0, 110));
}

// مقارنة إضافية: هل مفاتيح ar تطابق قيم en.paper-notebook (أي وُلّدت من النص الإنجليزي)؟
const enBlock = mapBlock(curTl, 'en', 'paper-notebook');
const re = /^\s{6}(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")\s*:\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"),?\s*$/gm;
const enVals = [];
let m;
while ((m = re.exec(enBlock))) {
  const v = m[3] ?? (m[4] != null ? JSON.parse('"' + m[4] + '"') : null);
  if (v != null) enVals.push(v);
}
const arBlock = mapBlock(curTl, 'ar', 'paper-notebook');
const arKeys = mapKeys(arBlock);
const enValNorm = new Set(enVals.map(normSentence));
console.log('\n=== cross-check ===');
console.log(`en.paper-notebook values: ${enVals.length}`);
console.log(`ar.paper-notebook keys that match en values: ${arKeys.filter((k) => enValNorm.has(normSentence(k))).length}/${arKeys.length}`);
