/**
 * خرائط الترجمة جملةً جملة لصفحات المقالات (تُخبز أثناء البناء، بلا أي واجهة خارجية).
 * - المقالات الإنجليزية: النص الإنجليزي ← الترجمة العربية (للمتعلمين العرب)
 * - المقالات العربية: النص العربي ← المعنَى بالإنجليزية (للتعلّم بلغة المقال الأصلية)
 * مفاتيح النصوص تجي حرفياً كما تُعرض في الصفحة بعد إزالة صيغ الماركداون.
 */
type SentenceMap = Record<string, string>;

export const sentenceTl: Record<'ar' | 'en', Record<string, SentenceMap>> = {
  en: {
    'paper-notebook': {
      'In the age of apps and cloud sync, the humble notebook reminds us that the simplest tools are sometimes the deepest.':
        'في عصر التطبيقات والسحابة، يعود الدفتر التواضع ليذكّرنا أن أبسط الأدوات هي أحياناً الأعمق.',
      'When the hand writes differently': 'حين تكتب اليد بطريقة مختلفة',
      'There is a documented cognitive gap between handwriting notes and typing them: the hand is slower, which forces the brain to filter what deserves to reach the paper.':
        'هناك فجوة معرفية موثّقة بين كتابة الملاحظات بخط اليد وكتابتها بلوحة المفاتيح: اليد أبطأ، وهذا يُجبر الدماغ على ترشيح ما يستحق أن يصل إلى الورق.',
      'What you write slowly is what you remember deeply.':
        'ما تكتبه ببطء هو ما تتذكّره بعمق.',
      'The app that never sleeps...':
        'التطبيق الذي لا ينام...',
      'and never gets reread':
        'ولا يُقرأ بعد أسبوع',
      'Try it yourself: open your notes app and read what you wrote a month ago.':
        'جرّب بنفسك: افتح تطبيق ملاحظاتك واقرأ ما كتبته قبل شهر.',
      "You'll mostly find stale task lists and forgotten links.":
        'الأغلب ستجد قوائم مهام قديمة وروابط منسيّة.',
      "The problem isn't the app — it's the ease of forgetting that digital grants us: everything is searchable, so why remember anything?":
        'المشكلة ليست في التطبيق، بل في سهولة النسيان التي يمنحها الرقمي — كل شيء قابل للبحث، فلمَ نتذكّر شيئاً؟',
      'One notebook whose only job is remembering':
        'دفتر واحد وظيفته الوحيدة: التذكّر',
      'Nobody is asking for digital asceticism.':
        'لا أحد يطلب الزهادة الرقمية.',
      'Just simplicity: one notebook next to you, one idea written each evening — no system, no tags, no emoji.':
        'المطلوب بساطة: دفتر واحد بجانبك، تكتب فيه فكرة واحدة كل مساء — بلا تنظيم، بلا تصنيف، بلا إيموجي.',
      'A single sentence about your day or what bothered you.':
        'مجرد جملة واحدة تصف يومك أو ما يزعجك.',
      "A year later, you'll flip back to the first page and discover something strange: page one belongs to someone you know intimately and see in the mirror daily — but you forgot how much they changed.":
        'بعد سنة، ستعود إلى الصفحة الأولى وستكتشف شيئاً غريباً: صفحتك الأولى تخصّ شخصاً تعرفه جيداً وتراه كل يوم في المرآة — لكنك نسيت كم تغيّر.',
      "Paper doesn't sync to the cloud, but it syncs with memory — which is what we actually needed.":
        'الورق لا يُزامن السحابة، لكنه يُزامن الذاكرة — وهذا ما نحتاجه فعلاً.',
      'Bottom line': 'خلاصة',
      'Use the best of what technology offers, and keep the best of what paper offers: a quiet space with no notifications, where you write by hand what you refuse to forget.':
        'استخدم أفضل ما تقدمه التقنية، واحتفظ بأفضل ما يقدمه الورق: مساحة هادئة بلا إشعارات، تكتب فيها بخط يدك ما ترفض أن تنساه.',
    },
    'travel-journals': {
      'Before distances were measured in flights, they were measured in ink.':
        'قبل أن تُقاس المسافات بالرحلات الجوية، قيست بحبر دفتر.',
      'From Ibn Battuta to Hemingway, and how travel books shaped the way we see the world.':
        'من ابن بطوطة إلى همنغواي، وكيف صاغت كتب الرحلات طريقة رؤيتنا للعالم.',
      'The Notebook Before the Airplane': 'الدفتر قبل الطائرة',
      'Travel, once, began with ink.': 'كانت الرحلة، قديماً، تبدأ بحبر.',
      'A wanderer would open his notebook in a café, a tent, or on the deck of a ship, and write down what he saw before the scene went cold.':
        'يفتح الرحّال دفتره في مقهى أو خيمة أو على ظهر سفينة، ويدوّن ما رآه قبل أن يبرد المشهد.',
      'Today we capture a photo and publish it in a second — but what remains of our journeys?':
        'اليوم نلتقط صورة وننشرها في ثانية — لكن ما بقي من رحلاتنا؟',
      'A photo without the smell of the road, and a memory without the patience of description.':
        'صورة بلا رائحة الطريق، وذكرى بلا صبر الوصف.',
      'Old travel books are not mere geographic records.':
        'كتب الرحلات القديمة ليست مجرد سجلات جغرافية.',
      'They are how a human looked at a world no one had seen before, and wrote it down in language that sometimes feared describing the indescribable.':
        'إنها كيف نظر إنسان إلى عالم لم يره أحد من قبل، ودوّنه بلغة تخاف أحياناً من وصف ما لا يُوصف.',
      'Ibn Battuta: A Man Who Did Not Write About Himself':
        'ابن بطوطة: رجلٌ لم يكتب عن نفسه',
      'When Ibn Battuta left Tangier in 1325 heading for the Hajj, he was not planning twenty-seven years.':
        'حين خرج ابن بطوطة من طنجة عام 1325 نحو الحج، لم يكن يخطط لسبعٍ وعشرين سنة.',
      "He saw Delhi and Constantinople, lived in sultan's courts and Bedouin hospitality.":
        'رأى دِلهي وقُسطنطينية، وعاش في بلاطات السلاطنة وكرم البدو.',
      'And at every stop, he did not write "I" — he wrote the place: its sea, its market, its rulers, and its food.':
        'وفي كل محطة لم يكتب «أنا» — بل كتب المكان: بحره، سوقه، حكامه، وطعامه.',
      "In his book, you can read that the man loved small details: the call to prayer from a distant minaret, or how a fish seller shouts his voice before the fish's voice.":
        'ويمكن في كتابه أن تقرأ أن الرجل كان يحبّ التفاصيل الصغيرة: صوت الأذان من مئذنة بعيدة، أو كيف يسبق بائع السمك صراخه إلى صراخ السمك.',
      'This is why the journey is still read after seven centuries.':
        'لهذا ما زالت الرحلة تُقرأ بعد سبعة قرون.',
      'Journeys are told in small details, not in big places.':
        'الرحلة تُروى بالتفاصيل الصغيرة، لا بالأماكن الكبيرة.',
      'Hemingway: Travel in a Short Sentence': 'همنغواي: السفر بجملة قصيرة',
      'Six centuries after Ibn Battuta, Hemingway wrote A Farewell to Arms while in Italy.':
        'ستة قرون بعد ابن بطوطة، كتب همنغواي «وداعاً للسلاح» وهو في إيطاليا.',
      'He did not describe the Alps with many adjectives — he wrote one sentence about the cold, and let the reader feel it.':
        'لم يصف جبال الألب بصفات كثيرة — كتب جملة واحدة عن البرد، وترك القارئ يشعر به.',
      'Hemingway taught us that a short sentence can carry the weight of the road.':
        'علّمنا همنغواي أن الجملة القصيرة قد تحمل وزن الطريق.',
      "Describing a small Paris bistro in three words is better than a full paragraph about the neighborhood's history.":
        'أن تصف مطعماً باريسياً صغيراً بثلاث كلمات أفضل من فقرة كاملة عن تاريخ الحي.',
      'Travel in his writing is not a backdrop — it is a second character.':
        'السفر في كتاباته ليس خلفية — إنه شخصية ثانية.',
      'What Travel Books Teach Us': 'ماذا تُعلّمنا كتب الرحلات؟',
      'That a place is seen from inside: Ibn Battuta was not a tourist — he was inside the country, eating its food and living under its laws.':
        'أن المكان يُرى من داخله: ابن بطوطة لم يكن سائحاً — كان داخل البلد، يأكل من طعامه ويعيش تحت قوانينه.',
      'That the pen is slower than the eye, and that is its advantage: Writing forces reflection, and reflection builds a deeper memory than the photograph.':
        'أن القلم أبطأ من العين، وهذا ميزته: الكتابة تفرض التأمل، والتأمل يصنع ذاكرة أعمق من الصورة.',
      'That the stranger teaches you about home: Most of what wanderers wrote was about their homeland when they returned, not about their destinations while away.':
        'أن الغريب يعلّمك عن بيتك: أكثر ما كتبه الرحّل كان عن وطنهم حين عادوا، لا عن بلادهم حين كانوا فيها.',
      'Your Next Journey: Notebook or Phone?': 'رحلتك القادمة: دفتر أم هاتف؟',
      'We are not calling for abandoning technology, but for one thing: take a small notebook on your next trip.':
        'لا ندعو إلى التخلّي عن التقنية، بل إلى شيء واحد: خذ دفتراً صغيراً في رحلتك القادمة.',
      'Write one sentence each evening — no more.':
        'اكتب جملة واحدة كل مساء — لا أكثر.',
      'Years later, you will have written a truer picture of your journey than anything the camera captured.':
        'بعد سنوات، تكون قد كتبت أصدق صورة عن رحلتك من كل ما التقطته الكاميرا.',
      'Travel books, in the end, are not about places.':
        'كتب الرحلات، في نهاية المطاف، ليست عن الأماكن.',
      "They are about how the place changed the notebook's owner.":
        'إنها عن كيف غيّر المكانُ صاحبَ الدفتر.',
    },
    'ai-tools-2026': {
      'After the flood of releases, these five criteria will help you pick AI tools that add real productivity instead of new chaos.':
        'بعد زحمة الإصدارات، ستساعدك هذه المعايير الخمسة على اختيار أدوات الذكاء الاصطناعي التي تضيف إنتاجية حقيقية بدل فوضى جديدة.',
      "The real problem isn't a shortage of tools":
        'المعضلة الحقيقية ليست نقص الأدوات',
      "After two years of non-stop releases, the problem is the exact opposite: we don't lack AI tools — we drown in tools that promise everything and deliver little.":
        'بعد عامين من إصدارات لا تتوقف، أصبحت المشكلة العكسية تماماً: لا نعاني من قِلّة أدوات الذكاء الاصطناعي، بل من كثرة أدوات تعد بالكل وتنجز القليل.',
      'Open your own list right now and count the apps you tried once and forgot.':
        'افتح قائمتك الآن وعُدّ التطبيقات التي جرّبتها مرة ثم نسيتها.',
      'Before paying for another subscription, start from the right question: which task actually eats my time?':
        'قبل أن تدفع اشتراكاً آخر، ابدأ من السؤال الصحيح: ما المهمة التي تستهلك وقتي فعلاً؟',
      "A good tool doesn't get added to the list — it replaces an old, expensive habit.":
        'الأداة الجيدة لا تُضاف إلى القائمة — بل تستبدل عادة قديمة مكلفة.',
      'Five criteria worth using': 'خمسة معايير تستحق التطبيق',
      'It saves measurable time — count minutes, not vibes.':
        'تختصر وقتاً ملموساً — قِسها بالدقائق لا بالانطباع.',
      "If it saves you 30 minutes a day summarizing meetings, it's worth it.":
        'إن وفّرت عليك 30 دقيقة يومياً في تلخيص الاجتماعات، فهي تستحق.',
      'If it "inspires" you, it\'s not a tool.':
        'إن لم تقدّم سوى «إلهام»، فهي ليست أداة.',
      'It fits your current workflow — anything that forces a new standalone app will be abandoned in two weeks.':
        'تدخل في سير عملك الحالي — أي أداة تفرض تطبيقاً جديداً مستقلاً ستُهجر خلال أسبوعين.',
      "Look for browser extensions and integrations you'll actually use.":
        'ابحث عن إضافات للمتصفح وتكاملات ستستخدمها فعلاً.',
      'You control your data — read the data policy before uploading anything private.':
        'أنت تتحكم ببياناتك — اقرأ سياسة البيانات قبل رفع أي شيء خاص.',
      "If you don't know where your data goes, you're selling it cheap.":
        'إن لم تعرف أين تذهب بياناتك، فأنت تبيعها بثمن بخس.',
      "Pricing has no surprises — free tiers are generous, but usage-based pricing can shock you at month's end.":
        'سعرها بلا مفاجآت — الخطط المجانية كريمة، لكن التسعير بالاستخدام قد يفاجئك في نهاية الشهر.',
      'A simple fallback exists — if the tool vanished tomorrow (quite possible), could you do the same task by hand?':
        'لديها بديل بسيط — إن اختفت الأداة غداً (وهو محتمل)، هل تستطيع إنجاز المهمة نفسها يدوياً؟',
      "If not, you've tied your work to something fragile.":
        'إن كانت الإجابة لا، فأنت ربطت عملك بشيء هشّ.',
      'What actually changed this year?': 'ما الذي تغيّر فعلاً هذا العام؟',
      "The biggest shift isn't raw model power — it's the micro-tools built on top: an assistant inside your editor, automatic inbox triage, code review as you type.":
        'التحوّل الأكبر ليس في قوة النماذج ذاتها، بل في الأدوات المصغّرة المبنية فوقها: مساعد داخل محرّرك، وترتيب تلقائي للبريد، ومراجعة أكواد أثناء الكتابة.',
      'Real value came from bringing AI closer to the task, not from waiting on an empty prompt box.':
        'الفائدة الحقيقية جاءت من تقريب الذكاء الاصطناعي من المهمة، لا من انتظار مربع إدخال فارغ.',
      'Practical rule: try one tool for two weeks, measure saved time in numbers, then decide.':
        'قاعدة عملية: جرّب أداة واحدة أسبوعين، وقِس الوقت الموفَّر بالأرقام، ثم قرّر.',
      'Chasing every release is the most expensive way to waste the time you hoped to save.':
        'مطاردة كل إصدار هي أغلى طريقة لإهدار الوقت الذي أردتَ توفيره.',
      'Bottom line': 'خلاصة',
      "Don't collect tools.": 'لا تجمع الأدوات.',
      'Build a small set of three or four you master and use daily.':
        'ابنِ مجموعة صغيرة من ثلاث أو أربع أدوات تتقنها وتستخدمها يومياً.',
      'Depth in one tool always beats window-shopping twenty.':
        'العمق في أداة واحدة يتفوّق دائماً على التسوّق بين عشرين.',
    },
  },

  ar: {
    'paper-notebook': {
      'في عصر التطبيقات والسحابة، يعود الدفتر الورقي ليذكّرنا أن أبسط الأدوات هي أحياناً الأعمق.':
        'In the age of apps and cloud sync, the humble paper notebook returns to remind us that the simplest tools are sometimes the deepest.',
      'حين تكتب اليد ببطء': 'When the hand writes slowly',
      'هناك فرق عصبيّ موثّق بين كتابة الملاحظات بخط اليد وكتابتها لوحة المفاتيح: اليد أبطأ، ولهذا تُجبر الدماغ على ترشيح ما يستحق قبل أن يصل إلى الورق.':
        'There is a documented cognitive gap between handwriting notes and typing them: the hand is slower, and that is why the brain is forced to filter what deserves to reach the paper.',
      'ما تكتبه ببطء هو ما تتذكّره بعمق.':
        'What you write slowly is what you remember deeply.',
      'التطبيق الذي لا ينام...':
        'The app that never sleeps...',
      'ولا يُقرأ بعد أسبوع':
        'and never gets reread a week later.',
      'جرّب بنفسك: افتح تطبيق ملاحظاتك واقرأ ما كتبته قبل شهر.':
        'Try it yourself: open your notes app and read what you wrote a month ago.',
      'الأغلب ستجد قوائم مهام قديمة وروابط منسيّة.':
        "You'll mostly find stale task lists and forgotten links.",
      'المشكلة ليست في التطبيق، بل في سهولة النسيان التي يمنحها الرقمي — كل شيء قابل للبحث، فلمَ نتذكّر شيئاً؟':
        "The problem isn't the app — it's how easily digital lets us forget: everything is searchable, so why remember anything?",
      'دفتر واحد وظيفته الوحيدة: التذكّر':
        'One notebook whose only job is remembering',
      'ليس المطلوب تبنّيراً رقمياً أو رفض التقنية.':
        'What is asked is not digital asceticism or rejecting technology.',
      'المطلوب بساطة: دفتر واحد بجانبك، تكتب فيه فكرة واحدة كل مساء — بلا تنظيم، بلا تصنيف، بلا إيموجي.':
        "What is asked is simplicity: one notebook next to you — one idea written each evening, no system, no tags, no emoji.",
      'مجرد جملة واحدة تصف يومك أو يزعجك.':
        'Just one sentence describing your day or what bothers you.',
      'بعد سنة، ستصفحه من الغلاف الأول وستكتشف شيئاً غريباً: صفحتك الأولى تخصّ شخصاً تعرفه جيداً وتراه كل يوم في المرآة، لكنك نسيت كم تغيّر.':
        "A year later, you'll leaf through it from the first page and discover something strange: page one belongs to someone you know well and see in the mirror every day — but you forgot how much they changed.",
      'الورق لا يُزامن مع السحابة، لكنه يُزامن مع الذاكرة — وهذا ما نحتاجه فعلاً.':
        "Paper doesn't sync to the cloud, but it syncs with memory — which is what we actually need.",
      'خلاصة': 'Bottom line',
      'استخدم أفضل ما تقدمه التقنية، واحتفظ بأبسط ما تقدمه الورق: مساحة هادئة بلا إشعارات، تكتب فيها بخط يدك ما لا تريد أن تنسى.':
        "Use the best of what technology offers, and keep the simplest of what paper offers: a quiet space with no notifications, where you write by hand what you refuse to forget.",
    },
    'travel-journals': {
      'قبل أن تُقاس المسافات بالطائرات، قيست بحبر دفتر.':
        'Before distances were measured in flights, they were measured in a notebook’s ink.',
      'من ابن بطوطة إلى همنغواي، وكيف صنعت كتب الرحلات نظرة الإنسان إلى العالم.':
        'From Ibn Battuta to Hemingway — how travel books shaped the way a human looks at the world.',
      'الدفتر قبل الطائرة': 'The notebook before the airplane',
      'كانت الرحلة، قديماً، تبدأ بحبر.':
        'Once upon a time, a journey began with ink.',
      'يفتح الرحّال دفتره في مقهى أو خيمة أو على ظهر سفينة، ويدوّن ما رأى قبل أن يبرد المشهد.':
        'A traveler would open his notebook in a café, a tent, or on the deck of a ship, and write down what he saw before the scene went cold.',
      'اليوم نلتقط صورة وننشرها في ثانية — لكن ما بقي من رحلاتنا؟':
        'Today we take a photo and publish it in a second — but what remains of our journeys?',
      'صورة بلا رائحة الطريق، وذكرى بلا صبر الوصف.':
        'A photo without the smell of the road, and a memory without the patience of description.',
      'كتب الرحلات القديمة ليست سجلات جغرافياً فحسب.':
        'Old travel books are not mere geographic records.',
      'إنها كيف نظر إنسان إلى عالم لم يره أحد من قبل، ودوّن ذلك بلغة تخاف أحياناً من وصف ما لا يُوصف.':
        'They are how a human looked at a world no one had ever seen, and wrote it down in a language that sometimes feared describing the indescribable.',
      'ابن بطوطة: رجلٌ لم يكتب عن نفسه':
        'Ibn Battuta: a man who did not write about himself',
      'حين خرج ابن بطوطة من طنجة عام ١٣٢٥ نحو الحج، لم يكن يخطط لسبعٍ وعشرين سنة.':
        'When Ibn Battuta left Tangier in 1325 toward the Hajj, he was not planning twenty-seven years.',
      'رأى دِلمي وقُسطنطينية ودلهي، وعاش في بلاطات سلطانة ومضيفات بدو.':
        "He saw Delhi and Constantinople, and lived in sultans' courts and Bedouin encampments.",
      'وفي كل محطة، لم يكتب «أنا» — بل كتب المكان: بحره، سوقه، حكامه، وطعامه.':
        'At every stop he did not write "I" — he wrote the place: its sea, its market, its rulers, and its food.',
      'ويمكن في كتابه «تحفة النظار» أن تقرأ أن الرجل كان يحبّ التفاصيل الصغيرة: صوت الأذان من مئذنة بعيدة، أو كيف يبيع بائع السمك صراخه قبل صراخ السمك.':
        "In his book Tuḥfat al-Niẓẓār you can read that the man loved small details: the call to prayer from a distant minaret, or how the fish seller shouts his cry before the fish cries.",
      'هذا ما يجعل الرحلة تُقرأ بعد سبعة قرون.':
        'That is what keeps this journey readable seven centuries later.',
      'الرحلة تُروى بالتفاصيل الصغيرة، لا بالأماكن الكبيرة.':
        'Journeys are told in small details, not in big places.',
      'همنغواي: السفر بجملة قصيرة':
        'Hemingway: travel in a short sentence',
      'ستة قرون بعد ابن بطوطة، كتب همنغواي «وداعاً للسلاح» وهو في إيطاليا.':
        'Six centuries after Ibn Battuta, Hemingway wrote A Farewell to Arms while in Italy.',
      'لم يصف جبال الألب بصفات كثيرة — كتب جملة واحدة عن البرد، وترك القارئ يشعر به.':
        'He did not describe the Alps with many adjectives — he wrote one sentence about the cold and let the reader feel it.',
      'همنغواي علّمنا أن الجملة القصيرة قد تحمل وزن الطريق.':
        'Hemingway taught us that a short sentence can carry the weight of the road.',
      'أن تصف مطعم صغير في باريس بثلاث كلمات أفضل من فقرة كاملة عن تاريخ الحي.':
        "Describing a small Paris bistro in three words beats a full paragraph about the neighborhood's history.",
      'السفر في أدبه ليس خلفية — إنه شخصية ثانية.':
        'Travel in his writing is not a backdrop — it is a second character.',
      'ماذا تُعلّمنا كتب الرحلات؟': 'What do travel books teach us?',
      'أن المكان يُرى من داخله: ابن بطوطة لم يكن سائحاً — كان داخل البلد، يأكل من طعامه ويعيش تحت قوانينه.':
        'That a place is seen from within: Ibn Battuta was no tourist — he lived inside the country, eating its food and living under its laws.',
      'أن القلم أبطأ من العين، وهذا ميزته: التدوين يفرض التأمل، والتأمل يصنع ذاكرة أعمق من الصورة.':
        'That the pen is slower than the eye — and that is its advantage: writing forces reflection, and reflection builds a deeper memory than the photograph.',
      'أن الغريب يعلّمك عن بيتك: أكثر ما كتبه الرحّالة عن وطنهم حين عادوا، لا عن بلدانهم حين كانوا فيها.':
        'That the stranger teaches you about home: most of what wanderers wrote was about their homeland upon return, not about their destinations while away.',
      'رحلتك القادمة: دفتر أم هاتف؟':
        'Your next journey: notebook or phone?',
      'لا ندعو إلى التخلّي عن التقنية، لكن ندعو إلى شيء واحد: خذ دفتراً صغيراً في رحلتك القادمة.':
        'We are not calling for abandoning technology — we are calling for one thing: take a small notebook on your next trip.',
      'اكتب جملة واحدة كل مساء — لا أكثر.':
        'Write one sentence each evening — no more.',
      'بعد سنوات، تكون قد كتبت أصدق صورة عن رحلتك من كل ما التقطته الكاميرا.':
        'Years later, you will have written a truer picture of your journey than anything the camera captured.',
      'فكتب الرحلات، في نهاية المطاف، ليست عن الأماكن.':
        'Travel books, in the end, are not about places.',
      'إنها عن كيف تغيّر المكانُ صاحبَ الدفتر.':
        "They are about how the place changed the notebook's owner.",
    },
    'ai-tools-2026': {
      'بعد زحمة الإصدارات، هذه المعايير الخمسة ستساعدك على اختيار الأدوات التي تضيف إنتاجية حقيقية بدل أن تضيف فوضى جديدة.':
        'After the flood of releases, these five criteria will help you choose tools that add real productivity instead of new chaos.',
      'المعضلة الحقيقية ليست نقص الأدوات':
        "The real problem isn't a shortage of tools",
      'بعد عامين من إصدارات لا تتوقف، أصبحت المشكلة العكسية تماماً: لا نعاني من قِلّة أدوات الذكاء الاصطناعي، بل من كثرة أدوات تَعِد بالكل وتنجز القليل.':
        "After two years of non-stop releases, the problem is the exact opposite: we don't lack AI tools — we drown in tools that promise everything and deliver little.",
      'لو فتحت دفترك الآن، ستجد على الأقل عشرة تطبيقات جرّبتها مرة ثم نسيتها.':
        "Open your list right now and you'll find at least ten apps you tried once and forgot.",
      'قبل أن تدفع اشتراكاً شهرياً جديداً، ابدأ من السؤال الصحيح: ما المهمة التي تستهلك وقتي فعلاً؟':
        'Before paying for another monthly subscription, start from the right question: which task actually eats my time?',
      'الأداة الجيدة لا تُضاف إلى قائمة، بل تستبدل طريقة قديمة مكلفة.':
        "A good tool doesn't get added to the list — it replaces an old, expensive habit.",
      'المعايير الخمسة': 'The five criteria',
      'تختصر وقتاً ملموساً — قِسها بالدقائق لا بالانطباع.':
        'It saves measurable time — count minutes, not vibes.',
      'إن وفّرت عليك ٣٠ دقيقة يومياً في تلخيص اجتماعات، فهي تستحق.':
        "If it saves you thirty minutes a day summarizing meetings, it's worth it.",
      'إن وفّرت عليك "إلهاماً"، فهي ليست أداة.':
        'If all it offers is "inspiration", it is not a tool.',
      'تدخل في سير عملك الحالي — الأداة التي تفرض عليك الانتقال إلى تطبيق جديد ستُهجر خلال أسبوعين.':
        "It fits your current workflow — a tool that forces a brand-new standalone app will be abandoned within two weeks.",
      'ابحث عن إضافات للمتصفح وأدوات تتكامل مع ما تستخدمه أصلاً.':
        'Look for browser extensions and tools that integrate with what you already use.',
      'تتحكم بخصوصيتك — راجع سياسة بياناتك قبل رفع أي ملف خاص.':
        'You control your privacy — review the data policy before uploading anything private.',
      'إن لم تعرف أين تذهب بياناتك، فأنت تبيعها بثمن بخس.':
        "If you don't know where your data goes, you're selling it cheap.",
      'سعرها مفهوم بلا مفاجآت — التجربة المجانية كريمة، لكن تسعير "بالاستخدام" قد يفاجئك في نهاية الشهر.':
        "Its pricing is understandable, with no surprises — the free tier is generous, but usage-based pricing can shock you at the end of the month.",
      'لها بديل بسيط — إن اختفت الأداة غداً (وهو محتمل)، هل تستطيع إنجاز نفس المهمة يدوياً؟':
        'It has a simple fallback — if the tool vanished tomorrow (quite possible), could you do the same task by hand?',
      'إن كانت الإجابة لا، فأنت ربطت عملك بأداة هشّة.':
        "If the answer is no, you've tied your work to something fragile.",
      'ما الذي تغيّر هذا العام؟': 'What changed this year?',
      'الفرق الأكبر ليس في قوة النماذج، بل في الأدوات المصغّرة التي بُنيت فوقها: مساعد داخل محرّر النصوص، تلخيص تلقائي للبريد، مراجعة أكواد أثناء الكتابة.':
        'The biggest difference isn\'t in model power, but in the micro-tools built on top: an assistant inside your editor, automatic email summarization, code review while you type.',
      'الفائدة الحقيقية جاءت من الاقتراب بالذكاء الاصطناعي إلى المهمة، لا من انتظارنا له في صفحة فارغة.':
        'Real value came from bringing AI closer to the task, not from waiting at an empty page.',
      'القاعدة العملية: جرّب أداة واحدة لمدة أسبوعين، قِس الوقت الموفر بأرقام، ثم قرّر.':
        'The practical rule: try one tool for two weeks, measure saved time in numbers, then decide.',
      'الترقّب المستمر لكل إصدار هو أخطر تسريب لوقتك.':
        'Constantly chasing every release is the most dangerous leak of your time.',
      'خلاصة': 'Bottom line',
      'لا تجمع أدوات.': "Don't collect tools.",
      'ابنِ مجموعة صغيرة من ثلاث أو أربع أدوات تتقنها وتستخدمها يومياً.':
        'Build a small set of three or four tools you master and use daily.',
      'العمق في أداة واحدة يتفوّق دائماً على الترقّب مع عشرين.':
        'Depth in one tool always beats loitering around twenty.',
    },

    'anemoia': {
      'من سلسلة «تأمّل ثقافي»: عن anemoia، الحنين إلى زمن لم نعشه — وماذا تفعل بنا الصورة التي تنتقي الأجمل من الماضي.':
        'From the \u2018Cultural Reflection\u2019 series: about anemoia — nostalgia for a time we never lived — and what the image that curates the prettiest of the past does to us.',
      'من سلسلة «تأمّل ثقافي»': "From the 'Cultural Reflection' series",
      'يهبط من السيارة ببطء، كأن الأرض كانت تنتظره.':
        'He steps out of the car slowly, as if the ground had been waiting for him.',
      'شعر منفوش لا يعبأ بالريح، وقميص نصف مفتوح، وجينز ضيّق، ونظرة تقول إن المكان ملكه.':
        'Wild hair that ignores the wind, a half-open shirt, tight jeans, and a look that says the place belongs to him.',
      'ثلاث فتيات يلتفتن، وخلفهن وجوه أخرى، والكاميرا تمنحنا وقتًا كافيًا لنُعجَب نحن أيضًا.':
        'Three girls turn around, and behind them other faces, and the camera gives us enough time to admire them too.',
      'مشهد لا يتجاوز ثوانٍ، ومع ذلك يُعاد ملايين المرات على الشاشات.':
        'A scene that lasts seconds, yet it is replayed millions of times on screens.',
      'والسؤال الغريب: لماذا يهزّنا هذا الدخول ونحن لم نكن هناك؟':
        'And the strange question: why does this entrance shake us when we were never there?',
      'لم نقف في تلك الساحة، ولم نسمع تلك الأغاني حين صدرت، ولم تطلب منا أمهاتنا أن نُصلح هذا الشعر.':
        'We never stood in that courtyard, never heard those songs when they came out, and our mothers never asked us to fix that hair.',
      'ومع ذلك نشعر بشيء يشبه الاشتياق.':
        'Yet we feel something that resembles longing.',
      'ذاكرة بلا صاحب': 'A memory with no owner',
      'لهذا الشعور اسم ابتكره الكاتب جون كونيغ في «معجم الأحزان الغامضة»: anemoia، أي الحنين إلى زمن لم تعشه.':
        'This feeling has a name coined by writer John Koenig in The Dictionary of Obscure Sorrows: anemoia — nostalgia for a time you never knew.',
      'هو شوق بلا ذكرى، كمن يفتقد بيتًا لم يسكنه.':
        'It is longing without memory, like missing a house you never lived in.',
      'فمن أين يأتي إذن؟': 'So where does it come from?',
      'من الشاشة.': 'From the screen.',
      'ذاكرتنا عن الثمانينات ليست ذاكرتنا، بل ذاكرة مستعارة صنعتها الأفلام والمسلسلات وأغلفة الأسطوانات والإعلانات القديمة.':
        'Our memory of the eighties is not ours; it is a borrowed memory manufactured by films, series, record sleeves, and old ads.',
      'نحن لا نتذكر ذلك العقد، بل نتذكر ما عُرض علينا عنه.':
        'We do not remember that decade — we remember what was shown to us about it.',
      'ما تحفظه الصورة وما تحذفه': 'What the picture keeps — and what it deletes',
      'الشاشة لا تحفظ كل شيء، بل تحفظ الأجمل.':
        'The screen does not keep everything; it keeps the prettiest.',
      'الألوان الصارخة تبقى، والطوابير والقلق والأخبار الثقيلة لا تبقى.':
        'Loud colors survive; queues, anxiety, and heavy news do not.',
      'الموسيقى تبقى، وضجر الأيام العادية لا يبقى.':
        'The music survives; the tedium of ordinary days does not.',
      'وهكذا نشتاق إلى نسخة منقّحة من زمن لم يكن بهذا اللمعان.':
        'That is how we come to miss a retouched version of a time that never shone so brightly.',
      'وحتى بيلي نفسه مثال على ذلك.': 'Even Billy himself is an example.',
      'دخوله لامع إلى درجة أننا ننسى أن المسلسل يكشف لاحقًا بيتًا قاسيًا خلف هذا الغرور.':
        'His entrance is so dazzling that we forget the series later reveals a cruel home behind that swagger.',
      'نحتفظ بالدخول ونحذف الحكاية، وهذا ما نفعله بالعقد كله.':
        'We keep the entrance and delete the story — and that is what we do with the whole decade.',
      'الشعر والجينز: حين كانت الهوية مرئية': 'Hair and jeans: when identity was visible',
      'مع ذلك، ليس كل ما نشتاق إليه وهمًا.':
        'Still, not everything we miss is an illusion.',
      'في الثمانينات كان الشكل بيانًا: تسريحة منفوشة، أو خصلة طويلة في الخلف، أو لون لا يخجل من نفسه.':
        'In the eighties, appearance was a statement: a teased mane, a mullet, a color unashamed of itself.',
      'الجينز الضيّق، والأكتاف العريضة، والجاكيتات الجلدية، كلها كانت تقول للناس: أنا هنا، وأريدكم أن تلاحظوا.':
        'Tight jeans, broad shoulders, and leather jackets all told people: I am here, and I want you to notice.',
      'أما اليوم فالموضة تصلنا عبر خوارزمية تقترح علينا ما يشبه الجميع، ونتشابه بدقة لا يحلم بها أي عقد سابق.':
        'Today fashion reaches us through an algorithm that suggests what resembles everyone, and we look alike with a precision no earlier decade could dream of.',
      'فربما نحن لا نشتاق إلى القماش، بل إلى الجرأة التي كانت تلبسه.':
        'Maybe we do not miss the fabric — we miss the audacity that wore it.',
      'ثمانيناتنا نحن': 'Our own eighties',
      'لكن هناك ثمانينات أخرى، ليست ثمانينات هوليوود.':
        "But there is another eighties — not Hollywood's.",
      'افتح ألبوم العائلة: صور بألوان باهتة، وأعمام بشوارب كثيفة، وأمهات بتسريحات منتفخة، وأشرطة كاسيت مكدّسة في زاوية الغرفة.':
        'Open the family album: faded photographs, uncles with thick mustaches, mothers with teased hairdos, and cassette tapes piled in the corner of the room.',
      'هذه ثمانينات نعرفها من وجوه نحبها، لا من مسلسل أجنبي.':
        'These are the eighties we know from faces we love, not from a foreign series.',
      'وأحيانًا أظن أن شوقنا إلى ثمانينات المسلسلات هو في الحقيقة قناع لشوق أقرب: أن نرى والدينا شابَّين، وأن نعرف من كانا قبل أن نكون.':
        'Sometimes I think our longing for the series\u2019 eighties is really a mask for a closer longing: to see our parents young, and to know who they were before we existed.',
      'من يبيع لنا الحنين؟': 'Who sells us the longing?',
      'لا ينبغي أن ننسى أن للحنين اليوم سوقًا.':
        'We should not forget that nostalgia today has a market.',
      'فلاتر تحوّل صورنا إلى صور قديمة بنقرة واحدة، وقوائم تشغيل تعلن عن «أجمل الثمانينات»، وعلامات تجارية تعيد إصدار أحذية ومعاطف من ذلك الزمن، ومسلسلات تُصنع خصيصًا لتجعلنا نشتاق.':
        'Filters turn our photos vintage with one tap, playlists announce \u2018the best of the eighties\u2019, brands reissue shoes and coats from that era, and series are made specifically to make us ache.',
      'لا عيب في أن نستمتع بذلك.': 'There is no harm in enjoying it.',
      'لكن الأجدر أن نسأل: هل هذا الشوق نابع منا، أم صُنع ليُباع لنا؟':
        'But the worthier question is: does this longing come from us, or was it manufactured to be sold to us?',
      'هل الشوق خيانة للحاضر؟': 'Is longing a betrayal of the present?',
      'لا أظن ذلك.': "I don't think so.",
      'الشوق إلى زمن لم نعشه ليس هروبًا بالضرورة، بل قد يكون مرآة تخبرنا بما ينقصنا اليوم: جرأة في الشكل، وبطء في الخطى، ووجوه تلتقي وجهًا لوجه دون شاشة بينها.':
        'Longing for a time we never lived is not necessarily an escape; it may be a mirror telling us what we lack today: boldness in appearance, slowness in pace, and faces meeting face to face with no screen between them.',
      'ربما السؤال الأصدق ليس لماذا نشتاق إلى الثمانينات، بل ماذا نفعل بما يخبرنا به هذا الشوق.':
        'Perhaps the sincerest question is not why we miss the eighties, but what we do with what this longing tells us.',
      'هل نشتري القميص ونكتفي؟': 'Do we buy the shirt and settle?',
      'أم نسأل لماذا لا نصنع، نحن، ثمانيناتنا الجديدة بالجرأة نفسها؟':
        'Or do we ask why we, ourselves, do not craft a new eighties of our own, with the same audacity?',
    },
  },
};
