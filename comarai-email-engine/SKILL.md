---
name: comarai-email-engine
description: >
  Hệ thống email marketing & cold outreach: templates, sequences, deliverability,
  A/B testing, analytics. Gộp cold email + email marketing thành 1 engine.
  Dùng khi: "viết cold email", "tạo email sequence", "email nurture",
  "tăng open rate", "email deliverability", "newsletter".
metadata:
  vi_triggers:
    - "viết cold email"
    - "email sequence"
    - "email nurture"
    - "tăng open rate"
    - "email deliverability"
    - "newsletter"
    - "email outreach"
  author: "Comarai.com"
  version: "2.0.0"
  based_on: "Comarai original"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Viết cold email cho buyer nhựa ở Nhật"* | Personalized outreach email (EN) |
| *"Tạo sequence 5 email nurture cho lead AI agency"* | Full 5-email sequence với timing |
| *"Email open rate thấp, fix thế nào?"* | Deliverability audit + subject line tips |
| *"Viết newsletter tuần này về trading"* | Newsletter template + content |

---

# Email Engine — Cold Outreach + Email Marketing

---

## 1. Email Types & Purpose

| Type | Mục đích | Timing | Example |
|------|---------|--------|---------|
| **Cold Email** | First contact → book meeting | Day 0 | "Hi [Name], noticed [company]..." |
| **Follow-up** | Remind + add value | Day 3, 7, 14 | "Quick follow-up + proof point" |
| **Nurture** | Build trust over time | Weekly/biweekly | Value content, no hard sell |
| **Newsletter** | Stay top-of-mind | Weekly/monthly | Industry insights, tips |
| **Transactional** | Action confirmation | Immediately | "Thanks for booking, here's..." |
| **Re-engagement** | Win back cold leads | After 30-90 days | "We've added [new feature]..." |

---

## 2. Cold Email — First Contact

### 2.1 Subject Line Formulas

```yaml
subject_lines:
  # HIGH OPEN RATE PATTERNS (30-50%)
  personalized: "[Company] + Vietnam sourcing"
  question: "Quick question about [process]?"
  mutual: "Saw your talk at [event]"
  value: "[X%] cost reduction for [industry]"
  direct: "[First name] — 15 min call?"
  
  # AVOID (spam triggers)
  avoid:
    - "ALL CAPS"
    - "RE: / FW: (fake reply)"
    - "Free, Discount, Limited time"
    - "!!!" hoặc "$$$"
    - Quá dài (> 50 characters)
    
  # TESTING
  benchmark:
    good: ">30% open rate"
    ok: "20-30%"
    bad: "<20% → rewrite subject line"
```

### 2.2 Cold Email Templates

**Template 1: XNK — Pain-Based**
```
Subject: [Company] sourcing from Vietnam?

Hi [First Name],

Noticed [Company] imports [product category] — currently from [China/other].

We work directly with [X] verified factories in Vietnam producing [specific items].
Latest shipment for a [similar company]: [quantity] units, CIF [port], [lead time].

Typical savings: 15-25% vs China pricing (verified by Tendata data).

Worth 15 minutes to explore?

Best,
[Your name]
Comarai — Vietnam Sourcing Partner
comarai.com
```

**Template 2: AI Agency — Observation-Based**
```
Subject: Quick question about [specific process at Company]

Hi [First Name],

I noticed [Company] is [observation: hiring for data entry / using manual reports / etc].

We recently helped [similar company] automate [that specific process]:
→ [Metric: saved 20 hours/week, reduced errors 90%, etc.]

Would a 15-min demo be useful? No pitch — just showing what we built.

[Your name]
Comarai — AI Automation
comarai.com
```

**Template 3: Warm Intro**
```
Subject: [Mutual connection] suggested I reach out

Hi [First Name],

[Mutual connection] mentioned you're exploring [topic/need].

We specialize in exactly that — [1 sentence value prop].
Quick example: [case study one-liner].

Happy to chat if useful. No pressure.

[Your name]
```

### 2.3 Follow-Up Sequence

```yaml
cold_email_sequence:
  day_0:
    subject: "[Personalized subject]"
    type: "Initial outreach"
    goal: "Spark interest"
    
  day_3:
    subject: "Re: [Original subject]"
    type: "Value add"
    content: "Shared [industry insight/case study/resource]"
    goal: "Prove expertise"
    
  day_7:
    subject: "[Social proof angle]"
    type: "Case study"
    content: "What we did for [similar company]"
    goal: "Build credibility"
    
  day_14:
    subject: "[Industry trend]"
    type: "Industry insight"
    content: "[X%] of [industry] companies are now [doing thing]"
    goal: "FOMO / timing leverage"
    
  day_21:
    subject: "Should I close your file?"
    type: "Breakup email"
    content: "Totally understand if timing's off. Here's a free [resource]."
    goal: "Last chance + leave door open"

  # RULES
  rules:
    - "Max 5 emails per sequence"
    - "Stop immediately when they reply (ANY reply)"
    - "3 ngày min giữa emails"
    - "Mỗi email phải add VALUE mới, không chỉ 'checking in'"
    - "Breakup email cuối cùng often gets highest reply rate"
```

---

## 3. Email Marketing — Nurture & Newsletter

### 3.1 Nurture Sequence (Post-Lead Capture)

```yaml
nurture_sequence:
  day_0:
    subject: "Welcome + [Lead magnet]"
    content: "Deliver lead magnet + set expectations"
    
  day_2:
    subject: "[Quick win related to their problem]"
    content: "1 actionable tip they can implement TODAY"
    
  day_5:
    subject: "How [company] solved [same problem]"
    content: "Case study — relatable situation"
    
  day_9:
    subject: "[Common mistake in their industry]"
    content: "Educational — position as expert"
    
  day_14:
    subject: "Ready to [desired outcome]?"
    content: "Soft pitch — offer demo/call"
    
  day_21:
    subject: "Last chance: [offer/resource]"
    content: "Final CTA with urgency"
```

### 3.2 Newsletter Template

```
Subject: [Emoji] [Weekly insight — specific, curiosity-driven]

━━━━━━━━━━━━━━━━━━━━━━━━━━

🗞️ [NEWSLETTER NAME] — Issue #[N]
[Date]

━━━━━━━━━━━━━━━━━━━━━━━━━━

👋 Hey [First Name],

[1 paragraph — personal, relatable opening. 2-3 sentences max.]

━━━ 📌 BÀI NỔI BẬT ━━━

**[Topic 1 — headline]**
[3-4 sentences. Key insight + why it matters.]
→ [Link to full article/video]

**[Topic 2 — headline]**
[3-4 sentences.]

━━━ 💡 TIP TUẦN NÀY ━━━

[1 actionable tip reader can apply immediately]

━━━ 📊 SỐ LIỆU THÚ VỊ ━━━

[1 surprising stat relevant to audience]
Source: [link]

━━━━━━━━━━━━━━━━━━━━━━━━━━

Thấy hữu ích? Forward cho 1 người bạn nghĩ cần đọc.
Reply email này nếu có câu hỏi — tôi đọc hết.

— [Your name]
[Company] | [Website]

[Unsubscribe link]
```

---

## 4. Deliverability — Đảm Bảo Email Vào Inbox

### 4.1 Pre-Send Checklist

- [ ] **Domain authentication**: SPF + DKIM + DMARC configured
- [ ] **Warmup**: Domain mới cần warmup 2-4 tuần trước khi cold email
- [ ] **List quality**: Verified emails only (sử dụng Hunter.io/Snov.io)
- [ ] **Unsubscribe link**: Bắt buộc (CAN-SPAM compliance)
- [ ] **Plain text fallback**: Gửi text + HTML version
- [ ] **Spam check**: Run qua mail-tester.com (target 9+/10)
- [ ] **Image ratio**: Text > images (tránh email toàn ảnh)
- [ ] **Links**: Max 2-3 links trong cold email

### 4.2 Sending Rules

```yaml
sending_rules:
  cold_email:
    daily_limit: "50/ngày (domain mới), 100/ngày (domain cũ)"
    warmup_schedule:
      week_1: "10 emails/ngày"
      week_2: "25 emails/ngày"
      week_3: "50 emails/ngày"
      week_4: "100 emails/ngày"
    timing: "Thứ 2-4, 9:00-10:00 AM timezone recipient"
    avoid: "Thứ 6-CN, holidays"
    
  newsletter:
    frequency: "Tuần/tháng (consistent)"
    timing: "Thứ 3 hoặc 4, 10:00 AM"
    unsubscribe: "LUÔN có, 1-click"
```

### 4.3 Bounce & Complaint Handling

| Bounce Type | Action | Prevention |
|-------------|--------|-----------|
| Hard bounce (invalid email) | Remove immediately | Verify trước khi gửi |
| Soft bounce (inbox full) | Retry 1 lần sau 7 ngày | - |
| Complaint (mark spam) | Remove ngay + blacklist | Better targeting, unsubscribe dễ |
| No reply (5 emails) | Move to cold archive | Thay approach hoặc timelapse |

---

## 5. Analytics & Optimization

### 5.1 Email Metrics Benchmark

| Metric | Cold Email | Nurture | Newsletter | Action if Low |
|--------|-----------|---------|-----------|--------------|
| **Open rate** | 30-50% | 40-60% | 25-40% | Fix subject line |
| **Reply rate** | 5-15% | 10-20% | 3-8% | Fix body copy + CTA |
| **Click rate** | 3-8% | 8-15% | 5-10% | Fix CTA placement |
| **Bounce rate** | <2% | <1% | <1% | Clean list |
| **Unsubscribe** | N/A | <0.5% | <0.5% | Fix frequency/content |

### 5.2 Subject Line A/B Test

```yaml
ab_test_email:
  test: "Subject Line A vs B"
  
  variant_a:
    subject: "Quick question about [Company] sourcing"
    
  variant_b:
    subject: "[First Name] — Vietnam factory pricing"
    
  sample: "50 emails mỗi variant (same list, random split)"
  measure: "open_rate (primary), reply_rate (secondary)"
  
  result:
    winner: null
    open_rate_a: null
    open_rate_b: null
    lift: null
```

---

## 6. Email Tools Stack

| Tool | Use Case | Cost | Recommendation |
|------|---------|------|---------------|
| **Gmail + SMTP** | Small volume (<50/day) | Free | Cold email test |
| **Instantly.io** | Cold email at scale | $30/mo | Best cold email tool |
| **Mailchimp** | Newsletter + nurture | Free tier | Good for newsletter |
| **Resend** | Transactional | Free 3K/mo | Dev-friendly API |
| **Hunter.io** | Email verification | Free 25/mo | Verify before send |
| **n8n** | Automation trigger | Free self-host | Orchestrate sequences |

---

## Ví Dụ — Sequence Hoàn Chỉnh XNK

```yaml
sequence_xnk_japan:
  target: "Japanese buyer, plastic household products"
  
  email_1:
    subject: "[Company] + Vietnam plastic sourcing"
    body: |
      Hi [First Name],
      
      Noticed [Company] imports plastic household items — 
      currently from China (Tendata data: ~[X] containers/year).
      
      We partner with 3 certified factories in HCMC, producing 
      PP/PE household items. CPTPP tariff benefit = 0% import duty 
      vs 4-8% from China.
      
      Recent shipment: 2x 40ft FCL, CIF Osaka, 21 days, 
      23% below equivalent China FOB.
      
      Worth 15 minutes?
      
      Best, [Name]
  
  email_2: # Day 3
    subject: "Re: Vietnam plastic sourcing"
    body: |
      [First Name] — quick follow-up.
      
      Attached: pricing comparison Vietnam vs China for 
      top 5 household plastic items (2026 data).
      
      Summary: 15-25% savings across all categories.
      Factory: ISO 9001, BSCI audit passed.
      
      Happy to arrange factory virtual tour if useful.
  
  email_3: # Day 7
    subject: "CPTPP tariff update for Japan importers"
    body: |
      [First Name],
      
      Quick heads up: CPTPP tariffs for HS 3924 (plastic 
      household) from Vietnam to Japan hit 0% this year.
      
      Meanwhile, China tariffs remain 4-8%.
      
      [X] Japanese importers have already added Vietnam 
      sources in 2025. Happy to share the trend data.
  
  email_4: # Day 14
    subject: "Should I close your file?"
    body: |
      Hi [First Name],
      
      I've reached out a few times — totally understand if 
      timing isn't right.
      
      If Vietnam sourcing becomes a priority, here's our 
      free guide: "Vietnam Sourcing 101 for Japanese Buyers"
      [link]
      
      Just reply "yes" when you'd like to chat.
```

---

## 7. Personalization Engine

### 7.1 Personalization Variables

```yaml
personalization_levels:
  # LEVEL 1: Basic (tự động, tools hỗ trợ)
  basic:
    - "{first_name}" 
    - "{company_name}"
    - "{title}"
    - "{industry}"
    
  # LEVEL 2: Research-based (cần human/AI research)
  intermediate:
    - "{recent_post}" — LinkedIn post họ vừa chia sẻ
    - "{company_news}" — Tin tức gần đây
    - "{mutual_connection}" — Người quen chung
    - "{event}" — Conference/trade show gần đây
    
  # LEVEL 3: Deep insight (cần prospect-researcher skill)
  advanced:
    - "{pain_point}" — Vấn đề cụ thể đang gặp
    - "{competitor_comparison}" — So sánh với đối thủ
    - "{import_data}" — Volume import từ Tendata
    - "{growth_signal}" — Tín hiệu tăng trưởng cụ thể
```

### 7.2 Dynamic Content Blocks

```yaml
dynamic_content:
  by_industry:
    manufacturing:
      pain: "Chi phí nguyên liệu tăng 15-20% do supply chain disruption"
      solution: "Nguồn cung VN ổn định, CPTPP giảm thuế"
    tech:
      pain: "Scaling operations nhưng hiring costs tăng"
      solution: "AI automation giảm 60% thời gian manual tasks"
    ecommerce:
      pain: "Customer service costs tăng theo volume"
      solution: "AI chatbot xử lý 80% inquiries tự động"
      
  by_company_size:
    small: # 10-50 NV
      angle: "Lợi thế cạnh tranh — làm nhiều hơn với ít hơn"
      proof: "Case study SME tương tự"
    medium: # 50-200 NV
      angle: "Tối ưu quy trình — giảm bottleneck"
      proof: "ROI numbers + efficiency gains"
    large: # 200+ NV
      angle: "Scale operations — enterprise-grade automation"
      proof: "Enterprise case study + compliance"
```

### 7.3 Timezone Optimization

```yaml
send_time_by_region:
  vietnam: "8:30-9:30 AM (UTC+7)"
  japan: "9:00-10:00 AM (UTC+9) = 7:00-8:00 AM VN"
  korea: "9:00-10:00 AM (UTC+9) = 7:00-8:00 AM VN"
  germany: "9:00-10:00 AM (UTC+1) = 3:00-4:00 PM VN"
  uk: "9:00-10:00 AM (UTC+0) = 4:00-5:00 PM VN"
  us_east: "9:00-10:00 AM (UTC-5) = 9:00-10:00 PM VN"
  us_west: "9:00-10:00 AM (UTC-8) = 12:00-1:00 AM+1 VN"
  australia: "9:00-10:00 AM (UTC+10) = 6:00-7:00 AM VN"
  
  # TIP: Schedule emails đêm trước cho US/EU timezone
  # n8n cron có thể handle multi-timezone scheduling
```

---

## 8. Compliance & Legal

### 8.1 CAN-SPAM (Bắt buộc cho US recipients)

```
✅ PHẢI CÓ:
  □ Tên + địa chỉ thật trong email (footer)
  □ Unsubscribe link (hoạt động trong 10 ngày)
  □ Subject line không misleading
  □ Ghi rõ là quảng cáo (nếu applicable)
  □ Honor opt-out trong 10 business days

❌ KHÔNG ĐƯỢC:
  × Fake "From" name/email
  × Harvested email addresses
  × Subject lines lừa đảo
  × Gửi sau khi đã unsubscribe
```

### 8.2 GDPR (Bắt buộc cho EU recipients)

```
✅ PHẢI CÓ:
  □ Legitimate interest basis (B2B cold email OK)
  □ Data processing notice
  □ Right to access/delete data
  □ Keep records of consent/opt-out
  
❌ KHÔNG ĐƯỢC:
  × B2C cold email (cần explicit consent)
  × Transfer data ra ngoài EU không có safeguards
  × Giữ data sau khi bị yêu cầu xóa
```

### 8.3 Domain & IP Reputation

```yaml
domain_health:
  # SETUP MỚI
  new_domain_checklist:
    - "Mua domain riêng cho outreach (VD: mail.comarai.com)"
    - "Setup SPF record"
    - "Setup DKIM signing"
    - "Setup DMARC policy (p=none ban đầu)"
    - "Warmup 2-4 tuần trước khi cold email"
    
  # MONITORING
  health_checks:
    - tool: "mail-tester.com"
      target: "9+/10"
      frequency: "Mỗi tuần đầu, sau đó mỗi tháng"
    - tool: "Google Postmaster Tools"
      target: "Low spam rate (<0.1%)"
      frequency: "Daily dashboard check"
    - tool: "MXToolbox"
      target: "No blacklists"
      frequency: "Weekly"
      
  # RECOVERY nếu bị blacklist
  recovery:
    step_1: "Stop gửi ngay lập tức"
    step_2: "Kiểm tra lý do (spam complaints? bounces?)"
    step_3: "Fix root cause (clean list, improve content)"
    step_4: "Request delisting từ blacklist"
    step_5: "Re-warmup từ đầu (10/ngày → tăng dần)"
```

### 8.4 Email Signature Template

```
━━━━━━━━━━━━━━━━━━━━
[Your Name]
[Title] | Comarai
🌐 comarai.com
📧 [YOUR_EMAIL]
💬 Zalo: [YOUR_PHONE]

AI Automation cho doanh nghiệp thông minh.
━━━━━━━━━━━━━━━━━━━━
```

---

