import { InterestType } from '@/types';

// 1. DATA BOOTCAMP / COURSE RECOMMENDATIONS
export const BOOTCAMP_RECOMMENDATIONS = {
  general: [
    { platform: "Dicoding", title: "Learning Path Pengembang Software", desc: "Kurikulum standar industri global.", url: "https://www.dicoding.com/" },
    { platform: "Skilvul", title: "Tech Job Connector", desc: "Bootcamp coding dengan jaminan kerja.", url: "https://skilvul.com/" }
  ],
  data: [
    { platform: "DQLab", title: "Data Science Academy", desc: "Belajar Data Science dari dasar pakai Bahasa Indonesia.", url: "https://dqlab.id/" },
    { platform: "Kaggle", title: "Data Science Courses", desc: "Gratis, hands-on, dan langsung praktek dataset.", url: "https://www.kaggle.com/learn" }
  ],
  design: [
    { platform: "Harisenin", title: "UI/UX & Product Design", desc: "Bootcamp intensif untuk karir digital.", url: "https://harisenin.com/" },
    { platform: "BuildWithAngga", title: "UI/UX Design", desc: "Tutorial desain web dan mobile modern.", url: "https://buildwithangga.com/" }
  ],
  governance: [
    { platform: "Coursera", title: "IT Audit & Governance", desc: "Pelajari standar COBIT dan framework audit IT.", url: "https://www.coursera.org/courses?query=it%20audit" },
    { platform: "ISACA", title: "CISA Certification Prep", desc: "Persiapan sertifikasi auditor sistem informasi.", url: "https://www.isaca.org/credentialing/cisa" }
  ]
} as const;

// 2. DATA PORTFOLIO & PROJECT IDEAS
export const PORTFOLIO_DATA: Record<InterestType, {
  links: string[];
  projects: string;
}> = {
  "IS Governance": {
    links: [
      "https://github.com/PaulaRybicka0114/Portfolio",
      "https://mari-bezobiuk.github.io/"
    ],
    projects: `1. IT GOVERNANCE MATURITY ASSESSMENT (COBIT 2019)
Deskripsi: Melakukan penilaian tingkat kematangan tata kelola TI pada sebuah organisasi (riil atau studi kasus).
Output: Pemetaan proses (EDM, APO, BAI, DSS, MEA), Skor maturity level, Gap analysis, Rekomendasi peningkatan.
Tools: COBIT 2019, KPI, Excel/Power BI.

2. AUDIT KEPATUHAN PERLINDUNGAN DATA PRIBADI
Deskripsi: Menganalisis kesiapan organisasi dalam mematuhi UU PDP Indonesia & GDPR.
Output: Data inventory & flow diagram, Compliance checklist, Risk gap, Rekomendasi SOP.
Tools: UU PDP, GDPR, Privacy Impact Assessment (PIA).

3. IT RISK ASSESSMENT & BCP
Deskripsi: Mengidentifikasi risiko TI dan menyusun strategi pemulihan bencana.
Output: Risk register, Risk treatment plan, BCP & DRP document, Simulasi insiden.
Tools: ISO 31000, ISO 22301, Risk Matrix.

4. EVALUASI KUALITAS LAYANAN TI (ITIL & SLA)
Deskripsi: Mengevaluasi performa layanan TI (helpdesk/ERP) berdasarkan ITIL.
Output: Analisis Incident Management, Evaluasi SLA vs realisasi, KPI layanan.
Tools: ITIL v4, SLA, KPI Dashboard.

5. AUDIT KONTROL APLIKASI (SIAKAD/ERP)
Deskripsi: Melakukan audit kontrol aplikasi (input, process, output).
Output: Evaluasi kontrol akses, Audit log integrity, Temuan audit & rekomendasi.
Tools: COBIT, Application Control, BPMN.`
  },
  "Enterprise System": {
    links: [
      "https://dribbble.com/shots/24663405-Sr-Full-stack-Developer-Portfolio-Website",
      "https://www.behance.net/gallery/218707953/Nemish-UIUX-Portfolio-2025",
      "https://www.behance.net/gallery/168903999/UXUI-Designer-Portfolio-CV-2023"
    ],
    projects: `1. IMPLEMENTASI MINI-ERP BERBASIS ODOO (UMKM)
Deskripsi: Merancang sistem ERP terintegrasi untuk UMKM.
Scope: Sales & CRM, Inventory, Accounting dasar.
Output: Business process mapping, Konfigurasi Odoo, UAT scenario.

2. ANALISIS & PERANCANGAN SISTEM ENTERPRISE
Deskripsi: Project fokus System & Business Analysis tanpa coding berat.
Output: Stakeholder analysis, BRD, FSD, UML (Use Case, Sequence), ERD.

3. BACKEND SISTEM ENTERPRISE (REST API)
Deskripsi: Membangun backend core system (HRIS/Inventory) siap integrasi.
Output: CRUD master data, Role-based access control, API Documentation.
Stack: Java Spring Boot / Go / .NET, PostgreSQL.

4. INTEGRASI ERP DENGAN SISTEM EKSTERNAL
Deskripsi: Simulasi integrasi sistem (misal: ERP ↔ CRM).
Output: Arsitektur integrasi, Data mapping, Log monitoring.

5. SUPPLY CHAIN & INVENTORY SYSTEM
Deskripsi: Sistem pengelolaan stok & rantai pasok berbasis data.
Output: EOQ calculation, Monitoring stok real-time, Dashboard manajerial.`
  },
  "Business Intelligence": {
    links: [
      "https://mgnovandri.my.canva.site/",
      "https://github.com/tiannaparris/Data-Analysis-Portfolio",
      "https://github.com/topics/data-science-portfolio"
    ],
    projects: `1. PERANCANGAN DATA WAREHOUSE & DASHBOARD
Deskripsi: Membangun BI system dari data mentah hingga dashboard.
Output: Desain Star Schema, ETL workflow, Dashboard Power BI/Tableau.

2. ANALISIS PERILAKU PELANGGAN (CUSTOMER ANALYTICS)
Deskripsi: Mengolah data pelanggan untuk menemukan pola segmentasi.
Output: RFM Analysis, Clustering (K-Means), Customer Lifetime Value (CLV).
Tools: Python, SQL, BI tools.

3. AUTOMATED BUSINESS REPORTING SYSTEM
Deskripsi: Membangun sistem reporting otomatis mengurangi human error.
Output: SQL scripts teroptimasi, Pipeline ETL otomatis, Dashboard real-time.

4. PREDIKSI TREN PENJUALAN (MACHINE LEARNING)
Deskripsi: Mengembangkan model prediktif untuk keputusan strategis.
Output: Time series forecasting, Evaluasi model (RMSE), Visualisasi prediksi.

5. REDESIGN DASHBOARD BI (UX & STORYTELLING)
Deskripsi: Fokus pada kualitas visualisasi dan komunikasi data.
Output: Audit dashboard lama, Before–after dashboard, Insight actionable.`
  }
};

// 3. DATA CAREER ROADMAP (10 Careers per Major)
export const CAREER_PATHS: Record<InterestType, {
  description: string;
  careers: { role: string; roadmap: string }[];
}> = {
  "IS Governance": {
    description: "Fokus studi ini mempelajari tata kelola dan audit sistem informasi organisasi menggunakan berbagai framework dan standar. Mahasiswa dibekali kemampuan mengambil keputusan, mengelola sumber daya, mengawasi, dan mengukur kinerja untuk mendukung tujuan bisnis dan meminimalkan risiko.",
    careers: [
      { role: "IT Auditor", roadmap: "1. Pahami dasar infrastruktur IT & Network.\n2. Pelajari Framework Audit (COBIT, ITIL).\n3. Pahami standar keamanan (ISO 27001).\n4. Latih skill reporting & risk assessment.\n5. Sertifikasi: CISA." },
      { role: "IT Risk Manager", roadmap: "1. Pahami Manajemen Risiko (ISO 31000).\n2. Analisis Business Continuity Plan (BCP).\n3. Identifikasi ancaman siber.\n4. Sertifikasi: CRISC." },
      { role: "IT Compliance Analyst", roadmap: "1. Pelajari regulasi IT (UU PDP, GDPR).\n2. Pahami kebijakan internal.\n3. Latih skill audit kepatuhan.\n4. Audit lisensi software." },
      { role: "Information Security Manager", roadmap: "1. Kuasai Network Security.\n2. Manajemen Insiden Keamanan.\n3. Penetration Testing basics.\n4. Sertifikasi: CISM/CISSP." },
      { role: "IT Governance Specialist", roadmap: "1. Kuasai Strategic Alignment IT & Bisnis.\n2. Framework Tata Kelola (COBIT 2019).\n3. Performance Measurement (KPI).\n4. Resource Optimization." },
      { role: "Data Privacy Officer", roadmap: "1. Hukum Privasi Data & Etika.\n2. Data Mapping & Flow Analysis.\n3. Privacy Impact Assessment (PIA).\n4. Manajemen Insiden Kebocoran." },
      { role: "IT Quality Assurance", roadmap: "1. Standar Kualitas Software (ISO 9001).\n2. Testing Methodologies (SIT/UAT).\n3. Defect Tracking.\n4. Process Improvement." },
      { role: "System Analyst (Governance)", roadmap: "1. Dokumentasi Sistem & Prosedur.\n2. Analisis Kebutuhan Bisnis.\n3. Evaluasi Kontrol Aplikasi.\n4. Business Process Modeling." },
      { role: "IT Service Manager", roadmap: "1. Manajemen Layanan IT (ITSM).\n2. Service Level Agreement (SLA).\n3. Incident Management.\n4. Sertifikasi: ITIL Foundation." },
      { role: "CIO (Future Goal)", roadmap: "1. Kepemimpinan Strategis.\n2. Manajemen Anggaran IT.\n3. Inovasi Digital.\n4. Pengelolaan Stakeholder C-Level." }
    ]
  },
  "Enterprise System": {
    description: "Fokus studi ini membekali mahasiswa dalam merancang, mengembangkan, dan mengelola sistem informasi terintegrasi di perusahaan. Dengan sistem yang terhubung, manajemen data menjadi lebih efisien untuk mendukung pencapaian tujuan bisnis.",
    careers: [
      { role: "ERP Consultant", roadmap: "1. Pahami Proses Bisnis (Procure-to-Pay).\n2. Pelajari Modul ERP (SAP/Odoo).\n3. Skill Konfigurasi.\n4. UAT & Training User." },
      { role: "System Analyst", roadmap: "1. Requirement Gathering.\n2. UML & System Modeling.\n3. Database Design (ERD).\n4. Komunikasi User & Developer." },
      { role: "Backend Developer", roadmap: "1. Bahasa Pemrograman (Java/Go/C#).\n2. RESTful API.\n3. Database Management (SQL).\n4. Server (Docker/AWS)." },
      { role: "Solution Architect", roadmap: "1. Design Patterns.\n2. Cloud Architecture (Azure/AWS).\n3. Integrasi Sistem (API Gateway).\n4. Scalability Design." },
      { role: "Business Analyst", roadmap: "1. Gap Analysis.\n2. Dokumentasi BRD/FSD.\n3. Stakeholder Management.\n4. Dasar SQL." },
      { role: "Database Administrator", roadmap: "1. Advanced SQL.\n2. Backup & Recovery Strategy.\n3. Database Security.\n4. High Availability Clustering." },
      { role: "Supply Chain Analyst", roadmap: "1. Konsep Rantai Pasok.\n2. Software SCM.\n3. Logistik & Inventory.\n4. Analisis Efisiensi." },
      { role: "CRM Specialist", roadmap: "1. Manajemen Hubungan Pelanggan.\n2. Platform CRM (Salesforce/HubSpot).\n3. Automasi Sales.\n4. Analisis Data Pelanggan." },
      { role: "Integration Specialist", roadmap: "1. Webhooks & API.\n2. ETL Tools (Talend).\n3. Message Brokers (Kafka).\n4. Data Sync patterns." },
      { role: "IT Project Manager", roadmap: "1. Metodologi Agile/Scrum.\n2. Tools Manajemen (Jira).\n3. Manajemen Risiko Proyek.\n4. Budgeting Control." }
    ]
  },
  "Business Intelligence": {
    description: "Mahasiswa belajar mengelola data dalam jumlah besar untuk menghasilkan informasi dan pengetahuan baru. Fokus studi ini mencakup pengambilan, pengolahan, hingga visualisasi data agar dapat membantu organisasi dalam membuat keputusan strategis.",
    careers: [
      { role: "Data Analyst", roadmap: "1. Excel Expert.\n2. SQL Data Extraction.\n3. Visualisasi (Tableau/PowerBI).\n4. Storytelling with Data." },
      { role: "Data Scientist", roadmap: "1. Python/R.\n2. Statistik & Aljabar Linear.\n3. Machine Learning Algorithms.\n4. Model Deployment." },
      { role: "BI Developer", roadmap: "1. Data Warehousing (Star Schema).\n2. ETL Processes.\n3. SQL Server Analysis (SSAS).\n4. Dashboard Optimization." },
      { role: "Data Engineer", roadmap: "1. Big Data Tools (Hadoop/Spark).\n2. Cloud Data Engineering.\n3. Pipeline Orchestration.\n4. Database NoSQL." },
      { role: "Machine Learning Engineer", roadmap: "1. Deep Learning (TensorFlow).\n2. Model Training.\n3. MLOps.\n4. API Deployment." },
      { role: "BI Analyst", roadmap: "1. Pemahaman KPI Bisnis.\n2. Analisis Tren Pasar.\n3. Reporting Automation.\n4. Prescriptive Analytics." },
      { role: "Data Visualization Spec", roadmap: "1. Prinsip Desain Visual.\n2. UX Dashboard.\n3. Tools Interaktif (D3.js).\n4. Penyederhanaan Data." },
      { role: "Marketing Analyst", roadmap: "1. Digital Marketing Metrics.\n2. Google Analytics.\n3. Customer Segmentation.\n4. A/B Testing." },
      { role: "Big Data Architect", roadmap: "1. Infrastruktur Data.\n2. Data Lake vs Warehouse.\n3. Data Governance.\n4. Cloud Scalability." },
      { role: "Database Manager", roadmap: "1. Tata Kelola Data.\n2. Master Data Management.\n3. Data Quality Assurance.\n4. Retensi Data." }
    ]
  }
};

// Legacy data for backward compatibility
export const PRADITA_DATA: Record<InterestType, {
  desc: string;
  matkul: string[];
  role: string;
  additionalCourses?: { name: string; desc: string }[];
}> = {
  "IS Governance": {
    desc: "Jalur ini fokus pada Audit SI, Manajemen Risiko, dan Tata Kelola IT. Cocok jika kamu teliti dan suka analisa kepatuhan.",
    matkul: ["Audit Sistem Informasi", "Manajemen Risiko TI", "Tata Kelola TI", "Etika Profesi"],
    role: "IT Auditor",
    additionalCourses: [
      { name: "Audit Sistem Informasi", desc: "Mempelajari teknik audit dan kontrol sistem informasi organisasi." },
      { name: "Manajemen Risiko TI", desc: "Mengidentifikasi, menganalisis, dan mitigasi risiko teknologi informasi." }
    ]
  },
  "Enterprise System": {
    desc: "Jalur ini fokus pada integrasi sistem bisnis (ERP), SCM, dan CRM. Cocok jika kamu suka logika bisnis dan coding backend.",
    matkul: ["Perencanaan Sumber Daya Perusahaan (ERP)", "Manajemen Rantai Pasok (SCM)", "Analisis & Perancangan Sistem"],
    role: "ERP Consultant",
    additionalCourses: [
      { name: "Perencanaan Sumber Daya Perusahaan (ERP)", desc: "Mempelajari implementasi dan kustomisasi sistem ERP seperti SAP dan Oracle." }
    ]
  },
  "Business Intelligence": {
    desc: "Jalur ini fokus pada Big Data, Data Mining, dan Visualisasi. Cocok jika kamu suka statistik dan menemukan pola data.",
    matkul: ["Data Mining", "Data Warehouse", "Visualisasi Data", "Sistem Penunjang Keputusan", "Analisis Perilaku", "Parallel Scientific Computing"],
    role: "Data Analyst",
    additionalCourses: [
      { name: "Analisis Perilaku", desc: "Mempelajari metode analisis perilaku konsumen untuk prediksi pasar dan strategi produk." },
      { name: "Parallel Scientific Computing", desc: "Teknik komputasi paralel untuk pemrosesan data skala besar." }
    ]
  }
};

export const KEYWORDS = {
  INTEREST: ['peminatan', 'jelaskan', 'minat', 'interest', 'fokus'],
  ROADMAP: ['roadmap', 'belajar', 'studi', 'kurikulum', 'karir', 'career', 'rencana'],
  PORTFOLIO: ['portofolio', 'proyek', 'contoh', 'project', 'portfolio', 'ide']
} as const;

export const DEFAULT_CHIPS = ["Jelaskan Peminatanku", "Roadmap Karir", "Ide Portofolio"] as const;

export const INTEREST_OPTIONS: InterestType[] = ["IS Governance", "Enterprise System", "Business Intelligence"];
