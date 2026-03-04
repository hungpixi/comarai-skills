---
name: comarai-agency-blueprint
description: >
  Blueprint xây dựng AI Automation Agency từ 0 đến profitable: business model, service catalog,
  pricing strategy, sales process, delivery SOP, tech stack, client retention, scaling.
  Thiết kế cho mô hình Comarai: 1 founder + fleet AI agents.
  Dùng khi: "xây dựng AI agency", "tính pricing cho dịch vụ AI", "viết proposal cho khách",
  "setup delivery workflow", "scaling agency", "unit economics".
metadata:
  vi_triggers:
    - "xây dựng AI agency"
    - "tính pricing cho dịch vụ AI"
    - "viết proposal cho khách"
    - "delivery workflow"
    - "scaling agency"
    - "unit economics"
    - "tìm khách cho agency"
    - "service catalog"
  author: "Comarai.com"
  version: "2.0.0"
  based_on: "Comarai original"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Tính pricing cho dự án chatbot AI"* | Pricing model + quote template |
| *"Viết proposal cho khách cần automation quy trình"* | Full proposal từ problem → solution → timeline → pricing |
| *"Tôi có 1 khách muốn AI agent, nên charge bao nhiêu?"* | Scope → effort estimate → pricing tiers |
| *"Mô hình kinh doanh agency tôi nên chạy thế nào?"* | Business model canvas + unit economics |
| *"Làm sao retain client lâu dài?"* | Retention playbook + MRR strategies |

---

# AI Agency Blueprint — Xây Dựng Từ 0 Đến Profitable

> Comarai Model: 1 Founder + AI Agents = Agency chạy lean, margin cao.

---

## 1. Business Model — Mô Hình Kinh Doanh

### 1.1 Revenue Streams

```
┌────────────────────────────────────────────────┐
│              REVENUE ARCHITECTURE              │
├────────────────────────────────────────────────┤
│                                                │
│  PROJECT-BASED (50% revenue target)            │
│  ├── AI Chatbot / Agent build (10-50tr)        │
│  ├── Automation workflow (5-30tr)              │
│  └── Website + AI integration (15-80tr)        │
│                                                │
│  RETAINER/MRR (30% revenue target)             │
│  ├── Monthly maintenance (3-10tr/tháng)        │
│  ├── Agent hosting + operations (2-5tr)        │
│  └── Data/reporting dashboards (5-15tr)        │
│                                                │
│  PERFORMANCE-BASED (20% revenue target)        │
│  ├── Revenue share (3-10% of revenue driven)   │
│  ├── Lead gen (per qualified lead)             │
│  └── Cost savings share (20% of savings Y1)    │
│                                                │
└────────────────────────────────────────────────┘
```

### 1.2 Service Catalog — Comarai

| Dịch vụ | Mô tả | Giá | Timeline |
|---------|-------|-----|---------|
| **AI Chatbot** | Chatbot cho website/Zalo/Telegram | 10-30 triệu | 2-4 tuần |
| **Automation Workflow** | n8n/Zapier/Make workflows | 5-20 triệu | 1-3 tuần |
| **AI Agent Custom** | Agent chuyên biệt (sales, content, trading) | 20-50 triệu | 3-6 tuần |
| **Data Dashboard** | Reporting + visualization + AI insights | 15-40 triệu | 2-4 tuần |
| **Monthly Retainer** | Maintenance + optimization + support | 3-10 triệu/tháng | Ongoing |
| **AI Audit** | Đánh giá cơ hội AI trong doanh nghiệp | 5-15 triệu | 3-5 ngày |
| **Training** | Workshop AI/Automation cho team | 3-8 triệu/session | 1 ngày |

### 1.3 Positioning — Đội Ngũ AI Comarai

```yaml
comarai_team:
  em_sale:
    vai_tro: "Tìm kiếm & tiếp cận khách hàng"
    cong_cu: ["LinkedIn", "Tendata", "WhatsApp", "Zalo"]
    output: "Leads qualified + outreach campaigns"
    
  em_content:
    vai_tro: "Sản xuất nội dung đa kênh"
    cong_cu: ["TikTok", "Facebook", "LinkedIn", "Canva"]
    output: "Content calendar + scripts + scheduled posts"
    
  em_marketing:
    vai_tro: "Chiến lược & phân tích marketing"
    cong_cu: ["Google Analytics", "Ads", "SEO tools"]
    output: "Campaign strategy + performance reports"
    
  em_trade:
    vai_tro: "Monitor & phân tích trading signals"
    cong_cu: ["MT5", "Telegram", "Python", "MQL5"]
    output: "Signal alerts + trade journal + performance reports"
```

---

## 2. Pricing Strategy

### 2.1 Value-Based Pricing Framework

```
KHÔNG charge theo giờ. LUÔN charge theo giá trị.

PRICING = Impact × Complexity × Timeline
```

**Impact Assessment:**
- Tiết kiệm bao nhiêu giờ/tháng? → × lương trung bình/giờ
- Giảm bao nhiêu % sai sót?
- Tăng bao nhiêu % revenue/leads?
- ROI client nhận được trong 6 tháng đầu?

**Quy tắc tính giá:**
1. Ước lượng: giá trị deliverable tạo ra trong 12 tháng
2. Charge 10-20% giá trị đó
3. Minimum project: 5 triệu (dưới mức này không worth effort)
4. Retainer minimum: 3 triệu/tháng

### 2.2 Pricing Tiers — Vietnamese Market

| Tier | Range (VND) | Phù hợp | Deliverables |
|------|------------|---------|-------------|
| **Starter** | 5-15 triệu | SME, solopreneur | 1 automation workflow + 1 tuần support |
| **Professional** | 15-40 triệu | Doanh nghiệp nhỏ | AI chatbot/agent + dashboard + 1 tháng support |
| **Enterprise** | 40-100 triệu+ | Doanh nghiệp vừa | Multi-agent system + integration + 3 tháng retainer |

### 2.3 Pricing Tiers — International (USD)

| Tier | Range (USD) | Target | Deliverables |
|------|------------|--------|-------------|
| **Starter** | $500-$2,000 | SMBs | Single workflow automation |
| **Growth** | $2,000-$8,000 | Growing companies | AI agent + integrations |
| **Scale** | $8,000-$25,000+ | Mid-market | Full automation suite + ongoing optimization |

### 2.4 Quote Template

```yaml
quote:
  client: "[Tên công ty]"
  project: "[Tên dự án]"
  ngay: "2026-03-04"
  
  scope:
    - item: "AI Chatbot Zalo + Website"
      chi_tiet: "Chatbot trả lời FAQ, thu thập lead, chuyển sale"
      gia: 15000000  # 15 triệu VND
      
    - item: "n8n Automation Workflow"
      chi_tiet: "Tự động gửi email response + CRM update"
      gia: 8000000   # 8 triệu
      
    - item: "Dashboard Báo Cáo"
      chi_tiet: "Google Sheets + Data Studio dashboard"
      gia: 7000000   # 7 triệu
  
  tong: 30000000     # 30 triệu
  giam_gia: 3000000  # -3 triệu (gói combo)
  gia_cuoi: 27000000 # 27 triệu
  
  thanh_toan:
    dot_1: "50% khi ký hợp đồng — 13.5 triệu"
    dot_2: "30% khi hoàn thành MVP — 8.1 triệu"
    dot_3: "20% khi bàn giao — 5.4 triệu"
  
  timeline: "3 tuần kể từ ngày ký"
  
  retainer:
    de_xuat: "Maintenance + optimization: 5 triệu/tháng"
    bao_gom: 
      - "Bug fix & monitoring"
      - "2 lần cải tiến/tháng"
      - "Báo cáo hiệu suất hàng tháng"
      - "Priority support (response <4h)"
```

---

## 3. Sales Process — Quy Trình Bán Hàng

### 3.1 Pipeline Stages

```
AWARENESS → INTEREST → DISCOVERY → PROPOSAL → NEGOTIATION → CLOSE → ONBOARD
    ↓           ↓          ↓           ↓           ↓          ↓         ↓
 Content    Inbound     30-min      Proposal    Giải đáp    Ký HĐ    Kickoff
 Outreach   Response    call        + demo      thắc mắc    Cọc 50%   meeting
```

### 3.2 Discovery Call Script (30 phút)

```
[5 phút] RAPPORT
"Chào anh/chị [Tên], cảm ơn đã dành thời gian. 
Trước khi bắt đầu, em muốn hiểu rõ situation bên anh/chị 
để xem bên em có thể giúp được gì."

[10 phút] DIAGNOSE
1. "Công ty đang hoạt động trong lĩnh vực gì ạ?"
2. "Đội ngũ bao nhiêu người?"
3. "Quy trình nào tốn nhiều thời gian nhất hàng ngày?"
4. "Đã thử tự động hóa chưa? Nếu rồi, kết quả thế nào?"
5. "Nếu quy trình này tự động, tiết kiệm bao nhiêu giờ/tháng?"
6. "BUDGET: Đã có kế hoạch ngân sách cho dự án này chưa?"

[10 phút] PRESENT SOLUTION
"Dựa trên những gì anh/chị chia sẻ, em thấy có thể giúp 
bằng [giải pháp]. Bên em vừa làm dự án tương tự cho 
[reference client], kết quả là [metric cụ thể].

Quy trình của em:
1. Audit quy trình hiện tại (2-3 ngày)
2. Thiết kế giải pháp + demo (1 tuần)
3. Build + test (2-3 tuần)
4. Bàn giao + training (2-3 ngày)

Em ước tính khoảng [range giá]. Em có thể gửi proposal 
chi tiết trong 2 ngày tới."

[5 phút] NEXT STEPS
"Bước tiếp, em sẽ:
1. Gửi proposal chi tiết qua email trong 48h
2. Anh/chị review và feedback
3. Nếu OK, mình ký hợp đồng và bắt đầu"
```

### 3.3 Objection Handling

| Phản đối | Cách xử lý |
|---------|-----------|
| "Đắt quá" | "Nếu tiết kiệm [X] giờ/tháng × [Y] tháng = [Z] triệu, ROI trong [N] tháng" |
| "Team nội bộ làm được" | "Bao lâu để team code + test + maintain? Cơ hội cost bỏ lỡ?" |
| "AI không đáng tin" | "Workflow có human-in-the-loop. Ví dụ: [case study cụ thể]" |
| "Chưa phải lúc" | "Mỗi tháng trì hoãn = [X] giờ thủ công × [Y] lương = [Z] mất" |
| "Cần hỏi sếp" | "Anh/chị cần em chuẩn bị slide/số liệu gì để trình sếp?" |
| "Đối thủ rẻ hơn" | "So sánh: chúng tôi include [maintenance, training, optimization], đối thủ charge riêng" |

---

## 4. Delivery SOP — Quy Trình Bàn Giao

### 4.1 Project Lifecycle

```
PHASE 1: KICKOFF (Ngày 1-2)
├── Kickoff meeting (30 phút)
├── Access setup (APIs, tools, accounts)
├── Audit quy trình hiện tại
└── Deliverable: Project Brief

PHASE 2: DESIGN (Ngày 3-7)
├── Solution architecture
├── Data flow mapping
├── Mockup/wireframe (for UI-facing)
├── Client review & approval
└── Deliverable: Technical Spec

PHASE 3: BUILD (Ngày 8-21)
├── Sprint 1: Core functionality
├── Sprint 2: Integration + edge cases
├── Internal QA
├── Demo sessions (2x)
└── Deliverable: Working MVP

PHASE 4: TEST & OPTIMIZE (Ngày 22-25)
├── Client UAT (User Acceptance Testing)
├── Bug fixes
├── Performance optimization
├── Load testing (if applicable)
└── Deliverable: Production-ready system

PHASE 5: LAUNCH & HANDOFF (Ngày 26-28)
├── Production deployment
├── Training session (1-2 giờ)
├── Documentation (user guide)
├── 7-day post-launch support
└── Deliverable: Handoff Package
```

### 4.2 Handoff Package Template

```
📦 Bàn Giao Dự Án: [Tên Dự Án]

1. 📋 Tài liệu
   - User Guide (hướng dẫn sử dụng)
   - Technical Documentation (cho dev maintenance)
   - FAQ / Troubleshooting guide

2. 🔗 Truy cập
   - [ ] Admin dashboard URL + credentials
   - [ ] API keys locations
   - [ ] Source code repo access
   - [ ] Monitoring dashboard

3. 📹 Video
   - Demo walkthrough (5-10 phút)
   - Admin training (15-30 phút)

4. 📞 Support
   - 7 ngày post-launch: priority support
   - Contact: Zalo/Email/Telegram
   - Retainer options cho maintenance ongoing
```

---

## 5. Unit Economics — Tính Toán Tài Chính

### 5.1 Cost Structure (Mô Hình Lean)

```yaml
chi_phi_hang_thang:
  # FIXED
  api_costs:
    gemini_api: 500000          # ~500K/tháng
    other_apis: 300000          # hosting, tools
  tools:
    n8n_cloud: 0                # Self-hosted trên free VPS
    domain_hosting: 200000      # Domain + hosting
    email_tools: 500000         # Outreach tools
  subtotal_fixed: 1500000       # 1.5 triệu/tháng
  
  # VARIABLE (per project)
  per_project:
    api_usage: 200000           # Tăng theo project
    third_party_tools: 300000   # Client-specific tools
    subcontractor: 0            # Làm bằng AI, không thuê ngoài
  subtotal_variable: 500000     # 500K/project
  
  # TOTAL MONTHLY (với 3 projects)
  total_monthly: 3000000        # 3 triệu
```

### 5.2 Revenue Model

```yaml
muc_tieu_thang:
  # PROJECTS
  projects:
    so_luong: 2                 # 2 projects/tháng
    gia_tb: 20000000            # 20 triệu trung bình
    tong: 40000000              # 40 triệu
  
  # RETAINERS  
  retainers:
    so_luong: 3                 # 3 clients retainer
    gia_tb: 5000000             # 5 triệu/tháng
    tong: 15000000              # 15 triệu
  
  # TOTAL
  doanh_thu: 55000000           # 55 triệu/tháng
  chi_phi: 3000000              # 3 triệu chi phí
  loi_nhuan: 52000000           # 52 triệu
  margin: "94.5%"               # Margin cực cao nhờ mô hình lean
```

### 5.3 Break-Even Analysis

```
Chi phí cố định: 1.5 triệu/tháng
Chi phí biến đổi: 500K/project
Giá trung bình: 20 triệu/project

Break-even = 1.5M / (20M - 0.5M) = ~0.08 projects
→ Chỉ cần 1 project nhỏ/tháng đã có lời!

Mục tiêu Year 1: 
  - Q1: 1 project/tháng = 20 triệu (build portfolio + case studies)
  - Q2: 2 projects/tháng + 1 retainer = 45 triệu
  - Q3: 2 projects/tháng + 3 retainers = 55 triệu
  - Q4: 3 projects/tháng + 5 retainers = 85 triệu
```

---

## 6. Tech Stack — Công Nghệ

### 6.1 Core Stack

| Layer | Tool | Chi phí | Ghi chú |
|-------|------|---------|---------|
| **LLM** | Gemini 2.5 Pro / Flash | Pay per use | Primary model |
| **Automation** | n8n (self-hosted) | Free | Core workflow engine |
| **Code** | Python, JavaScript, MQL5 | Free | Agent, scripts, bots |
| **Hosting** | Coolify / VPS | 0-500K/mo | Self-managed |
| **Database** | PostgreSQL, Redis | Free (shared) | Data layer |
| **Storage** | MinIO S3 (self-hosted) | Free | File storage |
| **CRM** | Google Sheets → Nocodb | Free | Client management |
| **Communication** | Telegram Bot API | Free | Agent interfaces |
| **IDE** | VS Code + Antigravity | Free | Development |
| **Design** | Canva, Figma | Free tier | UI/UX |

### 6.2 Tool Selection Matrix

Khi client cần tool mà bạn chưa dùng:

| Tiêu chí | Trọng số | Score 1-5 |
|---------|---------|----------|
| Đã có kinh nghiệm sử dụng | 30% | |
| API/Integration khả dụng | 25% | |
| Chi phí client phải trả | 20% | |
| Tài liệu + cộng đồng | 15% | |
| Scalability | 10% | |

**Quy tắc**: Score < 3.0 → đề xuất tool khác thay vì học mới mid-project.

---

## 7. Client Retention — Giữ Khách

### 7.1 Retention Playbook

```
THÁNG 1 (Honeymoon):
  - Weekly check-in calls (15 phút)
  - Gửi quick wins report cuối tuần
  - Xin feedback + testimonial

THÁNG 2-3 (Establish Value):
  - Bi-weekly calls
  - Monthly performance report
  - Propose 1 upsell opportunity

THÁNG 4-6 (Deepen):
  - Monthly calls
  - Quarterly business review (QBR)
  - Expand scope based on results

THÁNG 7-12 (Compound):
  - Monthly calls + quarterly QBR
  - Annual renewal negotiation (tháng 10)
  - Case study development
  - Referral request
```

### 7.2 Monthly Report Template (Gửi Khách)

```
══════════════════════════════════════
  📊 BÁO CÁO HÀNG THÁNG — [Tháng/Năm]
  [Tên Công Ty Khách]
══════════════════════════════════════

🎯 TÓM TẮT
  Hệ thống AI đã xử lý: [X] tasks
  Thời gian tiết kiệm: [Y] giờ (~Z triệu VND)
  Tỉ lệ chính xác: [W%]
  Uptime: [99.X%]

📈 THỐNG KÊ CHI TIẾT
  [Metrics cụ thể theo dự án]
  
💡 CẢI TIẾN ĐÃ LÀM
  1. [Cải tiến 1 — impact]
  2. [Cải tiến 2 — impact]

🔮 ĐỀ XUẤT THÁNG SAU
  1. [Cơ hội optimization]
  2. [Feature mới có thể thêm]

📞 CẦN TỪ KHÁCH
  - [Action items nếu có]
  
═════════════════════════════════════
  Comarai.com — AI Automation Agency
  Zalo: [YOUR_PHONE]
═════════════════════════════════════
```

### 7.3 Upsell Matrix

| Nếu client mua... | Upsell tiếp... | Timing |
|-------------------|----------------|--------|
| AI Chatbot | + Automation workflow kết nối CRM | Tháng 2 |
| Automation Workflow | + Dashboard báo cáo | Tháng 2 |
| Dashboard | + AI analysis insights | Tháng 3 |
| Bất kỳ project | → Monthly retainer | Ngay khi bàn giao |
| Retainer 3 tháng | → Annual contract (giảm 15%) | Tháng 3 |

---

## 8. Scaling Playbook

### 8.1 Giai Đoạn Phát Triển

```
STAGE 1: SOLO (0-20 triệu/tháng)
  - 1 founder làm tất cả
  - AI agents hỗ trợ execution
  - Focus: build portfolio + case studies
  - Key metric: # projects completed

STAGE 2: ESTABLISHED (20-50 triệu/tháng)
  - 1 founder + 1 operator (part-time)
  - AI agents handle 70% execution
  - Focus: systemize delivery + retainers
  - Key metric: retainer MRR

STAGE 3: GROWTH (50-100 triệu/tháng)
  - 1 founder + 1-2 operators
  - Specialized service packages
  - Focus: sales automation + referral engine
  - Key metric: client LTV

STAGE 4: SCALE (100 triệu+/tháng)
  - Small team (3-5 người)
  - Productized services
  - Focus: brand + thought leadership
  - Key metric: revenue per head
```

### 8.2 Khi Nào Thuê Người?

| Signal | Action |
|--------|--------|
| Từ chối >30% leads vì quá tải | Thuê sales/account manager |
| Delivery consistently trễ deadline | Thuê technical operator |
| Support tickets overwhelm | Thuê support coordinator |
| Content/marketing bỏ bê | Thuê content creator (hoặc upgrade AI) |

**Quy tắc**: Thuê khi ROI rõ ràng — hire X → unlock Y revenue.

---

## 9. Legal & Contracts

### 9.1 Contract Essentials (Hợp Đồng)

```yaml
hop_dong_checklist:
  - scope_of_work: "Mô tả chi tiết deliverables"
  - timeline: "Milestone dates cụ thể"
  - pricing: "Tổng giá + điều khoản thanh toán (50/30/20)"
  - payment_terms: "Net 7 days / ngay khi milestone"
  - ip_ownership: "Client sở hữu output code/content sau thanh toán"
  - confidentiality: "NDA nếu access data nhạy cảm"
  - change_requests: "Mỗi thay đổi scope cần quote riêng"
  - warranty: "30 ngày fix bug miễn phí"
  - termination: "30 ngày notice, thanh toán work-to-date"
  - liability: "Cap tại giá trị hợp đồng"
```

### 9.2 Red Flags Client — Từ Chối Khi

- Budget không rõ ràng ("làm rẻ cho anh")
- Scope creep từ đầu ("thêm cái này nữa nhé")
- Comparison shopping thuần ("bên kia chỉ $X thôi")
- Technical requirements thay đổi liên tục
- Không có decision maker trong meetings
- Kỳ vọng không thực tế ("AI thay hết nhân viên trong 1 tuần")

---

## Ví Dụ — Proposal Thực Tế

```yaml
proposal:
  khach_hang: "ABC Trading Co., Ltd"
  du_an: "Tự động hóa quy trình báo giá XNK"
  
  van_de:
    - "Nhân viên tốn 3-4 giờ/ngày tra cứu giá, tạo báo giá thủ công"
    - "Sai sót 10-15% trong báo giá do nhập tay"
    - "Chậm response → mất deal"
  
  giai_phap:
    - "Chatbot Zalo nhận yêu cầu báo giá từ khách"
    - "n8n workflow tự động tra giá, tính phí, tạo PDF"
    - "Gửi báo giá tự động trong 5 phút (thay vì 4 giờ)"
  
  ket_qua_du_kien:
    - "Giảm 90% thời gian tạo báo giá"
    - "Giảm sai sót xuống <1%"
    - "Response time: 5 phút → tăng conversion rate 20-30%"
  
  gia: 25000000                # 25 triệu
  timeline: "3 tuần"
  roi:
    tiet_kiem: "3 giờ/ngày × 22 ngày × 80K/giờ = 5.28 triệu/tháng"
    payback: "4.7 tháng"
```

---

