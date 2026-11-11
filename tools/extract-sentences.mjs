/**
 * يستخرج جمل المقال تماماً كما يفعل مكوّن SentenceCard في المتصفح:
 * كتل (فقرات/عناوين/قوائم) ثم تقطيع على علامات النهاية.
 * الاستخدام: node tools/extract-sentences.mjs <file.md> [out.json]
 */
import fs from 'node:fs';

const END_CHARS = /[.!؟?…]/;

export function normSentence(s) {
  return s
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** إزالة تنسيق الماركداون السطري كما يفعل الـ HTML الناتج */
function stripInline(s) {
  return s
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    .replace(/`([^`]*)`/g, '$1');
}

function blocks(md) {
  const body = md.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
  const out = [];
  const lines = body.split(/\r?\n/);
  let para = [];
  const flush = () => {
    if (para.length) {
      out.push({ type: 'p', text: para.join('\n') });
      para = [];
    }
  };
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flush();
      continue;
    }
    const h = line.match(/^#{2,6}\s+(.*)$/);
    if (h) {
      flush();
      out.push({ type: 'h', text: h[1] });
      continue;
    }
    const li = line.match(/^\s*(?:[-*+]|\d+[.)])\s+(.*)$/);
    if (li) {
      flush();
      out.push({ type: 'li', text: li[1] });
      continue;
    }
    if (/^\s*>\s?/.test(line)) {
      flush();
      out.push({ type: 'quote', text: line.replace(/^\s*>\s?/, '') });
      continue;
    }
    para.push(line);
  }
  flush();
  return out;
}

/** نفس خوارزمية SentenceCard: تقطيع على END_CHARS متبوعة بمسافة أو نهاية */
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

export function extract(file) {
  const md = fs.readFileSync(file, 'utf8');
  const desc = md.match(/^description:\s*"(.*)"\s*$/m)?.[1] ?? '';
  const all = [{ type: 'lead', text: desc }, ...blocks(md)];

  const rows = [];
  for (const b of all) {
    const text = stripInline(b.text);
    for (const raw of splitSentences(text)) {
      const t = raw.trim();
      if (!t) continue;
      rows.push({ type: b.type, text: t, norm: normSentence(t) });
    }
  }
  return rows;
}

const invokedDirectly = process.argv[1]?.endsWith('extract-sentences.mjs');
if (invokedDirectly) {
  const file = process.argv[2];
  if (!file) {
    console.error('usage: node tools/extract-sentences.mjs <file.md> [out.json]');
    process.exit(1);
  }
  const rows = extract(file);
  const dup = rows.filter((r, i) => rows.findIndex((x) => x.norm === r.norm) !== i);
  const out = JSON.stringify(rows, null, 0);
  if (process.argv[3]) {
    fs.writeFileSync(process.argv[3], out, 'utf8');
    console.log(`${rows.length} sentences -> ${process.argv[3]} (dups: ${dup.length})`);
  } else {
    for (const r of rows) console.log(`[${r.type}] ${JSON.stringify(r.text)}`);
    console.error(`${rows.length} sentences, ${new Set(rows.map((r) => r.norm)).size} unique`);
  }
}
