/* AWAREmed – Premium Site JS v2 */
'use strict';

/* ─── i18n Translations ─── */
const TRANSLATIONS = {
  en: {
    dir: 'ltr',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.about.awaremed': 'About AWAREmed',
    'nav.about.dr': 'Dr. Dalal Akoury, MD',
    'nav.services': 'Services',
    'nav.services.all': 'All Services',
    'nav.services.oncology': 'Integrative Oncology Support',
    'nav.services.iv': 'IV Therapy & Hydration',
    'nav.services.hormone': 'Hormone Optimization (BHRT)',
    'nav.services.regen': 'Regenerative Medicine',
    'nav.services.chelation': 'Chelation & Detox',
    'nav.services.gut': 'Gut Health & Functional Medicine',
    'nav.services.brain': 'Brain & Cognitive Wellness',
    'nav.services.skin': 'Skin & Anti-Aging',
    'nav.newpatients': 'New Patients',
    'nav.education': 'Patient Education',
    'nav.contact': 'Contact',
    'nav.book': 'Book a Consultation',
    'util.disclaimer': 'Educational content only — not medical advice. Individual results vary.',
    'hero.badge': 'Physician-Led Integrative Medicine · Johnson City, TN',
    'hero.h1': 'Whole-Person Care Built Around <em>Your Story</em>',
    'hero.desc': 'At AWAREmed, Dr. Dalal Akoury, MD looks beyond symptoms to uncover root causes — supporting your body, mind, and spirit through personalized integrative and functional medicine.',
    'hero.trust1': 'Board-Certified Physician',
    'hero.trust2': '4 Languages Spoken',
    'hero.trust3': 'Virtual Visits Available',
    'hero.trust4': 'HIPAA Compliant',
    'hero.cta1': 'Book a Consultation',
    'hero.cta2': 'Explore Services',
    'hero.stat1.label': 'Years Experience',
    'hero.stat2.label': 'Specialty Services',
    'hero.stat3.label': 'Languages Spoken',
    'hero.stat4.label': 'Personalized Care',
    'hero.video.title': 'Meet Dr. Dalal Akoury, MD',
    'hero.video.sub': 'Founder & Medical Director, AWAREmed',
    'hero.badge1.label': 'Integrative Medicine',
    'hero.badge1.name': 'Dr. Dalal Akoury',
    'hero.badge2.label': 'Patient Rating',
    'hero.badge2.val': '5.0 / 5.0',
    'section.approach.eyebrow': 'Our Philosophy',
    'section.approach.h2': 'Care Designed Around You — Not a Protocol',
    'section.approach.lead': 'We combine conventional understanding with integrative, hormonal, nutritional, and cellular health strategies — tailored to your history, biology, and goals.',
    'section.services.eyebrow': 'What We Offer',
    'section.services.h2': 'Comprehensive, Thoughtfully Delivered Care',
    'section.services.lead': 'Eight specialty areas — each designed around your unique health story. Hover to explore, click to learn more.',
    'section.services.cta': 'View All Services',
    'section.about.eyebrow': 'Meet Your Physician',
    'section.about.bio1': 'Dr. Akoury is the founder of AWAREmed Health & Wellness Resource Center — an integrative physician whose expertise spans functional medicine, regenerative medicine, anti-aging, metabolic health, and integrative oncology support.',
    'section.about.bio2': 'Her background includes pediatrics, emergency medicine, public health, and oncology-related training. She speaks English, Arabic, French, and Spanish, welcoming patients from around the world both in-person and virtually.',
    'section.about.bio3': 'Her approach is simple: listen deeply, look beyond the obvious, and build a truly personalized care plan that honors you as a whole person.',
    'section.about.cta1': "Dr. Akoury's Full Bio",
    'section.about.cta2': 'Book a Consultation',
    'section.process.eyebrow': 'Your Journey',
    'section.process.h2': 'What Happens When You Come to AWAREmed',
    'section.process.lead': 'Three steps. Complete support from your very first visit.',
    'section.process.step1': 'Your Story',
    'section.process.step1.desc': 'You share your complete health history. We listen to everything — including what conventional care may have overlooked or dismissed.',
    'section.process.step2': 'Your Assessment',
    'section.process.step2.desc': 'Dr. Akoury conducts a comprehensive, personalized evaluation using advanced diagnostics and functional testing.',
    'section.process.step3': 'Your Plan',
    'section.process.step3.desc': 'You leave with a personalized, root-cause care plan — and our full support as it evolves with your health journey.',
    'section.trust.eyebrow': 'Why Choose AWAREmed',
    'section.trust.h2': 'Premium Care You Can Trust',
    'section.trust.lead': 'We meet the highest standards in integrative medicine — so you receive care that\'s both compassionate and clinically sound.',
    'section.testimonials.eyebrow': 'Patient Voices',
    'section.testimonials.h2': 'In Their Own Words',
    'section.blog.eyebrow': 'Patient Education',
    'section.blog.h2': 'Latest Health Insights',
    'section.blog.cta': 'View All Articles',
    'section.lang.eyebrow': 'Global Reach',
    'section.lang.h2': 'We Speak Your Language',
    'section.lang.lead': 'Dr. Akoury consults in English, Arabic, French, and Spanish. Patients from around the world — and right here in Johnson City — are warmly welcomed.',
    'section.faq.eyebrow': 'Common Questions',
    'section.faq.h2': 'Frequently Asked Questions',
    'section.cta.eyebrow': 'Ready to Start?',
    'section.cta.h2': 'Take the First Step Toward a Healthier You',
    'section.cta.desc': 'Schedule a consultation with Dr. Dalal Akoury, MD and discover a truly personalized, whole-person approach to your health.',
    'cta.book': 'Book a Consultation',
    'footer.tagline': 'AWAREmed Health & Wellness Resource Center is a physician-led integrative and functional medicine practice in Johnson City, Tennessee — serving patients locally and virtually worldwide.',
    'footer.hours.title': 'Office Hours',
    'footer.hours.weekday': 'Mon – Fri: 9:00 AM – 5:00 PM',
    'footer.hours.weekend': 'Sat – Sun: By appointment',
    'footer.hours.virtual': 'Virtual: Flexible scheduling',
    'footer.newsletter.title': 'Stay Informed',
    'footer.newsletter.desc': 'Health insights & wellness tips from Dr. Akoury, delivered to your inbox.',
    'footer.newsletter.placeholder': 'Your email address',
    'footer.newsletter.btn': 'Join',
    'footer.explore': 'Explore',
    'footer.services': 'Services',
    'footer.legal': 'Legal',
    'footer.copy': '© 2026 AWAREmed Health & Wellness Resource Center. All rights reserved.'
  },
  ar: {
    dir: 'rtl',
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.about.awaremed': 'عن AWAREmed',
    'nav.about.dr': 'الدكتورة دلال عكوري',
    'nav.services': 'الخدمات',
    'nav.services.all': 'جميع الخدمات',
    'nav.services.oncology': 'دعم أورام متكاملة',
    'nav.services.iv': 'علاج بالتسريب الوريدي',
    'nav.services.hormone': 'تحسين الهرمونات',
    'nav.services.regen': 'الطب التجديدي',
    'nav.services.chelation': 'إزالة السموم والمعادن الثقيلة',
    'nav.services.gut': 'صحة الجهاز الهضمي',
    'nav.services.brain': 'صحة الدماغ والإدراك',
    'nav.services.skin': 'الجلد ومكافحة الشيخوخة',
    'nav.newpatients': 'مرضى جدد',
    'nav.education': 'تثقيف المرضى',
    'nav.contact': 'اتصل بنا',
    'nav.book': 'احجز استشارة',
    'util.disclaimer': 'محتوى تعليمي فقط — ليس نصيحة طبية. تتفاوت النتائج الفردية.',
    'hero.badge': 'طب تكاملي بإشراف طبيب · جونسون سيتي، تينيسي',
    'hero.h1': 'رعاية شاملة للإنسان مبنية على <em>قصتك</em>',
    'hero.desc': 'في AWAREmed، تنظر الدكتورة دلال عكوري إلى ما هو أعمق من الأعراض للكشف عن الأسباب الجذرية — داعمةً جسدك وعقلك وروحك من خلال طب تكاملي ووظيفي مخصص لك.',
    'hero.trust1': 'طبيبة معتمدة',
    'hero.trust2': 'أربع لغات',
    'hero.trust3': 'زيارات افتراضية متاحة',
    'hero.trust4': 'متوافق مع HIPAA',
    'hero.cta1': 'احجز استشارة',
    'hero.cta2': 'استكشف الخدمات',
    'hero.stat1.label': 'سنوات خبرة',
    'hero.stat2.label': 'خدمات متخصصة',
    'hero.stat3.label': 'لغات تُتحدث',
    'hero.stat4.label': 'رعاية شخصية',
    'hero.video.title': 'تعرف على الدكتورة دلال عكوري',
    'hero.video.sub': 'مؤسسة ومديرة طبية، AWAREmed',
    'hero.badge1.label': 'الطب التكاملي',
    'hero.badge1.name': 'د. دلال عكوري',
    'hero.badge2.label': 'تقييم المرضى',
    'hero.badge2.val': '٥٫٠ / ٥٫٠',
    'section.approach.eyebrow': 'فلسفتنا',
    'section.approach.h2': 'رعاية مصممة حولك — لا وفق بروتوكول جاهز',
    'section.approach.lead': 'نجمع بين الفهم التقليدي وأساليب الصحة التكاملية والهرمونية والغذائية والخلوية — مصممة وفق تاريخك وجسدك وأهدافك.',
    'section.services.eyebrow': 'ما نقدمه',
    'section.services.h2': 'رعاية شاملة ومدروسة',
    'section.services.lead': 'ثمانية مجالات متخصصة — كل منها مصمم حول قصتك الصحية الفريدة.',
    'section.services.cta': 'عرض جميع الخدمات',
    'section.about.eyebrow': 'تعرف على طبيبتك',
    'section.about.bio1': 'الدكتورة عكوري هي مؤسسة AWAREmed — طبيبة متكاملة تمتد خبرتها في الطب الوظيفي والتجديدي ومكافحة الشيخوخة والصحة الأيضية ودعم أورام متكامل.',
    'section.about.bio2': 'خلفيتها تشمل طب الأطفال والطوارئ والصحة العامة. تتحدث الإنجليزية والعربية والفرنسية والإسبانية، مرحبةً بالمرضى من جميع أنحاء العالم حضورياً وافتراضياً.',
    'section.about.bio3': 'نهجها بسيط: الاستماع العميق، والنظر إلى ما هو أبعد من الواضح، وبناء خطة رعاية مخصصة تكرمك كإنسان متكامل.',
    'section.about.cta1': 'السيرة الذاتية الكاملة',
    'section.about.cta2': 'احجز استشارة',
    'section.process.eyebrow': 'رحلتك',
    'section.process.h2': 'ما يحدث عندما تزور AWAREmed',
    'section.process.lead': 'ثلاث خطوات. دعم كامل من زيارتك الأولى.',
    'section.process.step1': 'قصتك',
    'section.process.step1.desc': 'تشارك تاريخك الصحي الكامل. نستمع إلى كل شيء — بما فيه ما ربما أغفلته الرعاية التقليدية.',
    'section.process.step2': 'تقييمك',
    'section.process.step2.desc': 'تجري الدكتورة عكوري تقييماً شاملاً ومخصصاً باستخدام التشخيصات المتقدمة والاختبارات الوظيفية.',
    'section.process.step3': 'خطتك',
    'section.process.step3.desc': 'تغادر بخطة رعاية مخصصة تعالج الجذور — ودعمنا الكامل وهي تتطور مع رحلتك الصحية.',
    'section.trust.eyebrow': 'لماذا AWAREmed',
    'section.trust.h2': 'رعاية متميزة يمكنك الوثوق بها',
    'section.trust.lead': 'نلتزم بأعلى المعايير في الطب التكاملي — لتحصل على رعاية رحيمة وسليمة سريرياً.',
    'section.testimonials.eyebrow': 'أصوات المرضى',
    'section.testimonials.h2': 'بكلماتهم',
    'section.blog.eyebrow': 'تثقيف المرضى',
    'section.blog.h2': 'أحدث المقالات الصحية',
    'section.blog.cta': 'عرض جميع المقالات',
    'section.lang.eyebrow': 'وصول عالمي',
    'section.lang.h2': 'نتحدث لغتك',
    'section.lang.lead': 'تستشير الدكتورة عكوري باللغات الإنجليزية والعربية والفرنسية والإسبانية.',
    'section.faq.eyebrow': 'أسئلة شائعة',
    'section.faq.h2': 'الأسئلة الأكثر تكراراً',
    'section.cta.eyebrow': 'مستعد للبدء؟',
    'section.cta.h2': 'اتخذ الخطوة الأولى نحو صحة أفضل',
    'section.cta.desc': 'احجز استشارة مع الدكتورة دلال عكوري واكتشف نهجاً حقيقياً ومخصصاً لصحتك.',
    'cta.book': 'احجز استشارة',
    'footer.tagline': 'AWAREmed مركز صحي وعافية بإشراف طبي في جونسون سيتي — يخدم المرضى محلياً وافتراضياً حول العالم.',
    'footer.hours.title': 'ساعات العمل',
    'footer.hours.weekday': 'الاثنين – الجمعة: ٩ص – ٥م',
    'footer.hours.weekend': 'السبت – الأحد: بالموعد',
    'footer.hours.virtual': 'افتراضي: جدولة مرنة',
    'footer.newsletter.title': 'ابق على اطلاع',
    'footer.newsletter.desc': 'رؤى صحية ونصائح عافية من الدكتورة عكوري، مباشرة إلى بريدك.',
    'footer.newsletter.placeholder': 'بريدك الإلكتروني',
    'footer.newsletter.btn': 'اشترك',
    'footer.explore': 'استكشف',
    'footer.services': 'الخدمات',
    'footer.legal': 'قانوني',
    'footer.copy': '© 2026 AWAREmed مركز الصحة والعافية. جميع الحقوق محفوظة.'
  },
  fr: {
    dir: 'ltr',
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.about.awaremed': 'À propos d\'AWAREmed',
    'nav.about.dr': 'Dr Dalal Akoury, MD',
    'nav.services': 'Services',
    'nav.services.all': 'Tous les services',
    'nav.services.oncology': 'Oncologie Intégrative',
    'nav.services.iv': 'Thérapie IV & Hydratation',
    'nav.services.hormone': 'Optimisation Hormonale (BHRT)',
    'nav.services.regen': 'Médecine Régénérative',
    'nav.services.chelation': 'Chélation & Détox',
    'nav.services.gut': 'Santé Intestinale',
    'nav.services.brain': 'Bien-être Cognitif',
    'nav.services.skin': 'Peau & Anti-Âge',
    'nav.newpatients': 'Nouveaux Patients',
    'nav.education': 'Éducation Patients',
    'nav.contact': 'Contact',
    'nav.book': 'Prendre Rendez-vous',
    'util.disclaimer': 'Contenu éducatif uniquement — pas de conseil médical. Les résultats varient.',
    'hero.badge': 'Médecine Intégrative sous supervision médicale · Johnson City, TN',
    'hero.h1': 'Des Soins Holistiques Centrés sur <em>Votre Histoire</em>',
    'hero.desc': 'Chez AWAREmed, le Dr Dalal Akoury va au-delà des symptômes pour identifier les causes profondes — en soutenant votre corps, votre esprit et votre âme grâce à une médecine intégrative personnalisée.',
    'hero.trust1': 'Médecin Certifié',
    'hero.trust2': '4 Langues Parlées',
    'hero.trust3': 'Consultations Virtuelles Disponibles',
    'hero.trust4': 'Conforme HIPAA',
    'hero.cta1': 'Prendre Rendez-vous',
    'hero.cta2': 'Explorer les Services',
    'hero.stat1.label': 'Années d\'Expérience',
    'hero.stat2.label': 'Domaines Spécialisés',
    'hero.stat3.label': 'Langues Parlées',
    'hero.stat4.label': 'Soins Personnalisés',
    'hero.video.title': 'Rencontrez le Dr Dalal Akoury, MD',
    'hero.video.sub': 'Fondatrice & Directrice Médicale, AWAREmed',
    'hero.badge1.label': 'Médecine Intégrative',
    'hero.badge1.name': 'Dr Dalal Akoury',
    'hero.badge2.label': 'Avis Patients',
    'hero.badge2.val': '5,0 / 5,0',
    'section.approach.eyebrow': 'Notre Philosophie',
    'section.approach.h2': 'Des Soins Conçus pour Vous — Pas un Protocole Générique',
    'section.approach.lead': 'Nous combinons la médecine conventionnelle avec des stratégies intégratives hormonales, nutritionnelles et cellulaires — adaptées à votre histoire, votre biologie et vos objectifs.',
    'section.services.eyebrow': 'Ce Que Nous Offrons',
    'section.services.h2': 'Des Soins Complets et Réfléchis',
    'section.services.lead': 'Huit domaines spécialisés — chacun conçu autour de votre histoire de santé unique.',
    'section.services.cta': 'Voir Tous les Services',
    'section.about.eyebrow': 'Rencontrez Votre Médecin',
    'section.about.bio1': 'Le Dr Akoury est la fondatrice d\'AWAREmed — une médecin intégrative dont l\'expertise couvre la médecine fonctionnelle, régénérative, anti-âge et oncologique.',
    'section.about.bio2': 'Sa formation comprend la pédiatrie, la médecine d\'urgence et la santé publique. Elle parle anglais, arabe, français et espagnol, accueillant des patients du monde entier.',
    'section.about.bio3': 'Son approche est simple : écouter profondément, regarder au-delà de l\'évident, et construire un plan de soins vraiment personnalisé.',
    'section.about.cta1': 'Biographie Complète',
    'section.about.cta2': 'Prendre Rendez-vous',
    'section.process.eyebrow': 'Votre Parcours',
    'section.process.h2': 'Ce Qui Se Passe Quand Vous Venez chez AWAREmed',
    'section.process.lead': 'Trois étapes. Un soutien complet dès votre première visite.',
    'section.process.step1': 'Votre Histoire',
    'section.process.step1.desc': 'Vous partagez votre historique médical complet. Nous écoutons tout — y compris ce que la médecine conventionnelle a pu négliger.',
    'section.process.step2': 'Votre Évaluation',
    'section.process.step2.desc': 'Le Dr Akoury effectue une évaluation complète et personnalisée avec des diagnostics avancés.',
    'section.process.step3': 'Votre Plan',
    'section.process.step3.desc': 'Vous repartez avec un plan de soins personnalisé centré sur les causes profondes — et notre soutien complet.',
    'section.trust.eyebrow': 'Pourquoi Choisir AWAREmed',
    'section.trust.h2': 'Des Soins Premium en Lesquels Vous Pouvez Avoir Confiance',
    'section.trust.lead': 'Nous respectons les standards les plus élevés en médecine intégrative — pour une prise en charge à la fois bienveillante et cliniquement solide.',
    'section.testimonials.eyebrow': 'Témoignages Patients',
    'section.testimonials.h2': 'Dans Leurs Propres Mots',
    'section.blog.eyebrow': 'Éducation Patients',
    'section.blog.h2': 'Dernières Perspectives Santé',
    'section.blog.cta': 'Voir Tous les Articles',
    'section.lang.eyebrow': 'Portée Mondiale',
    'section.lang.h2': 'Nous Parlons Votre Langue',
    'section.lang.lead': 'Le Dr Akoury consulte en anglais, arabe, français et espagnol. Patients du monde entier bienvenus.',
    'section.faq.eyebrow': 'Questions Courantes',
    'section.faq.h2': 'Foire Aux Questions',
    'section.cta.eyebrow': 'Prêt à Commencer ?',
    'section.cta.h2': 'Faites le Premier Pas Vers une Meilleure Santé',
    'section.cta.desc': 'Prenez rendez-vous avec le Dr Dalal Akoury, MD et découvrez une approche véritablement personnalisée de votre santé.',
    'cta.book': 'Prendre Rendez-vous',
    'footer.tagline': 'AWAREmed est un cabinet de médecine intégrative à Johnson City, TN — au service des patients localement et virtuellement dans le monde entier.',
    'footer.hours.title': 'Heures d\'Ouverture',
    'footer.hours.weekday': 'Lun – Ven : 9h00 – 17h00',
    'footer.hours.weekend': 'Sam – Dim : Sur rendez-vous',
    'footer.hours.virtual': 'Virtuel : Horaires flexibles',
    'footer.newsletter.title': 'Restez Informé',
    'footer.newsletter.desc': 'Conseils santé & bien-être du Dr Akoury, directement dans votre boîte mail.',
    'footer.newsletter.placeholder': 'Votre adresse e-mail',
    'footer.newsletter.btn': 'S\'abonner',
    'footer.explore': 'Explorer',
    'footer.services': 'Services',
    'footer.legal': 'Mentions Légales',
    'footer.copy': '© 2026 AWAREmed Centre de Santé & Bien-être. Tous droits réservés.'
  },
  es: {
    dir: 'ltr',
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.about.awaremed': 'Sobre AWAREmed',
    'nav.about.dr': 'Dra. Dalal Akoury, MD',
    'nav.services': 'Servicios',
    'nav.services.all': 'Todos los Servicios',
    'nav.services.oncology': 'Oncología Integrativa',
    'nav.services.iv': 'Terapia IV e Hidratación',
    'nav.services.hormone': 'Optimización Hormonal (BHRT)',
    'nav.services.regen': 'Medicina Regenerativa',
    'nav.services.chelation': 'Quelación y Desintoxicación',
    'nav.services.gut': 'Salud Intestinal',
    'nav.services.brain': 'Bienestar Cerebral y Cognitivo',
    'nav.services.skin': 'Piel y Antienvejecimiento',
    'nav.newpatients': 'Nuevos Pacientes',
    'nav.education': 'Educación al Paciente',
    'nav.contact': 'Contacto',
    'nav.book': 'Reservar Consulta',
    'util.disclaimer': 'Contenido educativo únicamente — no es consejo médico. Los resultados varían.',
    'hero.badge': 'Medicina Integrativa con Supervisión Médica · Johnson City, TN',
    'hero.h1': 'Atención Integral Centrada en <em>Tu Historia</em>',
    'hero.desc': 'En AWAREmed, la Dra. Dalal Akoury va más allá de los síntomas para descubrir las causas raíz — apoyando tu cuerpo, mente y espíritu a través de la medicina integrativa y funcional personalizada.',
    'hero.trust1': 'Médico Certificado',
    'hero.trust2': '4 Idiomas Hablados',
    'hero.trust3': 'Visitas Virtuales Disponibles',
    'hero.trust4': 'Compatible con HIPAA',
    'hero.cta1': 'Reservar Consulta',
    'hero.cta2': 'Explorar Servicios',
    'hero.stat1.label': 'Años de Experiencia',
    'hero.stat2.label': 'Servicios Especializados',
    'hero.stat3.label': 'Idiomas Hablados',
    'hero.stat4.label': 'Atención Personalizada',
    'hero.video.title': 'Conoce a la Dra. Dalal Akoury, MD',
    'hero.video.sub': 'Fundadora y Directora Médica, AWAREmed',
    'hero.badge1.label': 'Medicina Integrativa',
    'hero.badge1.name': 'Dra. Dalal Akoury',
    'hero.badge2.label': 'Valoración Pacientes',
    'hero.badge2.val': '5,0 / 5,0',
    'section.approach.eyebrow': 'Nuestra Filosofía',
    'section.approach.h2': 'Atención Diseñada para Ti — No un Protocolo Genérico',
    'section.approach.lead': 'Combinamos el enfoque convencional con estrategias integrativas, hormonales, nutricionales y celulares — adaptadas a tu historia, biología y metas.',
    'section.services.eyebrow': 'Lo Que Ofrecemos',
    'section.services.h2': 'Atención Integral y Cuidadosamente Brindada',
    'section.services.lead': 'Ocho áreas especializadas — cada una diseñada en torno a tu historia de salud única.',
    'section.services.cta': 'Ver Todos los Servicios',
    'section.about.eyebrow': 'Conoce a Tu Médico',
    'section.about.bio1': 'La Dra. Akoury es la fundadora de AWAREmed — médico integrativa cuya experiencia abarca medicina funcional, regenerativa, antienvejecimiento y oncología integrativa.',
    'section.about.bio2': 'Su formación incluye pediatría, medicina de urgencias y salud pública. Habla inglés, árabe, francés y español, atendiendo pacientes de todo el mundo de forma presencial y virtual.',
    'section.about.bio3': 'Su enfoque es simple: escuchar profundamente, mirar más allá de lo evidente y construir un plan de atención verdaderamente personalizado.',
    'section.about.cta1': 'Biografía Completa',
    'section.about.cta2': 'Reservar Consulta',
    'section.process.eyebrow': 'Tu Camino',
    'section.process.h2': 'Qué Sucede Cuando Visitas AWAREmed',
    'section.process.lead': 'Tres pasos. Apoyo completo desde tu primera visita.',
    'section.process.step1': 'Tu Historia',
    'section.process.step1.desc': 'Compartes tu historial médico completo. Escuchamos todo — incluso lo que la medicina convencional pudo haber pasado por alto.',
    'section.process.step2': 'Tu Evaluación',
    'section.process.step2.desc': 'La Dra. Akoury realiza una evaluación exhaustiva y personalizada con diagnósticos avanzados.',
    'section.process.step3': 'Tu Plan',
    'section.process.step3.desc': 'Partes con un plan de atención personalizado centrado en las causas raíz — y nuestro apoyo completo.',
    'section.trust.eyebrow': 'Por Qué Elegir AWAREmed',
    'section.trust.h2': 'Atención Premium en la que Puedes Confiar',
    'section.trust.lead': 'Cumplimos los más altos estándares en medicina integrativa — para brindarte una atención compasiva y clínicamente sólida.',
    'section.testimonials.eyebrow': 'Voces de Pacientes',
    'section.testimonials.h2': 'En Sus Propias Palabras',
    'section.blog.eyebrow': 'Educación al Paciente',
    'section.blog.h2': 'Últimas Perspectivas de Salud',
    'section.blog.cta': 'Ver Todos los Artículos',
    'section.lang.eyebrow': 'Alcance Global',
    'section.lang.h2': 'Hablamos Tu Idioma',
    'section.lang.lead': 'La Dra. Akoury consulta en inglés, árabe, francés y español. Pacientes de todo el mundo bienvenidos.',
    'section.faq.eyebrow': 'Preguntas Frecuentes',
    'section.faq.h2': 'Preguntas Más Comunes',
    'section.cta.eyebrow': '¿Listo para Empezar?',
    'section.cta.h2': 'Da el Primer Paso Hacia una Vida más Saludable',
    'section.cta.desc': 'Reserva una consulta con la Dra. Dalal Akoury, MD y descubre un enfoque verdaderamente personalizado para tu salud.',
    'cta.book': 'Reservar Consulta',
    'footer.tagline': 'AWAREmed es un centro de medicina integrativa en Johnson City, TN — atendiendo pacientes localmente y virtualmente en todo el mundo.',
    'footer.hours.title': 'Horario de Atención',
    'footer.hours.weekday': 'Lun – Vie: 9:00 AM – 5:00 PM',
    'footer.hours.weekend': 'Sáb – Dom: Con cita previa',
    'footer.hours.virtual': 'Virtual: Horario flexible',
    'footer.newsletter.title': 'Mantente Informado',
    'footer.newsletter.desc': 'Perspectivas de salud y consejos de bienestar de la Dra. Akoury, en tu bandeja de entrada.',
    'footer.newsletter.placeholder': 'Tu dirección de correo',
    'footer.newsletter.btn': 'Unirse',
    'footer.explore': 'Explorar',
    'footer.services': 'Servicios',
    'footer.legal': 'Legal',
    'footer.copy': '© 2026 AWAREmed Centro de Salud y Bienestar. Todos los derechos reservados.'
  }
};

/* ─── Language Switcher ─── */
(function () {
  const savedLang = localStorage.getItem('awaremed-lang') || 'en';

  function applyLang(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;

    // Direction
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Update active lang button states
    document.querySelectorAll('.lang-btn, .lang-btn-header').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });

    localStorage.setItem('awaremed-lang', lang);
  }

  // Attach click handlers after DOM ready
  function initLangBtns() {
    document.querySelectorAll('.lang-btn, .lang-btn-header').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
    applyLang(savedLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangBtns);
  } else {
    initLangBtns();
  }
})();

/* ─── Sticky Header ─── */
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const utilBar = document.querySelector('.utility-bar');
  const updateHeader = () => {
    const scrolled = window.scrollY > 50;
    header.classList.toggle('scrolled', scrolled);
    if (utilBar) utilBar.style.display = scrolled ? 'none' : '';
  };
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
})();

/* ─── Mobile Nav ─── */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    const spans = toggle.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();

/* ─── Scroll Reveal ─── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();

/* ─── Counter Animation ─── */
(function () {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 2000;
      const startTime = performance.now();
      const animate = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = prefix + Math.floor(eased * target).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
})();

/* ─── Testimonials Slider ─── */
(function () {
  const section = document.querySelector('.testimonials-slider');
  if (!section) return;
  const track = section.querySelector('.testimonials-track');
  const slides = section.querySelectorAll('.testimonial-slide');
  const dots = section.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  if (!track || !slides.length) return;
  let current = 0;
  let autoTimer;

  const go = (n) => {
    current = ((n % slides.length) + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  };

  const startAuto = () => {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => go(current + 1), 5000);
  };

  if (prevBtn) prevBtn.addEventListener('click', () => { go(current - 1); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { go(current + 1); startAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { go(i); startAuto(); }));

  let touchX = 0;
  track.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { go(current + (diff > 0 ? 1 : -1)); startAuto(); }
  }, { passive: true });

  go(0);
  startAuto();
})();

/* ─── FAQ Accordion ─── */
(function () {
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(other => other.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
    question.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); question.click(); }
    });
    question.setAttribute('tabindex', '0');
    question.setAttribute('role', 'button');
    question.setAttribute('aria-expanded', 'false');
    const observer = new MutationObserver(() => {
      question.setAttribute('aria-expanded', String(item.classList.contains('open')));
    });
    observer.observe(item, { attributes: true, attributeFilter: ['class'] });
  });
})();

/* ─── Book Form ─── */
(function () {
  const form = document.getElementById('book-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Request Sent!';
      btn.style.background = 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)';
      setTimeout(() => {
        form.reset();
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
      }, 4000);
    }, 1500);
  });
})();

/* ─── Newsletter ─── */
(function () {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.newsletter-btn');
      btn.textContent = '✓ Subscribed!';
      setTimeout(() => { btn.textContent = 'Subscribe'; form.reset(); }, 3000);
    });
  });
})();

/* ─── Smooth scroll for anchor links ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ─── Ripple on buttons ─── */
document.querySelectorAll('.btn-primary, .btn-green, .btn-blue').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position:absolute; border-radius:50%;
      width:200px; height:200px;
      left:${x - 100}px; top:${y - 100}px;
      background:rgba(255,255,255,0.25);
      transform:scale(0); animation:ripple-anim 0.6s linear;
      pointer-events:none;
    `;
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `@keyframes ripple-anim { to { transform:scale(2.5); opacity:0; } }`;
document.head.appendChild(rippleStyle);

/* ─── Parallax hero ─── */
(function () {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const heroMedia = hero.querySelector('.hero-media');
    if (heroMedia && window.innerWidth > 900) {
      heroMedia.style.transform = `translateY(${y * 0.04}px)`;
    }
  }, { passive: true });
})();
