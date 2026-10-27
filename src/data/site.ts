// ============================================================
//  إعدادات الموقع — غيّر الاسم والشعار من هنا (سطر واحد لكل لغة)
// ============================================================

export type Lang = 'ar' | 'en';

export const site = {
  name: { ar: 'قرمزي', en: 'Crimson' } as Record<Lang, string>,
  tagline: {
    ar: 'مجلة رقمية مستقلة عن الملفات الغامضة والتاريخ والعلم وأدوات العصر',
    en: 'An independent digital magazine on mystery, history, science & tools of the era',
  } as Record<Lang, string>,
  social: {
    x: 'https://x.com/',
    instagram: 'https://instagram.com/',
    youtube: 'https://youtube.com/',
  },
};

export const categories = {
  mystery: {
    ar: 'ملفات غامضة',
    en: 'Mystery Files',
    gradient: 'linear-gradient(135deg, #4a3a6b 0%, #1f1834 100%)',
    accent: '#4a3a6b',
    icon: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    image: '/images/mystery-cover.jpg',
  },
  history: {
    ar: 'صفحات من التاريخ',
    en: 'Pages from History',
    gradient: 'linear-gradient(135deg, #b08a4a 0%, #6b4a1f 100%)',
    accent: '#b08a4a',
    icon: '<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.17a2 2 0 0 0-.59-1.42L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22"/><path d="M7 2v4.17a2 2 0 0 0 .59 1.42L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2"/>',
    image: '/images/history-cover.jpg',
  },
  science: {
    ar: 'العلم والمستقبل',
    en: 'Science & Future',
    gradient: 'linear-gradient(135deg, #2c6e7a 0%, #143a4a 100%)',
    accent: '#2c6e7a',
    icon: '<path d="M9 3h6"/><path d="M10 3v6l-4.5 7.5A2 2 0 0 0 7.3 20h9.4a2 2 0 0 0 1.8-3.5L14 9V3"/><path d="M7.5 15h9"/>',
    image: '/images/science-cover.jpg',
  },
  tools: {
    ar: 'أدوات العصر',
    en: 'Tools of the Era',
    gradient: 'linear-gradient(135deg, #a61830 0%, #4c0914 100%)',
    accent: '#a61830',
    icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    image: '/images/tools-cover.jpg',
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
    role: { ar: 'محرّرة قسم أدوات العصر', en: 'Tools of the Era Editor' },
    bio: {
      ar: 'تكتب عن أدوات العصر والتقنية بعقلية عملية بعيدة عن الضجيج.',
      en: 'Writes about tools of the era and technology with a practical, noise-free mindset.',
    },
  },
} as const;

/** أسماء شركاء/علامات في الشريط العلوي (عرض فقط) — استبدلها بشركائك الحقيقيين */
export const partners = ['RØDE', 'ACER', 'ASUS', 'LEAP26', 'Ai Everything', 'GITEX'];

/** صور تحريرية مؤقتة — استبدلها بصورك لاحقاً في frontmatter: image: "/images/..." */
export function coverUrl(seed: string, w = 1200, h = 800): string {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}
