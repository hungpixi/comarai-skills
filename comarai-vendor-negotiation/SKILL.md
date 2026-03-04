---
name: comarai-vendor-negotiation
description: >
  Đàm phán với xưởng/nhà cung cấp: preparation, strategy, scripts, pricing analysis,
  relationship building. Focus XNK VN↔CN/ASEAN/Global.
  Dùng khi: "đàm phán giá", "negotiate MOQ", "supplier relationship", "terms và conditions".
metadata:
  vi_triggers:
    - "đàm phán giá"
    - "negotiate MOQ"
    - "supplier relationship"
    - "payment terms"
    - "negotiate với xưởng"
  author: "Comarai.com"
  version: "2.0.0"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Chuẩn bị đàm phán với xưởng nhựa ở Quảng Châu"* | Negotiation brief + strategy + scripts |
| *"Xưởng quote $2.5/unit, target $2.0. Chiến lược?"* | Price analysis + counter-offer strategy |
| *"Draft email đàm phán MOQ giảm từ 5000 xuống 2000"* | Email template + reasoning |
| *"Xưởng muốn T/T 100%, tôi muốn L/C. Negotiate?"* | Payment terms negotiation guide |

---

# Vendor Negotiation — Đàm Phán Thắng Win-Win

> Đàm phán tốt = cả hai bên thắng + relationship dài hạn. Squeeze xưởng = mất supplier.

---

## 1. Preparation Phase

### 1.1 Pre-Negotiation Research

```yaml
negotiation_prep:
  # VỀ XưỞNG
  supplier_intel:
    capacity: ""              # Monthly output
    current_clients: []       # Ai đang mua? (Tendata research)
    utilization: ""           # Factory đang bận hay rảnh?
    certifications: []        # ISO, BSCI, etc
    years_operating: 0
    ownership: ""             # Private, state, JV
    
  # VỀ THỊ TRƯỜNG
  market_intel:
    raw_material_price: ""    # Giá nguyên liệu hiện tại
    raw_material_trend: ""    # Tăng/giảm/ổn?
    industry_avg_price: ""    # Giá bình quân thị trường
    currency_trend: ""        # VND/USD/CNY trend
    season: ""                # Peak hay off-season?
    
  # VỀ MÌNH
  our_position:
    total_volume: ""          # Annual volume (leverage)
    alternatives: []          # Xưởng khác đã contact
    urgency: ""               # Cần gấp hay flexible?
    relationship_history: ""  # Lần đầu hay đã mua lâu?
    payment_ability: ""       # L/C sẵn hay T/T?
```

### 1.2 BATNA Analysis (Best Alternative To Negotiated Agreement)

```
TRƯỚC KHI ĐÀM PHÁN, XÁC ĐỊNH:

1. BATNA của mình:
   - Alternative supplier: [Ai?] ở [giá nào?]
   - Không mua: impact thế nào?
   → BATNA = $[X]/unit từ Factory B
   
2. BATNA của xưởng:
   - Họ có nhiều khách khác không?
   - Factory đang full hay idle?
   - Họ cần đơn hàng này không?
   → Estimate: Họ probably [strong/weak]
   
3. ZOPA (Zone of Possible Agreement):
   Our target: $[X]
   Our walkaway: $[Y]
   Their likely range: $[A] - $[B]
   ZOPA exists if: [Y] > [A]
```

---

## 2. Negotiation Framework — TRADE

```
T — TARGET:     Biết rõ mình muốn gì (price, MOQ, terms)
R — RESEARCH:   Data market + supplier position
A — ALTERNATIVES: BATNA sẵn sàng
D — DIALOGUE:   Script + objection handling
E — EXCHANGE:   Give & take (không chỉ take)
```

---

## 3. Price Negotiation

### 3.1 Cost Breakdown Approach

```
CHIẾN LƯỢC #1: Yêu cầu cost breakdown

"Hi [Name],

Thank you for the quotation of $2.50/unit.

To better evaluate, could you share the cost breakdown?
- Raw material: $___
- Labor: $___
- Overhead: $___
- Margin: $___

This helps us understand and find ways to optimize together."

MỤC ĐÍCH: Khi biết cost structure, negotiate thông minh hơn.
VD: Nếu raw material = 60% → negotiate raw material sourcing.
    Nếu labor = 30% → negotiate automation/efficiency.
```

### 3.2 Volume Leverage

```
CHIẾN LƯỢC #2: Volume escalator

"We're starting with 2,000 units this order.
Our plan for 2026:
- Q2: 2,000 units
- Q3: 5,000 units (if quality tested)
- Q4: 10,000 units (peak season)
- 2027 estimate: 30,000-50,000 units/year

Based on this projection, can you offer:
- Trial order (2K units): $2.30/unit
- 5K+ orders: $2.10/unit
- 10K+ orders: $1.95/unit?"

MỤC ĐÍCH: Show growth potential → xưởng sẵn sàng giảm giá.
```

### 3.3 Counter-Offer Scripts

```yaml
counter_offers:
  # SCENARIO: Giá quá cao
  high_price:
    script: |
      "Thank you for the quote. We've received competitive 
      pricing from 2 other factories in [location] at $[lower]. 
      
      We prefer working with you because [genuine reason: 
      quality/cert/location]. Can you match $[target]? 
      
      If price is hard, we're open to discussing:
      - Longer payment terms
      - Larger first order
      - Multi-year agreement"
      
  # SCENARIO: MOQ quá cao
  high_moq:
    script: |
      "Your MOQ of 5,000 units is challenging for our first order.
      
      Proposal:
      - Trial order: 2,000 units at [+5-10% premium OK]
      - If quality passes QC: immediate reorder 5,000+
      - We'll cover sample + tooling costs upfront
      
      This reduces YOUR risk too — we prove we're a serious buyer."
      
  # SCENARIO: Payment terms
  payment_terms:
    script: |
      "Your terms: 100% T/T before shipment.
      
      Our preference: 30% T/T deposit, 70% against B/L copy.
      
      Reasoning:
      - We've worked with [X] factories with these terms
      - We can provide bank reference
      - For first order, we're open to: 30% deposit, 
        70% after inspection (pre-shipment)"
```

---

## 4. Beyond Price — Negotiation Variables

| Variable | Ask | Give |
|----------|-----|------|
| **Price** | Lower unit price | Higher volume commitment |
| **MOQ** | Lower MOQ | Pay premium per unit |
| **Payment** | Better terms (T/T 30/70) | Accept shorter credit days |
| **Delivery** | Faster lead time | Pay rush fee |
| **Quality** | Free replacements for defects | Accept reasonable tolerance |
| **Packing** | Custom packing | Cover extra material cost |
| **Exclusivity** | No sell to competitors in territory | Volume guarantee |
| **Tooling** | Free tooling | Minimum order guarantee |

---

## 5. Cultural Considerations

### 5.1 Negotiation by Culture

| Culture | Style | Tips | Avoid |
|---------|-------|------|-------|
| **Chinese** | Relationship-first, indirect no | Dinners matter, WeChat relationship, patience | Direct confrontation, losing face |
| **Vietnamese** | Flexible, relationship-based | Personal connection, Zalo, café meetings | Quá formal, condescending |
| **Japanese** | Process-heavy, consensus | Written everything, respect hierarchy, nemawashi | Rushing, bypassing hierarchy |
| **Korean** | Hierarchical, drinking culture | Respect age/seniority, nunchi | Refusing social events |
| **Western** | Direct, contract-focused | Data-driven, clear terms | Ambiguity, verbal-only |

### 5.2 Communication Templates

```yaml
email_templates:
  first_inquiry:
    subject: "Partnership Inquiry — [Product Category]"
    tone: "Professional, show seriousness"
    include: "Company intro, volume, timeline, specific product"
    
  negotiation:
    subject: "Re: Pricing Discussion — [Product]"
    tone: "Respectful, fact-based"
    include: "Data, alternatives, proposed terms, win-win angle"
    
  acceptance:
    subject: "Order Confirmation — PO#[XXX]"
    tone: "Warm, professional"
    include: "PO details, payment schedule, delivery expectations"
    
  complaint:
    subject: "Quality Issue — Order#[XXX] — Urgent Resolution Needed"
    tone: "Firm but professional, solution-oriented"
    include: "Evidence (photos), impact, proposed resolution, deadline"
```

---

## 6. Relationship Building

### 6.1 Supplier Relationship Tiers

| Tier | Relationship | How to nurture |
|------|-------------|---------------|
| **Tier 1** | Strategic partner | Regular visits, joint development, exclusive benefits |
| **Tier 2** | Preferred supplier | Quarterly reviews, growth planning, priority orders |
| **Tier 3** | Approved vendor | Standard process, annual review, competitive bidding |

### 6.2 Long-term Value Actions

```
□ Visit factory at least 1x/year (build trust)
□ Pay on time ALWAYS (reputation = leverage)
□ Share market feedback (help them improve)
□ Refer other buyers (if non-competing)
□ Celebrate milestones (Lunar New Year, Mid-Autumn)
□ Introduce new products early (show partnership)
□ Give constructive feedback (help quality improve)
□ Be transparent about volume changes (+/-)
```

---

## Ví Dụ — Full Negotiation Playbook

```yaml
negotiation_playbook:
  target: "Quảng Châu Plastics Co."
  product: "PP storage containers"
  current_quote: "$2.50/unit FOB Guangzhou"
  target_price: "$2.10/unit"
  walkaway: "$2.30/unit"
  
  strategy:
    round_1: "Request cost breakdown + mention alternatives"
    round_2: "Volume escalator + multi-year commitment"
    round_3: "Package deal (price + MOQ + terms)"
    
  opening: |
    "We've received quotes from 3 factories ranging $2.00-2.60.
    Your quality is best, but pricing needs to work.
    Our target: $2.10 for 3,000+ units.
    What can you do?"
    
  concessions_prepared:
    - "Accept $2.20 if MOQ drops to 2,000"
    - "Accept $2.30 if payment T/T 50/50"
    - "Accept current price if they include free packing"
    
  expected_outcome: "$2.15-2.25, MOQ 2,500, T/T 30/70"
```

---

*Comarai.com — AI Automation Agency*
