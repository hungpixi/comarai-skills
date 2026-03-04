---
name: comarai-prospect-researcher
description: >
  Deep research prospect trước outreach: company analysis, decision maker profiling,
  opportunity mapping, competitive landscape. Tối ưu cho XNK VN + AI agency.
  Dùng khi: "research công ty này", "tìm hiểu prospect trước meeting",
  "analysis company trước pitch", "tìm pain point của prospect".
metadata:
  vi_triggers:
    - "research công ty này"
    - "tìm hiểu prospect"
    - "analysis company trước pitch"
    - "tìm pain point prospect"
    - "prepare cho meeting"
  author: "Comarai.com"
  version: "2.0.0"
  based_on: "Comarai original"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Research ABC Trading trước meeting ngày mai"* | Full company brief + talking points |
| *"Tìm hiểu Yuki Tanaka, Procurement Manager ở Sakura Home"* | Decision maker profile |
| *"Company X đang import gì từ VN? Volume?"* | Import analysis via web research |
| *"Prospect này có fit ICP không?"* | ICP scoring + recommendation |

---

# Prospect Researcher — Deep Intel Trước Outreach

> "Biết họ hơn họ biết mình" — Mỗi phút research = 10 phút outreach hiệu quả.

---

## 1. Research Framework — CRIME

```
C — COMPANY:    Công ty là ai, làm gì, quy mô
R — RELEVANCE:  Tại sao họ cần mình (pain signals)
I — INDIVIDUALS: Ai ra quyết định, personality, interests
M — MONEY:      Khả năng chi trả, budget cycle
E — ENTRY:      Cách tiếp cận tốt nhất
```

---

## 2. Company Research

### 2.1 Company Profile Template

```yaml
company_profile:
  # CƠ BẢN
  ten: ""
  website: ""
  nganh: ""
  thanh_lap: ""
  tru_so: ""
  
  # QUY MÔ
  nhan_vien: 0
  doanh_thu_uoc: ""
  status: ""                    # startup | growing | established | declining
  
  # SẢN PHẨM / DỊCH VỤ
  san_pham_chinh: []
  thi_truong: []                # domestic | export | both
  kenh_ban_hang: []
  
  # TECH STACK (nếu applicable)
  tech_signals:
    website_tech: ""            # WordPress, Shopify, custom
    tools_used: []              # CRM, automation tools
    hiring_tech: []             # Job postings mentioning tech
  
  # TRADING DATA (XNK)
  xnk_data:
    import_volume: ""
    export_volume: ""
    main_products: []
    main_partners: []
    hs_codes: []
    
  # TÍN HIỆU
  growth_signals: []            # Hiring, expansion, new products
  pain_signals: []              # Manual processes, complaints
  opportunity_signals: []       # Looking for vendors, RFP
  
  # CẠNH TRANH
  doi_thu: []
  the_manh_so_voi_dt: []
  diem_yeu_so_voi_dt: []
```

### 2.2 Research Sources — Ưu Tiên

| Source | Data | Reliability | Effort |
|--------|------|------------|--------|
| **Website** | Products, team, culture, tech | ★★★★★ | Low |
| **LinkedIn Company** | Size, growth, hiring | ★★★★★ | Low |
| **Tendata** | Import/export volume, partners | ★★★★★ | Medium |
| **Google News** | Recent events, funding, launches | ★★★★ | Low |
| **Job Postings** | Priorities, tech stack, growth | ★★★★ | Low |
| **Annual Reports** | Revenue, strategy, challenges | ★★★★★ | Medium |
| **Social Media** | Culture, events, engagement | ★★★ | Low |
| **Review Sites** | Customer satisfaction, complaints | ★★★★ | Low |
| **Patent/Trademark** | Innovation, IP, R&D focus | ★★★ | Medium |
| **Court Records** | Legal issues, disputes | ★★★★ | High |

### 2.3 Website Deep Dive Checklist

```
□ Homepage — Value prop, positioning, headlines
□ About/Team — Leadership, culture, history, mission
□ Products/Services — What they sell, pricing model
□ Blog/News — Topics, frequency, expertise areas
□ Careers — Openings = growth areas + pain points
□ Contact — Channels, locations, response style
□ Footer — Social links, certifications, awards
□ Tech — View source: platform, analytics, tools
□ SEO — Title tags, meta descriptions, keywords
```

---

## 3. Decision Maker Profiling

### 3.1 Individual Profile Template

```yaml
decision_maker:
  # CƠ BẢN
  ho_ten: ""
  chuc_vu: ""
  linkedin: ""
  email_guess: ""
  
  # BACKGROUND
  kinh_nghiem:
    current_role_since: ""
    previous_roles: []
    education: ""
    specialties: []
  
  # PERSONALITY SIGNALS
  personality:
    communication_style: ""     # formal | casual | data-driven
    content_interests: []       # Topics they engage with
    values: []                  # What they care about (inferred from posts)
    preferred_channel: ""       # LinkedIn | email | phone | WhatsApp
  
  # LINKEDIN ACTIVITY
  linkedin_activity:
    last_post: ""
    post_frequency: ""          # daily | weekly | monthly | inactive
    topics: []
    engagement_style: ""        # shares insights | reshares | lurker
    groups: []
    
  # CONNECTIONS
  mutual_connections: []
  influencers_followed: []
  industry_groups: []
  
  # BUYING SIGNALS
  buying_signals:
    new_in_role: false          # < 90 ngày = high priority
    posted_about_problem: false
    hiring_for_solution: false
    attended_relevant_event: false
    
  # OUTREACH NOTES
  personalization_hooks: []     # Cái gì dùng để personalize outreach
  conversation_starters: []    # Topics để bắt chuyện tự nhiên
  avoid: []                     # Topics/approaches nên tránh
```

### 3.2 Personalization Mining

**Tìm personalization hooks từ:**
```
LinkedIn Posts:
  → Họ nói gì? → Reference trong email
  → "Saw your post about [topic]..."

LinkedIn Articles:
  → Đọc và comment → Build rapport trước outreach

Job Changes:
  → "Congrats on the new role at [company]..."

Shared Connections:
  → "[Mutual] mentioned you're exploring..."

Company News:
  → "Read about [company]'s expansion into..."

Conference/Events:
  → "Great seeing [company] at [event]..."
```

---

## 4. Opportunity Mapping

### 4.1 Need Assessment

```yaml
opportunity_map:
  # PAIN POINTS PHÁT HIỆN
  confirmed_pains:
    - pain: "[Vấn đề cụ thể]"
      evidence: "[Cách biết: job posting, blog, review...]"
      severity: "high | medium | low"
      our_solution: "[Giải pháp Comarai/sản phẩm XNK]"
      
  # CƠ HỘI
  opportunities:
    - type: "replacement"       # Thay thế vendor/tool hiện tại
      detail: ""
    - type: "expansion"         # Công ty mở rộng, cần thêm
      detail: ""
    - type: "optimization"      # Cải thiện quy trình đang có
      detail: ""
      
  # RÀO CẢN
  barriers:
    - type: "budget"            # Ngân sách giới hạn
    - type: "internal"          # Đã có team nội bộ
    - type: "timing"            # Chưa phải lúc
    - type: "trust"             # Chưa biết mình
    
  # FIT SCORE
  icp_fit: 0              # /100 — dùng lead scoring từ lead-hunter
  priority: ""             # A | B | C
  next_action: ""
```

### 4.2 Competitive Landscape (cho prospect)

```yaml
prospect_competitive_view:
  prospect: "[Tên công ty prospect]"
  
  current_suppliers:
    - name: ""
      product: ""
      relationship_length: ""
      estimated_value: ""
      strengths: ""
      weaknesses: ""
  
  competitor_alternatives:
    - name: "[Đối thủ của mình]"
      offering: ""
      price_range: ""
      our_advantage: ""     # Tại sao chọn mình thay vì họ
  
  switching_cost: ""        # high | medium | low
  switching_trigger: ""     # Gì sẽ khiến họ đổi supplier?
```

---

## 5. Pre-Meeting Brief

### 5.1 1-Page Brief Template

```
════════════════════════════════════
  📋 PROSPECT BRIEF
  [Company Name] — [Date]
════════════════════════════════════

🏢 COMPANY SNAPSHOT
  Industry: [X]
  Size: [X] employees, ~$[X] revenue
  Location: [X]
  Website: [X]
  
👤 MEETING WITH
  Name: [X], [Title]
  In role since: [X]
  Background: [X]
  LinkedIn: [X]
  
🎯 WHY THEY'RE A FIT
  1. [Pain point 1 + evidence]
  2. [Pain point 2 + evidence]
  3. [Opportunity signal]
  
💡 TALKING POINTS
  1. "[Personalized opener — reference their post/news]"
  2. "[Pain-focused question]"
  3. "[Relevant case study or proof point]"
  
⚠️ WATCH OUT FOR
  - [Potential objection + how to handle]
  - [Topic to avoid]
  
🎯 MEETING GOAL
  Primary: [Book follow-up / Get requirements / Send quote]
  Stretch: [Get referral / Identify other opportunities]
  
📊 INTERNAL NOTES
  ICP Fit: [X]/100
  Deal potential: $[X]
  Priority: [A/B/C]
```

---

## 6. Research Workflow — Step by Step

### 6.1 Quick Research (15 phút)

```
FOR mỗi prospect mới:
  1. [2 phút] LinkedIn Company → size, industry, recent posts
  2. [3 phút] Website → products, about, careers
  3. [2 phút] LinkedIn Person → title, background, activity
  4. [3 phút] Google "[Company] news" → recent events
  5. [2 phút] Google "[Person name] [Company]" → press, talks
  6. [3 phút] Compile brief → talking points
```

### 6.2 Deep Research (45 phút)

```
FOR prospect tier A (high-value):
  QUICK RESEARCH (15 phút) +
  7. [5 phút] Tendata/import data → volume, partners
  8. [5 phút] Job postings → growth, tech, pain signals
  9. [5 phút] Competitor comparison → positioning
  10. [5 phút] Social media deep dive → culture, events
  11. [5 phút] Review sites → customer sentiment
  12. [5 phút] Compile full opportunity map
```

### 6.3 Research Automation (Agent)

```yaml
automated_research:
  trigger: "New lead added to CRM / agent instruction"
  
  step_1_basic:
    - "Scrape website → extract: industry, products, team"
    - "LinkedIn API → company size, followers"
    - "Google News API → recent news"
    result: "company_profile_basic"
    
  step_2_enrichment:
    - "Tendata → import/export data"
    - "Job boards → open positions"
    - "Tech lookup → website technology"
    result: "enriched_profile"
    
  step_3_analysis:
    - "AI analyze → pain points, opportunities"
    - "Score ICP fit"
    - "Generate talking points"
    result: "prospect_brief"
    
  step_4_deliver:
    - "Send brief to Telegram/Slack"
    - "Update CRM with research data"
    - "Queue for outreach if score > threshold"
```

---

## 7. Industry-Specific Research Guides

### 7.1 XNK — Research Buyer Nước Ngoài

```
FOCUS ĐẶC BIỆT:
  □ Import volume (Tendata): Bao nhiêu container/năm?
  □ Current suppliers: Từ đâu? VN đã có chưa?
  □ HS codes: Import mặt hàng gì chính xác?
  □ Certifications: ISO, BSCI, SMETA yêu cầu?
  □ Payment terms: L/C, T/T, D/A?
  □ Incoterms preference: FOB, CIF, DDP?
  □ Trade shows attended: Canton Fair, VietnamExpo?
  □ Regulatory: Yêu cầu đặc biệt (FDA, CE, JIS)?

TALKING POINTS XNK:
  → CPTPP/EVFTA tariff advantage
  → China+1 diversification
  → Factory audit availability
  → Sample lead time
```

### 7.2 AI Agency — Research SME Client

```
FOCUS ĐẶC BIỆT:
  □ Current tech stack: Tools/software đang dùng?
  □ Team structure: Bao nhiêu người? Departments?
  □ Manual processes: Job postings mention "data entry", "reporting"?
  □ Growth stage: Startup, growing, established?
  □ Previous automation: Đã thử Zapier/n8n chưa?
  □ Budget indicators: Funded? Revenue level?
  □ Decision timeline: Buying cycle nhanh hay chậm?
  □ Competitors: Đối thủ đã automate chưa? (FOMO factor)

TALKING POINTS AI AGENCY:
  → "X giờ/tuần tiết kiệm"
  → Industry-specific case study
  → ROI calculator
  → Demo recording
```

---

## 8. Research Quality Checklist

| Dimension | Got it? | Source |
|-----------|---------|-------|
| Company name + industry | □ | Website |
| Size (employees + revenue) | □ | LinkedIn + financials |
| Product/service overview | □ | Website |
| Decision maker identified | □ | LinkedIn |
| Decision maker background | □ | LinkedIn profile |
| Recent company news | □ | Google News |
| Pain points identified (2+) | □ | Jobs + posts + reviews |
| Personalization hooks (2+) | □ | LinkedIn posts + events |
| Competitive landscape | □ | Research + Tendata |
| ICP fit scored | □ | Lead scoring rubric |
| Talking points prepared | □ | Synthesis |
| Next action defined | □ | Strategy |

**Pass: 10/12+. Below 8 → need more research.**

---

## Ví Dụ — Research Report Thực Tế

```yaml
prospect_brief:
  company: "Sakura Home Co., Ltd"
  website: "sakura-home.co.jp"
  industry: "Home furnishings"
  employees: 85
  revenue: "~$15M"
  hq: "Tokyo, Japan"
  
  decision_maker:
    name: "Yuki Tanaka"
    title: "Procurement Manager"
    in_role: "8 months (since July 2025)"
    linkedin: "linkedin.com/in/yukitanaka"
    background: "15 years procurement, previously at Muji supplier"
    interests: "Supply chain diversification, sustainability"
    recent_post: "Shared article about China+1 strategy"
    language: "English (fluent), Japanese"
  
  import_data:
    volume: "200 FCL/year"
    products: "Plastic household items, storage, kitchen"
    current_suppliers: ["Guangzhou Plastics (60%)", "Ningbo Home (40%)"]
    current_origin: "100% China"
    hs_codes: ["3924.10", "3924.90"]
    trend: "Volume tăng 15% YoY"
    
  pain_signals:
    - "Posted about supply chain risk concentration in China"
    - "Job posting: 'Sourcing Coordinator — new supplier development'"
    - "Muji supplier background → values quality + sustainability"
    
  opportunity:
    - "China+1 → VN perfect alternative (CPTPP = 0% tariff)"
    - "New in role → eager to make impact, open to new suppliers"
    - "Quality-focused background → our factory certs match"
    
  talking_points:
    - "Saw your post about China+1 — we've helped 8 Japanese buyers add VN suppliers"
    - "CPTPP tariff: 0% for HS 3924 from VN vs 4-8% from China"
    - "Factory has BSCI + ISO 9001 — sample in 7 days"
    
  icp_fit: 82
  priority: "A"
  next_action: "LinkedIn connect → value message → email with pricing"
```

---

