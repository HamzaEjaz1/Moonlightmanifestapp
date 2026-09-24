import type { Locale } from "@/i18n/config";

export type LegalSection = { heading: string; paragraphs: string[] };

export type LegalDoc = {
  intro: string;
  sections: LegalSection[];
};

const terms: Record<Locale, LegalDoc> = {
  en: {
    intro:
      "These Terms of Service describe Moonlight, a manifestation and wellness application operated by Wrapify Solutions. They are based on the product terms provided for this website. They are not a complete substitute for counsel-reviewed contracts if those differ.",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          "Moonlight is operated by Wrapify Solutions. Support is available at support@moonlightmanifest.app.",
        ],
      },
      {
        heading: "The service",
        paragraphs: [
          "Moonlight is a manifestation and wellness companion. It includes AI-assisted manifestation stories, personalized affirmations, narration voice selection, private content including Whisper-style reflections, user-initiated sharing, and premium features.",
        ],
      },
      {
        heading: "AI-assisted content",
        paragraphs: [
          "Stories and affirmations may be generated or assisted by artificial intelligence. AI outputs can be inaccurate, incomplete, or unexpected. Moonlight does not guarantee that generated content will match your expectations or produce any particular feeling or result.",
        ],
      },
      {
        heading: "No guaranteed outcomes",
        paragraphs: [
          "Moonlight does not guarantee specific life, relationship, health, financial, or emotional outcomes. The app is a space for intention, visualization, reflection, personal motivation, and self-expression.",
        ],
      },
      {
        heading: "Not professional advice",
        paragraphs: [
          "Moonlight is a manifestation, reflection, and entertainment-oriented experience. It is not medical, psychological, legal, financial, or other professional advice and does not replace care from a qualified professional.",
        ],
      },
      {
        heading: "Sharing",
        paragraphs: [
          "You may create visual cards from stories and affirmations and share them to platforms you choose. Sharing is always initiated by you. Private content is not placed on a public feed automatically.",
        ],
      },
      {
        heading: "Accounts, premium features, and deletion",
        paragraphs: [
          "Some features may require an account or a paid subscription offered through the App Store or Google Play. You may request account deletion from the app or by contacting support@moonlightmanifest.app.",
        ],
      },
      {
        heading: "Languages",
        paragraphs: [
          "Moonlight supports English, Russian, Arabic, and Bahasa Indonesia.",
        ],
      },
    ],
  },
  ru: {
    intro:
      "Эти условия описывают Moonlight — приложение для манифестации и благополучия, которым управляет Wrapify Solutions. Текст основан на продуктовых условиях, предоставленных для сайта, и не заменяет юридически выверенный договор, если он отличается.",
    sections: [
      {
        heading: "Кто мы",
        paragraphs: [
          "Moonlight управляется компанией Wrapify Solutions. Поддержка: support@moonlightmanifest.app.",
        ],
      },
      {
        heading: "Сервис",
        paragraphs: [
          "Moonlight — спутник манифестации и благополучия. Он включает истории с помощью ИИ, персональные аффирмации, выбор голоса озвучки, приватный контент, включая размышления в формате Whisper, шеринг только по инициативе пользователя и премиум-функции.",
        ],
      },
      {
        heading: "Контент с помощью ИИ",
        paragraphs: [
          "Истории и аффирмации могут создаваться или дополняться искусственным интеллектом. Результаты ИИ могут быть неточными или неожиданными. Moonlight не гарантирует, что контент совпадёт с ожиданиями или даст конкретный результат.",
        ],
      },
      {
        heading: "Без гарантии результатов",
        paragraphs: [
          "Moonlight не гарантирует конкретных жизненных, любовных, медицинских, финансовых или эмоциональных результатов. Приложение — пространство для намерения, визуализации, рефлексии и самовыражения.",
        ],
      },
      {
        heading: "Не профессиональная консультация",
        paragraphs: [
          "Moonlight — опыт манифестации, рефлексии и развлечения. Это не медицинская, психологическая, юридическая, финансовая или иная профессиональная консультация.",
        ],
      },
      {
        heading: "Шеринг",
        paragraphs: [
          "Вы можете создавать визуальные карточки и делиться ими на выбранных платформах. Шеринг всегда инициируете вы. Приватный контент не публикуется в общей ленте автоматически.",
        ],
      },
      {
        heading: "Аккаунт, премиум и удаление",
        paragraphs: [
          "Некоторые функции могут требовать аккаунт или платную подписку через App Store или Google Play. Удаление аккаунта можно запросить в приложении или по адресу support@moonlightmanifest.app.",
        ],
      },
      {
        heading: "Языки",
        paragraphs: ["Moonlight поддерживает английский, русский, арабский и индонезийский."],
      },
    ],
  },
  ar: {
    intro:
      "تصف شروط الخدمة هذه تطبيق Moonlight للتجلي والعافية، وتشغّله Wrapify Solutions. تستند إلى الشروط المقدمة لهذا الموقع، ولا تغني عن عقد راجعه مستشار قانوني إن اختلف.",
    sections: [
      {
        heading: "من نحن",
        paragraphs: [
          "تشغّل Wrapify Solutions تطبيق Moonlight. الدعم عبر support@moonlightmanifest.app.",
        ],
      },
      {
        heading: "الخدمة",
        paragraphs: [
          "Moonlight رفيق للتجلي والعافية. يشمل قصص تجَلٍّ بمساعدة الذكاء الاصطناعي، وتأكيدات شخصية، واختيار صوت السرد، ومحتوى خاص بما فيه تأملات بنمط Whisper، ومشاركة يبدأها المستخدم، ومزايا مميزة.",
        ],
      },
      {
        heading: "محتوى بمساعدة الذكاء الاصطناعي",
        paragraphs: [
          "قد تُنشأ القصص والتأكيدات أو تُساعد بالذكاء الاصطناعي. قد تكون المخرجات غير دقيقة أو غير متوقعة. لا تضمن Moonlight أن يطابق المحتوى توقعاتك أو ينتج نتيجة محددة.",
        ],
      },
      {
        heading: "لا نتائج مضمونة",
        paragraphs: [
          "لا تضمن Moonlight نتائج محددة في الحياة أو العلاقات أو الصحة أو المال أو المشاعر. التطبيق مساحة للنية والتصور والتأمل والتعبير.",
        ],
      },
      {
        heading: "ليست مشورة مهنية",
        paragraphs: [
          "Moonlight تجربة تجَلٍّ وتأمل وترفيه. ليست مشورة طبية أو نفسية أو قانونية أو مالية أو مهنية أخرى.",
        ],
      },
      {
        heading: "المشاركة",
        paragraphs: [
          "يمكنك إنشاء بطاقات بصرية ومشاركتها على المنصات التي تختارها. المشاركة تبدأ منك دائمًا. لا يُوضع المحتوى الخاص في موجز عام تلقائيًا.",
        ],
      },
      {
        heading: "الحساب والمزايا المميزة والحذف",
        paragraphs: [
          "قد تتطلب بعض المزايا حسابًا أو اشتراكًا مدفوعًا عبر App Store أو Google Play. يمكنك طلب حذف الحساب من التطبيق أو عبر support@moonlightmanifest.app.",
        ],
      },
      {
        heading: "اللغات",
        paragraphs: ["تدعم Moonlight الإنجليزية والروسية والعربية والإندونيسية."],
      },
    ],
  },
  id: {
    intro:
      "Ketentuan Layanan ini menjelaskan Moonlight, aplikasi manifestasi dan wellness yang dioperasikan oleh Wrapify Solutions. Teks ini didasarkan pada ketentuan produk yang disediakan untuk situs ini dan bukan pengganti kontrak yang ditinjau penasihat hukum jika berbeda.",
    sections: [
      {
        heading: "Siapa kami",
        paragraphs: [
          "Moonlight dioperasikan oleh Wrapify Solutions. Dukungan tersedia di support@moonlightmanifest.app.",
        ],
      },
      {
        heading: "Layanan",
        paragraphs: [
          "Moonlight adalah pendamping manifestasi dan wellness. Layanan mencakup cerita berbantuan AI, afirmasi personal, pilihan suara narasi, konten pribadi termasuk refleksi bergaya Whisper, berbagi yang dimulai pengguna, dan fitur premium.",
        ],
      },
      {
        heading: "Konten berbantuan AI",
        paragraphs: [
          "Cerita dan afirmasi dapat dibuat atau dibantu kecerdasan buatan. Keluaran AI bisa tidak akurat atau tidak terduga. Moonlight tidak menjamin konten akan sesuai harapan atau menghasilkan hasil tertentu.",
        ],
      },
      {
        heading: "Tidak ada hasil yang dijamin",
        paragraphs: [
          "Moonlight tidak menjamin hasil hidup, hubungan, kesehatan, keuangan, atau emosi tertentu. Aplikasi ini adalah ruang untuk niat, visualisasi, refleksi, dan ekspresi diri.",
        ],
      },
      {
        heading: "Bukan nasihat profesional",
        paragraphs: [
          "Moonlight adalah pengalaman manifestasi, refleksi, dan hiburan. Ini bukan nasihat medis, psikologis, hukum, finansial, atau profesional lainnya.",
        ],
      },
      {
        heading: "Berbagi",
        paragraphs: [
          "Kamu dapat membuat kartu visual dan membagikannya ke platform pilihanmu. Berbagi selalu dimulai olehmu. Konten pribadi tidak dimasukkan ke feed publik secara otomatis.",
        ],
      },
      {
        heading: "Akun, premium, dan penghapusan",
        paragraphs: [
          "Beberapa fitur mungkin memerlukan akun atau langganan berbayar melalui App Store atau Google Play. Penghapusan akun dapat diminta dari aplikasi atau melalui support@moonlightmanifest.app.",
        ],
      },
      {
        heading: "Bahasa",
        paragraphs: ["Moonlight mendukung English, Rusia, Arab, dan Bahasa Indonesia."],
      },
    ],
  },
};

const privacy: Record<Locale, LegalDoc> = {
  en: {
    intro:
      "This Privacy Policy describes how Moonlight, operated by Wrapify Solutions, approaches personal information in a manifestation and wellness app. It reflects the privacy principles provided for this website and should be replaced by a counsel-reviewed policy if one differs.",
    sections: [
      {
        heading: "What Moonlight is designed around",
        paragraphs: [
          "Moonlight handles dreams, stories, affirmations, profile details, and personal reflections. These are treated as deeply personal. The product is designed with privacy in mind.",
        ],
      },
      {
        heading: "How information is used",
        paragraphs: [
          "Personal details you provide can be used to personalize stories, affirmations, narration, and your in-app experience. We do not claim military-grade encryption or any security standard that has not been independently specified.",
        ],
      },
      {
        heading: "Private content and sharing",
        paragraphs: [
          "There is no public feed for private stories, whispers, or reflections. Sharing visual cards or other content is initiated by you. Moonlight does not automatically publish private content.",
        ],
      },
      {
        heading: "Account requests",
        paragraphs: [
          "You may request account deletion from the app or by emailing support@moonlightmanifest.app.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Wrapify Solutions operates Moonlight. Privacy questions can be sent to support@moonlightmanifest.app.",
        ],
      },
    ],
  },
  ru: {
    intro:
      "Эта политика описывает, как Moonlight (Wrapify Solutions) относится к личной информации в приложении для манифестации и благополучия. Она отражает принципы, предоставленные для сайта, и должна быть заменена юридически выверенным документом, если он отличается.",
    sections: [
      {
        heading: "О чём приложение",
        paragraphs: [
          "Moonlight работает с мечтами, историями, аффирмациями, данными профиля и личными размышлениями. Они считаются глубоко личными. Продукт создан с вниманием к приватности.",
        ],
      },
      {
        heading: "Как используются данные",
        paragraphs: [
          "Личные детали могут использоваться, чтобы персонализировать истории, аффирмации, озвучку и опыт в приложении. Мы не заявляем о «военном шифровании» или стандартах безопасности, которые не были отдельно подтверждены.",
        ],
      },
      {
        heading: "Приватный контент и шеринг",
        paragraphs: [
          "Нет публичной ленты для частных историй, шёпотов и размышлений. Шеринг карточек запускаете только вы. Moonlight не публикует приватный контент автоматически.",
        ],
      },
      {
        heading: "Запросы по аккаунту",
        paragraphs: [
          "Удаление аккаунта можно запросить в приложении или по адресу support@moonlightmanifest.app.",
        ],
      },
      {
        heading: "Контакты",
        paragraphs: [
          "Moonlight управляется Wrapify Solutions. Вопросы о приватности: support@moonlightmanifest.app.",
        ],
      },
    ],
  },
  ar: {
    intro:
      "تصف سياسة الخصوصية هذه كيف تتعامل Moonlight، التي تشغّلها Wrapify Solutions، مع المعلومات الشخصية في تطبيق تجَلٍّ وعافية. تعكس المبادئ المقدمة لهذا الموقع، وينبغي استبدالها بسياسة راجعها مستشار إن اختلفت.",
    sections: [
      {
        heading: "ما صُممت Moonlight حوله",
        paragraphs: [
          "تتعامل Moonlight مع الأحلام والقصص والتأكيدات وتفاصيل الملف والتأملات الشخصية. تُعد هذه المعلومات شخصية بعمق. صُمم المنتج مع الخصوصية في الاعتبار.",
        ],
      },
      {
        heading: "كيف تُستخدم المعلومات",
        paragraphs: [
          "يمكن استخدام التفاصيل التي تقدمها لتخصيص القصص والتأكيدات والسرد وتجربتك داخل التطبيق. لا ندّعي تشفيرًا عسكريًا أو أي معيار أمني لم يُحدد بشكل مستقل.",
        ],
      },
      {
        heading: "المحتوى الخاص والمشاركة",
        paragraphs: [
          "لا يوجد موجز عام للقصص أو الهمسات أو التأملات الخاصة. تبدأ مشاركة البطاقات منك. لا تنشر Moonlight المحتوى الخاص تلقائيًا.",
        ],
      },
      {
        heading: "طلبات الحساب",
        paragraphs: [
          "يمكنك طلب حذف الحساب من التطبيق أو عبر support@moonlightmanifest.app.",
        ],
      },
      {
        heading: "التواصل",
        paragraphs: [
          "تشغّل Wrapify Solutions تطبيق Moonlight. أسئلة الخصوصية: support@moonlightmanifest.app.",
        ],
      },
    ],
  },
  id: {
    intro:
      "Kebijakan Privasi ini menjelaskan bagaimana Moonlight, yang dioperasikan Wrapify Solutions, menangani informasi pribadi dalam aplikasi manifestasi dan wellness. Kebijakan ini mencerminkan prinsip yang disediakan untuk situs ini dan harus diganti dokumen yang ditinjau penasihat hukum jika berbeda.",
    sections: [
      {
        heading: "Apa yang menjadi dasar Moonlight",
        paragraphs: [
          "Moonlight menangani impian, cerita, afirmasi, detail profil, dan refleksi pribadi. Semua itu diperlakukan sebagai sangat personal. Produk dirancang dengan privasi sebagai bagian dari pengalaman.",
        ],
      },
      {
        heading: "Bagaimana informasi digunakan",
        paragraphs: [
          "Detail yang kamu berikan dapat dipakai untuk memersonalisasi cerita, afirmasi, narasi, dan pengalaman di aplikasi. Kami tidak mengklaim enkripsi tingkat militer atau standar keamanan yang belum ditetapkan secara independen.",
        ],
      },
      {
        heading: "Konten pribadi dan berbagi",
        paragraphs: [
          "Tidak ada feed publik untuk cerita, whisper, atau refleksi pribadi. Berbagi kartu visual selalu dimulai olehmu. Moonlight tidak mempublikasikan konten pribadi secara otomatis.",
        ],
      },
      {
        heading: "Permintaan akun",
        paragraphs: [
          "Penghapusan akun dapat diminta dari aplikasi atau melalui support@moonlightmanifest.app.",
        ],
      },
      {
        heading: "Kontak",
        paragraphs: [
          "Wrapify Solutions mengoperasikan Moonlight. Pertanyaan privasi dapat dikirim ke support@moonlightmanifest.app.",
        ],
      },
    ],
  },
};

export function getTerms(locale: Locale): LegalDoc {
  return terms[locale];
}

export function getPrivacy(locale: Locale): LegalDoc {
  return privacy[locale];
}
