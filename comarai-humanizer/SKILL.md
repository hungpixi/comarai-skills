---
name: comarai-humanizer
description: >
  Viết lại text AI thành tự nhiên: bypass AI detection, giữ ý, đúng tone,
  thêm personal touches, cultural adaptation.
  Dùng khi: "viết lại cho tự nhiên", "humanize text", "bypass AI detection",
  "thêm cảm xúc vào bài viết", "edit cho giống người viết".
metadata:
  vi_triggers:
    - "viết lại cho tự nhiên"
    - "humanize text"
    - "bypass AI detection"
    - "sửa giọng văn"
    - "thêm cảm xúc"
    - "edit cho giống người viết"
  author: "Comarai.com"
  version: "2.0.0"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Humanize đoạn text LinkedIn này"* | Rewrite tự nhiên + giữ ý |
| *"Bài blog này đọc quá AI, fix giúp"* | Apply humanization patterns |
| *"Viết lại email proposal cho personal hơn"* | Thêm personality + real examples |
| *"Text này pass AI detection không?"* | Analyze + rewrite nếu cần |

---

# AI Humanizer — Viết Như Người Thật

> AI viết đúng. Người viết hay. Humanizer giúp AI viết đúng AND hay.

---

## 1. AI Detection Signals — Dấu Hiệu Bị Phát Hiện

### 1.1 Patterns AI Thường Mắc

| Pattern | Ví dụ AI | Ví dụ Người |
|---------|---------|------------|
| **Mở đầu chung chung** | "Trong thế giới ngày nay..." | "Tuần trước tôi mất 3 giờ..." |
| **Liệt kê đều đặn** | "Firstly... Secondly... Thirdly..." | "Cái quan trọng nhất là..." |
| **Quá structure** | 5 paragraphs, mỗi cái đều nhau | Paragraphs dài ngắn khác nhau |
| **Từ vựng sang** | "leverage", "utilize", "facilitate" | "dùng", "giúp", "cách" |
| **Không có opinion** | "There are pros and cons..." | "Tôi nghĩ X tốt hơn vì..." |
| **Thiếu cụ thể** | "Many companies have found..." | "ABC Corp giảm 40% chi phí..." |
| **Over-hedging** | "It's important to note that..." | (Skip, vào thẳng point) |
| **Perfect grammar** | Zero errors | Occasional informal shortcuts |

### 1.2 AI Detection Score Guide

| Score | Risk | Action |
|-------|------|--------|
| 0-20% AI | ✅ Safe | Ship it |
| 20-40% AI | ⚠️ Borderline | Minor tweaks |
| 40-60% AI | 🟠 Risky | Significant rewrite |
| 60%+ AI | 🔴 Obvious AI | Full rewrite |

---

## 2. Humanization Techniques

### 2.1 Core Techniques

```yaml
humanization:
  # 1. PERSONAL EXPERIENCE
  before: "AI can help businesses save time."
  after: "Last month, our chatbot saved a client 20 hours/week. Not hypothetically — I checked the numbers myself."
  
  # 2. IMPERFECT STRUCTURE
  before: |
    AI is transforming business.
    Many companies are adopting AI.
    The benefits include efficiency, cost savings, and accuracy.
  after: |
    Look — AI isn't magic. But it IS surprisingly good at the boring stuff.
    
    Last week I automated a client's invoice process. Took me 3 days to set up,
    now it runs 24/7. They were spending 2 hours daily on this. TWO HOURS.
    
  # 3. CONVERSATIONAL TONE
  before: "It is recommended to implement a tiered pricing strategy."
  after: "My advice? Start with 3 pricing tiers. Dead simple."
  
  # 4. SPECIFIC DETAILS
  before: "We have helped many clients achieve significant results."
  after: "12 clients. Average 35% time saved. Best case: ABC Corp cut invoice processing from 4 hours to 12 minutes."
  
  # 5. VULNERABILITY
  before: "Our solution provides comprehensive coverage."
  after: "Honestly, the first version was terrible. It took 3 iterations to get it right. But now it works beautifully."
  
  # 6. QUESTIONS
  before: "Automation is essential for modern business."
  after: "When was the last time you spent an hour on something a bot could do in 5 seconds?"
  
  # 7. FRAGMENTS & SHORT SENTENCES
  before: "The implementation was successful and the client was satisfied."
  after: "Deployed Monday. Client happy by Wednesday. That simple."
  
  # 8. OPINIONS
  before: "There are multiple approaches to consider."
  after: "Skip Zapier. n8n is better for this. Self-hosted, more flexible, free."
```

### 2.2 Vietnamese-Specific Humanization

```yaml
vietnamese_patterns:
  # FORMAL → CASUAL
  before: "Chúng tôi xin gửi đến quý khách hàng..."
  after: "Chào anh/chị, mình gửi..."
  
  # REMOVE FILLER
  before: "Như chúng ta đều biết, trong bối cảnh hiện nay..."
  after: "Thực tế là..."
  
  # ADD PERSONALITY
  before: "Dịch vụ automation giúp tiết kiệm thời gian."
  after: "Không ai thích nhập liệu. Bot làm dùm, mình đi uống cà phê."
  
  # RELATABLE EXAMPLES
  before: "Tối ưu quy trình kinh doanh"
  after: "Từ sáng đến tối cắm mặt vào Excel → setup bot, mở laptop thấy mọi thứ đã xong"
  
  # Vietnamese INTERNET SPEAK (cho social media)
  cautious_use:
    - "Real" (thật sự)
    - "Chia sẻ thật" (honest take)
    - "Mình trải qua rồi" (personal experience)
  avoid:
    - Quá nhiều slang
    - Emoji spam
    - "Thương hiệu cá nhân" buzzwords
```

---

## 3. Platform-Specific Humanization

### 3.1 LinkedIn

```
RULES:
  ✅ First person ("Tôi" hoặc "I")
  ✅ Open with hook (controversial or counter-intuitive)
  ✅ 1-2 line paragraphs (mobile-friendly)
  ✅ End with question (engagement)
  ✅ Personal story > general advice
  
  ❌ Corporate speak ("We are pleased to announce...")
  ❌ Hashtag spam (max 3-5)
  ❌ Links in post (kills reach)
  
EXAMPLE:
  AI: "AI automation offers significant benefits for businesses."
  
  Human: "I automated 3 of my client's most annoying tasks last week.
  
  Time saved: 15 hours/week.
  Cost: 5 triệu VND setup.
  ROI: 3 weeks.
  
  The craziest part? The hardest step wasn't the AI.
  It was convincing the team to stop doing it manually.
  
  What's the one task you wish a bot could do for you?
  
  #AIAutomation #Productivity"
```

### 3.2 TikTok Script

```
RULES:
  ✅ Hooks trong 3 giây đầu
  ✅ Short sentences (đọc to dễ)
  ✅ Numbers + cụ thể
  ✅ Controversy / surprise
  ✅ CTA cuối
  
EXAMPLE:
  AI: "There are 5 ways to make money with trading bots."
  
  Human: "90% trader thua vì KHÔNG CÓ KỶ LUẬT.
  Bot không có cảm xúc. Bot không FOMO. Bot không revenge trade.
  Tôi set bot chạy, check 5 phút mỗi ngày.
  Kết quả tháng trước? $[X].
  Follow để xem setup."
```

### 3.3 Email

```
RULES:
  ✅ Subject line like a friend would write
  ✅ First line = human, specific
  ✅ Keep under 150 words (cold email)
  ✅ 1 CTA only
  
EXAMPLE:
  AI: "I am reaching out regarding potential partnership opportunities."
  
  Human: "Hi [Name] — saw your talk at VietnamExpo last week.
  Quick question: are you still sourcing from China only, 
  or open to Vietnam suppliers?
  We just did a CIF Japan shipment 23% cheaper than China equivalent.
  Worth 15 min?"
```

---

## 4. Humanization Workflow

### 4.1 Step-by-Step Process

```
1. GENERATE — AI viết draft
2. READ ALOUD — Đọc to. Chỗ nào nghe awkward = cần fix
3. ADD — Personal examples, opinions, specific numbers
4. REMOVE — Filler phrases, hedging, overly formal language
5. VARY — Sentence length (mix short + long)
6. CHECK — Run qua AI detector (optional)
7. FINAL — Đọc lại 1 lần cuối như reader, không phải writer
```

### 4.2 Quick Humanization Checklist

```
□ Có ít nhất 1 personal anecdote?
□ Có ít nhất 1 specific number/example?
□ Mở đầu bằng hook (không generic)?
□ Có opinion/stance rõ ràng?
□ Sentence length đa dạng (5-25 từ mix)?
□ Không có "In today's world..." hoặc tương đương?
□ Đọc to nghe tự nhiên?
□ CTA rõ ràng?
```

---

## 5. Before/After Examples — Comarai Context

### 5.1 Agency Pitch

```
AI VERSION:
"Comarai provides comprehensive AI automation solutions for 
businesses looking to optimize their operations and reduce 
costs through cutting-edge artificial intelligence technology."

HUMANIZED:
"4 AI agents. Chạy 24/7. Không lương, không nghỉ phép.
Em Sale tìm khách. Em Content viết bài. Em Marketing chạy data.
Em Trade theo dõi thị trường.

Setup xong, tôi mở laptop sáng thấy:
✅ 15 leads mới đã phân loại
✅ 3 bài TikTok đã schedule
✅ Report trading đã gửi

Không thuê thêm người. Không mất ngủ vì nhân sự."
```

### 5.2 Trading Content

```
AI VERSION:
"Forex trading bots utilize algorithmic strategies to execute 
trades automatically, potentially generating passive income 
for traders who implement proper risk management."

HUMANIZED:
"Bot của tôi mở 3 lệnh XAUUSD đêm qua khi tôi đang ngủ.
2 TP, 1 SL. Net: +$47.
Không phải ngày nào cũng vậy. Tuần trước lỗ $120.
Nhưng tháng vừa rồi? +$890.
Kỷ luật > giỏi. Bot không FOMO."
```

---

*Comarai.com — AI Automation Agency*
