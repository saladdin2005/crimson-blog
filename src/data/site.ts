// ============================================================
//  إعدادات الموقع — غيّر الاسم والشعار من هنا (سطر واحد لكل لغة)
// ============================================================

export type Lang = 'ar' | 'en';

export const site = {
  name: { ar: 'قرمزي', en: 'Crimson' } as Record<Lang, string>,
  tagline: {
    ar: 'مجلة رقمية مستقلة للمقالات وأدب وفن وبرامج لغة',
    en: 'An independent digital magazine on articles, literature, art & language programs',
  } as Record<Lang, string>,
  social: {
    x: 'https://x.com/',
    instagram: 'https://instagram.com/',
    youtube: 'https://youtube.com/',
  },
};

export const categories = {
  articles: {
    ar: 'مقالات',
    en: 'Articles',
    gradient: 'linear-gradient(135deg, #2c6e7a 0%, #143a4a 100%)',
    accent: '#2c6e7a',
    icon: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  },
  art: {
    ar: 'أدب و فن',
    en: 'Literature & Art',
    gradient: 'linear-gradient(135deg, #b08a4a 0%, #6b4a1f 100%)',
    accent: '#b08a4a',
    icon: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22"/><path d="M17.5 15H9"/>',
  },
  langprogs: {
    ar: 'برامج لغة',
    en: 'Language Programs',
    gradient: 'linear-gradient(135deg, #a61830 0%, #4c0914 100%)',
    accent: '#a61830',
    icon: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  },
} as const;

export const authors = {
  you: {
    name: { ar: 'اسمك هنا', en: 'Your Name' },
    role: { ar: 'المؤسس ورئيس التحرير', en: 'Founder & Editor-in-Chief' },
    bio: {
      ar: 'كاتب ومؤسّس المجلة، يهتم بأدوات الإنتاجية وتطوّر الذات وكتابة التقنية بأسلوب عملي.',
      en: 'Writer and founder, focused on productivity tools, self-development and practical tech.',
    },
  },
  sara: {
    name: { ar: 'سارة الحربي', en: 'Sara Alharbi' },
    role: { ar: 'محرّرة', en: 'Editor' },
    bio: {
      ar: 'تكتب في مجلة قرمزي بعقلية عملية بعيدة عن الضجيج.',
      en: 'Writes for Crimson with a practical, noise-free mindset.',
    },
  },
} as const;

/** أسماء شركاء/علامات في الشريط العلوي (عرض فقط) — استبدلها بشركائك الحقيقيين */
export const partners = ['RØDE', 'ACER', 'ASUS', 'LEAP26', 'Ai Everything', 'GITEX'];

/** صور تحريرية مؤقتة — استبدلها بصورك لاحقاً في frontmatter: image: "/images/..." */
export function coverUrl(seed: string, w = 1200, h = 800): string {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}
