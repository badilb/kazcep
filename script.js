// ============================================================
//  KazCEP — script.js
// ============================================================

const i18n = {
  ru: {
    "nav-about": "О нас", "nav-services": "Услуги", "nav-projects": "Проекты",
    "nav-adv": "Преимущества", "nav-vendors": "Партнёры", "nav-contacts": "Контакты",
    "hero-badge": "Надёжный партнёр с 2012 года",
    "hero-title": "Инжиниринг.<br>Строительство.<br>Экология.",
    "hero-sub": "Проектирование и строительство телекоммуникационной инфраструктуры, экологический консалтинг и IT-решения по всему Казахстану.",
    "stat-years": "лет опыта", "stat-bs": "проектов БС", "stat-leg": "легализаций", "stat-staff": "сотрудников",
    "btn-services": "Наши услуги", "btn-contact": "Связаться",
    "eyebrow-about": "О компании",
    "about-title": "ТОО «KazCEP»<br>— развиваемся ВМЕСТЕ!",
    "about-desc1": "На строительном рынке компания «KazCEP» работает более 12 лет. Накоплен огромный опыт в работах самого разного профиля по всей территории Республики Казахстан.",
    "about-desc2": "Компания преуспела как в промышленном, так и в гражданском строительстве. Среди наших заказчиков — АO «KazCEP», KEGOC, BI Group, Huawei, Казахтелеком, Kcell, Beeline, Халык Банк, КазТрансГаз.",
    "lic-1": "Лицензия №13015116 — Проектная деятельность II категории",
    "lic-2": "Лицензия СМР №13016592 — Строительно-монтажные работы II категории",
    "lic-3": "Экологическая лицензия №01518Р — Охрана окружающей среды",
    "lic-4": "Лицензия №18018907 — Изыскательскательная деятельность",
    "res-staff": "сотрудников<br><small>(10 проектировщиков )</small>",
    "res-teams": "монтажных<br>бригад", "res-tech": "единиц<br>техники",
    "res-warehouses": "склада<br>(Алматы, Астана, Шымкент, Атырау)",
    "map-caption": "Нажмите на метку, чтобы увидеть офис",
    "eyebrow-services": "Что мы делаем", "sec-services": "Направления деятельности",
    "srv-telecom": "Телекоммуникации (MNO)",
    "srv-telecom-desc": "Проектирование и СМР базовых станций, АМС, ВОЛС. Легализация БС. 400+ выполненных проектов.",
    "srv-t1": "Монтаж БС «под ключ» (LTE, 3G, 4G, 5G)", "srv-t2": "Строительство АМС любой сложности",
    "srv-t3": "Прокладка ВОЛС, поставка DWDM", "srv-t4": "Clean-up и техническое обслуживание",
    "srv-eco": "Экология", "srv-eco-desc": "Охрана окружающей среды, экологический консалтинг и инжиниринг. Природоохранное проектирование для объектов I категории.",
    "srv-sks": "Внутренние сети", "srv-sks-desc": "СКС, системы безопасности, видеонаблюдение и СКД под ключ. Фасадное освещение, «Умный дом».",
    "srv-energy": "Электроснабжение", "srv-energy-desc": "Монтаж и реконструкция ЛЭП 0,4 кВ и 10 кВ. Работы по стандартам World Bank Group.",
    "srv-it": "IT-Решения", "srv-it-desc": "Собственная «Система координации подрядчиков» — цифровой инструмент управления проектами.",
    "srv-supply": "Поставки оборудования", "srv-supply-desc": "Прямые каналы: Ericsson, Nokia, Huawei, ZTE. Базовые станции, DWDM, 5G-решения.",
    "eyebrow-projects": "Портфолио", "sec-projects": "Реализованные проекты",
    "tab-telecom": "Телеком", "tab-infra": "Инфраструктура", "tab-energy": "Энергетика",
    "tab-photos": "Галерея",
    "eyebrow-gallery": "Наши работы",
    "unit-sites": "сайтов", "unit-bs": "БС", "unit-proj": "проектов", "unit-nodes": "узлов DWDM",
    "unit-complexes": "комплексов", "unit-cable": "кабеля", "unit-projects2": "проектов", "unit-fttx": "Павлодарская обл.",
    "proj-kartel-1": "Монтаж БС (LTE, 3G) — 500 сайтов по всему Казахстану",
    "proj-kartel-2": "Монтаж новых БС «под ключ» — 150 сайтов",
    "proj-kartel-3": "Clean-up строительно-монтажные работы",
    "proj-kartel-4": "Полный цикл оформления разрешительных документов",
    "proj-hw-1": "Монтаж БС «под ключ» — 58 сайтов", "proj-hw-2": "Строительство АМС 18 м — 2 объекта",
    "proj-hw-3": "Clean-up на крышевых позициях и АМС — 89 сайтов", "proj-hw-4": "Модернизация и переход на новые стандарты связи",
    "proj-kcell-1": "Проектирование и строительство БС",
    "proj-kcell-2": "Легализация площадок — Астана, Алматы, Актобе",
    "proj-kcell-3": "Кызылорда, Шымкент, Атырау и другие города",
    "proj-ktc-1": "Установка 28 активных узлов DWDM (ZTE)", "proj-ktc-2": "Магистральная сеть MC-NET, Алматы–Актобе",
    "proj-ktc-3": "КПП Хоргос", "proj-ktc-4": "Проектирование и СМР ВОЛС",
    "proj-bi-covid": "Инфекционный госпиталь (COVID-19)",
    "proj-qg-1": "Монтаж структурированной кабельной системы", "proj-qg-2": "Проложено 8600 м кабеля", "proj-qg-3": "Установлено 115 точек подключения",
    "proj-bank-1": "Комплексное видеонаблюдение «под ключ»", "proj-bank-2": "Монтаж СКС и систем безопасности", "proj-bank-3": "Поставка и установка оборудования",
    "proj-kt-1": "Развитие сети широкополосного доступа", "proj-kt-2": "Павлодарская ОДТ, охваченных ВОЛС-сетями",
    "proj-wb-1": "Переустройство ЛЭП 0,4 кВ и 10 кВ",
    "proj-wb-2": "Реконструкция автодороги А2: Граница РУз — Шымкент — Тараз — Алматы — Хоргос",
    "proj-wb-3": "Участок км 774 — км 806",
    "eyebrow-adv": "Почему мы", "sec-adv": "Преимущества работы с нами",
    "adv-1-title": "Проектная команда", "adv-1-desc": "Собственный отдел проектирования (II категория). 10 сертифицированных проектировщиков.",
    "adv-2-title": "Контроль качества", "adv-2-desc": "Отдел СМР (II категория) из ИТР — контроль на всех этапах и пусконаладка. Сертифицированный персонал.",
    "adv-3-title": "Промышленный альпинизм", "adv-3-desc": "Бригады высотных монтажников с допусками по промышленной и электробезопасности.",
    "adv-4-title": "Управление проектами", "adv-4-desc": "Собственная «Система координации подрядчиков» для контроля процессов в реальном времени.",
    "adv-5-title": "Покрытие всего Казахстана", "adv-5-desc": "4 офиса: Алматы, Астана, Шымкент, Атырау. 30+ монтажных бригад готовы к выезду.",
    "adv-6-title": "Сертифицированный партнёр", "adv-6-desc": "Официальный бизнес-партнёр BI Group. Прямые контракты с ведущими операторами и вендорами.",
    "eyebrow-vendors": "Экосистема", "sec-vendors": "Вендоры и партнёры",
    "vendors-sub": "Прямые и партнёрские каналы поставок от ведущих мировых производителей",
    "vendors-note": "Представленные компании — лишь часть нашего портфеля. Мы работаем с вендорами из Европы, Азии и США.",
    "footer-tagline": "Надёжный партнёр в инжиниринге и экологическом проектировании",
    "director-title": "Исполнительный директор",
    "footer-offices-title": "Наши офисы", "hq": "Главный офис", "footer-rights": "Все права защищены.",
    "eyebrow-licenses": "Документы",
    "sec-licenses": "Разрешительные документы",
    "sec-licenses-sub": "ТОО «KazCEP» имеет все необходимые лицензии для выполнения полного спектра инжиниринговых услуг",
    "lic-card-1": "Проектная деятельность",
    "lic-card-2": "Строительно-монтажные работы",
    "lic-card-3": "Охрана окружающей среды",
    "lic-card-cat": "II категория",
    "lic-card-eco": "Экологическое проектирование и аудит",
    "lic-card-4": "Изыскательская деятельность",
    "lic-card-4-sub": "Геодезические и геологические работы",
    "lic-download": "Открыть PDF",
    "director-name": "Нурлан Даиров",
    "city-almaty": "Алматы", "addr-almaty": "ул. Тимирязева, 42/15",
    "city-astana": "Астана", "addr-astana": "ул. Кунаева 33, БЦ «Астаналык», офис 903",
    "city-atyrau": "Атырау", "addr-atyrau": "ул. Амандосова, 6а",
    "city-shymkent": "Шымкент", "addr-shymkent": "Акмаржан улица, 4"
  },
  kk: {
    "nav-about": "Біз туралы", "nav-services": "Қызметтер", "nav-projects": "Жобалар",
    "nav-adv": "Артықшылықтар", "nav-vendors": "Серіктестер", "nav-contacts": "Байланыс",
    "hero-badge": "2012 жылдан бері сенімді серіктес",
    "hero-title": "Инжиниринг.<br>Құрылыс.<br>Экология.",
    "hero-sub": "Телекоммуникациялық инфрақұрылымды жобалау және салу, экологиялық консалтинг және IT-шешімдер — бүкіл Қазақстанда.",
    "stat-years": "жыл тәжірибе", "stat-bs": "БС жобасы", "stat-leg": "заңдастыру", "stat-staff": "қызметкер",
    "btn-services": "Қызметтеріміз", "btn-contact": "Байланысу",
    "eyebrow-about": "Компания туралы",
    "about-title": "«KazCEP» ЖШС<br>— БІРГЕ дамимыз!",
    "about-desc1": "«KazCEP» компаниясы құрылыс нарығында 12 жылдан астам жұмыс істейді. Қазақстан Республикасының бүкіл аумағында әртүрлі жұмыстарда үлкен тәжірибе жинақталды.",
    "about-desc2": "Компания өнеркәсіптік және азаматтық құрылыста табысты жұмыс жасайды. Тапсырыс берушілеріміз: «ҚТЖ» АҚ, KEGOC, BI Group, Huawei, Казахтелеком, Kcell, Beeline, Халық Банк.",
    "lic-1": "ПИЖ лицензиясы №13015116 — II санатты жобалау қызметі",
    "lic-2": "Лицензия №13016592 — II санатты СМЖ",
    "lic-3": "Экологиялық лицензия №01518Р — Қоршаған ортаны қорғау",
    "lic-4": "Лицензия №18018907 — Іздестіру қызметі",
    "res-staff": "қызметкер<br><small>(10 жобалаушы)</small>",
    "res-teams": "монтаж<br>бригада", "res-tech": "техника<br>бірлігі",
    "res-warehouses": "қойма<br>(Алматы, Астана, Шымкент, Атырау)",
    "map-caption": "Метканы басып, кеңсені көріңіз",
    "eyebrow-services": "Не жасаймыз", "sec-services": "Қызмет бағыттары",
    "srv-telecom": "Телекоммуникация (MNO)",
    "srv-telecom-desc": "БС, АМС, ВОЛС жобалау және СМЖ. Заңдастыру. 400+ жоба.",
    "srv-t1": "«Кілт» астындағы БС монтажы (LTE, 3G, 4G, 5G)", "srv-t2": "АМС құрылысы",
    "srv-t3": "ВОЛС, DWDM жеткізу", "srv-t4": "Clean-up және техқызмет",
    "srv-eco": "Экология", "srv-eco-desc": "Қоршаған ортаны қорғау, консалтинг, инжиниринг.",
    "srv-sks": "Ішкі желілер", "srv-sks-desc": "СЕЖ, қауіпсіздік жүйелері, бейнебақылау кілт астында.",
    "srv-energy": "Электрмен жабдықтау", "srv-energy-desc": "0,4 кВ және 10 кВ ЖЭЖ монтажы және қайта жаңарту.",
    "srv-it": "IT-Шешімдер", "srv-it-desc": "Меншікті «Мердігерлерді үйлестіру жүйесі».",
    "srv-supply": "Жабдықтар жеткізу", "srv-supply-desc": "Ericsson, Nokia, Huawei, ZTE тікелей арналары.",
    "eyebrow-projects": "Портфолио", "sec-projects": "Жүзеге асырылған жобалар",
    "tab-telecom": "Телеком", "tab-infra": "Инфрақұрылым", "tab-energy": "Энергетика",
    "tab-photos": "Галерея",
    "eyebrow-gallery": "Біздің жұмыстар",
    "unit-sites": "сайт", "unit-bs": "БС", "unit-proj": "жоба", "unit-nodes": "DWDM түйін",
    "unit-complexes": "кешен", "unit-cable": "кабель", "unit-projects2": "жоба", "unit-fttx": "Павлодар обл.",
    "proj-kartel-1": "БС монтажы (LTE, 3G) — 500 сайт, бүкіл Қазақстан",
    "proj-kartel-2": "«Кілт» астындағы жаңа БС монтажы — 150 сайт",
    "proj-kartel-3": "Clean-up СМЖ жұмыстары", "proj-kartel-4": "Рұқсат құжаттарын толық ресімдеу",
    "proj-hw-1": "«Кілт» астындағы БС монтажы — 58 сайт", "proj-hw-2": "АМС 18 м құрылысы — 2 объект",
    "proj-hw-3": "Шатырлық позицияларда және АМС-та Clean-up — 89 сайт", "proj-hw-4": "Жаңа байланыс стандарттарына жаңарту",
    "proj-kcell-1": "БС жобалау және салу", "proj-kcell-2": "Алаңдарды заңдастыру — Астана, Алматы, Ақтөбе",
    "proj-kcell-3": "Қызылорда, Шымкент, Атырау және басқа қалалар",
    "proj-ktc-1": "28 белсенді DWDM (ZTE) түйінін орнату", "proj-ktc-2": "MC-NET магистральды желісі, Алматы–Ақтөбе",
    "proj-ktc-3": "Қорғас БКП", "proj-ktc-4": "ВОЛС жобалау және СМЖ",
    "proj-bi-covid": "Инфекциялық аурухана (COVID-19)",
    "proj-qg-1": "Құрылымдалған кабельдік жүйені монтаждау", "proj-qg-2": "8600 м кабель төселді", "proj-qg-3": "115 қосылым нүктесі орнатылды",
    "proj-bank-1": "«Кілт» астында кешенді бейнебақылау", "proj-bank-2": "СЕЖ және қауіпсіздік жүйелерін монтаждау", "proj-bank-3": "Жабдықты жеткізу және орнату",
    "proj-kt-1": "Кең жолақты қол жетімділік желісін дамыту", "proj-kt-2": "ВОЛС желілерімен қамтылған Павлодар ОДТ",
    "proj-wb-1": "0,4 кВ және 10 кВ ЖЭЖ қайта орналастыру",
    "proj-wb-2": "А2 автожолын қайта жаңарту: РУз шекарасы — Шымкент — Тараз — Алматы — Қорғас",
    "proj-wb-3": "774 км — 806 км учаскесі",
    "eyebrow-adv": "Неліктен біз", "sec-adv": "Бізбен жұмыс істеудің артықшылықтары",
    "adv-1-title": "Жобалау тобы", "adv-1-desc": "Меншікті жобалау бөлімі (II санат). 10 сертификатталған жобалаушы.",
    "adv-2-title": "Сапа бақылауы", "adv-2-desc": "ИТЖ-дан СМЖ бөлімі — барлық кезеңдерде бақылау.",
    "adv-3-title": "Өнеркәсіптік альпинизм", "adv-3-desc": "Өнеркәсіптік қауіпсіздік рұқсаттары бар биіктік монтажшылар.",
    "adv-4-title": "Жобаларды басқару", "adv-4-desc": "«Мердігерлерді үйлестіру жүйесі» — нақты уақытта бақылау.",
    "adv-5-title": "Қазақстан бойынша қамту", "adv-5-desc": "4 кеңсе: Алматы, Астана, Шымкент, Атырау. 30+ бригада.",
    "adv-6-title": "Сертификатталған серіктес", "adv-6-desc": "BI Group ресми бизнес-серіктесі.",
    "eyebrow-vendors": "Экожүйе", "sec-vendors": "Вендорлар мен серіктестер",
    "vendors-sub": "Әлемнің жетекші өндірушілерінен тікелей жеткізу арналары",
    "vendors-note": "Тізімдегі компаниялар портфелімізің бір бөлігі ғана.",
    "footer-tagline": "Инжиниринг пен экологиялық жобалаудағы сенімді серіктес",
    "director-title": "Атқарушы директор",
    "footer-offices-title": "Кеңселеріміз", "hq": "Бас кеңсе", "footer-rights": "Барлық құқықтар қорғалған.",
    "eyebrow-licenses": "Құжаттар",
    "sec-licenses": "Рұқсат беру құжаттары",
    "sec-licenses-sub": "«KazCEP» ЖШС инжиниринг қызметтерінің толық спектрін орындауға қажетті барлық лицензияларға ие",
    "lic-card-1": "Жобалау қызметі",
    "lic-card-2": "Құрылыс-монтаж жұмыстары",
    "lic-card-3": "Қоршаған ортаны қорғау",
    "lic-card-cat": "II санат",
    "lic-card-eco": "Экологиялық жобалау және аудит",
    "lic-card-4": "Іздестіру қызметі",
    "lic-card-4-sub": "Геодезиялық және геологиялық жұмыстар",
    "lic-download": "PDF ашу",
    "director-name": "Нурлан Даиров",
    "city-almaty": "Алматы", "addr-almaty": "Тимирязев к., 42/15",
    "city-astana": "Астана", "addr-astana": "Кунаев к. 33, «Астаналық» БО, 903 кеңсе",
    "city-atyrau": "Атырау", "addr-atyrau": "Амандосов к., 6а",
    "city-shymkent": "Шымкент", "addr-shymkent": "Акмаржан к., 4"
  },
  en: {
    "nav-about": "About", "nav-services": "Services", "nav-projects": "Projects",
    "nav-adv": "Advantages", "nav-vendors": "Partners", "nav-contacts": "Contacts",
    "hero-badge": "Trusted partner since 2012",
    "hero-title": "Engineering.<br>Construction.<br>Ecology.",
    "hero-sub": "Telecom infrastructure design & construction, environmental consulting and IT solutions across Kazakhstan.",
    "stat-years": "years of experience", "stat-bs": "BTS projects", "stat-leg": "legalizations", "stat-staff": "employees",
    "btn-services": "Our Services", "btn-contact": "Contact Us",
    "eyebrow-about": "About Us",
    "about-title": "KazCEP LLC<br>— Developing TOGETHER!",
    "about-desc1": "KazCEP has been working in the construction market for over 12 years, accumulating extensive experience across Kazakhstan.",
    "about-desc2": "Our clients include KTZ, KEGOC, BI Group, Huawei, Kazakhtelecom, Kcell, Beeline, Halyk Bank, KazTransGas.",
    "lic-1": "Design License No.13015116 — Category II Design Activities",
    "lic-2": "Construction License No.13016592 — Category II Construction Works",
    "lic-3": "Environmental License No.01518R — Environmental Protection",
    "lic-4": "License No.18018907 — Surveying Activities",
    "res-staff": "employees<br><small>(10 engineers)</small>",
    "res-teams": "installation<br>teams", "res-tech": "units of<br>equipment",
    "res-warehouses": "warehouses<br>(Almaty, Astana, Shymkent, Atyrau)",
    "map-caption": "Click a pin to see the office",
    "eyebrow-services": "What we do", "sec-services": "Business Lines",
    "srv-telecom": "Telecommunications (MNO)",
    "srv-telecom-desc": "BTS design & construction, masts, FOCL. Legalization. 400+ projects.",
    "srv-t1": "Turnkey BTS installation (LTE, 3G, 4G, 5G)", "srv-t2": "Mast construction",
    "srv-t3": "FOCL, DWDM supply", "srv-t4": "Clean-up & maintenance",
    "srv-eco": "Ecology", "srv-eco-desc": "Environmental protection, consulting and engineering.",
    "srv-sks": "Internal Networks", "srv-sks-desc": "SCS, security, CCTV turnkey. Smart Home systems.",
    "srv-energy": "Power Supply", "srv-energy-desc": "Installation & reconstruction of 0.4kV and 10kV power lines.",
    "srv-it": "IT Solutions", "srv-it-desc": "Proprietary Contractor Coordination System.",
    "srv-supply": "Equipment Supply", "srv-supply-desc": "Direct channels: Ericsson, Nokia, Huawei, ZTE. BTS, DWDM, 5G.",
    "eyebrow-projects": "Portfolio", "sec-projects": "Completed Projects",
    "tab-telecom": "Telecom", "tab-infra": "Infrastructure", "tab-energy": "Energy",
    "tab-photos": "Gallery",
    "eyebrow-gallery": "Our Works",
    "unit-sites": "sites", "unit-bs": "BTS", "unit-proj": "projects", "unit-nodes": "DWDM nodes",
    "unit-complexes": "complexes", "unit-cable": "cable", "unit-projects2": "projects", "unit-fttx": "Pavlodar reg.",
    "proj-kartel-1": "BTS installation (LTE, 3G) — 500 sites across Kazakhstan",
    "proj-kartel-2": "Turnkey new BTS installation — 150 sites",
    "proj-kartel-3": "Clean-up construction works", "proj-kartel-4": "Full cycle of permitting documentation",
    "proj-hw-1": "Turnkey BTS installation — 58 sites", "proj-hw-2": "Mast construction 18m — 2 objects",
    "proj-hw-3": "Clean-up at rooftop & mast positions — 89 sites", "proj-hw-4": "Upgrade & migration to new communication standards",
    "proj-kcell-1": "BTS design and construction", "proj-kcell-2": "Site legalization — Astana, Almaty, Aktobe",
    "proj-kcell-3": "Kyzylorda, Shymkent, Atyrau and other cities",
    "proj-ktc-1": "Installation of 28 active DWDM (ZTE) nodes", "proj-ktc-2": "MC-NET backbone network, Almaty–Aktobe",
    "proj-ktc-3": "Khorgos checkpoint", "proj-ktc-4": "FOCL design and construction",
    "proj-bi-covid": "Infectious diseases hospital (COVID-19)",
    "proj-qg-1": "Structured cabling system installation", "proj-qg-2": "8,600 m of cable installed", "proj-qg-3": "115 connection points installed",
    "proj-bank-1": "Turnkey comprehensive CCTV systems", "proj-bank-2": "SCS and security systems installation", "proj-bank-3": "Equipment supply and installation",
    "proj-kt-1": "Broadband access network development", "proj-kt-2": "Pavlodar regional FOCL-covered area",
    "proj-wb-1": "Relocation of 0.4kV and 10kV power lines",
    "proj-wb-2": "A2 highway reconstruction: Uzbekistan border — Shymkent — Taraz — Almaty — Khorgos",
    "proj-wb-3": "Section km 774 — km 806",
    "eyebrow-adv": "Why us", "sec-adv": "Advantages of working with us",
    "adv-1-title": "Design Team", "adv-1-desc": "In-house design department (Category II). 10 certified engineers.",
    "adv-2-title": "Quality Control", "adv-2-desc": "Construction department with ITC engineers — quality control at every stage.",
    "adv-3-title": "Industrial Climbing", "adv-3-desc": "Certified high-altitude installers with industrial safety permits.",
    "adv-4-title": "Project Management", "adv-4-desc": "Proprietary Contractor Coordination System for real-time control.",
    "adv-5-title": "Nationwide Coverage", "adv-5-desc": "4 offices: Almaty, Astana, Shymkent, Atyrau. 30+ teams ready.",
    "adv-6-title": "Certified Partner", "adv-6-desc": "Official certified BI Group business partner.",
    "eyebrow-vendors": "Ecosystem", "sec-vendors": "Vendors & Partners",
    "vendors-sub": "Direct and partner supply channels from the world's leading manufacturers",
    "vendors-note": "The listed companies are just part of our partner portfolio. We also work with vendors from Europe, Asia, and the USA.",
    "footer-tagline": "Trusted partner in engineering and ecological design",
    "director-title": "Executive Director",
    "footer-offices-title": "Our Offices", "hq": "Head Office", "footer-rights": "All rights reserved.",
    "eyebrow-licenses": "Documents",
    "sec-licenses": "Permits & Licenses",
    "sec-licenses-sub": "KazCEP LLC holds all necessary licenses to provide a full range of engineering and consulting services",
    "lic-card-1": "Design Activities",
    "lic-card-2": "Construction Works",
    "lic-card-3": "Environmental Protection",
    "lic-card-cat": "Category II",
    "lic-card-eco": "Environmental design and audit",
    "lic-card-4": "Survey Activities",
    "lic-card-4-sub": "Geodetic and geological works",
    "lic-download": "Open PDF",
    "director-name": "Nurlan Dairov",
    "city-almaty": "Almaty", "addr-almaty": "Timiryazeva St., 42/15",
    "city-astana": "Astana", "addr-astana": "Kunayeva St. 33, Astanalyk BC, office 903",
    "city-atyrau": "Atyrau", "addr-atyrau": "Amandosova St., 6a",
    "city-shymkent": "Shymkent", "addr-shymkent": "Akmarzhan St., 4"
  }
};

// ---- LANGUAGE SWITCHING ----
function changeLang(lang) {
  if (!i18n[lang]) return;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) {
      el.innerHTML = i18n[lang][key];
    }
  });
  document.querySelectorAll('.lang-switcher button').forEach(function(btn) {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
  });
  try { localStorage.setItem('kazcep_lang', lang); } catch(e) {}
}

function toggleMenu() {
  var m = document.getElementById('navMenu');
  if (m) m.classList.toggle('active');
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', function() {

  // Wire lang buttons
  document.querySelectorAll('.lang-switcher button').forEach(function(btn) {
    var code = btn.getAttribute('data-lang');
    if (code) btn.addEventListener('click', function() { changeLang(code); });
  });

  // Load saved lang
  var saved = 'ru';
  try { saved = localStorage.getItem('kazcep_lang') || 'ru'; } catch(e) {}
  changeLang(saved);

  // Header scroll shadow
  var header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Project tabs
  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var tab = btn.getAttribute('data-tab');
      document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
      document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
      btn.classList.add('active');
      var panel = document.getElementById('tab-' + tab);
      if (panel) panel.classList.add('active');
    });
  });

  // Close mobile menu on nav link click
  document.querySelectorAll('.nav-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
      var m = document.getElementById('navMenu');
      if (m) m.classList.remove('active');
    });
  });

  // Map pins — click to toggle popup (mobile friendly)
  document.querySelectorAll('.map-pin').forEach(function(pin) {
    pin.addEventListener('click', function(e) {
      e.stopPropagation();
      var wasActive = pin.classList.contains('active');
      document.querySelectorAll('.map-pin').forEach(function(p) { p.classList.remove('active'); });
      if (!wasActive) pin.classList.add('active');
    });
  });
  document.addEventListener('click', function() {
    document.querySelectorAll('.map-pin').forEach(function(p) { p.classList.remove('active'); });
  });
  
});


document.querySelectorAll('.gal-track').forEach(function(track) {
  var cid = track.id.replace('gal-', '');
  var slides = track.querySelectorAll('.gal-slide');
  var current = 0;

  function goTo(idx) {
    if (idx < 0) idx = slides.length - 1;
    if (idx >= slides.length) idx = 0;
    current = idx;
    track.style.transform = 'translateX(-' + (idx * 100) + '%)';
    track.closest('.gallery-block').querySelectorAll('.gal-dot')
      .forEach(function(d, i) { d.classList.toggle('active', i === idx); });
  }

  var block = track.closest('.gallery-block');
  block.querySelector('.gal-prev').addEventListener('click', function() { goTo(current - 1); });
  block.querySelector('.gal-next').addEventListener('click', function() { goTo(current + 1); });
  block.querySelectorAll('.gal-dot').forEach(function(dot) {
    dot.addEventListener('click', function() { goTo(+dot.getAttribute('data-idx')); });
  });
  setInterval(function() { goTo(current + 1); }, 4000);
});