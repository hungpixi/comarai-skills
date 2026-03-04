---
name: comarai-proposal-gen
description: >
  Tạo proposals và báo giá chuyên nghiệp: discovery, scoping, pricing, timeline,
  SOW, presentation. Focus AI agency services + XNK sourcing quotes.
  Dùng khi: "tạo proposal", "viết báo giá", "SOW cho project", "pricing strategy".
metadata:
  vi_triggers:
    - "tạo proposal"
    - "viết báo giá"
    - "SOW cho project"
    - "pricing strategy"
    - "quote cho khách"
  author: "Comarai.com"
  version: "2.0.0"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Tạo proposal chatbot AI cho công ty ABC"* | Full proposal: scope + timeline + pricing |
| *"Báo giá sourcing 2000 units sản phẩm nhựa"* | Quotation: FOB/CIF pricing + terms |
| *"SOW cho dự án automation workflow"* | Statement of Work chi tiết |
| *"So sánh pricing 3 packages"* | Pricing comparison table |

---

# Proposal Generator — Từ Discovery Đến Chốt Deal

> Proposal tốt = 70% lắng nghe + 20% structure + 10% viết. Đừng viết proposal trước khi hiểu khách.

---

## 1. Discovery Phase — Trước Khi Viết Proposal

### 1.1 Discovery Questions

```yaml
discovery_ai_agency:
  business:
    - "Công ty bạn đang kinh doanh lĩnh vực gì?"
    - "Quy mô bao nhiêu nhân viên?"
    - "Revenue hàng tháng/năm khoảng bao nhiêu?"
    
  problem:
    - "Vấn đề cụ thể nào bạn muốn giải quyết?"
    - "Hiện tại bạn xử lý vấn đề này thế nào?"
    - "Chi phí (thời gian + tiền) cho quy trình hiện tại?"
    - "Vấn đề này ảnh hưởng ai nhiều nhất trong team?"
    
  solution:
    - "Bạn đã thử giải pháp nào chưa?"
    - "Kết quả mong muốn cụ thể là gì?"
    - "Timeline mong muốn khi nào?"
    - "Budget range cho project này?"
    
  decision:
    - "Ai là người quyết định cuối cùng?"
    - "Có ai khác cần approve không?"
    - "Deadline để quyết định?"
    - "Tiêu chí đánh giá vendor?"

discovery_xnk:
  product:
    - "Sản phẩm cụ thể? (HS code nếu có)"
    - "Quantity / MOQ?"
    - "Specs / quality requirements?"
    - "Certifications yêu cầu? (ISO, BSCI, FDA...)"
    
  logistics:
    - "Port of destination?"
    - "Incoterms preference? (FOB/CIF/DDP)"
    - "Target delivery date?"
    - "Frequency of orders?"
    
  commercial:
    - "Target price range?"
    - "Payment terms preference? (L/C, T/T, D/A)"
    - "Current supplier? Why looking for alternative?"
    - "Decision timeline?"
```

### 1.2 Discovery Score (Có Đủ Info Viết Proposal?)

| Check | Got it? |
|-------|---------|
| Problem cụ thể & đo được | □ |
| Budget range (ít nhất khoảng) | □ |
| Decision maker identified | □ |
| Timeline rõ ràng | □ |
| Success criteria defined | □ |
| Competitive context | □ |

**Pass: 5/6+. Dưới 4 → cần 1 discovery call nữa.**

---

## 2. Proposal Structure

### 2.1 AI Agency Proposal Template

```
╔══════════════════════════════════════╗
║  [LOGO]                              ║
║  PROPOSAL: [Tên Project]            ║
║  Prepared for: [Client Name]         ║
║  Date: [Date]                        ║
║  Valid until: [Date + 30 days]       ║
╚══════════════════════════════════════╝

━━━ TABLE OF CONTENTS ━━━
1. Executive Summary
2. Understanding Your Challenge
3. Proposed Solution
4. Scope of Work
5. Timeline & Milestones
6. Investment
7. About Comarai
8. Next Steps

━━━ 1. EXECUTIVE SUMMARY ━━━
[2-3 paragraphs MAX]
- Tóm tắt vấn đề (dùng ngôn ngữ CỦA KHÁCH)
- Giải pháp đề xuất (1 sentence)
- Kết quả mong đợi (con số cụ thể)

━━━ 2. UNDERSTANDING YOUR CHALLENGE ━━━
- [Pain point 1 — reference từ discovery call]
- [Pain point 2]
- [Pain point 3]
- Impact: "[X] giờ/tuần lãng phí = [Y]₫/tháng"

━━━ 3. PROPOSED SOLUTION ━━━
- Solution overview (1 paragraph)
- Key features (3-5 bullets)
- How it solves each pain point

━━━ 4. SCOPE OF WORK ━━━
Phase 1: Discovery & Design (Tuần 1)
  - [ ] Requirements gathering
  - [ ] Process mapping
  - [ ] Solution architecture
  Deliverable: Technical Specification Document

Phase 2: Development (Tuần 2-3)
  - [ ] Core functionality
  - [ ] Integrations
  - [ ] Testing
  Deliverable: Working MVP

Phase 3: Launch & Training (Tuần 4)
  - [ ] Deployment
  - [ ] Team training
  - [ ] Documentation
  Deliverable: Production system + training docs

━━━ 5. TIMELINE ━━━
[Gantt chart hoặc table]
| Phase | Duration | Start | End |
|-------|----------|-------|-----|
| Discovery | 1 week | W1 | W1 |
| Development | 2 weeks | W2 | W3 |
| Launch | 1 week | W4 | W4 |

━━━ 6. INVESTMENT ━━━
[See Pricing section below]

━━━ 7. ABOUT COMARAI ━━━
[Brief intro + relevant case studies]

━━━ 8. NEXT STEPS ━━━
1. Review proposal
2. Feedback/questions: [contact]
3. Approve → kickoff call trong 48h
```

### 2.2 XNK Quotation Template

```
╔══════════════════════════════════════╗
║  QUOTATION                           ║
║  Ref: QT-[YYYY]-[NNN]              ║
║  Date: [Date]                        ║
║  Valid: 15 days                      ║
╚══════════════════════════════════════╝

TO: [Buyer Company]
ATTN: [Contact Name]

━━━ PRODUCT DETAILS ━━━
| # | Product | Specs | HS Code | MOQ | Unit Price | Total |
|---|---------|-------|---------|-----|-----------|-------|
| 1 | [Item] | [Specs] | [HS] | [X] | $[X.XX] | $[X] |
| 2 | [Item] | [Specs] | [HS] | [X] | $[X.XX] | $[X] |

━━━ COMMERCIAL TERMS ━━━
Incoterms: FOB Ho Chi Minh City / CIF [Port]
Payment: 30% T/T advance, 70% against B/L copy
Delivery: [X] days after order confirmation
Sample: Available, $[X] per sample + courier
Packing: [Standard/Custom] — [details]
Certifications: ISO 9001, BSCI, [others]

━━━ NOTES ━━━
- Prices based on MOQ. Volume discount available for 2x+ MOQ
- Free tooling for orders >[X] units
- Factory audit welcome anytime
- All prices in USD, exclusive of duties at destination

━━━ VALIDITY ━━━
This quotation is valid for 15 days from issue date.
Price subject to raw material fluctuation beyond ±5%.

[Signature]
[Name] | Comarai
comarai.com | [YOUR_EMAIL]
```

---

## 3. Pricing Strategy

### 3.1 AI Agency Pricing Models

```yaml
pricing_models:
  fixed_price:
    when: "Scope rõ ràng, deliverables cụ thể"
    pros: "Client biết trước chi phí, dễ approve"
    cons: "Risk scope creep, underestimate"
    tip: "Thêm 20-30% buffer cho unexpected"
    
  hourly_rate:
    when: "Scope không rõ, ongoing support"
    pros: "Flexible, fair"
    cons: "Client khó budget, hay hỏi 'bao lâu'"
    rate_range: "500K-1.5M VND/giờ (tuỳ complexity)"
    
  retainer:
    when: "Ongoing relationship, monthly work"
    pros: "Revenue predictable, client priority"
    cons: "Unused hours = chịu"
    packages:
      basic: "8 giờ/tháng — 8 triệu VND"
      standard: "20 giờ/tháng — 18 triệu VND"
      premium: "40 giờ/tháng — 32 triệu VND"
      
  value_based:
    when: "ROI clear, high-impact project"
    pros: "Earn based on value, not time"
    cons: "Hard to justify, need trust"
    formula: "Price = 10-20% of Year 1 value delivered"
    example: "Save 200 triệu/năm → charge 20-40 triệu"
```

### 3.2 Pricing Packages (AI Agency)

```yaml
packages:
  starter:
    ten: "Starter"
    gia: "5-10 triệu VND"
    gia_usd: "$200-400"
    bao_gom:
      - "1 automation workflow (n8n)"
      - "Setup + training"
      - "1 tuần support"
    ly_tuong: "SME muốn test automation"
    
  growth:
    ten: "Growth"
    gia: "15-30 triệu VND"
    gia_usd: "$600-1,200"
    bao_gom:
      - "3-5 automation workflows"
      - "AI chatbot basic"
      - "CRM integration"
      - "1 tháng support"
    ly_tuong: "Doanh nghiệp muốn automate core processes"
    
  enterprise:
    ten: "Enterprise"
    gia: "50-100 triệu VND"
    gia_usd: "$2,000-4,000"
    bao_gom:
      - "Full system automation"
      - "AI agent team (Em Sale + Em Content)"
      - "Custom integrations"
      - "3 tháng support + optimization"
    ly_tuong: "Doanh nghiệp muốn digital transformation"
```

---

## 4. Scope of Work (SOW) Template

### 4.1 SOW Sections

```
1. PROJECT OVERVIEW
   - Project name
   - Client name
   - Start date / End date
   - Project manager

2. OBJECTIVES
   - [Objective 1 — measurable]
   - [Objective 2 — measurable]
   
3. SCOPE
   3.1 IN SCOPE
     - [Deliverable 1]
     - [Deliverable 2]
   3.2 OUT OF SCOPE
     - [Explicit exclusions — QUAN TRỌNG]
     
4. DELIVERABLES
   | # | Deliverable | Format | Due Date |
   |---|------------|--------|----------|
   | 1 | [Name] | [PDF/Code/System] | [Date] |
   
5. MILESTONES
   | Milestone | Date | Payment |
   |-----------|------|---------|
   | Kickoff | W1 | 30% |
   | MVP | W3 | 40% |
   | Launch | W4 | 30% |
   
6. ACCEPTANCE CRITERIA
   - [Criterion 1]
   - [Criterion 2]
   - Acceptance period: 5 business days
   
7. ASSUMPTIONS
   - Client provides [access/data/feedback] within [timeframe]
   - [Other assumptions]
   
8. CHANGE MANAGEMENT
   - Changes require written request
   - Cost impact assessed within 2 business days
   - Both parties approve before execution
   
9. PAYMENT TERMS
   - [As defined in pricing section]
   - Invoice net 15 days
```

---

## 5. Proposal Presentation Tips

### 5.1 Presentation Structure

```
SLIDE 1: Title + client name (họ quan trọng, không phải mình)
SLIDE 2: "We understand..." (tóm tắt vấn đề BẰNG LỜI HỌ)
SLIDE 3: Impact (cost of doing nothing — con số)
SLIDE 4: Solution overview (simple, visual)
SLIDE 5-7: How it works (3 phases max)
SLIDE 8: Timeline (visual gantt/roadmap)
SLIDE 9: Investment (3 options: good/better/best)
SLIDE 10: Why us (2-3 proof points, NOT company history)
SLIDE 11: Next steps (1 clear CTA)
```

### 5.2 Common Objections & Responses

| Objection | Response |
|-----------|---------|
| "Đắt quá" | "Hiện tại vấn đề này đang tốn [X]₫/tháng. ROI trong [Y] tháng." |
| "Cần suy nghĩ" | "Tôi hiểu. Có điểm nào cần làm rõ hơn không? Tôi có thể..." |
| "Đối thủ rẻ hơn" | "Giá nào bao gồm [X]? Chúng tôi include [Y + Z] sẵn." |
| "Team nội bộ làm được" | "Team mất [X] tuần. Chúng tôi xong [Y] tuần + đã prove pattern." |
| "Chưa phải lúc" | "Hiểu. Mỗi tháng delay = [X]₫ chi phí cơ hội. Khi nào thích hợp?" |

---

## 6. Follow-up After Proposal

```yaml
follow_up_sequence:
  day_0: "Gửi proposal + summary message (Zalo/email)"
  day_2: "Check-in: 'Đã review chưa? Có câu hỏi nào không?'"
  day_5: "Share relevant case study hoặc resource"
  day_10: "Nhắc validity: 'Proposal valid đến [date]'"
  day_14: "Final check: 'Bạn quyết định thế nào? Tôi sẵn sàng adjust'"
  day_21: "Breakup: 'Hiểu timing chưa phải lúc. Ping khi cần.'"
  
  rules:
    - "ĐỪNG hỏi 'Bạn đã quyết định chưa?' — hỏi cụ thể hơn"
    - "Mỗi follow-up THÊM VALUE (case study, insight, resource)"
    - "Stop ngay khi nhận reply (bất kỳ reply)"
```

---

## Ví Dụ — Proposal AI Chatbot Cho XNK

```yaml
proposal:
  client: "ABC Export Trading"
  project: "AI Customer Service Chatbot"
  
  executive_summary: |
    ABC Export hiện tốn 3-4 giờ/ngày trả lời cùng câu hỏi 
    giá, MOQ, lead time từ khách nước ngoài. 
    
    Chatbot AI sẽ trả lời 80% câu hỏi tự động, 24/7, 
    bằng 3 ngôn ngữ (EN/CN/JP), chính xác theo catalog.
    
    Kết quả: Giảm response time từ 4 giờ → 5 phút.
    Timeline: 3 tuần.
    
  investment:
    package: "Growth"
    gia: "25 triệu VND"
    bao_gom:
      - "AI chatbot (website + Zalo)"
      - "Trained trên 200+ FAQ từ catalog"
      - "3 ngôn ngữ: EN, CN, JP"
      - "CRM integration (log inquiries)"
      - "1 tháng optimization + support"
    roi: |
      Current cost: Sales 4h/ngày × 80K/h × 22 ngày = 7 triệu/tháng
      After chatbot: 0.5h/ngày → 880K/tháng
      Savings: ~6 triệu/tháng
      Payback: 4 tháng
```

---

*Comarai.com — AI Automation Agency*
