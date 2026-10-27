// ============================================================
//  حفظ المقالات للقراءة لاحقاً — يعمل بالكامل في المتصفح (localStorage)
// ============================================================

export interface SavedArticle {
  lang: string;
  slug: string;
  title: string;
  url: string;
  image: string;
  catLabel: string;
  accent: string;
  date: string;
}

const KEY = 'crimson-saved-articles';

export function getSaved(lang?: string): SavedArticle[] {
  try {
    const raw = localStorage.getItem(KEY);
    const list: SavedArticle[] = raw ? JSON.parse(raw) : [];
    return lang ? list.filter((a) => a.lang === lang) : list;
  } catch {
    return [];
  }
}

export function isSaved(slug: string): boolean {
  return getSaved().some((a) => a.slug === slug);
}

/** يُبديل الحفظ؛ يُرجع true إذا أصبح محفوظاً الآن */
export function toggleSaved(article: SavedArticle): boolean {
  const list = getSaved();
  const idx = list.findIndex((a) => a.slug === article.slug);
  let nowSaved: boolean;
  if (idx >= 0) {
    list.splice(idx, 1);
    nowSaved = false;
  } else {
    list.unshift(article);
    nowSaved = true;
  }
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* التخزين ممتلئ أو محظور */
  }
  notify();
  return nowSaved;
}

export function removeSaved(slug: string): void {
  const list = getSaved().filter((a) => a.slug !== slug);
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* تجاهل */
  }
  notify();
}

// إشعار مكوّنات أخرى (مثل عدّاد الشريط السفلي) عند التغيير
function notify() {
  window.dispatchEvent(new CustomEvent('saved-changed'));
}

/** يربط زر حفظ واحد بمنطق الحفظ ويحدّث شكله */
export function bindSaveButton(btn: HTMLElement, article: SavedArticle, labels: { save: string; isSaved: string; remove: string }) {
  const sync = () => {
    const on = isSaved(article.slug);
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', on ? labels.remove : labels.save);
    btn.title = on ? labels.remove : labels.save;
    btn.classList.toggle('is-saved', on);
  };
  sync();
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSaved(article);
    sync();
  });
  window.addEventListener('saved-changed', sync);
}

/** يزخرف أي عنصر يعرض عدد المقالات المحفوظة (عدّاد صغير) */
export function bindSavedBadge(el: HTMLElement, lang: string) {
  const sync = () => {
    const n = getSaved(lang).length;
    el.textContent = n > 0 ? String(n) : '';
    el.hidden = n === 0;
  };
  sync();
  window.addEventListener('saved-changed', sync);
}
