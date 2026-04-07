export interface ProjectLocale {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface Project {
  slug: string;
  emoji: string;
  gradient: string;
  imageStyle: 'phone' | 'screen';
  tags: string[];
  images: string[];
  locales: {
    en: ProjectLocale;
    zh: ProjectLocale;
    es: ProjectLocale;
  };
}

export const projects: Project[] = [
  {
    slug: 'deepjournal',
    emoji: '\u{1F4D4}',
    gradient: 'linear-gradient(135deg, #2A1A1F, #5C2E3A)',
    imageStyle: 'phone',
    tags: ['Swift 6', 'SwiftUI', 'SwiftData', 'CloudKit', 'Google Gemini', 'WidgetKit', 'iOS App'],
    images: ['images/deepjournal/01.jpg', 'images/deepjournal/02.jpg', 'images/deepjournal/03.jpg', 'images/deepjournal/04.jpg', 'images/deepjournal/05.jpg'],
    locales: {
      en: {
        title: 'Deep Journal',
        subtitle: 'Private AI Journaling for iOS',
        description: "I've used ChatGPT and Claude for years to work through my thoughts — they're great at reflection, but they don't keep records and the context always runs out. Journaling apps exist, but they're static. Deep Journal is the middle ground: a private, AI-powered journal that actually remembers, reflects, and grows with you. Your entries stay on-device and sync via iCloud with end-to-end encryption. A Gemini-powered AI layer helps you spot emotional patterns, catch cognitive distortions, and understand yourself better over time.",
        features: [
          'Journal entries with rich text, photo attachments, tags, and bookmarks',
          'Voice-to-text entry via Speech Recognition',
          'AI emotion detection — top 5 emotions per entry, inline chat, and follow-up questions',
          'Configurable AI personality for reflections and tone',
          'Cognitive distortion detection and crisis-aware response handling',
          'Wellbeing check-in flow with mood tracking',
          'Insights dashboard — mood flow chart, emotion breakdown, writing streak heatmap',
          'Natural language search ("last week", "january", emotion and tag suggestions)',
          'iCloud sync with end-to-end encryption (AES-GCM via Keychain)',
          'App lock with Face ID / Touch ID / passcode',
          'WidgetKit extensions — mood streak, quick entry, recent entry'
        ]
      },
      zh: {
        title: 'Deep Journal',
        subtitle: 'iOS私密AI日记应用',
        description: '我用了很多年的ChatGPT和Claude来梳理思绪——它们善于反思，但不保存记录，上下文也总会耗尽。普通日记应用存在，但太静态了。Deep Journal是我的折中方案：一款真正能记住、反思并随你成长的私密AI日记。日记条目存储在本地，通过iCloud端对端加密同步。基于Gemini的AI层帮助你发现情绪模式、识别认知扭曲，随时间更好地了解自己。',
        features: [
          '支持富文本、照片附件、标签和书签的日记条目',
          '通过语音识别进行语音转文字输入',
          'AI情绪检测——每条日记识别前5种情绪，支持内联聊天和追问',
          '可配置AI个性，用于反思和语气调整',
          '认知扭曲检测和危机感知响应',
          '情绪打卡流程和心情追踪',
          '洞察仪表板——情绪流动图、情绪分布、写作连击热图',
          '自然语言搜索（"上周"、"一月份"、情绪和标签建议）',
          'iCloud同步，端对端加密（基于Keychain的AES-GCM）',
          '应用锁定，支持Face ID / Touch ID / 密码',
          'WidgetKit小组件——情绪连击、快速记录、最近日记'
        ]
      },
      es: {
        title: 'Deep Journal',
        subtitle: 'Diario Privado con IA para iOS',
        description: 'Usé ChatGPT y Claude durante años para organizar mis pensamientos — son buenos para la reflexión, pero no guardan registros y el contexto siempre se agota. Las apps de diario existen, pero son estáticas. Deep Journal es el punto medio: un diario privado impulsado por IA que realmente recuerda, reflexiona y crece contigo. Tus entradas se almacenan en el dispositivo y se sincronizan con iCloud con cifrado de extremo a extremo. Una capa de IA con Gemini te ayuda a detectar patrones emocionales, identificar distorsiones cognitivas y entenderte mejor con el tiempo.',
        features: [
          'Entradas con texto enriquecido, fotos adjuntas, etiquetas y marcadores',
          'Entrada por voz mediante reconocimiento de voz',
          'Detección de emociones por IA — top 5 por entrada, chat integrado y preguntas de seguimiento',
          'Personalidad de IA configurable para reflexiones',
          'Detección de distorsiones cognitivas y manejo de respuestas de crisis',
          'Flujo de bienestar y seguimiento de estado de ánimo',
          'Panel de insights — gráfico de flujo de ánimo, desglose emocional, mapa de racha de escritura',
          'Búsqueda en lenguaje natural ("la semana pasada", "enero", sugerencias de emoción)',
          'Sincronización iCloud con cifrado de extremo a extremo (AES-GCM)',
          'Bloqueo con Face ID / Touch ID / contraseña',
          'Widgets de WidgetKit — racha de ánimo, entrada rápida, entrada reciente'
        ]
      }
    }
  },
  {
    slug: 'zbudget',
    emoji: '\u{1F4B0}',
    gradient: 'linear-gradient(135deg, #1A3D2A, #2A6B45)',
    imageStyle: 'phone',
    tags: ['Swift 6', 'SwiftUI', 'SwiftData', 'FoundationModels', 'StoreKit 2', 'Plaid SDK', 'iOS App'],
    images: ['images/zbudget/01-dashboard.png', 'images/zbudget/02-accounts.png', 'images/zbudget/03-transactions.png', 'images/zbudget/04-budgets.png', 'images/zbudget/05-goals.png', 'images/zbudget/06-settings.png'],
    locales: {
      en: {
        title: 'zBudget',
        subtitle: 'Personal Finance for iOS',
        description: "When Intuit shut down Mint in early 2024, millions of users lost their go-to budgeting tool overnight. I was one of them. My friends and I relied on it to track spending, set budgets, and stay on top of bills. Nothing on the market felt right — most alternatives were either too complex, too expensive, or didn't respect user privacy. zBudget is a native iOS app that brings back the simplicity of personal budgeting with a modern, privacy-first approach. Built entirely in SwiftUI with on-device data storage, it gives users full control of their financial data without requiring a subscription to get started.",
        features: [
          'Net Worth Dashboard — Real-time overview of assets, debts, income, expenses, and savings at a glance',
          'Multi-Account Tracking — Checking, savings, credit cards, investments, loans, and cash accounts with instant balance visibility',
          'Smart Budgets — Category-based monthly budgets with visual progress rings and spending alerts',
          'Bill Reminders — Track recurring bills with due dates and payment status',
          'Savings Goals — Set targets (emergency fund, vacation, big purchases) and track progress',
          "Voice Input — Add transactions hands-free using on-device speech recognition and Apple's FoundationModels LLM for natural language parsing",
          'Bank Connection — Optional Plaid integration to sync transactions automatically',
          'Premium Tier — Freemium model with StoreKit 2 integration (unlimited budgets, full insights, iCloud sync)'
        ]
      },
      zh: {
        title: 'zBudget',
        subtitle: 'iOS个人理财应用',
        description: '当Intuit在2024年初关闭Mint时，数百万用户一夜之间失去了他们的首选预算工具。我就是其中之一。我和朋友们依赖它来追踪支出、设定预算和管理账单。市场上没有合适的替代品——大多数要么太复杂、太贵，要么不尊重用户隐私。zBudget是一款原生iOS应用，以现代、隐私优先的方式带回简单的个人预算管理。完全使用SwiftUI构建，数据存储在设备上，让用户完全控制自己的财务数据，无需订阅即可开始使用。',
        features: [
          '净资产仪表板——一目了然地查看资产、债务、收入、支出和储蓄',
          '多账户追踪——支票、储蓄、信用卡、投资、贷款和现金账户，即时查看余额',
          '智能预算——基于类别的月度预算，带有视觉进度环和支出提醒',
          '账单提醒——追踪定期账单的到期日和付款状态',
          '储蓄目标——设定目标（应急基金、假期、大额购买）并追踪进度',
          '语音输入——使用设备上的语音识别和Apple的FoundationModels LLM进行自然语言解析，免手动添加交易',
          '银行连接——可选的Plaid集成自动同步交易',
          '高级层——免费增值模式，支持StoreKit 2集成（无限预算、完整洞察、iCloud同步）'
        ]
      },
      es: {
        title: 'zBudget',
        subtitle: 'Finanzas Personales para iOS',
        description: 'Cuando Intuit cerró Mint a principios de 2024, millones de usuarios perdieron su herramienta de presupuesto preferida de la noche a la mañana. Yo fui uno de ellos. Mis amigos y yo dependíamos de ella para rastrear gastos, establecer presupuestos y mantenernos al día con las facturas. Nada en el mercado se sentía bien — la mayoría de las alternativas eran demasiado complejas, demasiado caras o no respetaban la privacidad del usuario. zBudget es una aplicación nativa de iOS que recupera la simplicidad del presupuesto personal con un enfoque moderno y centrado en la privacidad.',
        features: [
          'Panel de Patrimonio Neto — Vista en tiempo real de activos, deudas, ingresos, gastos y ahorros',
          'Seguimiento Multi-Cuenta — Cuentas corrientes, ahorros, tarjetas de crédito, inversiones, préstamos y efectivo',
          'Presupuestos Inteligentes — Presupuestos mensuales por categoría con anillos de progreso visual y alertas de gasto',
          'Recordatorios de Facturas — Rastrea facturas recurrentes con fechas de vencimiento y estado de pago',
          'Metas de Ahorro — Establece objetivos y rastrea el progreso',
          'Entrada de Voz — Agrega transacciones sin manos usando reconocimiento de voz en el dispositivo',
          'Conexión Bancaria — Integración opcional de Plaid para sincronizar transacciones automáticamente',
          'Nivel Premium — Modelo freemium con integración StoreKit 2'
        ]
      }
    }
  },
  {
    slug: 'photopal',
    emoji: '\u{1F4F8}',
    gradient: 'linear-gradient(135deg, #1A2A3D, #2A4A6B)',
    imageStyle: 'phone',
    tags: ['Swift', 'SwiftUI', 'MapKit', 'CloudKit', 'WeatherKit', 'CoreData', 'iOS App'],
    images: ['images/photopal/photopal-dashboard.png', 'images/photopal/photopal-shoots.png', 'images/photopal/photopal-calendar.png', 'images/photopal/photopal-shoot-detail-wedding.png', 'images/photopal/photopal-gear.png', 'images/photopal/photopal-gear-detail.png', 'images/photopal/photopal-settings.png'],
    locales: {
      en: {
        title: 'Photo Pal',
        subtitle: 'Plan, Track & Manage Shoots',
        description: "As a photographer juggling multiple shoots across New York, I needed a way to plan my day — see if I had time to travel between locations, check the weather, and keep my gear organized. Nothing existed that did it all, so I built Photo Pal. It's the shoot management app I always wanted: plan every detail, track clients and finances, and never miss golden hour.",
        features: [
          'Create and manage shoots with client details, locations, gear lists, shot lists, and deliverables',
          'Calendar and list views with status filtering and schedule conflict detection',
          'AI-generated shot list suggestions and gear recommendations tailored to your shoot type',
          'Weather forecasts with hourly breakdowns, plus golden hour and blue hour detection',
          'Automatic travel time estimates from your home studio or previous shoot',
          'Full gear inventory with specs — catalog 200+ cameras, lenses, and accessories',
          'Client and financial tracking: quotes, payments, balance-due, and revenue charts',
          'Smart dashboard with quick stats, travel conflict timeline, and customizable layout',
          'Deliverables and shot list tracking with deadlines and mood board support',
          'iCloud sync across devices, bilingual support (English & Chinese), and dark mode'
        ]
      },
      zh: {
        title: 'Photo Pal',
        subtitle: '专业摄影师的拍摄计划、追踪和管理工具',
        description: '作为在纽约各地频繁进行多场拍摄的摄影师，我需要一种方式来规划我的一天——查看我是否有时间在地点之间往返、检查天气并整理我的器材。没有现成的工具能做到这一切，所以我创建了Photo Pal。这是我一直想要的拍摄管理应用：规划每一个细节、追踪客户和财务，永不错过黄金时刻。',
        features: [
          '使用客户详情、位置、器材清单、拍摄清单和交付成果创建和管理拍摄',
          '日历和列表视图，支持状态筛选和重叠拍摄的日程冲突检测',
          '根据拍摄类型定制的AI生成拍摄清单建议和器材推荐',
          '天气预报，包括每小时详情，以及用于最优照明的黄金时刻和蓝色时刻检测',
          '从你的主工作室或上一个拍摄地点自动估计出行时间',
          '完整的器材库存和规格——编目200多台相机、镜头和配件',
          '客户和财务追踪：报价、付款、应收余额和收入图表',
          '智能仪表板，包含快速统计、出行冲突时间线和可定制的分段布局',
          '交付成果和拍摄清单追踪，包括截止日期、状态更新和mood board支持',
          '跨设备iCloud同步、双语支持（英文和中文）和深色模式'
        ]
      },
      es: {
        title: 'Photo Pal',
        subtitle: 'Planifica, Rastrea y Gestiona Sesiones Fotográficas',
        description: 'Como fotógrafo jugando con múltiples sesiones en Nueva York, necesitaba una forma de planificar mi día. Nada existía que lo hiciera todo, así que construí Photo Pal. Es la aplicación de gestión de sesiones que siempre quise.',
        features: [
          'Crear y gestionar sesiones con detalles de clientes, ubicaciones, listas de equipo',
          'Vistas de calendario y lista con filtrado de estado y detección de conflictos',
          'Sugerencias de lista de disparos generadas por IA y recomendaciones de equipo',
          'Pronósticos meteorológicos con detección de hora dorada y hora azul',
          'Estimaciones automáticas de tiempo de viaje',
          'Inventario completo de equipo con especificaciones',
          'Seguimiento de clientes y finanzas: cotizaciones, pagos, gráficos de ingresos',
          'Panel inteligente con estadísticas rápidas',
          'Seguimiento de entregas con plazos y tableros de inspiración',
          'Sincronización iCloud, soporte bilingüe y modo oscuro'
        ]
      }
    }
  },
  {
    slug: 'autosync',
    emoji: '\u{1F504}',
    gradient: 'linear-gradient(135deg, #1A2E28, #2A4A3E)',
    imageStyle: 'screen',
    tags: ['Swift', 'SwiftUI', 'macOS App', 'FSEvents'],
    images: ['images/autosync/01-main-window.png', 'images/autosync/03-sync-in-progress.png', 'images/autosync/02-sync-completed.png', 'images/autosync/04-diff-results.png', 'images/autosync/05-sync-history.png', 'images/autosync/06-add-backup-job.png'],
    locales: {
      en: {
        title: 'AutoSync',
        subtitle: 'Effortless Folder Sync for macOS',
        description: "AutoSync keeps your files perfectly in sync across drives, folders, and external storage — without thinking about it. Built entirely in Swift and SwiftUI, it lives in your menu bar. No cloud accounts, no subscriptions, no data leaves your machine.",
        features: [
          'Three sync modes: Mirror (exact replica), Additive (safe copy, never deletes), and Two-Way (bidirectional with conflict resolution)',
          'Real-time file watching — syncs instantly on change, or on your schedule',
          'Scan diffs before syncing to see exactly what will change',
          'Detailed notifications listing every file copied, deleted, or updated',
          'Atomic file operations prevent data loss mid-sync',
          'Path traversal protection and security-scoped bookmarks maintain access across reboots',
          'Lightweight native macOS menu bar app — no cloud, no accounts, fully local'
        ]
      },
      zh: {
        title: 'AutoSync',
        subtitle: 'macOS上的轻松文件夹同步',
        description: 'AutoSync让你的文件在驱动器、文件夹和外置存储中完美同步——无需费心。完全采用Swift和SwiftUI编写，驻留在你的菜单栏中。没有云账户、没有订阅、没有数据离开你的机器。',
        features: [
          '三种同步模式：镜像、累加和双向',
          '实时文件监控——在更改时即时同步',
          '同步前扫描差异以查看准确会发生什么变化',
          '详细的通知列表',
          '原子文件操作防止同步中途的数据丢失',
          '路径遍历保护和安全作用域书签',
          '轻量级本地macOS菜单栏应用'
        ]
      },
      es: {
        title: 'AutoSync',
        subtitle: 'Sincronización de Carpetas Sin Esfuerzo para macOS',
        description: 'AutoSync mantiene tus archivos perfectamente sincronizados entre unidades, carpetas y almacenamiento externo — sin esfuerzo. Construido completamente en Swift y SwiftUI, vive en tu barra de menú.',
        features: [
          'Tres modos de sincronización: Espejo, Aditivo y Bidireccional',
          'Vigilancia de archivos en tiempo real',
          'Escanea diferencias antes de sincronizar',
          'Notificaciones detalladas',
          'Operaciones de archivo atómicas',
          'Protección de traversal de ruta y marcadores con scope de seguridad',
          'Aplicación ligera de barra de menú nativa de macOS'
        ]
      }
    }
  },
  {
    slug: 'grainify',
    emoji: '\u{1F39E}\uFE0F',
    gradient: 'linear-gradient(135deg, #2E1F35, #4A2D55)',
    imageStyle: 'phone',
    tags: ['Swift', 'SwiftUI', 'AVFoundation', 'Core Image', 'iOS App'],
    images: ['images/granify/6.9/01_film_selection_portra.png', 'images/granify/6.9/01_film_selection.png', 'images/granify/6.9/06_developing.png', 'images/granify/6.9/03_film_lab.png', 'images/granify/6.9/04_contact_sheet.png', 'images/granify/6.9/07_tutorial.png'],
    locales: {
      en: {
        title: 'Grainify',
        subtitle: 'Film Camera Simulator for iPhone',
        description: "Grainify brings the analog photography experience to your pocket. Instead of instant digital shots, you load a roll of film — chosen from 9 meticulously recreated stocks like Kodak Portra 400, Fujifilm Velvia 50, and CineStill 800T — and shoot until the roll is full. Then you develop it in a virtual darkroom and see your photos for the first time, just like picking up prints from a photo lab.",
        features: [
          '9 film stock simulations with accurate color science, grain, and tonal characteristics',
          'Realistic roll-based shooting — 12, 24, or 36 exposures per roll',
          'Darkroom-style developing with animated processing',
          'Film Lab for browsing developed rolls and importing your own photos',
          'Double exposure mode, flash toggle, and iPhone 16 Camera Control support',
          "Press and hold any film canister to learn about the stock's history and best uses",
          'Built entirely in SwiftUI'
        ]
      },
      zh: {
        title: 'Grainify',
        subtitle: '用于iPhone的胶片相机模拟器',
        description: 'Grainify 将模拟摄影体验带到你的口袋里。与其拍摄即时数字照片，你需要装入一卷胶片——从9种精心复制的胶卷中选择——直到胶卷装满。然后在虚拟暗房中冲洗，第一次看到你的照片。',
        features: [
          '9种胶卷模拟，配备精确的色彩科学、颗粒感和色调特性',
          '逼真的胶卷式拍摄——每卷12、24或36张曝光',
          '暗室风格的冲洗效果',
          '胶卷库，用于浏览已冲洗的胶卷和导入照片',
          '双重曝光模式、闪光灯切换和iPhone 16相机控制支持',
          '长按任何胶卷筒了解该胶卷的历史和最佳用途',
          '完全采用SwiftUI编写'
        ]
      },
      es: {
        title: 'Grainify',
        subtitle: 'Simulador de Cámara de Película para iPhone',
        description: 'Grainify lleva la experiencia de fotografía analógica a tu bolsillo. Cargas un rollo de película y disparas hasta que el rollo está lleno. Luego la revelas en un cuarto oscuro virtual.',
        features: [
          '9 simulaciones de película con ciencia de color precisa',
          'Captura realista basada en película — 12, 24 o 36 exposiciones',
          'Revelado al estilo de cuarto oscuro',
          'Laboratorio de películas para examinar rollos revelados',
          'Modo de doble exposición y soporte para iPhone 16',
          'Presiona y mantén presionado cualquier carrete para aprender sobre la película',
          'Construido completamente en SwiftUI'
        ]
      }
    }
  },
  {
    slug: 'serverstatus',
    emoji: '\u{1F5A5}\uFE0F',
    gradient: 'linear-gradient(135deg, #1A1F2E, #2A3555)',
    imageStyle: 'screen',
    tags: ['Swift', 'SwiftUI', 'macOS App', 'SMB', 'Tailscale'],
    images: ['images/serverstatus/1-Overview.png', 'images/serverstatus/5-Storage.png', 'images/serverstatus/2-CPU.png', 'images/serverstatus/3-Memory.png', 'images/serverstatus/4-Network.png', 'images/serverstatus/6-Services.png', 'images/serverstatus/7-Alerts.png'],
    locales: {
      en: {
        title: 'Server Status',
        subtitle: 'Full-Screen Home Server Dashboard',
        description: "I set up a Mac mini as a home file server with external drives for my Lightroom library, accessible from my MacBook via SMB and Tailscale VPN. I needed a way to monitor everything at a glance — so I built Server Status, a full-screen dashboard designed for a small dedicated screen on my desk. It auto-rotates through real-time widgets and pulses red when something needs attention.",
        features: [
          'Real-time CPU usage with history sparkline',
          'Memory gauge with used/free/total breakdown',
          'Storage overview for all mounted volumes — external drives highlighted',
          'Network throughput and IP addresses (local + Tailscale)',
          'SMB file sharing and Tailscale VPN status monitoring',
          'Live clock with date display',
          'Alert system — screen pulses red when disks are full, services go down, or memory is critical',
          'Auto-rotating carousel with slide animations',
          'Keyboard controls: arrow keys to navigate, space to pause',
          'Launches full-screen with no title bar — purpose-built for an always-on display'
        ]
      },
      zh: {
        title: 'Server Status',
        subtitle: '全屏家庭服务器仪表板',
        description: '我将一台Mac mini设置为家庭文件服务器，使用外置硬盘存储我的Lightroom库，可通过SMB和Tailscale VPN从MacBook访问。我需要一种方式来一目了然地监控一切——所以我构建了Server Status。',
        features: [
          '实时CPU使用率及历史迷你图',
          '内存仪表，显示已用/可用/总容量',
          '所有已挂载卷的存储概览',
          '网络吞吐量和IP地址',
          'SMB文件共享和Tailscale VPN状态监控',
          '实时时钟和日期显示',
          '警报系统——当磁盘满、服务宕机或内存不足时屏幕变红',
          '带滑动动画的自动轮换转盘',
          '键盘控制：方向键导航，空格暂停',
          '全屏启动，无标题栏'
        ]
      },
      es: {
        title: 'Server Status',
        subtitle: 'Panel de Control de Servidor Doméstico',
        description: 'Configuré una Mac mini como servidor de archivos doméstico. Necesitaba una forma de monitorear todo de un vistazo — así que construí Server Status.',
        features: [
          'Uso de CPU en tiempo real con minigráfico',
          'Indicador de memoria con desglose',
          'Descripción general de almacenamiento',
          'Rendimiento de red y direcciones IP',
          'Monitoreo de estado de SMB y Tailscale',
          'Reloj en vivo con pantalla de fecha',
          'Sistema de alertas',
          'Carrusel que rota automáticamente',
          'Controles de teclado',
          'Pantalla completa sin barra de título'
        ]
      }
    }
  },
  {
    slug: 'moneytree',
    emoji: '\u{1F333}',
    gradient: 'linear-gradient(135deg, #1A3D1A, #2A6B2A)',
    imageStyle: 'phone',
    tags: ['Swift', 'SwiftUI', 'Finnhub API', 'StoreKit 2', 'iOS App'],
    images: [],
    locales: {
      en: {
        title: 'Money Tree',
        subtitle: 'Investment & Portfolio Tracker for iOS',
        description: "A comprehensive investment app for beginner to intermediate investors. Track your portfolio, discover market trends, read financial news, and learn investing concepts — all in one place. Built with live market data from Finnhub, a freemium model with StoreKit 2, and a full educational curriculum.",
        features: [
          'Dashboard with portfolio summary, performance charts, and trending stocks',
          'Real-time stock quotes and price tracking via Finnhub API',
          'Buy/Sell trading interface with transaction history',
          'Stock detail pages with key statistics (P/E ratio, market cap, 52-week range)',
          'Market news feed with sentiment filtering (bullish, bearish, portfolio)',
          'Investment goals tracking with progress visualization',
          'Educational content — 4 topics with 9 lessons on investing basics, portfolio strategy, and risk management',
          'Watchlist with real-time updates',
          'Premium tier with extended charts, unlimited goals, and portfolio analytics',
          'Dark mode, biometric auth, and Keychain-secured API keys'
        ]
      },
      zh: {
        title: 'Money Tree',
        subtitle: 'iOS投资与投资组合追踪器',
        description: '为初级到中级投资者打造的综合投资应用。追踪你的投资组合、发现市场趋势、阅读财经新闻，并学习投资概念——一站式解决。使用Finnhub实时市场数据、StoreKit 2免费增值模式和完整的教育课程。',
        features: [
          '仪表板，包含投资组合摘要、业绩图表和热门股票',
          '通过Finnhub API获取实时股票报价和价格追踪',
          '买卖交易界面和交易历史',
          '股票详情页，包含关键统计数据',
          '市场新闻，支持情绪筛选',
          '投资目标追踪和进度可视化',
          '教育内容——涵盖投资基础、策略和风险管理',
          '实时更新的关注列表',
          '高级版——扩展图表、无限目标和投资组合分析',
          '深色模式、生物识别认证和钥匙串安全存储'
        ]
      },
      es: {
        title: 'Money Tree',
        subtitle: 'Seguimiento de Inversiones para iOS',
        description: 'Una aplicación de inversión integral para inversores principiantes e intermedios. Rastrea tu portafolio, descubre tendencias del mercado, lee noticias financieras y aprende conceptos de inversión — todo en un solo lugar.',
        features: [
          'Panel con resumen de portafolio, gráficos de rendimiento y acciones en tendencia',
          'Cotizaciones en tiempo real via Finnhub API',
          'Interfaz de compra/venta con historial de transacciones',
          'Páginas de detalle con estadísticas clave',
          'Noticias del mercado con filtro de sentimiento',
          'Seguimiento de metas de inversión',
          'Contenido educativo sobre inversión',
          'Lista de seguimiento con actualizaciones en tiempo real',
          'Nivel premium con gráficos extendidos y análisis',
          'Modo oscuro y autenticación biométrica'
        ]
      }
    }
  }
];
