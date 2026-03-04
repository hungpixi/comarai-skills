---
name: comarai-competitive-intel
description: >
  Phân tích đối thủ cạnh tranh: positioning, pricing, tech stack, SWOT, market gaps.
  Dùng khi: "phân tích đối thủ", "so sánh với competitor", "SWOT analysis",
  "tìm market gap", "competitor pricing".
metadata:
  vi_triggers:
    - "phân tích đối thủ"
    - "so sánh competitor"
    - "SWOT analysis"
    - "tìm market gap"
    - "competitor pricing"
  author: "Comarai.com"
  version: "2.0.0"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Phân tích 3 đối thủ AI agency tại VN"* | Competitive landscape + gap analysis |
| *"So sánh pricing dịch vụ chatbot trên thị trường"* | Price comparison matrix |
| *"SWOT của Comarai so với agency X"* | Full SWOT analysis |
| *"Tìm market gap trong XNK automation"* | Opportunity mapping |

---

# Competitive Intel — Biết Đối Thủ, Thắng Thị Trường

> "Biết mình biết ta, trăm trận trăm thắng." — Đàm phán và bán hàng cũng vậy.

---

## 1. Competitive Research Framework — PRISM

```
P — POSITIONING:  Họ tự claim là gì? Target ai?
R — REVENUE:      Business model? Pricing?
I — INFRASTRUCTURE: Tech stack? Team? Scale?
S — STRENGTHS:    Cái gì họ làm tốt hơn mình?
M — MISSES:       Cái gì họ bỏ lỡ? Gap ở đâu?
```

---

## 2. Competitor Profile Template

### 2.1 Full Profile

```yaml
competitor_profile:
  # CƠ BẢN
  ten: ""
  website: ""
  founded: ""
  hq: ""
  size: ""                     # team size
  funding: ""                  # bootstrapped | funded ($X)
  
  # POSITIONING
  tagline: ""                  # Họ tự giới thiệu thế nào?
  target_customer: ""          # Ai là khách chính?
  value_proposition: ""        # Promise chính
  differentiator: ""           # Claim khác biệt
  
  # PRODUCTS / SERVICES
  offerings:
    - name: ""
      description: ""
      pricing: ""
      target: ""
      
  # PRICING
  pricing_model: ""            # fixed | hourly | retainer | SaaS
  price_range: ""
  free_tier: false
  
  # MARKET PRESENCE
  channels:
    website: ""                # SEO ranking, traffic estimate
    social: ""                 # Platforms + follower counts
    content: ""                # Blog frequency, quality
    reviews: ""                # Google reviews, testimonials
    
  # TECH STACK
  tech:
    website: ""                # WordPress, Next.js, etc
    tools: []                  # Các tool public dùng
    certifications: []
    
  # STRENGTHS & WEAKNESSES
  strengths: []
  weaknesses: []
  
  # OUR ADVANTAGE
  where_we_win: []             # Cụ thể: tại sao khách chọn mình?
  where_they_win: []           # Thành thật: khi nào họ tốt hơn?
```

### 2.2 Quick Profile (5 phút)

```
[Company Name]
Website: [URL]
Size: ~[X] people
Pricing: [range]
Target: [who]
Strengths: [1-2 bullets]
Weakness: [1-2 bullets]
Our edge: [why choose us over them]
```

---

## 3. Analysis Frameworks

### 3.1 SWOT Analysis

```
┌───────────────────┬───────────────────┐
│   STRENGTHS (S)   │   WEAKNESSES (W)  │
│                   │                   │
│ [Internal +]      │ [Internal -]      │
│ • [Point 1]       │ • [Point 1]       │
│ • [Point 2]       │ • [Point 2]       │
│ • [Point 3]       │ • [Point 3]       │
├───────────────────┼───────────────────┤
│ OPPORTUNITIES (O) │    THREATS (T)    │
│                   │                   │
│ [External +]      │ [External -]      │
│ • [Point 1]       │ • [Point 1]       │
│ • [Point 2]       │ • [Point 2]       │
│ • [Point 3]       │ • [Point 3]       │
└───────────────────┴───────────────────┘
```

**SWOT → Strategy Matrix:**

| | Strengths | Weaknesses |
|---|---|---|
| **Opportunities** | SO: Exploit (dùng strength tận dụng opportunity) | WO: Improve (khắc phục weakness để catch opportunity) |
| **Threats** | ST: Defend (dùng strength chống threat) | WT: Avoid (giảm thiểu cả hai) |

### 3.2 Porter's Five Forces (Simplified)

```yaml
five_forces:
  # 1. CẠNH TRANH TRỰC TIẾP
  rivalry:
    level: "high | medium | low"
    competitors: []
    concentration: ""       # Fragmented vs consolidated
    
  # 2. RÀO CẢN GIA NHẬP
  new_entrants:
    level: ""
    barriers: []            # Capital, expertise, regulations
    recent_entrants: []     # Ai mới vào?
    
  # 3. SỨC MẠNH KHÁCH HÀNG
  buyer_power:
    level: ""
    switching_cost: ""      # Dễ hay khó đổi supplier?
    alternatives: []        # Có bao nhiêu lựa chọn?
    
  # 4. SỨC MẠNH NHÀ CUNG CẤP
  supplier_power:
    level: ""
    key_suppliers: []       # API providers, platforms
    switching_cost: ""
    
  # 5. SẢN PHẨM THAY THẾ
  substitutes:
    threats: []             # Giải pháp thay thế (VD: hire in-house)
    likelihood: ""
```

### 3.3 Feature Comparison Matrix

```
| Feature | Comarai | Competitor A | Competitor B | Competitor C |
|---------|---------|-------------|-------------|-------------|
| AI Chatbot | ✅ | ✅ | ❌ | ✅ |
| n8n Automation | ✅ | ❌ | ✅ | ❌ |
| Custom Agent | ✅ | ❌ | ❌ | ⚠️ |
| VN Language | ✅ | ⚠️ | ✅ | ❌ |
| Self-hosted | ✅ | ❌ | ✅ | ❌ |
| Price range | $$  | $$$$ | $$ | $$$ |
| Support | VN timezone | US only | 24/7 | Ticket |

Legend: ✅ Yes | ❌ No | ⚠️ Partial
```

---

## 4. Pricing Intelligence

### 4.1 Price Research Sources

| Source | Method | Reliability |
|--------|--------|------------|
| Website pricing page | Direct | ★★★★★ |
| "Request a quote" | Submit as prospect | ★★★★★ |
| Review sites | Pricing mentioned in reviews | ★★★ |
| Job postings | Salary = cost structure hints | ★★★ |
| Conference talks | Mentioned in case studies | ★★ |
| Industry reports | Aggregate data | ★★★★ |
| Ask customers | Ex-customers share | ★★★★ |

### 4.2 Pricing Comparison Template

```yaml
pricing_comparison:
  service: "AI Chatbot Development"
  date: "[Date]"
  
  competitors:
    - name: "Competitor A"
      model: "SaaS monthly"
      price: "$200/month"
      includes: "Basic bot, 1000 conversations"
      extras: "$50/month per 1000 additional"
      
    - name: "Competitor B"
      model: "Project-based"
      price: "$3,000 one-time"
      includes: "Custom bot, 5 integrations"
      extras: "$500/month maintenance"
      
    - name: "Comarai (us)"
      model: "Project + retainer"
      price: "25 triệu VND (~$1,000)"
      includes: "Custom bot, unlimited conversations, 1 month support"
      extras: "5 triệu/month ongoing support"
      
  our_position: "Mid-range pricing, premium value"
  advantage: "VN-native, self-hosted, no per-conversation fee"
```

---

## 5. Market Gap Analysis

### 5.1 Gap Identification

```yaml
gap_analysis:
  market: "[AI Automation for VN SMEs]"
  
  gaps_found:
    - gap: "Vietnamese-language AI agents"
      evidence: "Most competitors English-only or poor VN NLP"
      our_play: "VN-first + bilingual (VN/EN/CN/JP)"
      size: "Large — 800K+ SMEs in VN"
      
    - gap: "Self-hosted automation (data sovereignty)"
      evidence: "Most SaaS = data on US servers. VN companies wary"
      our_play: "Deploy on client infra or VN cloud"
      size: "Medium — compliance-sensitive industries"
      
    - gap: "XNK-specific automation"
      evidence: "Generic automation tools, no export-import workflow"
      our_play: "Pre-built XNK templates (quotation, customs, logistics)"
      size: "Medium — 10K+ XNK companies in VN"
```

### 5.2 Competitive Positioning Map

```
           ┌─── HIGH PRICE ───┐
           │                   │
     ◆ Enterprise AI          │
      (SAP, Oracle)      ◆ Boutique Agency
           │              (premium, small)
           │                   │
 ── LOW ───┼───────────────── HIGH ── CUSTOMIZATION
 CUSTOM    │                   │
           │                   │
     ◆ SaaS Tools         ★ COMARAI
      (Zapier, generic)   (mid-price, high custom,
           │               VN-focused)
           │                   │
           └─── LOW PRICE ────┘

★ = Our target position
```

---

## 6. Monitoring & Updates

### 6.1 Competitive Monitoring Checklist

```yaml
monitoring:
  weekly:
    - "Check competitor social media (new posts, engagement)"
    - "Google Alerts cho competitor names"
    
  monthly:
    - "Review competitor websites (new features, pricing changes)"
    - "Check job postings (growth, new capabilities)"
    - "Review sites update (Clutch, Google Reviews)"
    
  quarterly:
    - "Full competitive landscape refresh"
    - "Update SWOT analysis"
    - "Update pricing comparison"
    - "Identify new entrants"
    
  tools:
    - "Google Alerts (free)"
    - "SimilarWeb (traffic estimates)"
    - "BuiltWith (tech stack detection)"
    - "LinkedIn (company size, hiring)"
    - "Glassdoor (culture, salary = cost structure)"
```

---

## Ví Dụ — Competitive Report AI Agency VN

```yaml
competitive_report:
  market: "AI Automation Agency — Vietnam 2026"
  
  competitor_1:
    name: "[Agency A]"
    size: "~20 người"
    target: "Enterprise VN"
    pricing: "$5K-50K/project"
    strengths: ["Brand recognition", "Enterprise clients", "AI expertise"]
    weaknesses: ["Expensive", "Slow delivery", "English-focus"]
    
  competitor_2:
    name: "[Agency B]"
    size: "~5 người"
    target: "SME VN"
    pricing: "$1K-5K/project"
    strengths: ["Affordable", "n8n expertise"]
    weaknesses: ["No AI capability", "No English support", "Small team"]
    
  comarai:
    positioning: "AI Automation dành cho SME & XNK VN"
    differentiators:
      - "1 founder + AI agents = lean cost structure"
      - "VN-first + multilingual (EN/CN/JP)"
      - "XNK domain expertise (sourcing, customs, logistics)"
      - "Self-hosted option (data sovereignty)"
    gaps_exploiting:
      - "VN-language AI (competitor A weak here)"
      - "XNK-specific workflows (no one doing this)"
      - "Mid-price point ($1K-4K range)"
```

---

*Comarai.com — AI Automation Agency*
