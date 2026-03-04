# 🧠 Comarai Skills — 19 AI Agent Skills cho Doanh nghiệp Việt Nam

> Bộ skills chuyên sâu giúp AI agents hiểu domain của bạn: XNK, Trading, Marketing Automation, Agency Operations.

---

## 📌 Vấn Đề

AI agents (Gemini, GPT, Claude...) rất thông minh — nhưng **thiếu domain knowledge cụ thể**:

- Hỏi viết cold email cho buyer Nhật? → Câu trả lời generic, không có Incoterms, không biết CPTPP
- Hỏi review EA MQL5? → Thiếu checklist cụ thể (SL/TP, IsNewBar, Magic Number)
- Hỏi tạo proposal cho AI agency? → Không biết pricing VN, package structure, SOW template
- Hỏi setup n8n workflow? → Không biết error handling patterns, credential management

**AI biết rộng nhưng không sâu**. Skills giúp bù đắp lỗ hổng này.

---

## 💡 Giải Pháp

**19 skills chuyên sâu**, mỗi skill 500+ dòng, bao gồm:

- **Frameworks** có tên rõ ràng (SPEAR, TRADE, PRISM, DICE...)
- **Templates YAML** copy-paste ready
- **Checklists** cho từng quy trình
- **Ví dụ thực tế** Vietnamese context (XNK, BĐS, Forex...)
- **Vietnamese triggers** — AI hiểu khi bạn nói tiếng Việt

---

## 📚 Danh Mục Skills

### 🏢 Core Business
| Skill | Mô tả | Dòng |
|-------|-------|------|
| `comarai-agent-engineering` | Thiết kế & vận hành AI agent systems | 850+ |
| `comarai-agency-blueprint` | Xây agency AI automation: model, pricing, SOP | 590+ |
| `comarai-n8n-mastery` | n8n workflows production-grade | 710+ |
| `comarai-lead-hunter` | Tìm & qualify B2B leads | 550+ |
| `comarai-trading-engine` | Phân tích trading, journal, EA review | 650+ |

### 📝 Marketing & Content
| Skill | Mô tả | Dòng |
|-------|-------|------|
| `comarai-content-engine` | Content strategy multi-platform | 580+ |
| `comarai-copywriting` | Frameworks viết copy chuyển đổi | 570+ |
| `comarai-email-engine` | Cold email + nurture + deliverability | 570+ |
| `comarai-automation-strategy` | Audit & design automation workflows | 530+ |
| `comarai-code-reviewer` | Code review SPEAR framework | 550+ |

### 💼 Business Operations
| Skill | Mô tả | Dòng |
|-------|-------|------|
| `comarai-prospect-researcher` | Deep research prospect trước outreach | 490+ |
| `comarai-proposal-gen` | Tạo proposal & báo giá chuyên nghiệp | 500+ |
| `comarai-competitive-intel` | Phân tích đối thủ PRISM framework | 500+ |
| `comarai-vendor-negotiation` | Đàm phán xưởng/supplier TRADE framework | 500+ |
| `comarai-supply-chain` | Chuỗi cung ứng XNK: logistics, QC, customs | 500+ |

### 🔧 Utilities
| Skill | Mô tả | Dòng |
|-------|-------|------|
| `comarai-real-estate` | Quản lý BĐS: định giá, Airbnb, renovation | 500+ |
| `comarai-humanizer` | Viết lại text AI thành tự nhiên | 500+ |
| `comarai-technical-docs` | README, API docs, SOP, changelog | 500+ |
| `comarai-data-analyst` | Phân tích data: cleaning, viz, reporting | 500+ |

---

## 🚀 Cách Sử Dụng

### Tích hợp vào AI IDE (Gemini Code Assist / Antigravity / Cursor)

```bash
# Clone repo
git clone https://github.com/hungpixi/comarai-skills.git

# Copy skills vào IDE skills directory
# Antigravity:
cp -r comarai-skills/skills/* ~/.gemini/antigravity/skills/

# Hoặc link trực tiếp
ln -s /path/to/comarai-skills/skills ~/.gemini/antigravity/skills
```

### Cách AI sử dụng skills

1. **Auto-detect**: AI đọc `description` trong frontmatter → quyết định có cần load không
2. **Dùng Nhanh**: Bảng ở đầu mỗi skill → AI trả lời ngay câu hỏi đơn giản
3. **Deep dive**: AI chỉ đọc section liên quan → không tốn context vào phần không cần

### Ví dụ

```
Bạn: "Review EA MQL5 của tôi"
→ AI load comarai-code-reviewer → đọc section MQL5 EA Checklist → SPEAR score

Bạn: "Tạo proposal chatbot cho công ty ABC" 
→ AI load comarai-proposal-gen → discovery questions → SOW template → pricing

Bạn: "Đàm phán giá với xưởng ở Quảng Châu"
→ AI load comarai-vendor-negotiation → BATNA analysis → counter-offer scripts
```

---

## 🧪 Tư Duy Thiết Kế

### Tại sao 19 skills, không phải 43?

Ban đầu có 43 skills từ nhiều nguồn — nhưng:
- **8 cặp trùng lặp** (cold-email + email-marketing → gộp thành email-engine)
- **Nhiều skills chung chung** (không có VN context, ví dụ generic)
- **Thiếu actionable** (lý thuyết nhiều, template ít)

→ Gộp 43 → 19 skills. Mỗi skill **chuyên sâu hơn, actionable hơn**.

### Context Efficiency

Mỗi skill thiết kế theo nguyên tắc:
- **Frontmatter** có `vi_triggers` → AI matching nhanh không cần đọc full file
- **Bảng "Dùng Nhanh"** → 80% câu hỏi giải quyết ngay ở đây
- **Sections modular** → AI đọc đúng section cần, không load hết 500+ dòng
- **YAML templates** → copy-paste ready, không cần interpret

### Vietnamese-First

- Triggers bằng tiếng Việt ("viết cold email", "phân tích đối thủ")
- Pricing bằng VND (5-100 triệu, không chỉ USD)
- Ví dụ XNK VN↔Nhật/Trung
- FTA coverage: CPTPP, EVFTA, RCEP
- Cultural negotiation guides

---

## 📁 Cấu Trúc Mỗi Skill

```
comarai-[skill-name]/
├── SKILL.md       ← Nội dung chính (500+ dòng)
├── _meta.json     ← Metadata (version, author)
└── README.md      ← Mô tả ngắn
```

### SKILL.md Format

```yaml
---
name: comarai-[name]
description: > 
  [Mô tả ngắn + use cases + triggers]
metadata:
  vi_triggers: [list tiếng Việt]
  author: "Comarai.com"
  version: "2.0.0"
---

## Dùng Nhanh          ← Quick reference table
## [Section 1]          ← Theory + framework
## [Section 2]          ← Templates + checklists
## [Section N]          ← Examples
```

---

## 🤝 Contributing

Skills được thiết kế mở — bạn có thể:

1. **Fork** repo và thêm skills cho domain của bạn
2. **PR** cải tiến skills hiện có
3. **Issues** đề xuất skills mới

### Yêu cầu skill mới:
- Tối thiểu 300 dòng
- Có frontmatter với `vi_triggers`
- Có bảng "Dùng Nhanh"
- Có ít nhất 1 ví dụ thực tế
- Templates ở format YAML

---

## 📄 License

MIT License — tự do sử dụng, chỉnh sửa, phân phối.

---

## 👤 Tác Giả

**Comarai** — AI Automation Agency cho doanh nghiệp Việt Nam

---

## 🚀 Bạn muốn AI Agent System tương tự?

| Bạn cần | Chúng tôi đã làm ✅ |
|---------|---------------------|
| AI agent chạy 24/7 tìm khách | ✅ Em Sale — Lead Hunter |
| Bot viết content tự động | ✅ Em Content — Content Engine |
| Hệ thống email outreach | ✅ Email Engine + n8n Automation |
| Trading bot monitoring | ✅ Em Trade — Signal Dashboard |
| Automation quy trình nội bộ | ✅ n8n Mastery + Automation Strategy |

<p align="center">
  <a href="https://comarai.com"><strong>🌐 Yêu cầu Demo</strong></a> · 
  <a href="https://zalo.me/0834422439"><strong>💬 Chat Zalo</strong></a> · 
  <a href="mailto:hungphamphunguyen@gmail.com"><strong>📧 Email</strong></a>
</p>

<p align="center">
  <strong>Comarai — 4 nhân viên AI, 1 founder</strong><br>
  Em Sale 🤝 Em Content ✍️ Em Marketing 📊 Em Trade 📈<br><br>
  <em>"Tôi không thuê thêm người. Tôi thuê AI."</em>
</p>
