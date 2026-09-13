export interface WorkProject {
  title: string;
  subtitle?: string;
  highlights: string[];
  techStack?: string[];
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  projects: WorkProject[];
  techStack?: string[];
}

export interface HighlightProject {
  id: string;
  expId?: string;
  tag: string;
  title: string;
  subtitle: string;
  period: string;
  companyRole: string;
  impactMetrics: { label: string; value: string; badge: string }[];
  keyActions: string[];
  architecturePoints: string[];
  beforeVsAfter: { before: string; after: string; metric: string };
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: 'Master' | 'Advanced' | 'Proficient'; highlight?: string }[];
}

export interface AdvisoryPoint {
  category: string;
  title: string;
  description: string;
  executiveHighlight: string;
  candidateAdvantage: string;
}

export const MARGEN_PROFILE = {
  name: "林新善",
  englishName: "Margen Lin",
  title: "資深後端工程師",
  experienceYears: "5+",
  tagline: "深耕 Java (Spring Boot) 與 PHP (Laravel)，專精於大型商業系統重構與高複雜度 IoT 軟硬體整合",
  philosophy: "具備 5 年以上後端開發經驗，深耕 Java (Spring Boot) 與 PHP (Laravel)。具備「大型商業系統重構」與「高複雜度 IoT 軟硬體整合（門禁/車辨/串流）」之實戰經驗。善於導入 DDD / SOLID 架構原則、SQL 效能調優 與 CI/CD 自動化測試。重視用戶體驗與系統可維護性，具備良好跨部門溝通與技術帶領能力，能獨立扛起核心模組開發並快速落地商業價值。",
  contact: {
    email: "hsinshanlin@gmail.com",
    phone: "0972109721",
    location: "台灣",
    language: "中文 (母語), English",
  },
  corePositioning: [
    {
      title: "大型商業系統重構與資料庫調優",
      icon: "Cpu",
      summary: "深耕 Java (Spring Boot) 與 PHP (Laravel)，熟稔 MariaDB Slave MVCC 零鎖表備份、Kafka/ELK 1GB 壓力測試與 85% 磁碟空間節省，達成 1,680 萬筆資料 100% 零掉單無損寫入。",
      relatedWorks: [
        { name: "專案開發", expId: "exp-1" },
        { name: "口袋證券", expId: "exp-2" }
      ]
    },
    {
      title: "高複雜度 IoT 軟硬體整合與 50+ 串流控管",
      icon: "Layers",
      summary: "實地導入 DDD / SOLID 架構，串接 15+ 種硬體設備 (Modbus TCP, IO Box, ETC, 門禁機)，處理 RTSP 50+ 支攝影機串流並完成 3 大實體案場現場部署測試。",
      relatedWorks: [
        { name: "集星網路", expId: "exp-3" }
      ]
    },
    {
      title: "精準需求解析與前瞻邊界考量",
      icon: "Compass",
      summary: "具備扎實 SDLC 規範與系統流程圖繪製能力。接到需求時能從需求者與使用者角度出發，將功能規格、邊界條件 (Edge Cases) 與未來架構擴充性預先考量妥當。",
      relatedWorks: [
        { name: "專案開發", expId: "exp-1" },
        { name: "口袋證券", expId: "exp-2" },
        { name: "集星網路", expId: "exp-3" },
        { name: "艾普特媒體", expId: "exp-5" }
      ]
    },
    {
      title: "跨部門溝通與商業自動化視野",
      icon: "TrendingUp",
      summary: "具備招募顧問與 IT 自動化諮詢經驗，理解商業流程與招募邏輯。能主導繪製 Use Case 流程圖，搭起技術與業務橋樑，精準降低需求不符產生的返工率。",
      relatedWorks: [
        { name: "專案開發", expId: "exp-1" },
        { name: "口袋證券", expId: "exp-2" },
        { name: "集星網路", expId: "exp-3" },
        { name: "職涯顧問", expId: "exp-4" },
        { name: "艾普特媒體", expId: "exp-5" }
      ]
    }
  ],
  stats: [
    { label: "資料零掉單寫入", value: "1,680 萬筆", subtext: "Kafka/ELK 管道壓力測試" },
    { label: "Kafka 磁碟空間節省", value: "85%", subtext: "Snappy 壓縮演算法" },
    { label: "SQL 查詢速度提升", value: "87%", subtext: "證券線上開戶系統優化" },
    { label: "升級維護費用節省", value: "$10,000 USD", subtext: "MSSQL 自動化維運" }
  ]
};

export const ESSENTIAL_HIGHLIGHTS: HighlightProject[] = [
  {
    id: "log-platform",
    expId: "exp-1",
    tag: "高併發與大數據架構",
    title: "集中式日誌管理平台 — 重構與高併發壓測",
    subtitle: "解決 Race Condition、實現零鎖表備份與 1,680 萬筆資料 100% 零掉單",
    period: "2025/07 – 2026/08",
    companyRole: "全端工程師 • 專案開發",
    impactMetrics: [
      { label: "Kafka 磁碟空間節省", value: "85%", badge: "成本優化" },
      { label: "叢集同步穩定度", value: "90%", badge: "系統穩定" },
      { label: "壓測無損寫入", value: "1,680 萬筆", badge: "高併發" },
    ],
    keyActions: [
      "重構 MariaDB Slave 重建機制，引入一致性快照與 MVCC 機制實現線上零鎖表備份，解決 Race Condition 隱患，提升叢集同步穩定度達 90%",
      "主導 Kafka/ELK 大數據管道 1GB 壓力測試與 Snappy 壓縮演算法評估，驗證可節省 85% Kafka 磁碟空間，並達成 1,680 萬筆資料 100% 零掉單無損寫入",
      "主導修復 205 個 Unit/Feature Test 檔案（負責 60% 以上約 350 個 Method），強化 CI/CD 流程穩定度，並建立前端 Jest E2E 自動化測試鏈",
      "重構全球極端時區（UTC-11~+14）告警時間錨點演算法；將 Elasticsearch 通訊升級為 HTTPS，以內外分離架構達成零效能損耗與憑證安全連線"
    ],
    architecturePoints: [
      "MVCC (Multi-Version Concurrency Control) 零鎖表線上快照機制",
      "Kafka Producer / Consumer Snappy Compression & Flow Control",
      "Jest E2E CI/CD Pipeline Automation",
      "UTC Edge-Time Anchor Algorithm & HTTPS Zero-Overhead Bridge"
    ],
    beforeVsAfter: {
      before: "MariaDB 備份時造成鎖表卡頓、Kafka 磁碟佔用極高、時區告警有時間偏差與極端情境異常。",
      after: "線上備份完全不鎖表、節省 85% 磁碟，1,680 萬筆壓測零掉單，叢集穩定度高達 90%。",
      metric: "磁碟空間 -85% / 穩定度 90%"
    },
    techStack: ["PHP (Laravel)", "ELK", "Kafka", "MariaDB", "Docker", "Shell Script", "Jest", "Git"]
  },
  {
    id: "financial-system",
    expId: "exp-2",
    tag: "金融級系統與數據優化",
    title: "線上股票開戶系統 — DDD 架構重構與效能調優",
    subtitle: "查詢速度提升 87%、測試效率提升 5 倍，精準省下高額數據庫授權費",
    period: "2024/01 - 2024/12",
    companyRole: "資深系統工程師 • 口袋證券股份有限公司",
    impactMetrics: [
      { label: "查詢速度提升", value: "87%", badge: "效能飆升" },
      { label: "測試自動化效率", value: "5 倍", badge: "開發效率" },
      { label: "省下升級服務費", value: "$10,000 USD", badge: "直接省錢" }
    ],
    keyActions: [
      "優化及重構軟體架構，並導入DDD、SOLID 概念",
      "優化後端客戶資料查詢語法，提升查詢速度約 87%",
      "撰寫測試程式，提升測試效率 5 倍；排程監視程式，發送警報到社群軟體",
      "使用 OpenCV 優化圖像辨識系統，提升 OCR 辨識率 12%",
      "製作 MSSQL DB 的定期自動備份、還原程式，幫公司省下 10,000 美金的升級服務費用",
      "開發中文轉英文服務（地址、姓名），針對規則不完整與高例外率情境處理，支援數萬筆實際資料與長期維運，取代郵局系統"
    ],
    architecturePoints: [
      "DDD Bounded Context & Aggregates Design Pattern",
      "MSSQL Query Execution Plan Optimization & Indexing",
      "OpenCV Computer Vision & Image Pre-processing for OCR",
      "Address & Name Transliteration Engine with Edge-case Exception Handling"
    ],
    beforeVsAfter: {
      before: "客戶查詢延遲高、人工測試耗時、需要負擔高昂 MSSQL 升級維護費用與開戶地址校驗痛點。",
      after: "查詢加速 87%、測試快 5 倍、OCR +12%、完美省下 $10,000 美金升級費用。",
      metric: "查詢加速 87% / 省 $10k USD"
    },
    techStack: ["Java (Spring Boot)", "JavaScript", "Shell Script", "MSSQL", "RESTful API", "Redis", "Git", "JBoss", "Python"]
  },
  {
    id: "iot-smart-facility",
    expId: "exp-3",
    tag: "IoT 軟硬整合與現場落地",
    title: "智慧長照場域與電動車場域 — 大型 IoT 管理系統",
    subtitle: "串接 15+ 硬體設備、50 隻 RTSP 攝影機與 3 實體場域現場部署",
    period: "2021/09 - 2024/01",
    companyRole: "後端工程師 • 集星網路股份有限公司",
    impactMetrics: [
      { label: "串接硬體設備種類", value: "15+ 種", badge: "軟硬整合" },
      { label: "RTSP 控管攝影機", value: "50 隻", badge: "實時串流" },
      { label: "落地現場場域", value: "長照 + 3場域", badge: "實體落地" }
    ],
    keyActions: [
      "開發大樓管理系統（落地在台中某長照中心）：導入 DDD 概念建構軟體架構，包括門禁、停車場、訪客、空間設備、燈光管理，並串接 15 種以上的硬體設備來收集環境數據",
      "使用 RTSP 轉流技術，控管 50 隻攝影機畫面；透過 Modbus TCP、IO Box、API 方式串接 ETC 、門禁機等硬體設備",
      "開發電動車智能停車場管理系統（落地在實體 3 案場）：結合車牌辨識與演算法，智能判斷各種車進出場情景，自動操作相關硬體",
      "親自至實體案場進行現場部署與全流程車輛進出實測"
    ],
    architecturePoints: [
      "Modbus TCP / IO Box Hardware Driver & Protocol Handler",
      "RTSP Stream Converter & Multi-camera Sub-stream Architecture",
      "Event-Driven DDD Architecture for IoT Sensor Data Ingestion",
      "On-site Edge Computing & Auto Gate Control Logic"
    ],
    beforeVsAfter: {
      before: "長照中心與停車場傳統人工管理耗時、緊急事件無法即時警報、硬體訊號孤立無法聯動。",
      after: "自動化 15+ 硬體聯動、實時監控 50 隻攝影機、車輛自動感應與智慧節能控管。",
      metric: "15+ 硬體整合 / 50 隻串流"
    },
    techStack: ["PHP (Laravel)", "Java (Spring Boot)", "MySQL", "Redis", "MongoDB", "Node.js", "Docker", "RTSP", "Modbus TCP", "Shell Script"]
  }
];

export const WORK_HISTORY: WorkExperience[] = [
  {
    id: "exp-1",
    role: "全端工程師",
    company: "專案開發",
    period: "2025/07 – 2026/08",
    duration: "1年1個月",
    projects: [
      {
        title: "【集中式日誌管理平台開發與維運】",
        highlights: [
          "重構 MariaDB Slave 重建機制，引入一致性快照與 MVCC 機制實現線上零鎖表備份，解決 Race Condition 隱患，提升叢集同步穩定度達 90%。",
          "主導 Kafka/ELK 大數據管道 1GB 壓力測試與 Snappy 壓縮演算法評估，驗證可節省 85% Kafka 磁碟空間，並達成 1,680 萬筆資料 100% 零掉單無損寫入。",
          "主導修復 205 個 Unit/Feature Test 檔案（負責 60% 以上約 350 個 Method），強化 CI/CD 流程穩定度，並建立前端 Jest E2E 自動化測試鏈。",
          "重構全球極端時區（UTC-11~+14）告警時間錨點演算法；將 Elasticsearch 通訊升級為 HTTPS，以內外分離架構達成零效能損耗與憑證安全連線。"
        ],
        techStack: ["PHP (Laravel)", "ELK", "Kafka", "MariaDB", "Docker", "Shell Script", "Jest", "Git"]
      },
      {
        title: "【會員系統與交易平台開發】",
        highlights: [
          "整合 Paysafe 多元支付，對接點數卡、電子錢包、銀行轉帳與行動支付儲值管道；實作 Webhook 非同步回呼與交易冪等性，確保點數入帳零重複、零掉單。",
          "主導第三方支付技術分享，撰寫文件，向跨團隊簡報分享，提升後續擴充效率。",
          "開發營運 CMS 模組，自訂公告與橫幅發布功能，降低高頻動態查詢對主資料庫的負載。"
        ],
        techStack: ["PHP (Laravel)", "Paysafe", "Webhook", "MySQL", "Redis", "CMS", "Git"]
      }
    ]
  },
  {
    id: "exp-2",
    role: "資深系統工程師",
    company: "口袋證券股份有限公司",
    period: "一月 2024 - 十二月 2024",
    duration: "1年",
    projects: [
      {
        title: "【負責整個線上開戶系統開發及維運】優化及重構軟體架構，並導入DDD、SOLID 概念",
        highlights: [
          "優化後端客戶資料查詢語法，提升查詢速度約 87%",
          "撰寫測試程式，提升測試效率 5 倍；排程監視程式，發送警報到社群軟體",
          "使用 OpenCV 優化圖像辨識系統，提升 OCR 辨識率 12%",
          "製作 MSSQL DB 的定期自動備份、還原程式，幫公司省下 10,000 美金的升級服務費用",
          "開發中文轉英文服務（地址、姓名），針對規則不完整與高例外率情境處理，支援數萬筆實際資料與長期維運，取代郵局系統"
        ],
        techStack: ["Java (Spring Boot)", "JavaScript", "Shell Script", "MSSQL", "RESTful API", "Redis", "Git", "JBoss", "Python"]
      }
    ]
  },
  {
    id: "exp-3",
    role: "後端工程師",
    company: "集星網路股份有限公司",
    period: "九月 2021 - 一月 2024",
    duration: "2年4個月",
    projects: [
      {
        title: "【開發大樓管理系統（落地在台中某長照中心 ）】",
        subtitle: "導入 DDD 概念建構軟體架構，包括門禁、停車場、訪客、空間設備、燈光管理，並串接 15 種以上的硬體設備來收集環境數據，並即時呈現在網頁上，可即時通報緊急事件給管理人員，使其更有效率的管理。",
        highlights: [
          "使用 RTSP 轉流技術，控管 50 隻攝影機畫面",
          "透過 Modbus TCP、IO Box、API 方式串接 ETC 、門禁機等硬體設備"
        ],
        techStack: ["PHP(Laravel)", "Apache", "MySQL", "Redis", "NodeJs", "nginx", "Shell Script", "Git"]
      },
      {
        title: "【開發電動車智能停車場管理系統（落地在實體 3 案場）】",
        subtitle: "結合車牌辨識與演算法，智能判斷各種車進出場情景，自動操作相關硬體，並將數據呈現在網頁上，使人員方便管理，達成節能又省人力的控管方式。",
        highlights: [
          "導入 DDD 概念建構軟體架構，並以模組化分，以利未來開發",
          "透過 IO Box、API 方式串接感測資訊與控制硬體",
          "親自至實體案場進行現場部署與全流程車輛進出實測"
        ],
        techStack: ["Java Spring boot", "MySQL", "Redis", "MongoDB", "Docker", "Shell Script", "Git"]
      }
    ]
  },
  {
    id: "exp-4",
    role: "資訊接案與招募顧問",
    company: "職涯探索",
    period: "二月 2019 - 九月 2021",
    duration: "2年7個月",
    projects: [
      {
        title: "【跨界技術實踐與教育】",
        highlights: [
          "於海外4 間國小擔任科學老師，教學科普知識與實驗，因教學結構與互動成效優異，獲選為「公開觀課」示範講師",
          "協助新創公司進行外包官網功能驗證 ，建立工作 SOP，提高工作效率約 30 % ；撰寫自動化指令腳本建立數據庫，將派遣與薪資結算效率提升 100%"
        ]
      },
      {
        title: "【招募顧問】",
        highlights: [
          "建立人才與職缺資料庫使團隊工作效率提升 80% ，聯繫超過 1200 人，幫助人選獲得超過 270 萬薪資"
        ]
      }
    ]
  },
  {
    id: "exp-5",
    role: "後端工程師",
    company: "艾普特媒體股份有限公司",
    period: "八月 2018 - 二月 2019",
    duration: "7個月",
    projects: [
      {
        title: "【AdTech 廣告平台開發】",
        highlights: [
          "平台維運與成效報表開發：維運 DSP 下單系統與 SSP 廣告串接 API。使用 PHP、MongoDB 與 Redis 進行每日大數據統計，開發曝光率、CTR（點擊率）、收益與利潤分潤等核心商業報表，提供業務團隊進行跨季銷售決策與產品營運策略。",
          "廣告樣板開發與可視率優化：改寫前端介面，開發 3+ 種季節性廣告樣板（如 400x600）。實作可視面積（Viewability > 60%）演算法，精準判斷使用者有效觀看影片時間，提升廣告數據真實度與投放成效。",
          "開發流程優化 : 將軟體生命週期（SDLC）規範導入團隊，繪製 Use Case 與系統流程圖，引導 PM 完善異態處理與業務邏輯，將需求溝通與模糊規格造成的返工率大幅降低，提升團隊開發效率。"
        ],
        techStack: ["PHP (Laravel)", "JavaScript", "Bootstrap", "Redis", "MongoDB", "Docker", "RESTful API", "SDLC", "Git"]
      }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "後端核心與語言 (Backend & Core)",
    skills: [
      { name: "Java (Spring Boot)", level: "Master", highlight: "5+ 年商業實戰 / 證券與 IoT 系統" },
      { name: "PHP (Laravel)", level: "Master", highlight: "高併發日誌 / AdTech / 大型重構" },
      { name: "Node.js / Express", level: "Advanced", highlight: "RESTful API / 微服務 / Vite Server" },
      { name: "Python", level: "Advanced", highlight: "OpenCV / 自動化腳本 / AI API" }
    ]
  },
  {
    title: "資料庫與數據流 (Databases & Streaming)",
    skills: [
      { name: "MySQL / MariaDB", level: "Master", highlight: "MVCC / 零鎖表備份 / 90% 叢集穩定度" },
      { name: "MSSQL", level: "Advanced", highlight: "自動化備份 / 查詢速度提升 87%" },
      { name: "Kafka & ELK Stack", level: "Advanced", highlight: "1,680 萬筆壓測 / 85% Snappy 空間優化" },
      { name: "Redis & MongoDB", level: "Master", highlight: "高併發快取 / 廣告大數據統計" }
    ]
  },
  {
    title: "IoT 軟硬體整合協定 (IoT & Hardware Protocols)",
    skills: [
      { name: "Modbus TCP / IO Box", level: "Advanced", highlight: "閘門與感測器控制 / 工控串接" },
      { name: "RTSP 影音轉流", level: "Advanced", highlight: "50 隻攝影機畫面即時控管" },
      { name: "車牌辨識 & ETC 串接", level: "Advanced", highlight: "實體 3 案場停車場進出場判斷" }
    ]
  },
  {
    title: "架構、DevOps 與測試 (Architecture & Ops)",
    skills: [
      { name: "DDD & SOLID 原則", level: "Master", highlight: "實戰落地於開戶與智慧場域" },
      { name: "Docker / Nginx / Linux", level: "Advanced", highlight: "容器化部署 / 內外分離 HTTPS Bridge" },
      { name: "Jest / Unit & Feature Test", level: "Advanced", highlight: "主導 205+ 測試檔修復 / CI/CD 穩定" },
      { name: "OpenCV & AI API 整合", level: "Advanced", highlight: "OCR 辨識 +12% / 即興劇 AI 生成" }
    ]
  }
];

export const EXECUTIVE_STRENGTHS: AdvisoryPoint[] = [
  {
    category: "1. 數據與商業效益導向",
    title: "以具體數據量化技術成果與商業價值",
    description: "高階主管與招募決策者最看重工程師對商業效益的實際貢獻。林新善在履歷中清楚標示：『查詢速度提升 87%』、『節省 85% 磁碟空間』、『協助公司省下 10,000 美金授權費』，展現對伺服器成本與商業效益的深刻理解。",
    executiveHighlight: "每段經歷皆具備可量化的商業回報與具體指標，展現資深工程師的核心影響力。",
    candidateAdvantage: "具備擔任技術主管 (Tech Lead) 與架構規劃能力，能在優化效能的同時為企業控管成本。"
  },
  {
    category: "2. DDD 領域驅動與大型系統重構",
    title: "具備大型系統重構與複雜架構處置能力",
    description: "林新善在證券開戶系統、智慧場域與日誌集中管理平台中均親自導入 DDD 模組化與 SOLID 原則，並成功解決 MariaDB 競態條件與線上零鎖表備份難題。",
    executiveHighlight: "具備實際重構舊有系統與解決高併發競態條件的實戰經驗，能精準處置系統關鍵痛點。",
    candidateAdvantage: "具備強大的專案接手與痛點維護能力，能將複雜的舊有程式碼轉化為高可維護性的系統架構。"
  },
  {
    category: "3. IoT 軟硬整合與大數據架構雙修",
    title: "打通底層工控協定與雲端高併發數據串流",
    description: "傳統後端常較少接觸軟硬體整合（如 Modbus TCP、IO Box、RTSP），而硬體工程師較少掌握 Kafka/ELK 大數據管道與 Docker CI/CD。林新善具備跨領域整合實力，並曾親自前往現場部署測試。",
    executiveHighlight: "兼具工控協定與雲端高併發串流經驗，是軟體團隊與硬體廠商之間的關鍵溝通橋樑。",
    candidateAdvantage: "能獨當一面推動 IoT、智慧建築與邊緣運算專案落地，降低團隊跨領域對接成本。"
  },
  {
    category: "4. 跨部門溝通與團隊合作視野",
    title: "理解商業流程與招募邏輯，降低溝通損耗",
    description: "曾擔任資訊顧問與招募顧問，深刻理解團隊溝通與需求定義對專案成敗的影響。在開發流程中能主動繪製 Use Case 與系統流程圖，引導需求完善，大幅降低開發返工率。",
    executiveHighlight: "具備良好的跨部門溝通能力與團隊合作視野，能大幅提升專案推動效率。",
    candidateAdvantage: "溝通順暢、邏輯清晰，能搭起技術團隊、產品經理與業務部門之間的理解橋樑。"
  },
  {
    category: "5. 高階架構決策與現場落地經驗",
    title: "具備高階架構判斷力與現場落地壁壘",
    description: "在 AI 輔助開發普及的時代，林新善展現的是『現場 Modbus 調試、高併發競態條件偵錯、DDD 領域模型劃分』等需要深度經驗的高階工程判斷力。",
    executiveHighlight: "善用 AI 工具提升開發效率，同時保有關鍵架構決策與現場落地的不可替代性。",
    candidateAdvantage: "現代工程師最佳典範 — 既能高效使用 AI 工具，更具備自主架構設計與問題排查實力。"
  }
];

export const SIDE_PROJECTS_AND_RESEARCH = {
  sideProject: {
    title: "即興劇互動系統",
    period: "2024/09 - Present",
    role: "系統設計與全端開發者",
    description: "為即興劇團體設計並開發即時互動系統，讓現場觀眾可透過手機提交點子，並即時整合投影至舞台演出中。",
    techStack: ["Python", "Flutter", "RESTful API", "MySQL", "AI Generation API"],
    highlights: [
      "設計高流量觀眾即時連線點子收集機制，支援後續行銷、會員經營與新戲宣傳需求。",
      "整合 AI API 進行角色與情境生成，作為後續導入深度學習模型與自然語言風格化的實作基礎。"
    ]
  },
  education: {
    school: "國立聯合大學",
    degree: "學士 • 資訊管理系（書卷獎、排名 top 1%）",
    period: "2014/9 - 2018/6",
    publicationsAndAwards: [
      {
        type: "論文 (IEEE 期刊)",
        title: "Constructing ECA Rule for IoT Application through a Novel S2RG Process",
        detail: "論文專研 IoT ECA (Event-Condition-Action) 規則引擎建構"
      },
      {
        type: "競賽獎項",
        title: "2017 經濟部搶鮮大賽 - 創意發想類《708節電霸》",
        detail: "榮獲 優選、人氣獎"
      },
      {
        type: "研討會論文",
        title: "2017 IMP 研討會論文《以 ECA 規則應用情境感知之智慧節電資訊系統》",
        detail: "榮獲 佳作"
      }
    ]
  }
};

export const PRESET_AI_QUESTIONS = [
  "林新善的核心優勢與定位是什麼？",
  "他在 MariaDB MVCC 重構和 Kafka 壓測做出了什麼成果？",
  "口袋證券線上開戶系統中，他如何提升 87% 的查詢速度？",
  "他在智慧長照與電動車停車場串接了哪些 IoT 硬體？",
  "高階主管與招募決策者最看重林新善的哪些能力？",
  "他在系統架構設計與重構上有什麼具體經驗？"
];
