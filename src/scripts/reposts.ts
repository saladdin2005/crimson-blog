// ============================================================
//  إعادات نشر الاقتباسات مع تعليق — تعمل محلياً في المتصفح فقط (localStorage)
// ============================================================

export interface Repost {
  id: string;
  lang: 'ar' | 'en';
  slug: string;
  title: string;
  url: string;
  quote: string;
  comment: string;
  author: string;
  createdAt: string;
}

const KEY = 'crimson-reposts-v1';
const NICK_KEY = 'crimson-repost-nickname';
const MAX = 40;

function ok(r: unknown): r is Repost {
  if (!r || typeof r !== 'object') return false;
  const x = r as Record<string, unknown>;
  return (
    typeof x.id === 'string' &&
    (x.lang === 'ar' || x.lang === 'en') &&
    typeof x.quote === 'string' &&
    typeof x.createdAt === 'string'
  );
}

export function getReposts(lang?: 'ar' | 'en'): Repost[] {
  try {
    const raw = localStorage.getItem(KEY);
    const list: unknown = raw ? JSON.parse(raw) : [];
    const clean = Array.isArray(list) ? list.filter(ok) : [];
    return lang ? clean.filter((r) => r.lang === lang) : clean;
  } catch {
    return [];
  }
}

export function getNickname(): string {
  try {
    return localStorage.getItem(NICK_KEY) ?? '';
  } catch {
    return '';
  }
}

export function setNickname(name: string): void {
  try {
    localStorage.setItem(NICK_KEY, name.trim().slice(0, 24));
  } catch {
    /* التخزين ممتلئ أو محظور */
  }
}

/** يُضيف إعادة نشر جديدة في المقدمة، ويمنع تكرار الاقتباس نفسه من المقال */
export function addRepost(data: Omit<Repost, 'id' | 'createdAt'>): Repost {
  const item: Repost = {
    ...data,
    id: makeId(),
    createdAt: new Date().toISOString(),
  };
  const list = getReposts().filter(
    (r) =>
      !(
        r.slug === data.slug &&
        r.lang === data.lang &&
        norm(r.quote) === norm(data.quote) &&
        norm(r.comment) === norm(data.comment)
      ),
  );
  list.unshift(item);
  save(list);
  return item;
}

export function removeRepost(id: string): void {
  save(getReposts().filter((r) => r.id !== id));
}

function save(list: Repost[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(list.slice(0, MAX)));
  } catch {
    /* التخزين ممتلئ أو محظور */
  }
  window.dispatchEvent(new CustomEvent('reposts-changed'));
}

function norm(s: string): string {
  return s.replace(/\s+/g, ' ').trim();
}

function makeId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `r-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}
