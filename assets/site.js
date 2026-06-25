/* AWAREmed – Premium Site JS v2 */
'use strict';

/* ─── i18n Translations ─── */
const TRANSLATIONS = {
  en: {
    dir: 'ltr',
    /* nav */
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
    'footer.copy': '© 2026 AWAREmed Health & Wellness Resource Center. All rights reserved.',
    /* footer columns */
    'footer.col1.h4': 'Explore',
    'footer.col2.h4': 'Services',
    'footer.col3.h4': 'Legal',
    /* approach cards */
    'card.approach1.h3': 'A Whole-Person Approach',
    'card.approach1.p': 'Body, mind, and spirit are deeply connected. Your care plan is built around your full story, not just lab values.',
    'card.approach2.h3': 'A Warm, Unhurried Setting',
    'card.approach2.p': 'Patients describe our clinic as calm and compassionate — a place where you are truly heard and never rushed.',
    'card.approach3.h3': 'Physician-Led Precision Care',
    'card.approach3.p': 'Every plan is guided personally by Dr. Dalal Akoury, MD with expertise spanning integrative, functional, and regenerative medicine.',
    /* service carousel cards */
    'card.svc.learnmore': 'Learn more →',
    'card.svc.oncology.h3': 'Integrative Oncology Support',
    'card.svc.oncology.p': 'Whole-person care supporting your healing journey — mind, body, and spirit — alongside conventional cancer treatment.',
    'card.svc.iv.h3': 'IV Therapy &amp; Hydration',
    'card.svc.iv.p': 'Physician-supervised intravenous nutrient and hydration support, personalized to you.',
    'card.svc.hormone.h3': 'Hormone Optimization (BHRT)',
    'card.svc.hormone.p': 'A careful look at your full hormonal picture to restore balance, energy, and well-being.',
    'card.svc.regen.h3': 'Regenerative Medicine',
    'card.svc.regen.p': 'Advanced, science-backed therapies that work with your body to repair, restore, and rejuvenate naturally.',
    'card.svc.chelation.h3': 'Chelation &amp; Detox Support',
    'card.svc.chelation.p': 'Carefully monitored, physician-supervised detoxification and heavy metal support.',
    'card.svc.gut.h3': 'Gut Health &amp; Functional Medicine',
    'card.svc.gut.p': 'Root-cause care to restore balance, improve digestion, and support whole-body wellness.',
    'card.svc.brain.h3': 'Brain &amp; Cognitive Wellness',
    'card.svc.brain.p': 'Support memory, focus, and mental clarity with personalized, science-backed solutions.',
    'card.svc.skin.h3': 'Skin &amp; Anti-Aging',
    'card.svc.skin.p': 'Aesthetic and wellness services to help you look and feel your very best.',
    /* about feature list */
    'card.about.feat1.h4': 'Multi-Specialty Training',
    'card.about.feat1.p': 'Pediatrics, emergency medicine, public health &amp; integrative oncology',
    'card.about.feat2.h4': 'Global Reach',
    'card.about.feat2.p': 'Consults in English, Arabic, French &amp; Spanish — locally and virtually',
    'card.about.feat3.h4': 'Root-Cause Medicine',
    'card.about.feat3.p': '40+ years uncovering what conventional care may have missed',
    /* stats band */
    'stats.years': 'Years of Clinical Experience',
    'stats.areas': 'Specialty Treatment Areas',
    'stats.langs': 'Languages Spoken',
    'stats.reviews': '5-Star Patient Reviews',
    /* process notice */
    'section.process.notice': 'Individual care plans vary. Services are supportive and are not intended to diagnose, treat, cure, or prevent disease. No specific outcomes are guaranteed.',
    /* trust cards */
    'card.trust1.h3': 'Physician-Led Care',
    'card.trust1.p': 'Every treatment plan is personally designed and supervised by Dr. Dalal Akoury, MD.',
    'card.trust2.h3': 'HIPAA Compliant',
    'card.trust2.p': 'Your health information is protected with strict privacy and confidentiality practices.',
    'card.trust3.h3': 'Virtual &amp; In-Person',
    'card.trust3.p': 'Serving patients locally in Johnson City and virtually across the globe.',
    'card.trust4.h3': 'Evidence-Informed',
    'card.trust4.p': 'Integrative approaches rooted in science, research, and clinical experience.',
    'card.trust5.h3': '4 Languages Spoken',
    'card.trust5.p': 'English, Arabic, French, and Spanish — so you can communicate comfortably.',
    'card.trust6.h3': 'Collaborative Approach',
    'card.trust6.p': 'We work alongside your existing providers — never in place of conventional care.',
    'card.trust7.h3': 'Patient Education',
    'card.trust7.p': 'You leave every visit informed, empowered, and confident in your health plan.',
    'card.trust8.h3': 'Whole-Person Wellness',
    'card.trust8.p': 'Mind, body, and spirit — we look at every dimension of your health.',
    /* testimonials */
    'section.testimonials.lead': 'Hear from patients whose lives have been positively impacted by integrative, personalized care at AWAREmed.',
    'card.t1.text': '&ldquo;Dr. Akoury truly listened to me in a way no doctor ever had. For the first time in years, I felt like a whole person, not just a list of symptoms. My energy and clarity have improved in ways I didn\'t think possible.&rdquo;',
    'card.t1.meta': 'Johnson City, TN',
    'card.t2.text': '&ldquo;Calm, thorough, and genuinely caring. The team explained every step of my care and never made me feel rushed. I finally have answers I\'ve been searching for, and a real plan to get better.&rdquo;',
    'card.t2.meta': 'Virtual Consultation',
    'card.t3.text': '&ldquo;I appreciated the honest, deeply personalized approach and the time taken to understand my full history. This is the kind of medicine I had given up hoping to find. Truly exceptional care.&rdquo;',
    'card.t3.meta': 'International Virtual Patient',
    'card.t4.text': '&ldquo;Being able to consult in Arabic made all the difference. Dr. Akoury understood my concerns completely and created a plan that genuinely addressed my health from every angle. I feel hopeful again.&rdquo;',
    'card.t4.meta': 'International Virtual Patient',
    'card.t.name': 'AWAREmed Patient',
    'card.t.verified': '&#10003; Verified Patient',
    /* blog cards */
    'section.blog.lead': 'Evidence-informed articles to help you understand integrative medicine, make informed decisions, and support your wellness journey.',
    'card.blog1.cat': 'Functional Medicine',
    'card.blog1.time': '5 min read',
    'card.blog1.h3': 'What Is Functional Medicine, And Why Does It Matter?',
    'card.blog1.p': 'Functional medicine looks for root causes rather than managing symptoms. Learn how this approach differs from conventional care.',
    'card.blog2.cat': 'IV Therapy',
    'card.blog2.time': '4 min read',
    'card.blog2.h3': 'IV Therapy: Benefits, What to Expect &amp; Who Qualifies',
    'card.blog2.p': 'Intravenous nutrient therapy can support hydration, immunity, energy, and recovery. Here\'s what you need to know.',
    'card.blog3.cat': 'Hormone Health',
    'card.blog3.time': '6 min read',
    'card.blog3.h3': 'Understanding Bioidentical Hormone Replacement Therapy (BHRT)',
    'card.blog3.p': 'Hormone imbalance affects millions. Discover how BHRT works and whether it might support your health goals.',
    'card.blog.author': 'Dr. Dalal Akoury, MD',
    'card.blog.author.role': 'Founder, AWAREmed',
    /* faq */
    'section.faq.lead': 'Answers to the most common questions about AWAREmed, Dr. Akoury, and integrative medicine.',
    'faq1.q': 'What is integrative medicine?',
    'faq1.a': 'Integrative medicine combines conventional medical approaches with evidence-informed complementary therapies. At AWAREmed, we look at the whole person — body, mind, and spirit — and use functional testing, nutritional support, hormonal balance, and lifestyle medicine alongside (not instead of) your existing care.',
    'faq2.q': 'Does AWAREmed replace my primary care physician?',
    'faq2.a': 'No. AWAREmed is designed to work alongside your existing medical team, not replace it. Dr. Akoury specializes in integrative and functional approaches that complement your conventional care, supporting areas that conventional medicine may not fully address.',
    'faq3.q': 'Can I consult with Dr. Akoury virtually?',
    'faq3.a': 'Yes! Virtual consultations are available for many of our services. Dr. Akoury serves patients locally in Johnson City, Tennessee and virtually from across the United States and internationally. She consults in English, Arabic, French, and Spanish.',
    'faq4.q': 'What conditions does AWAREmed support?',
    'faq4.a': 'AWAREmed provides supportive care across a wide range of conditions including hormonal imbalances, fatigue, gut dysfunction, cognitive concerns, skin health, cancer support, metabolic health, detoxification, and healthy aging. Every care plan is individualized — we encourage you to book a consultation to discuss your specific situation.',
    'faq5.q': 'How do I schedule my first appointment?',
    'faq5.a': 'Simply fill out the consultation request form on our Contact page, call us at (423) 430-6170, or email awaremed@gmail.com. We\'ll confirm your appointment and provide any intake forms before your visit.',
    'faq6.q': 'Do you accept insurance?',
    'faq6.a': 'Insurance coverage for integrative medicine varies significantly. We recommend contacting our office directly at (423) 430-6170 to discuss your specific insurance situation. We\'re happy to help you understand your options.',
    /* lang pills */
    'pill.en': 'English',
    'pill.ar': 'العربية · Arabic',
    'pill.fr': 'Français · French',
    'pill.es': 'Español · Spanish'
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
    'footer.copy': '© 2026 AWAREmed مركز الصحة والعافية. جميع الحقوق محفوظة.',
    'footer.col1.h4': 'استكشف',
    'footer.col2.h4': 'الخدمات',
    'footer.col3.h4': 'قانوني',
    'card.approach1.h3': 'نهج شامل للإنسان',
    'card.approach1.p': 'الجسد والعقل والروح مترابطان بعمق. يُبنى مخطط رعايتك حول قصتك الكاملة، وليس فقط نتائج المختبر.',
    'card.approach2.h3': 'بيئة دافئة وبلا تسرع',
    'card.approach2.p': 'يصف مرضانا عيادتنا بأنها هادئة وحانية — مكان تُسمَع فيه حقاً ولا يُستعجل عليك أبداً.',
    'card.approach3.h3': 'رعاية دقيقة بإشراف طبيب',
    'card.approach3.p': 'كل خطة يُشرف عليها شخصياً د. دلال عكوري بخبرة تمتد في الطب التكاملي والوظيفي والتجديدي.',
    'card.svc.learnmore': 'اعرف أكثر ←',
    'card.svc.oncology.h3': 'دعم الأورام التكاملي',
    'card.svc.oncology.p': 'رعاية شاملة للإنسان تدعم رحلة شفائك — جسداً وعقلاً وروحاً — إلى جانب العلاج السرطاني التقليدي.',
    'card.svc.iv.h3': 'العلاج بالتسريب الوريدي',
    'card.svc.iv.p': 'دعم الترطيب والمغذيات الوريدية بإشراف طبي، مخصص لاحتياجاتك.',
    'card.svc.hormone.h3': 'تحسين الهرمونات (BHRT)',
    'card.svc.hormone.p': 'فحص دقيق لصورتك الهرمونية الكاملة لاستعادة التوازن والطاقة والعافية.',
    'card.svc.regen.h3': 'الطب التجديدي',
    'card.svc.regen.p': 'علاجات متقدمة مدعومة علمياً تعمل مع جسمك لإصلاحه وتجديده بشكل طبيعي.',
    'card.svc.chelation.h3': 'إزالة السموم والمعادن الثقيلة',
    'card.svc.chelation.p': 'إزالة سموم بإشراف طبي دقيق ومتابعة مستمرة لدعم صحتك.',
    'card.svc.gut.h3': 'صحة الجهاز الهضمي',
    'card.svc.gut.p': 'رعاية تعالج الجذور لاستعادة التوازن وتحسين الهضم ودعم صحة الجسم كله.',
    'card.svc.brain.h3': 'صحة الدماغ والإدراك',
    'card.svc.brain.p': 'دعم الذاكرة والتركيز والوضوح الذهني بحلول شخصية مدعومة علمياً.',
    'card.svc.skin.h3': 'الجلد ومكافحة الشيخوخة',
    'card.svc.skin.p': 'خدمات تجميلية وعلاجية تساعدك على الظهور والإحساس بأفضل حال.',
    'card.about.feat1.h4': 'تدريب متعدد التخصصات',
    'card.about.feat1.p': 'طب الأطفال، الطوارئ، الصحة العامة والأورام التكاملية',
    'card.about.feat2.h4': 'وصول عالمي',
    'card.about.feat2.p': 'استشارات بالإنجليزية والعربية والفرنسية والإسبانية — حضورياً وافتراضياً',
    'card.about.feat3.h4': 'طب الأسباب الجذرية',
    'card.about.feat3.p': 'أكثر من 40 عاماً في الكشف عما قد تفوته الرعاية التقليدية',
    'stats.years': 'سنوات خبرة سريرية',
    'stats.areas': 'مجالات علاجية متخصصة',
    'stats.langs': 'لغات تُتحدث',
    'stats.reviews': 'تقييمات مرضى 5 نجوم',
    'section.process.notice': 'تتفاوت خطط الرعاية الفردية. الخدمات داعمة وليست بديلاً عن التشخيص أو العلاج الطبي. لا توجد ضمانات لنتائج محددة.',
    'card.trust1.h3': 'رعاية بإشراف طبي',
    'card.trust1.p': 'كل خطة علاجية مصممة شخصياً ويُشرف عليها د. دلال عكوري.',
    'card.trust2.h3': 'متوافق مع HIPAA',
    'card.trust2.p': 'معلوماتك الصحية محمية بممارسات صارمة للخصوصية والسرية.',
    'card.trust3.h3': 'افتراضي وحضوري',
    'card.trust3.p': 'خدمة المرضى محلياً في جونسون سيتي وافتراضياً حول العالم.',
    'card.trust4.h3': 'مستند للأدلة',
    'card.trust4.p': 'مناهج تكاملية متجذرة في العلم والبحث والخبرة السريرية.',
    'card.trust5.h3': '4 لغات',
    'card.trust5.p': 'الإنجليزية والعربية والفرنسية والإسبانية — للتواصل براحة تامة.',
    'card.trust6.h3': 'نهج تعاوني',
    'card.trust6.p': 'نعمل جنباً إلى جنب مع فريق رعايتك الحالي — لا بديلاً عنه.',
    'card.trust7.h3': 'تثقيف المريض',
    'card.trust7.p': 'تغادر كل زيارة مُطلعاً ومُمكَّناً وواثقاً من خطة صحتك.',
    'card.trust8.h3': 'عافية الإنسان الكامل',
    'card.trust8.p': 'الجسد والعقل والروح — ننظر في كل أبعاد صحتك.',
    'section.testimonials.lead': 'اسمع من مرضى تغيرت حياتهم بفضل الرعاية التكاملية الشخصية في AWAREmed.',
    'card.t1.text': '«استمعت إليّ د. عكوري بطريقة لم يفعلها أي طبيب من قبل. لأول مرة منذ سنوات شعرت أنني إنسان متكامل، لا مجرد قائمة من الأعراض. تحسنت طاقتي ووضوح تفكيري بأساليب لم أتخيلها.»',
    'card.t1.meta': 'جونسون سيتي، تينيسي',
    'card.t2.text': '«هادئة، دقيقة، ومهتمة بصدق. شرح الفريق كل خطوة في رعايتي ولم يجعلني أشعر بالاستعجال قط. حصلت أخيراً على إجابات كنت أبحث عنها وخطة حقيقية للتحسن.»',
    'card.t2.meta': 'استشارة افتراضية',
    'card.t3.text': '«قدّرت النهج الصادق والشخصي العميق والوقت المُخصص لفهم تاريخي الصحي الكامل. هذا هو النوع من الطب الذي كنت قد يئست من إيجاده. رعاية استثنائية حقاً.»',
    'card.t3.meta': 'مريض افتراضي دولي',
    'card.t4.text': '«القدرة على الاستشارة بالعربية صنعت كل الفرق. فهمت د. عكوري مخاوفي تماماً ووضعت خطة تعالج صحتي من كل زاوية. أشعر بالأمل من جديد.»',
    'card.t4.meta': 'مريض افتراضي دولي',
    'card.t.name': 'مريض AWAREmed',
    'card.t.verified': '&#10003; مريض موثق',
    'section.blog.lead': 'مقالات مستندة للأدلة لمساعدتك على فهم الطب التكاملي، واتخاذ قرارات مستنيرة، ودعم رحلة صحتك.',
    'card.blog1.cat': 'الطب الوظيفي',
    'card.blog1.time': '5 دقائق قراءة',
    'card.blog1.h3': 'ما هو الطب الوظيفي ولماذا يهم؟',
    'card.blog1.p': 'يبحث الطب الوظيفي عن الأسباب الجذرية بدلاً من إدارة الأعراض. تعرف على الفرق بين هذا النهج والرعاية التقليدية.',
    'card.blog2.cat': 'العلاج الوريدي',
    'card.blog2.time': '4 دقائق قراءة',
    'card.blog2.h3': 'العلاج الوريدي: الفوائد، ما تتوقعه ومن يستفيد',
    'card.blog2.p': 'يمكن للعلاج الوريدي دعم الترطيب والمناعة والطاقة والتعافي. إليك ما تحتاج معرفته.',
    'card.blog3.cat': 'صحة الهرمونات',
    'card.blog3.time': '6 دقائق قراءة',
    'card.blog3.h3': 'فهم العلاج الهرموني الحيوي المتطابق (BHRT)',
    'card.blog3.p': 'يعاني الملايين من اختلال الهرمونات. اكتشف كيف يعمل BHRT وهل يدعم أهدافك الصحية.',
    'card.blog.author': 'د. دلال عكوري',
    'card.blog.author.role': 'المؤسسة، AWAREmed',
    'section.faq.lead': 'إجابات على أكثر الأسئلة شيوعاً حول AWAREmed، الدكتورة عكوري، والطب التكاملي.',
    'faq1.q': 'ما هو الطب التكاملي؟',
    'faq1.a': 'يجمع الطب التكاملي بين المناهج الطبية التقليدية والعلاجات التكميلية المستندة للأدلة. في AWAREmed، ننظر إلى الإنسان الكامل — جسداً وعقلاً وروحاً — ونستخدم الفحوصات الوظيفية والدعم الغذائي والتوازن الهرموني وطب نمط الحياة إلى جانب رعايتك الحالية.',
    'faq2.q': 'هل AWAREmed تحل محل طبيب الرعاية الأولية؟',
    'faq2.a': 'لا. صُممت AWAREmed للعمل جانب فريقك الطبي الحالي، لا بديلاً عنه. تتخصص د. عكوري في المناهج التكاملية والوظيفية التي تكمل رعايتك التقليدية وتدعم جوانب قد لا تعالجها الرعاية التقليدية بشكل كافٍ.',
    'faq3.q': 'هل يمكنني الاستشارة مع د. عكوري عن بُعد؟',
    'faq3.a': 'نعم! الاستشارات الافتراضية متاحة للعديد من خدماتنا. تخدم د. عكوري المرضى محلياً في جونسون سيتي وافتراضياً من جميع أنحاء الولايات المتحدة ودولياً. تستشير باللغات الإنجليزية والعربية والفرنسية والإسبانية.',
    'faq4.q': 'ما الحالات التي تدعمها AWAREmed؟',
    'faq4.a': 'تقدم AWAREmed رعاية داعمة لمجموعة واسعة من الحالات تشمل الاختلالات الهرمونية والإرهاق واضطرابات الجهاز الهضمي والمخاوف المعرفية وصحة الجلد ودعم السرطان والصحة الأيضية وإزالة السموم والشيخوخة الصحية.',
    'faq5.q': 'كيف أحدد موعدي الأول؟',
    'faq5.a': 'املأ نموذج طلب الاستشارة في صفحة الاتصال، أو اتصل بنا على (423) 430-6170، أو راسلنا على awaremed@gmail.com. سنؤكد موعدك ونزودك بأي نماذج تحتاجها قبل زيارتك.',
    'faq6.q': 'هل تقبلون التأمين الصحي؟',
    'faq6.a': 'تتفاوت تغطية التأمين للطب التكاملي تفاوتاً كبيراً. نوصي بالتواصل مع مكتبنا مباشرة على (423) 430-6170 لمناقشة وضعك التأميني المحدد. يسعدنا مساعدتك في فهم خياراتك.',
    'pill.en': 'English',
    'pill.ar': 'العربية · عربي',
    'pill.fr': 'Français · فرنسية',
    'pill.es': 'Español · إسبانية'
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
    'footer.copy': '© 2026 AWAREmed Centre de Santé & Bien-être. Tous droits réservés.',
    'footer.col1.h4': 'Explorer',
    'footer.col2.h4': 'Services',
    'footer.col3.h4': 'Mentions Légales',
    'card.approach1.h3': 'Une Approche Holistique',
    'card.approach1.p': 'Le corps, l\'esprit et l\'âme sont profondément liés. Votre plan de soins est construit autour de toute votre histoire, pas seulement des résultats d\'analyses.',
    'card.approach2.h3': 'Un Cadre Chaleureux et Sans Précipitation',
    'card.approach2.p': 'Les patients décrivent notre clinique comme calme et bienveillante — un endroit où vous êtes vraiment écouté et jamais pressé.',
    'card.approach3.h3': 'Des Soins de Précision Dirigés par un Médecin',
    'card.approach3.p': 'Chaque plan est guidé personnellement par le Dr Dalal Akoury, MD avec une expertise en médecine intégrative, fonctionnelle et régénérative.',
    'card.svc.learnmore': 'En savoir plus →',
    'card.svc.oncology.h3': 'Oncologie Intégrative',
    'card.svc.oncology.p': 'Soins holistiques soutenant votre parcours de guérison — corps, esprit et âme — aux côtés du traitement conventionnel du cancer.',
    'card.svc.iv.h3': 'Thérapie IV &amp; Hydratation',
    'card.svc.iv.p': 'Soutien intraveineux en nutriments et hydratation sous supervision médicale, personnalisé pour vous.',
    'card.svc.hormone.h3': 'Optimisation Hormonale (BHRT)',
    'card.svc.hormone.p': 'Un examen attentif de votre profil hormonal complet pour restaurer l\'équilibre, l\'énergie et le bien-être.',
    'card.svc.regen.h3': 'Médecine Régénérative',
    'card.svc.regen.p': 'Des thérapies avancées, validées scientifiquement, qui travaillent avec votre corps pour le réparer et le régénérer naturellement.',
    'card.svc.chelation.h3': 'Chélation &amp; Détox',
    'card.svc.chelation.p': 'Désintoxication surveillée et soutien aux métaux lourds sous supervision médicale rigoureuse.',
    'card.svc.gut.h3': 'Santé Intestinale &amp; Médecine Fonctionnelle',
    'card.svc.gut.p': 'Soins ciblant les causes profondes pour restaurer l\'équilibre, améliorer la digestion et soutenir la santé globale.',
    'card.svc.brain.h3': 'Bien-être Cérébral &amp; Cognitif',
    'card.svc.brain.p': 'Soutenez votre mémoire, votre concentration et votre clarté mentale avec des solutions personnalisées et scientifiquement validées.',
    'card.svc.skin.h3': 'Peau &amp; Anti-Âge',
    'card.svc.skin.p': 'Services esthétiques et de bien-être pour vous aider à vous sentir et paraître au meilleur de vous-même.',
    'card.about.feat1.h4': 'Formation Multidisciplinaire',
    'card.about.feat1.p': 'Pédiatrie, médecine d\'urgence, santé publique &amp; oncologie intégrative',
    'card.about.feat2.h4': 'Portée Mondiale',
    'card.about.feat2.p': 'Consultations en anglais, arabe, français &amp; espagnol — en présentiel et virtuellement',
    'card.about.feat3.h4': 'Médecine des Causes Profondes',
    'card.about.feat3.p': 'Plus de 40 ans à découvrir ce que la médecine conventionnelle a pu manquer',
    'stats.years': 'Années d\'Expérience Clinique',
    'stats.areas': 'Domaines de Traitement Spécialisés',
    'stats.langs': 'Langues Parlées',
    'stats.reviews': 'Avis Patients 5 Étoiles',
    'section.process.notice': 'Les plans de soins individuels varient. Les services sont complémentaires et ne sont pas destinés à diagnostiquer, traiter, guérir ou prévenir une maladie. Aucun résultat spécifique n\'est garanti.',
    'card.trust1.h3': 'Soins Dirigés par un Médecin',
    'card.trust1.p': 'Chaque plan de traitement est personnellement conçu et supervisé par le Dr Dalal Akoury, MD.',
    'card.trust2.h3': 'Conforme HIPAA',
    'card.trust2.p': 'Vos informations de santé sont protégées par des pratiques strictes de confidentialité.',
    'card.trust3.h3': 'Virtuel &amp; En Présentiel',
    'card.trust3.p': 'Patients locaux à Johnson City et virtuellement partout dans le monde.',
    'card.trust4.h3': 'Fondé sur les Preuves',
    'card.trust4.p': 'Approches intégratives ancrées dans la science, la recherche et l\'expérience clinique.',
    'card.trust5.h3': '4 Langues Parlées',
    'card.trust5.p': 'Anglais, arabe, français et espagnol — pour une communication confortable.',
    'card.trust6.h3': 'Approche Collaborative',
    'card.trust6.p': 'Nous travaillons aux côtés de vos prestataires actuels — jamais à leur place.',
    'card.trust7.h3': 'Éducation du Patient',
    'card.trust7.p': 'Vous repartez de chaque visite informé, autonome et confiant en votre plan de santé.',
    'card.trust8.h3': 'Bien-être Global',
    'card.trust8.p': 'Corps, esprit et âme — nous examinons chaque dimension de votre santé.',
    'section.testimonials.lead': 'Écoutez des patients dont la vie a été positivement transformée par les soins intégratifs personnalisés d\'AWAREmed.',
    'card.t1.text': '&laquo; Le Dr Akoury m\'a vraiment écouté comme aucun médecin ne l\'avait jamais fait. Pour la première fois depuis des années, je me suis senti comme une personne entière. Mon énergie et ma clarté se sont améliorées de façon inimaginable. &raquo;',
    'card.t1.meta': 'Johnson City, TN',
    'card.t2.text': '&laquo; Calme, minutieuse et sincèrement attentionnée. L\'équipe a expliqué chaque étape de mes soins sans jamais me presser. J\'ai enfin les réponses que je cherchais et un vrai plan pour aller mieux. &raquo;',
    'card.t2.meta': 'Consultation Virtuelle',
    'card.t3.text': '&laquo; J\'ai apprécié l\'approche honnête et profondément personnalisée. C\'est le type de médecine que j\'avais abandonné l\'espoir de trouver. Des soins vraiment exceptionnels. &raquo;',
    'card.t3.meta': 'Patient Virtuel International',
    'card.t4.text': '&laquo; Pouvoir consulter en arabe a tout changé. Le Dr Akoury a compris mes préoccupations et a créé un plan qui a vraiment abordé ma santé sous tous les angles. Je me sens à nouveau plein d\'espoir. &raquo;',
    'card.t4.meta': 'Patient Virtuel International',
    'card.t.name': 'Patient AWAREmed',
    'card.t.verified': '&#10003; Patient Vérifié',
    'section.blog.lead': 'Articles basés sur des preuves pour vous aider à comprendre la médecine intégrative, prendre des décisions éclairées et soutenir votre parcours de bien-être.',
    'card.blog1.cat': 'Médecine Fonctionnelle',
    'card.blog1.time': '5 min de lecture',
    'card.blog1.h3': 'Qu\'est-ce que la Médecine Fonctionnelle et Pourquoi est-elle Importante ?',
    'card.blog1.p': 'La médecine fonctionnelle recherche les causes profondes plutôt que de gérer les symptômes. Découvrez comment cette approche diffère des soins conventionnels.',
    'card.blog2.cat': 'Thérapie IV',
    'card.blog2.time': '4 min de lecture',
    'card.blog2.h3': 'Thérapie IV : Avantages, à Quoi S\'attendre &amp; Qui est Éligible',
    'card.blog2.p': 'La thérapie intraveineuse peut soutenir l\'hydratation, l\'immunité, l\'énergie et la récupération. Voici ce que vous devez savoir.',
    'card.blog3.cat': 'Santé Hormonale',
    'card.blog3.time': '6 min de lecture',
    'card.blog3.h3': 'Comprendre la Thérapie Hormonale Bioidentique (BHRT)',
    'card.blog3.p': 'Les déséquilibres hormonaux touchent des millions de personnes. Découvrez comment fonctionne le BHRT et s\'il peut soutenir vos objectifs de santé.',
    'card.blog.author': 'Dr Dalal Akoury, MD',
    'card.blog.author.role': 'Fondatrice, AWAREmed',
    'section.faq.lead': 'Réponses aux questions les plus fréquentes sur AWAREmed, le Dr Akoury et la médecine intégrative.',
    'faq1.q': 'Qu\'est-ce que la médecine intégrative ?',
    'faq1.a': 'La médecine intégrative combine les approches médicales conventionnelles avec des thérapies complémentaires basées sur des preuves. Chez AWAREmed, nous considérons la personne dans sa globalité — corps, esprit et âme — et utilisons des tests fonctionnels, un soutien nutritionnel, un équilibre hormonal et une médecine de style de vie en complément de vos soins existants.',
    'faq2.q': 'AWAREmed remplace-t-il mon médecin traitant ?',
    'faq2.a': 'Non. AWAREmed est conçu pour travailler aux côtés de votre équipe médicale existante, pas pour la remplacer. Le Dr Akoury se spécialise dans des approches intégratives et fonctionnelles qui complètent vos soins conventionnels.',
    'faq3.q': 'Puis-je consulter le Dr Akoury virtuellement ?',
    'faq3.a': 'Oui ! Les consultations virtuelles sont disponibles pour de nombreux services. Le Dr Akoury sert des patients localement à Johnson City et virtuellement depuis les États-Unis et à l\'international. Elle consulte en anglais, arabe, français et espagnol.',
    'faq4.q': 'Quelles conditions AWAREmed prend-il en charge ?',
    'faq4.a': 'AWAREmed fournit des soins complémentaires pour un large éventail de conditions incluant les déséquilibres hormonaux, la fatigue, les dysfonctionnements intestinaux, les préoccupations cognitives, la santé de la peau, le soutien oncologique, la santé métabolique, la détoxification et le vieillissement sain.',
    'faq5.q': 'Comment puis-je prendre mon premier rendez-vous ?',
    'faq5.a': 'Remplissez simplement le formulaire de demande de consultation sur notre page Contact, appelez-nous au (423) 430-6170 ou envoyez un e-mail à awaremed@gmail.com. Nous confirmerons votre rendez-vous et vous fournirons les formulaires d\'admission nécessaires.',
    'faq6.q': 'Acceptez-vous les assurances ?',
    'faq6.a': 'La couverture d\'assurance pour la médecine intégrative varie considérablement. Nous vous recommandons de contacter directement notre bureau au (423) 430-6170 pour discuter de votre situation d\'assurance spécifique.',
    'pill.en': 'English',
    'pill.ar': 'العربية · Arabe',
    'pill.fr': 'Français · French',
    'pill.es': 'Español · Espagnol'
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
    'footer.copy': '© 2026 AWAREmed Centro de Salud y Bienestar. Todos los derechos reservados.',
    'footer.col1.h4': 'Explorar',
    'footer.col2.h4': 'Servicios',
    'footer.col3.h4': 'Legal',
    'card.approach1.h3': 'Un Enfoque Integral de la Persona',
    'card.approach1.p': 'El cuerpo, la mente y el espíritu están profundamente conectados. Tu plan de atención se construye alrededor de tu historia completa, no solo de tus análisis.',
    'card.approach2.h3': 'Un Entorno Cálido y Sin Prisas',
    'card.approach2.p': 'Los pacientes describen nuestra clínica como un lugar tranquilo y compasivo — donde realmente te escuchan y nunca te hacen sentir apresurado.',
    'card.approach3.h3': 'Atención de Precisión Dirigida por el Médico',
    'card.approach3.p': 'Cada plan es guiado personalmente por la Dra. Dalal Akoury, MD con experiencia en medicina integrativa, funcional y regenerativa.',
    'card.svc.learnmore': 'Saber más →',
    'card.svc.oncology.h3': 'Oncología Integrativa',
    'card.svc.oncology.p': 'Atención integral que apoya tu viaje de sanación — cuerpo, mente y espíritu — junto con el tratamiento convencional del cáncer.',
    'card.svc.iv.h3': 'Terapia IV &amp; Hidratación',
    'card.svc.iv.p': 'Soporte intravenoso de nutrientes e hidratación bajo supervisión médica, personalizado para ti.',
    'card.svc.hormone.h3': 'Optimización Hormonal (BHRT)',
    'card.svc.hormone.p': 'Un análisis cuidadoso de tu perfil hormonal completo para restaurar el equilibrio, la energía y el bienestar.',
    'card.svc.regen.h3': 'Medicina Regenerativa',
    'card.svc.regen.p': 'Terapias avanzadas y respaldadas por la ciencia que trabajan con tu cuerpo para repararlo y regenerarlo naturalmente.',
    'card.svc.chelation.h3': 'Quelación &amp; Desintoxicación',
    'card.svc.chelation.p': 'Desintoxicación cuidadosamente supervisada y soporte para metales pesados bajo supervisión médica.',
    'card.svc.gut.h3': 'Salud Intestinal &amp; Medicina Funcional',
    'card.svc.gut.p': 'Atención que aborda las causas raíz para restaurar el equilibrio, mejorar la digestión y apoyar el bienestar general.',
    'card.svc.brain.h3': 'Bienestar Cerebral &amp; Cognitivo',
    'card.svc.brain.p': 'Apoya tu memoria, concentración y claridad mental con soluciones personalizadas y respaldadas por la ciencia.',
    'card.svc.skin.h3': 'Piel &amp; Antienvejecimiento',
    'card.svc.skin.p': 'Servicios estéticos y de bienestar para ayudarte a verte y sentirte en tu mejor momento.',
    'card.about.feat1.h4': 'Formación Multiespecialidad',
    'card.about.feat1.p': 'Pediatría, medicina de urgencias, salud pública &amp; oncología integrativa',
    'card.about.feat2.h4': 'Alcance Global',
    'card.about.feat2.p': 'Consultas en inglés, árabe, francés &amp; español — presencial y virtualmente',
    'card.about.feat3.h4': 'Medicina de Causas Raíz',
    'card.about.feat3.p': 'Más de 40 años descubriendo lo que la medicina convencional puede haber pasado por alto',
    'stats.years': 'Años de Experiencia Clínica',
    'stats.areas': 'Áreas de Tratamiento Especializado',
    'stats.langs': 'Idiomas Hablados',
    'stats.reviews': 'Reseñas de 5 Estrellas',
    'section.process.notice': 'Los planes de atención individuales varían. Los servicios son de apoyo y no tienen la intención de diagnosticar, tratar, curar o prevenir enfermedades. No se garantizan resultados específicos.',
    'card.trust1.h3': 'Atención Dirigida por el Médico',
    'card.trust1.p': 'Cada plan de tratamiento es diseñado y supervisado personalmente por la Dra. Dalal Akoury, MD.',
    'card.trust2.h3': 'Compatible con HIPAA',
    'card.trust2.p': 'Tu información de salud está protegida con estrictas prácticas de privacidad y confidencialidad.',
    'card.trust3.h3': 'Virtual &amp; Presencial',
    'card.trust3.p': 'Atendemos pacientes localmente en Johnson City y virtualmente en todo el mundo.',
    'card.trust4.h3': 'Basado en Evidencia',
    'card.trust4.p': 'Enfoques integrativos fundamentados en ciencia, investigación y experiencia clínica.',
    'card.trust5.h3': '4 Idiomas Hablados',
    'card.trust5.p': 'Inglés, árabe, francés y español — para que puedas comunicarte con comodidad.',
    'card.trust6.h3': 'Enfoque Colaborativo',
    'card.trust6.p': 'Trabajamos junto a tus proveedores actuales — nunca en su lugar.',
    'card.trust7.h3': 'Educación al Paciente',
    'card.trust7.p': 'Sales de cada visita informado, empoderado y seguro de tu plan de salud.',
    'card.trust8.h3': 'Bienestar Integral',
    'card.trust8.p': 'Cuerpo, mente y espíritu — analizamos cada dimensión de tu salud.',
    'section.testimonials.lead': 'Escucha a pacientes cuyas vidas han sido impactadas positivamente por la atención integrativa y personalizada en AWAREmed.',
    'card.t1.text': '&ldquo;La Dra. Akoury realmente me escuchó como ningún médico lo había hecho jamás. Por primera vez en años, me sentí como una persona completa. Mi energía y claridad han mejorado de formas que no creía posibles.&rdquo;',
    'card.t1.meta': 'Johnson City, TN',
    'card.t2.text': '&ldquo;Tranquila, minuciosa y genuinamente compasiva. El equipo explicó cada paso de mi atención y nunca me hizo sentir apresurada. Finalmente tengo las respuestas que buscaba y un plan real para mejorar.&rdquo;',
    'card.t2.meta': 'Consulta Virtual',
    'card.t3.text': '&ldquo;Aprecié el enfoque honesto y profundamente personalizado. Este es el tipo de medicina que había dejado de esperar encontrar. Una atención verdaderamente excepcional.&rdquo;',
    'card.t3.meta': 'Paciente Virtual Internacional',
    'card.t4.text': '&ldquo;Poder consultar en árabe hizo toda la diferencia. La Dra. Akoury comprendió mis preocupaciones por completo y creó un plan que abordó mi salud desde todos los ángulos. Vuelvo a sentirme esperanzada.&rdquo;',
    'card.t4.meta': 'Paciente Virtual Internacional',
    'card.t.name': 'Paciente AWAREmed',
    'card.t.verified': '&#10003; Paciente Verificado',
    'section.blog.lead': 'Artículos basados en evidencia para ayudarte a comprender la medicina integrativa, tomar decisiones informadas y apoyar tu viaje de bienestar.',
    'card.blog1.cat': 'Medicina Funcional',
    'card.blog1.time': '5 min de lectura',
    'card.blog1.h3': '¿Qué es la Medicina Funcional y Por Qué Importa?',
    'card.blog1.p': 'La medicina funcional busca causas raíz en lugar de manejar síntomas. Aprende cómo este enfoque difiere de la atención convencional.',
    'card.blog2.cat': 'Terapia IV',
    'card.blog2.time': '4 min de lectura',
    'card.blog2.h3': 'Terapia IV: Beneficios, Qué Esperar &amp; Quién Califica',
    'card.blog2.p': 'La terapia de nutrientes intravenosos puede apoyar la hidratación, la inmunidad, la energía y la recuperación. Aquí lo que necesitas saber.',
    'card.blog3.cat': 'Salud Hormonal',
    'card.blog3.time': '6 min de lectura',
    'card.blog3.h3': 'Entendiendo la Terapia Hormonal Bioidéntica (BHRT)',
    'card.blog3.p': 'El desequilibrio hormonal afecta a millones. Descubre cómo funciona el BHRT y si puede apoyar tus objetivos de salud.',
    'card.blog.author': 'Dra. Dalal Akoury, MD',
    'card.blog.author.role': 'Fundadora, AWAREmed',
    'section.faq.lead': 'Respuestas a las preguntas más comunes sobre AWAREmed, la Dra. Akoury y la medicina integrativa.',
    'faq1.q': '¿Qué es la medicina integrativa?',
    'faq1.a': 'La medicina integrativa combina enfoques médicos convencionales con terapias complementarias basadas en evidencia. En AWAREmed, miramos a la persona completa — cuerpo, mente y espíritu — y usamos pruebas funcionales, apoyo nutricional, equilibrio hormonal y medicina de estilo de vida junto con tu atención existente.',
    'faq2.q': '¿AWAREmed reemplaza a mi médico de atención primaria?',
    'faq2.a': 'No. AWAREmed está diseñado para trabajar junto a tu equipo médico existente, no para reemplazarlo. La Dra. Akoury se especializa en enfoques integrativos y funcionales que complementan tu atención convencional.',
    'faq3.q': '¿Puedo consultar con la Dra. Akoury virtualmente?',
    'faq3.a': 'Sí. Las consultas virtuales están disponibles para muchos de nuestros servicios. La Dra. Akoury atiende pacientes localmente en Johnson City, Tennessee y virtualmente desde todo Estados Unidos e internacionalmente. Consulta en inglés, árabe, francés y español.',
    'faq4.q': '¿Qué condiciones apoya AWAREmed?',
    'faq4.a': 'AWAREmed brinda atención de apoyo para una amplia gama de condiciones que incluyen desequilibrios hormonales, fatiga, disfunción intestinal, problemas cognitivos, salud de la piel, apoyo oncológico, salud metabólica, desintoxicación y envejecimiento saludable.',
    'faq5.q': '¿Cómo programo mi primera cita?',
    'faq5.a': 'Simplemente completa el formulario de solicitud de consulta en nuestra página de Contacto, llámanos al (423) 430-6170 o envíanos un correo a awaremed@gmail.com. Confirmaremos tu cita y te proporcionaremos los formularios de admisión necesarios.',
    'faq6.q': '¿Aceptan seguros médicos?',
    'faq6.a': 'La cobertura de seguro para la medicina integrativa varía significativamente. Recomendamos contactar directamente nuestra oficina al (423) 430-6170 para discutir tu situación de seguro específica. Estamos felices de ayudarte a entender tus opciones.',
    'pill.en': 'English',
    'pill.ar': 'العربية · Árabe',
    'pill.fr': 'Français · Francés',
    'pill.es': 'Español · Spanish'
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
