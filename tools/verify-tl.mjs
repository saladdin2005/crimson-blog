/**
 * يتحقق من تغطية خرائط الترجمة في الصفحات المبنية:
 * يستخرج جمل المقال من HTML المبني (كما يفعل المتصفح) ويطابقها مع خريطة sentence-tl-map.
 * الاستخدام: node tools/verify-tl.mjs dist/ar/articles/daha-17/index.html dist/en/articles/daha-17/index.html
 */
import fs from 'node:fs';

const END_CHARS = /[.!؟?…]/;

function normSentence(s) {
  return s
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitSentences(virt) {
  const cuts = [];
  let s = 0;
  for (let i = 0; i < virt.length; i++) {
    if (END_CHARS.test(virt[i])) {
      let j = i + 1;
      while (j < virt.length && /[»"'”’…]/.test(virt[j])) j++;
      if (j >= virt.length || /\s/.test(virt[j])) {
        cuts.push([s, j]);
        s = j;
        while (s < virt.length && /\s/.test(virt[s])) s++;
        i = s - 1;
      } else {
        i = j - 1;
      }
    }
  }
  if (s < virt.length) cuts.push([s, virt.length]);
  return cuts.map(([a, b]) => virt.slice(a, b)).filter((x) => x.trim());
}

const decode = (s) =>
  s
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ');

for (const file of process.argv.slice(2)) {
  const html = fs.readFileSync(file, 'utf8');

  const mapJson = html.match(
    /<script[^>]*id="sentence-tl-map"[^>]*>([\s\S]*?)<\/script>/,
  )?.[1];
  const map = mapJson ? JSON.parse(mapJson) : {};
  const mapSize = Object.keys(map).length;

  // الكتل كما يجمعها collectBlocks()
  const lead = html.match(/<p class="article-lead[^"]*"[^>]*>([\s\S]*?)<\/p>/)?.[1] ?? '';
  const body = html.match(/<div class="article-body[^"]*">([\s\S]*?)<\/div>\s*<!--/)?.[1] ?? '';

  const blockRe = /<(p|h2|h3|li)\b[^>]*>([\s\S]*?)<\/\1>/g;
  const blocks = [];
  if (lead.trim()) blocks.push(decode(lead));
  let m;
  while ((m = blockRe.exec(body))) blocks.push(decode(m[2]));

  const sents = [];
  for (const b of blocks) for (const raw of splitSentences(b)) sents.push(raw.trim());

  const hit = sents.filter((s) => map[normSentence(s)] !== undefined);
  const miss = sents.filter((s) => map[normSentence(s)] === undefined);
  const unique = new Set(sents.map(normSentence));

  console.log(`\n=== ${file} ===`);
  console.log(`blocks: ${blocks.length}  sentences: ${sents.length} (unique ${unique.size})`);
  console.log(`map entries: ${mapSize}   covered: ${hit.length}   MISSING: ${miss.length}`);
  const pct = sents.length ? Math.round((hit.length / sents.length) * 100) : 0;
  console.log(`coverage: ${pct}%`);
  if (miss.length) {
    console.log('--- missing (first 15) ---');
    for (const s of miss.slice(0, 15)) console.log('  ✗ ' + s.slice(0, 120));
  }
}
