---
name: comarai-lead-hunter
description: >
  Hệ thống tìm kiếm khách hàng B2B toàn diện: ICP definition, discovery qua LinkedIn/Tendata,
  enrichment, lead scoring và outreach sequence. Tối ưu cho XNK Việt Nam + AI agency clients.
  Dùng khi: "tìm khách XNK", "xây danh sách lead", "viết outreach LinkedIn",
  "tôi cần khách nước ngoài cho hàng [sản phẩm]", "phân loại lead nào nhắm trước".
metadata:
  vi_triggers:
    - "tìm khách XNK"
    - "xây danh sách lead"
    - "viết outreach LinkedIn"
    - "tôi cần khách nước ngoài"
    - "phân tích lead tiềm năng"
    - "ICP cho hàng xuất khẩu"
    - "outreach sequence"
    - "lead scoring"
  author: "Comarai.com"
  version: "2.0.0"
  based_on: "Comarai original"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Tìm khách nhập khẩu hàng nhựa gia dụng ở Nhật"* | ICP + discovery queries + outreach sequence |
| *"Viết LinkedIn message tiếp cận giám đốc mua hàng ở Đức"* | Personalized outreach script (EN) |
| *"Xếp hạng lead nào nên outreach trước: 5 công ty này"* | Lead scoring theo rubric 0-100 |
| *"Nhà máy VN bán hàng vỏ nệm, tìm khách EU"* | ICP builder cho EU market |
| *"Tìm khách cần AI automation cho SME VN"* | ICP cho dịch vụ Comarai |

---

# Lead Hunter Pro — Hệ Thống Tìm Kiếm Khách Hàng B2B

> Từ "chờ khách tự đến" → "chủ động tìm đúng người, nói đúng thứ, đúng lúc".

## Architecture

```
DEFINE ICP ──▶ DISCOVER ──▶ ENRICH ──▶ SCORE ──▶ SEGMENT ──▶ OUTREACH ──▶ CRM
    │              │            │          │          │            │          │
    ▼              ▼            ▼          ▼          ▼            ▼          ▼
 Persona      Multi-source  Email+Phone  ICP fit   Tier A/B/C  Sequences  Pipeline
 Builder      Web Research  Company Data  Intent    Campaigns   Templates  Tracking
```

---

## Phase 1: Define Ideal Customer Profile (ICP)

### 1.1 ICP cho XNK Việt Nam

```yaml
icp_xnk:
  # SẢN PHẨM
  san_pham: "[Loại hàng hóa — VD: nhựa gia dụng, vỏ nệm, hạt điều]"
  hs_code: "[Mã HS — VD: 3924.10 cho nhựa gia dụng]"
  
  # THỊ TRƯỜNG MỤC TIÊU
  thi_truong_uu_tien:
    tier_1: ["Japan", "South Korea"]        # Ưu tiên chất lượng, margin cao
    tier_2: ["Germany", "UK", "Australia"]  # Quan tâm compliance, thanh toán tốt
    tier_3: ["US", "Canada"]                # Volume lớn, cạnh tranh cao
  
  # BUYER PERSONA
  buyer:
    titles: ["Purchasing Manager", "Procurement Director", "Import Manager", "CEO (SME)"]
    company_size: ["10-50 nv", "50-200 nv"]
    revenue: ["$1M-$50M"]
    decision_authority: true
  
  # KÊNH TIẾP CẬN (xếp hạng hiệu quả)
  kenh:
    - name: "Tendata / Panjiva"
      type: "Dữ liệu hải quan"
      uu_diem: "Biết chính xác ai đang import, volume, nhà cung cấp"
      chi_phi: "$50-200/tháng"
    - name: "LinkedIn Sales Navigator"
      type: "Social selling"
      uu_diem: "Tìm đúng người ra quyết định"
      chi_phi: "$80/tháng"
    - name: "Made-in-China / Alibaba"
      type: "B2B marketplace"
      uu_diem: "Khách chủ động tìm supplier"
      chi_phi: "Free listing, paid promotion tùy chọn"
    - name: "Trade Shows"
      type: "Offline → online follow-up"
      uu_diem: "Lead rất nóng, đã thấy sản phẩm"
      chi_phi: "Booth fee (biết trước lịch)"
    - name: "Cold Email"
      type: "Email outreach" 
      uu_diem: "Scale được, cost thấp"
      chi_phi: "Email tool $20-50/tháng"
    - name: "WhatsApp"
      type: "Direct messaging"
      uu_diem: "Response rate cao ở châu Á/Trung Đông"
      chi_phi: "Free"
  
  # TÍN HIỆU TÍCH CỰC (lead nóng)
  tin_hieu_nong:
    - "Đang import hàng tương tự từ VN/TQ/ĐNA (data Tendata)"
    - "Đăng ký tham gia trade show VN (VietnamExpo, ProPak...)"
    - "Đang tìm supplier mới (job posting for procurement)"
    - "Vừa mở chi nhánh/warehouse ở châu Á"
    - "Post LinkedIn về sourcing/supply chain diversification"
```

### 1.2 ICP cho AI Agency (Comarai Clients)

```yaml
icp_ai_agency:
  san_pham: "AI Automation Services"
  
  thi_truong: ["VN", "SEA", "US (remote)"]
  
  buyer:
    titles: ["CEO", "CTO", "COO", "VP Operations", "Head of Innovation"]
    company_size: ["10-200 nv"]
    revenue: ["$500K-$20M"]
    
  pain_signals:
    - "Manual data entry → cần automation"
    - "Scaling operations nhưng không muốn hire thêm"
    - "Đang dùng Zapier/Make nhưng giới hạn"
    - "Muốn AI chatbot / customer support bot"
    - "Report generation mất quá nhiều giờ"
    
  anti_signals:
    - "Startup chưa có revenue"
    - "Đã có in-house AI team"
    - "Budget < $3,000"
```

---

## Phase 2: Multi-Source Discovery

### 2.1 Source Priority Matrix

| Source | Phù hợp cho | Cách tìm | Data Quality | Chi phí |
|--------|------------|----------|-------------|---------|
| **Tendata** | XNK — biết ai import gì | Search by HS code, country | ★★★★★ | $50-200/mo |
| **LinkedIn** | Mọi ngành | Sales Nav filters, Boolean search | ★★★★ | $80/mo |
| **Web Search** | Mọi ngành | Google operators | ★★★ | Free |
| **Trade Show Lists** | XNK, manufacturing | Speaker/exhibitor lists | ★★★★★ | Free |
| **GitHub** | Tech companies | Org pages, contributor profiles | ★★★★ | Free |
| **Industry Lists** | Targeted verticals | "Top 50 [industry] companies 2026" | ★★★★ | Free |
| **Job Boards** | Growing companies | Hiring signals | ★★★ | Free |

### 2.2 Discovery Search Templates

**Tìm buyers theo hàng hóa (XNK):**
```
Tendata: Search HS Code [3924.10] → Country [Japan] → Import volume > [1000 units/year]
→ Lọc theo: frequency (regular importers), origin (current suppliers from VN/TQ)
→ Export list: Company name, contact, volume, frequency
```

**Tìm decision makers (LinkedIn):**
```
LinkedIn Sales Navigator:
  Title: "Purchasing Manager" OR "Procurement" OR "Import Manager"
  Industry: "[target industry]"
  Company size: 51-200
  Geography: Japan
  Posted on LinkedIn: Past 30 days (active users)
  
Boolean search:
  "purchasing manager" AND "plastics" AND "Japan" site:linkedin.com/in
```

**Tìm companies đang tìm suppliers:**
```
Google:
  "[product type] supplier Vietnam" site:linkedin.com
  "[product] sourcing" "looking for" site:alibaba.com
  "[industry] companies" "importing from" "Vietnam" OR "Southeast Asia"
```

**Tìm companies by hiring signal:**
```
"[industry]" "hiring" "sourcing" OR "procurement" site:linkedin.com/jobs
```

### 2.3 Discovery Workflow

```
FOR mỗi search query:
  1. Chạy search (Tendata, LinkedIn, hoặc Web)
  2. Extract: tên công ty + URL + contact info
  3. Deduplicate với leads đã có
  4. Với mỗi công ty MỚI:
     a. Visit website → extract: industry, size, tech signals
     b. Search "[company] CEO/founder" → get decision maker
     c. Search "[company] import data" → financial signals
     d. Tạo lead record (schema Phase 4)
  5. Rate limit: 2-3 giây giữa các searches
```

---

## Phase 3: Enrichment Engine

### 3.1 Company Enrichment Checklist

- [ ] **Website** — Load homepage, value prop, products, tech stack
- [ ] **Employee Count** — LinkedIn company page, Crunchbase, "About"
- [ ] **Revenue Estimate** — Annual report, Crunchbase, Tendata import volume × average price
- [ ] **Import History** — Tendata: volume, frequency, current suppliers, HS codes
- [ ] **Recent News** — Funding, launches, executive changes, partnerships (90 ngày)
- [ ] **Pain Indicators** — Job postings mentioning problems, blog posts about challenges
- [ ] **Current Suppliers** — Tendata: ai đang supply cho họ? (competitor intel)

### 3.2 Contact Enrichment Checklist

- [ ] **Full Name** — First + Last từ LinkedIn
- [ ] **Title** — Verify đúng buyer persona
- [ ] **Email Pattern** — Detect pattern: first.last@, first@, flast@
- [ ] **LinkedIn URL** — Direct profile link
- [ ] **Recent Activity** — Post/share trong 30 ngày? (active = responsive)
- [ ] **Mutual Connections** — Ai trong network connect với họ?
- [ ] **Language** — English? Japanese? German? (cho personalization)
- [ ] **Content Interests** — Engage topics gì? (personalization hooks)

### 3.3 Email Pattern Detection

```
Common patterns (thử theo thứ tự):
1. first.last@company.com     (phổ biến nhất ~40%)
2. first@company.com          (startups ~25%)
3. firstlast@company.com      (~15%)
4. flast@company.com           (~10%)
5. first_last@company.com     (~5%)
6. last.first@company.com     (~3%, phổ biến ở Nhật)

Verification:
- Check company team page có email format không
- Tìm email trong GitHub commits
- Hunter.io hoặc Snov.io verification
- Search "[person name] email [company]"
```

---

## Phase 4: Lead Scoring Algorithm (0-100)

### 4.1 Company Score (0-30 điểm)

| Signal | Điểm | Cách check |
|--------|------|-----------|
| Industry match ICP chính xác | +10 | Compare với ICP config |
| Employee count trong sweet spot | +5 | LinkedIn/website |
| Revenue/import volume trong target | +5 | Crunchbase/Tendata |
| Nằm trong target geography | +3 | Website/LinkedIn |
| Đang import từ VN hoặc ĐNA | +4 | Tendata data |
| Chưa có supplier VN tốt | +3 | Research, Tendata |

### 4.2 Persona Score (0-20 điểm)

| Signal | Điểm | Cách check |
|--------|------|-----------|
| Title match buyer persona | +8 | LinkedIn |
| C-Suite hoặc VP level | +5 | LinkedIn title |
| Có decision authority | +4 | Title + company size |
| Active trên LinkedIn (post hàng tháng) | +3 | LinkedIn activity |

### 4.3 Intent Score (0-25 điểm)

| Signal | Điểm | Cách check |
|--------|------|-----------|
| Vừa post về sourcing/supply chain | +8 | LinkedIn/Twitter |
| Đang tuyển procurement/sourcing roles | +7 | Job boards |
| Tham gia trade show VN gần đây | +5 | Conference lists |
| Tìm kiếm supplier VN trên Alibaba/MIC | +3 | Search signals |
| Import volume đang tăng (Tendata) | +2 | Tendata trend |

### 4.4 Timing Score (0-15 điểm)

| Signal | Điểm | Cách check |
|--------|------|-----------|
| Mới nhận chức < 90 ngày | +5 | LinkedIn start date |
| Vừa mở thêm chi nhánh/warehouse | +4 | News |
| Cuối quý (budget flush) | +3 | Calendar |
| Đang mở rộng (hiring surge) | +3 | Job postings |

### 4.5 Tier Classification

| Tier | Score | Action |
|------|-------|--------|
| **A (Nóng)** | 80-100 | Outreach ngay trong 24h. Sequence 5-touch hyper-personalized |
| **B (Ấm)** | 60-79 | Nurture sequence trong 48h. 7-touch value-first campaign |
| **C (Mát)** | 40-59 | Newsletter + long-term nurture. Monthly value content |
| **Disqualify** | <40 | Không đầu tư thời gian |

---

## Phase 5: Outreach Sequence Templates

### 5.1 Template XNK — English (Tier A)

**Email 1 — Day 0 (The Hook):**
```
Subject: Sourcing [product] from Vietnam — [Company] opportunity

Hi [First Name],

Noticed [Company] has been importing [product category] from [current region].

We work with [factory type] in Vietnam that produces [specific product] —
same quality spec, typically 15-25% more cost-effective than [current source].

Recent shipment for [similar buyer type]: [specific metric — e.g., 40ft container, 
delivered CIF [port] in 28 days].

Worth a quick call to explore?

Best,
[Your name]
Comarai — Vietnam Sourcing Partner
```

**Email 2 — Day 3 (Proof):**
```
Subject: Re: Sourcing [product] from Vietnam

[First Name] — quick follow-up.

Here's what we did for [similar company in same region]:
- Product: [specific items]
- Volume: [quantity] units/month
- Price: [X%] below their previous supplier
- Lead time: [X] days CIF [port]

Happy to share factory profile + sample pricing if useful.

[Your name]
```

**Email 3 — Day 7 (Industry Angle):**
```
Subject: Vietnam sourcing trend in [industry]

[First Name],

[X%] of [industry] importers in [region] have added Vietnam suppliers 
in the past 2 years (source: Tendata). Main drivers:
- Cost advantage vs China (+15-25% savings)
- Tariff benefits (EVFTA for EU, CPTPP for Japan/Australia)
- Supply chain diversification post-COVID

We've helped [number] buyers set up reliable Vietnam supply chains this year.

Open to a 15-minute call this week?

[Your name]
```

**Email 4 — Day 14 (Breakup):**
```
Subject: Should I close your file?

[First Name],

I've reached out a few times — totally understand if timing isn't right.

If Vietnam sourcing becomes a priority, here's a free resource: 
[link to guide/calculator/comparison].

Just reply "yes" if you'd like to chat sometime.

[Your name]
```

### 5.2 Template AI Agency — Vietnamese (Tier A)

**Email 1 — Zalo/Email:**
```
Chào anh/chị [Tên],

Em thấy [Công ty] đang [observation cụ thể — tuyển nhân sự data entry / 
dùng Google Sheets quản lý / có nhiều quy trình thủ công].

Bên em vừa giúp 1 công ty [ngành tương tự] tự động hóa [quy trình cụ thể] 
— tiết kiệm [X giờ/tuần] và giảm [Y%] sai sót.

Anh/chị có 15 phút để em demo cách hoạt động không ạ?

[Tên]
Comarai — AI Automation cho doanh nghiệp
🌐 comarai.com
```

### 5.3 LinkedIn Warm-Up Sequence

```
Ngày 1: View profile (tạo notification)
Ngày 2: Like/comment bài post gần đây (genuine, không generic)
Ngày 4: Connection request:
  "Hi [Name] — been following [Company]'s work in [space]. 
  Particularly liked your take on [specific post topic]. 
  Would love to connect."

Ngày 7 (sau khi accepted): Value message (KHÔNG pitch):
  "[Name] — saw you mentioned [challenge] in your recent post.
  We put together [free resource] that addresses exactly that.
  Thought you might find it useful: [link]"

Ngày 14 (nếu engaged): Soft CTA:
  "By the way — we've been helping [similar companies] with 
  [relevant solution]. Happy to share our approach if useful.
  No pressure either way."
```

---

## Phase 6: Lead Record Schema & CRM

### 6.1 Lead Record

```json
{
  "id": "lead-001",
  "created": "2026-03-04",
  "source": "tendata-japan-import",
  
  "company": {
    "name": "Sakura Home Co., Ltd",
    "website": "https://sakura-home.co.jp",
    "industry": "Home furnishings",
    "employees": 85,
    "revenue_est": "$15M",
    "import_volume": "200 containers/year from China",
    "current_suppliers": ["Guangzhou Plastics Co.", "Ningbo Home"],
    "location": "Tokyo, Japan"
  },
  
  "contact": {
    "first_name": "Yuki",
    "last_name": "Tanaka",
    "title": "Procurement Manager",
    "email": "y.tanaka@sakura-home.co.jp",
    "linkedin": "https://linkedin.com/in/yukitanaka",
    "language": "English, Japanese"
  },
  
  "scoring": {
    "company_score": 25,
    "persona_score": 18,
    "intent_score": 15,
    "timing_score": 8,
    "total": 66,
    "tier": "B"
  },
  
  "enrichment": {
    "pain_signals": ["Looking for China+1 suppliers", "Posted about supply chain risk"],
    "import_data": "200 FCL/year, HS 3924, increasing 15% YoY",
    "competitor_usage": "Currently sourcing 100% from China",
    "content_interests": ["supply chain diversification", "sustainability"]
  },
  
  "outreach": {
    "status": "not_started",
    "sequence": "xnk-tier-b",
    "emails_sent": 0,
    "last_contacted": null,
    "next_action": "2026-03-05",
    "replies": [],
    "notes": "Focus on China+1 angle + CPTPP tariff benefits"
  },
  
  "pipeline": {
    "stage": "prospect",
    "deal_value": null,
    "probability": 0,
    "next_step": "Initial outreach via LinkedIn + Email"
  }
}
```

### 6.2 Pipeline Stages

```
PROSPECT → CONTACTED → REPLIED → MEETING → QUALIFIED → PROPOSAL → NEGOTIATION → SAMPLE → ORDER → CLOSED
                                                                                   ↑
                                                                          (XNK: thêm sample stage)
```

---

## Phase 7: Tracking & Optimization

### 7.1 Weekly Report Template

```markdown
# Lead Hunter Weekly — Tuần [DD/MM - DD/MM]

## Pipeline Summary
- Tổng leads: [N]
- Mới tuần này: [N]
- Tier A: [N] | Tier B: [N] | Tier C: [N]

## Outreach Performance
- Emails gửi: [N]
- Reply rate: [X%] (target: 5-15%)
- Meetings booked: [N]
- Pipeline value added: $[X]

## Top 3 Leads
1. [Company] — [Contact] — Score: [X] — [Tại sao nóng]
2. [Company] — [Contact] — Score: [X] — [Tại sao nóng]
3. [Company] — [Contact] — Score: [X] — [Tại sao nóng]

## Insights
- Query hiệu quả nhất: [query]
- Template hiệu quả nhất: [template]
- Recommendation: [action]
```

### 7.2 Daily Autopilot Routine

```
BUỔI SÁNG (agent chạy tự động):
  1. Chạy 3-5 discovery searches (rotate queries)
  2. Enrich leads chưa enriched từ hôm qua
  3. Score leads mới
  4. Gửi Day-N emails cho sequences đang chạy
  5. Check replies → flag cho human review
  6. Cập nhật pipeline stages
  7. Report: "Tìm X leads, gửi Y emails, Z replies"

HÀNG TUẦN:
  1. Review Tier C leads — có di chuyển lên B/A không?
  2. Clean dead leads (no response sau full sequence)
  3. Phân tích response rates theo template — A/B test
  4. Refresh ICP dựa trên closed deals
  5. Thêm search queries mới dựa trên wins
```

---

## Pro Tips — Kinh Nghiệm Thực Chiến

1. **Tendata > LinkedIn cho XNK** — Biết chính xác ai đang import gì, volume bao nhiêu. Lead quality cao hơn hẳn
2. **Cửa sổ 90 ngày** — Executives mới nhận chức mua gấp 10x so với người đã ổn định. Ưu tiên "new role" signals
3. **Hiring = Buying** — Đang tuyển cho position mà sản phẩm bạn thay thế? Họ có budget VÀ pain
4. **CPTPP & EVFTA** — Thuế suất ưu đãi là selling point cực mạnh khi tiếp cận Japan/EU buyers
5. **Personalize > Volume** — 20 email hyper-personalized > 200 generic. Luôn reference cái gì cụ thể về prospect
6. **Multi-Thread** — Đừng chỉ dựa vào 1 contact. Tìm 2-3 decision-makers và approach từ nhiều góc
7. **WhatsApp cho Asia** — Response rate trên WhatsApp cao hơn email 3-5x ở thị trường Đông Nam Á và Trung Đông
8. **Trade Show Follow-up** — 48h sau trade show là golden window. Sau 1 tuần họ đã quên bạn

---

