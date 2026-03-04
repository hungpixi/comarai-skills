---
name: comarai-automation-strategy
description: >
  Audit, prioritize và thiết kế automation cho business processes: process mapping,
  ICE-R scoring, workflow design, implementation, monitoring.
  Gộp automation-strategy + business-automation.
  Dùng khi: "audit quy trình", "nên automate cái nào trước", "thiết kế workflow",
  "ROI automation", "process mapping".
metadata:
  vi_triggers:
    - "audit quy trình"
    - "automate cái nào trước"
    - "thiết kế workflow automation"
    - "ROI automation"
    - "process mapping"
    - "nên tự động hóa gì"
  author: "Comarai.com"
  version: "2.0.0"
  based_on: "Comarai original"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Audit quy trình công ty XNK, tìm cơ hội automation"* | Process audit → opportunity matrix |
| *"Có 5 quy trình muốn automate, nên làm cái nào trước?"* | ICE-R scoring + roadmap |
| *"Thiết kế workflow automation cho quy trình báo giá"* | Process flow → n8n workflow design |
| *"Tính ROI cho dự án automation chatbot"* | ROI calculator + payback period |

---

# Automation Strategy — Từ Audit Đến Implementation

> "Đừng automate quy trình tệ. Fix quy trình trước, rồi mới automate."

---

## 1. Process Audit — Khảo Sát Quy Trình

### 1.1 Process Discovery Questions

Hỏi từng department/người:

```yaml
audit_questions:
  daily_work:
    - "Bạn làm gì đầu tiên mỗi sáng?"
    - "Công việc nào chiếm thời gian nhiều nhất?"
    - "Có công việc nào lặp lại mỗi ngày/tuần không?"
    
  pain_points:
    - "Công việc nào bạn ghét nhất?"
    - "Bao lâu mới xong [task cụ thể]?"
    - "Sai sót xảy ra thường xuyên ở đâu?"
    
  tools:
    - "Dùng tool gì cho công việc hàng ngày?"
    - "Data nhập ở đâu? Export ở đâu?"
    - "Copy-paste giữa bao nhiêu hệ thống?"
    
  wish_list:
    - "Nếu có magic wand, bạn muốn automate cái gì?"
    - "Tool nào bạn ước có mà chưa có?"
```

### 1.2 Process Mapping Template

```yaml
process_map:
  ten_quy_trinh: "Tạo và gửi báo giá XNK"
  department: "Sales"
  owner: "[Tên]"
  
  steps:
    - step: 1
      action: "Nhận yêu cầu báo giá qua email/Zalo"
      actor: "Sales"
      tool: "Email, Zalo"
      time_min: 5
      pain: "Low"
      
    - step: 2
      action: "Tra cứu giá FOB từ xưởng"
      actor: "Sales"
      tool: "Google Sheets, WhatsApp xưởng"
      time_min: 30
      pain: "High — chờ xưởng reply"
      
    - step: 3
      action: "Tính toán CIF/DDP (freight + insurance + customs)"
      actor: "Sales"
      tool: "Excel"
      time_min: 20
      pain: "Medium — dễ sai"
      
    - step: 4
      action: "Tạo PDF báo giá"
      actor: "Sales"
      tool: "Word template"
      time_min: 15
      pain: "Low"
      
    - step: 5
      action: "Gửi email cho khách"
      actor: "Sales"
      tool: "Email"
      time_min: 5
      pain: "Low"
  
  metrics:
    total_time: "75 phút/báo giá"
    frequency: "5-10 lần/ngày"
    error_rate: "10-15%"
    bottleneck: "Step 2 — chờ xưởng reply"
    
  automation_potential:
    step_2: "Auto-lookup từ price database (Google Sheets API)"
    step_3: "Auto-calculate với formula template"
    step_4: "Auto-generate PDF từ template"
    step_5: "Auto-send với personalized email"
    time_saved: "60 phút/báo giá → 5 phút"
```

---

## 2. Prioritization — ICE-R Framework

### 2.1 ICE-R Scoring (Impact × Confidence × Ease ÷ Risk)

| Tiêu chí | Score 1-5 | Mô tả |
|---------|----------|-------|
| **Impact** | | Ảnh hưởng đến doanh thu/hiệu quả |
| 5 | | Trực tiếp tăng revenue/giảm chi phí lớn |
| 3 | | Cải thiện đáng kể nhưng gián tiếp |
| 1 | | Cải thiện nhỏ, nice-to-have |
| **Confidence** | | Mức độ chắc chắn sẽ thành công |
| 5 | | Đã có proof/prototype/case study |
| 3 | | Khả thi nhưng chưa test |
| 1 | | Experimental, chưa chắc được |
| **Ease** | | Dễ implement |
| 5 | | Dưới 1 tuần, tools sẵn có |
| 3 | | 2-4 tuần, cần config/customization |
| 1 | | Trên 1 tháng, cần build custom |
| **Risk** | | Rủi ro nếu fail (chia, không nhân) |
| 5 | | Rủi ro cao (data loss, customer impact) |
| 3 | | Rủi ro trung bình |
| 1 | | Rủi ro thấp (internal only) |

**Score = (I × C × E) / R**

### 2.2 Priority Matrix

```yaml
priority_matrix:
  - process: "Tự động gửi báo giá"
    impact: 5
    confidence: 4
    ease: 4
    risk: 1
    score: 80    # (5×4×4) / 1
    priority: "P1 — Làm ngay"
    
  - process: "AI chatbot trả lời khách"
    impact: 4
    confidence: 3
    ease: 3
    risk: 2
    score: 18    # (4×3×3) / 2
    priority: "P2 — Sprint tới"
    
  - process: "Auto-generate weekly report"
    impact: 3
    confidence: 5
    ease: 5
    risk: 1
    score: 75
    priority: "P1 — Quick win"
```

### 2.3 Quick Win Identification

```
QUICK WINS (làm ngay, dưới 1 tuần):
  ✓ Score ICE-R > 50
  ✓ Ease ≥ 4
  ✓ Risk ≤ 2
  ✓ Không cần approval phức tạp
  
Ví dụ Quick Wins phổ biến:
  → Auto-reply email mới
  → Auto-generate report hàng tuần
  → Auto-push data giữa 2 sheets
  → Auto-notify Telegram khi có lead mới
  → Auto-backup files hàng ngày
```

---

## 3. Workflow Design — Thiết Kế Giải Pháp

### 3.1 Automation Tiers

| Tier | Complexity | Tools | Timeline | Cost |
|------|-----------|-------|---------|------|
| **Tier 1: Simple** | Rule-based, if-then | n8n, Zapier | 1-3 ngày | Free-500K |
| **Tier 2: Standard** | Multi-step, API integration | n8n, Python | 1-2 tuần | 1-5 triệu |
| **Tier 3: AI-Enhanced** | NLP, classification, generation | n8n + Gemini | 2-4 tuần | 5-20 triệu |
| **Tier 4: Agent** | Autonomous decision-making | Custom agent | 1-2 tháng | 20-50 triệu |

### 3.2 Workflow Design Template

```yaml
workflow_design:
  ten: "Auto Quotation Generator"
  tier: 2
  
  trigger:
    type: "Email/Zalo message chứa từ khóa báo giá"
    
  flow:
    1: "Parse yêu cầu (sản phẩm, số lượng, điều kiện)"
    2: "Lookup giá từ price database (Google Sheets)"
    3: "Calculate freight + insurance + customs"
    4: "Generate PDF từ template"
    5: "Send email + log vào CRM"
    6: "Notify sales team via Telegram"
    
  inputs:
    - "Yêu cầu khách (email/Zalo text)"
    - "Price database (Google Sheets)"
    - "Freight rate table"
    
  outputs:
    - "PDF báo giá"
    - "Email gửi khách"
    - "CRM record"
    - "Telegram notification"
    
  error_handling:
    - "Sản phẩm không có trong database → alert sales"
    - "Email parse fail → forward original email to sales"
    - "PDF gen fail → send text-only quote + retry"
    
  success_metrics:
    - "Time per quote: 75 phút → 5 phút"
    - "Error rate: 15% → 2%"
    - "Response time: 4 giờ → 15 phút"
```

### 3.3 Human-in-the-Loop Design

**Khi nào cần human review:**
- Financial transactions trên threshold ($X hoặc Y triệu)
- Customer-facing communications lần đầu
- Decisions không thể revert
- New patterns chưa từng gặp
- Anomaly detected

**Design pattern:**
```
[Automation] → [Decision Point] → Score > threshold → [Auto-execute]
                                → Score ≤ threshold → [Queue for Human]
                                                         ↓
                                                    [Human Review]
                                                         ↓
                                                 Approve → Execute
                                                 Reject → Log + Learn
```

---

## 4. ROI Calculator

### 4.1 Automation ROI Formula

```
ROI = (Annual Savings - Implementation Cost) / Implementation Cost × 100%

Savings Calculation:
  Time saved/task (phút) × Tasks/month × 12 × Hourly rate / 60
  + Error reduction × Average cost per error × Errors/month × 12
  + Revenue increase from faster response × Average deal value

VÍ DỤ — Auto Quotation:
  Time saved: 70 phút/task × 200 tasks/month × 12 = 16,800 phút/year
  = 280 giờ × 80K VND/giờ = 22.4 triệu VND/year
  
  Error reduction: 13% → 2% = 11% reduction
  = 22 errors/month × 500K/error = 11 triệu/month = 132 triệu/year
  
  Revenue from speed: 5% more deals × 200K avg deal = 10 deals × 200K
  = tùy deal size
  
  Implementation cost: 15 triệu (one-time)
  Maintenance: 3 triệu/year
  
  ROI Year 1: (154.4 - 18) / 18 × 100% = 758%
  Payback: 1.4 tháng
```

### 4.2 ROI Report Template

```
════════════════════════════════════
  📊 BÁO CÁO ROI AUTOMATION
  [Tên Quy Trình] — [Ngày]
════════════════════════════════════

💰 TIẾT KIỆM HÀNG THÁNG
  Thời gian: [X] giờ × [Y]₫/giờ = [Z]₫
  Sai sót giảm: [X] lỗi × [Y]₫/lỗi = [Z]₫
  Tổng tiết kiệm/tháng: [Z]₫

💵 CHI PHÍ
  Setup: [X]₫ (one-time)
  Maintenance: [X]₫/tháng
  API/tools: [X]₫/tháng

📈 ROI
  ROI Year 1: [X%]
  Payback period: [X] tháng
  NPV (3 năm): [X]₫

✅ KHUYẾN NGHỊ: [GO / NO-GO / NEED MORE DATA]
```

---

## 5. Implementation Roadmap

### 5.1 90-Day Automation Roadmap

```
TUẦN 1-2: AUDIT & PRIORITIZE
  □ Interview stakeholders
  □ Map top 10 processes
  □ Score ICE-R
  □ Select top 3 for automation
  □ Calculate ROI

TUẦN 3-4: QUICK WINS (2-3 simple automations)
  □ Implement Tier 1 automations
  □ Auto-email responses
  □ Auto-reporting
  □ Auto-notifications
  □ Measure impact

TUẦN 5-8: CORE AUTOMATION (1-2 standard workflows)
  □ Design workflow
  □ Build MVP
  □ Test with real data
  □ Deploy + monitor
  □ Train team

TUẦN 9-12: AI ENHANCEMENT + OPTIMIZATION
  □ Add AI layer to existing workflows
  □ Optimize based on data
  □ Expand to next priority processes
  □ Document & create SOPs
  □ Calculate actual ROI vs projected
```

### 5.2 Post-Implementation Monitoring

```yaml
monitoring:
  daily:
    - "Check workflow execution logs"
    - "Review any errors/failures"
    
  weekly:
    - "Compare metrics vs baseline"
    - "Identify optimization opportunities"
    - "User satisfaction check"
    
  monthly:
    - "ROI calculation vs projection"
    - "Process efficiency report"
    - "Expansion opportunities assessment"
    
  quarterly:
    - "Full audit of all automations"
    - "Retire obsolete workflows"
    - "Update priority matrix"
    - "Plan next quarter automations"
```

---

## 6. Common Automation Patterns — Comarai

### 6.1 Pattern Library

| Pattern | Trigger | Flow | Output |
|---------|---------|------|--------|
| **Lead Capture** | Form/email | Validate → Enrich → Score → Route | CRM entry + notification |
| **Quote Generator** | Customer request | Parse → Lookup → Calculate → PDF | Quote + email |
| **Report Generator** | Schedule | Query → Aggregate → Format → Send | Report + message |
| **Email Responder** | New email | Classify → Template → Send | Auto-reply |
| **Social Publisher** | Schedule | Content → Format → Post → Log | Published content |
| **Data Sync** | Event/schedule | Source → Transform → Destination | Synced data |
| **Alert System** | Condition met | Monitor → Detect → Classify → Alert | Notification |
| **Invoice Processor** | Email attachment | Extract → Validate → Record → Notify | Accounting entry |

### 6.2 Anti-Patterns (Tránh)

| Anti-Pattern | Vấn đề | Giải pháp |
|-------------|---------|----------|
| Automate trước optimize | Automate quy trình tệ = tệ nhanh hơn | Fix process → then automate |
| Over-automation | Quá phức tạp để maintain | Bắt đầu đơn giản, mở rộng dần |
| No error handling | Silent failures | Luôn có try/catch + alert |
| No monitoring | Không biết khi nào hỏng | Dashboard + alerts bắt buộc |
| Hardcoded values | Brittlee, khó update | Config files + env variables |
| No documentation | Chỉ 1 người hiểu | SOP cho mỗi workflow |

---

## Ví Dụ — Audit Report Cho Doanh Nghiệp XNK

```yaml
audit_report:
  khach_hang: "ABC Export Trading"
  nganh: "Xuất khẩu nhựa gia dụng"
  nhan_vien: 15
  
  top_5_co_hoi:
    - process: "Tạo báo giá"
      time_per: "75 phút"
      freq: "10/ngày"
      ice_r: 80
      potential: "Giảm 70 phút/báo giá → tiết kiệm 11.7 giờ/ngày"
      
    - process: "Trả lời email khách hàng"
      time_per: "15 phút"
      freq: "30/ngày"
      ice_r: 75
      potential: "Auto-reply 80% câu hỏi thông thường"
      
    - process: "Weekly report cho sếp"
      time_per: "3 giờ"
      freq: "1/tuần"
      ice_r: 72
      potential: "Auto-generate 100%"
      
    - process: "Đối soát HS code + thuế"
      time_per: "30 phút"
      freq: "15/ngày"
      ice_r: 45
      potential: "Auto-lookup database"
      
    - process: "Follow-up khách cũ"
      time_per: "20 phút"
      freq: "5/ngày"
      ice_r: 38
      potential: "Auto email sequence"
  
  de_xuat:
    goi_1:
      ten: "Quick Wins Package"
      bao_gom: ["Auto-report", "Auto reply email"]
      gia: 8000000
      timeline: "1 tuần"
      roi: "5.2 tháng payback"
    goi_2:
      ten: "Core Automation Package"  
      bao_gom: ["Auto quote", "CRM integration", "Monthly reports"]
      gia: 25000000
      timeline: "3 tuần"
      roi: "1.4 tháng payback"
```

---

## 7. Automation Maturity Model

### 7.1 Maturity Levels

| Level | Tên | Mô tả | Ví dụ |
|-------|-----|-------|-------|
| **0** | Manual | 100% thủ công, không có tool | Copy-paste giữa Excel sheets |
| **1** | Tools | Dùng tools nhưng manual trigger | Google Forms → Sheets, manual |
| **2** | Semi-Auto | Một số bước tự động | Zapier gửi email khi form submit |
| **3** | Automated** | Full workflow tự động | n8n: form → enrich → score → CRM → notify |
| **4** | Intelligent | AI-enhanced automation | AI classify → route → personalize |
| **5** | Autonomous | Self-optimizing system | Agent tự adjust workflow dựa trên performance data |

### 7.2 Assessment Questionnaire

```yaml
maturity_assessment:
  - question: "Quy trình có được document không?"
    level_0: "Không, chỉ trong đầu owner"
    level_1: "SOP cơ bản, Google Doc"
    level_3: "Workflow diagram, version controlled"
    
  - question: "Trigger quy trình thế nào?"
    level_0: "Nghĩ đến thì làm"
    level_1: "Checklist, calendar reminder"
    level_3: "Auto-trigger: webhook, cron, event"
    
  - question: "Xử lý lỗi thế nào?"
    level_0: "Phát hiện khi khách complaint"
    level_1: "Manual review cuối ngày"
    level_3: "Auto-retry, alert, fallback workflow"
    
  - question: "Đo lường kết quả thế nào?"
    level_0: "Cảm giác"
    level_1: "Manual report cuối tháng"
    level_3: "Real-time dashboard, auto-generate reports"
```

### 7.3 Upgrade Path

```
Level 0 → 1: DOCUMENT processes (SOP + checklists)
Level 1 → 2: ADD TRIGGERS (cron, form submit, email)
Level 2 → 3: CONNECT SYSTEMS (API integrations, n8n)
Level 3 → 4: ADD AI LAYER (classification, generation)
Level 4 → 5: SELF-OPTIMIZATION (agent + feedback loops)

TIMELINE ước tính:
  0 → 1: 1 tuần (chỉ cần viết docs)
  1 → 2: 1-2 tuần (setup tools)
  2 → 3: 2-4 tuần (build workflows)
  3 → 4: 2-4 tuần (integrate AI)
  4 → 5: 1-3 tháng (agent development)
```

---

