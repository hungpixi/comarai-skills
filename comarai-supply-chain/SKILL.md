---
name: comarai-supply-chain
description: >
  Quản lý chuỗi cung ứng XNK: sourcing, logistics, customs, quality control,
  Incoterms, compliance, shipping documentation.
  Dùng khi: "tìm xưởng", "shipping process", "customs clearance",
  "Incoterms nào phù hợp", "quality control", "HS code".
metadata:
  vi_triggers:
    - "tìm xưởng sản xuất"
    - "shipping process"
    - "customs clearance"
    - "Incoterms"
    - "quality control"
    - "HS code"
    - "logistics"
  author: "Comarai.com"
  version: "2.0.0"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Tìm xưởng nhựa gia dụng ở HCMC"* | Sourcing checklist + qualification criteria |
| *"FOB vs CIF vs DDP — nên dùng gì?"* | Incoterms comparison cho case cụ thể |
| *"Checklist QC trước khi xuất hàng"* | Quality inspection protocol |
| *"Quy trình thông quan xuất khẩu VN"* | Step-by-step customs clearance guide |

---

# Supply Chain Mastery — Từ Xưởng Đến Kho Khách

> XNK = chuỗi 20+ bước. Sai 1 bước = delay cả lô hàng. Hệ thống hóa để không sai.

---

## 1. Sourcing — Tìm Xưởng

### 1.1 Sourcing Channels

| Channel | Best For | Cost | Lead Quality |
|---------|---------|------|-------------|
| **Alibaba/1688** | CN factories, wide range | Free search | ★★★ (need verify) |
| **Made-in-China** | CN factories, technical | Free search | ★★★ |
| **Vietnam Yellow Pages** | VN factories | Free | ★★ |
| **Tendata** | Trade data, verify volume | Paid | ★★★★★ |
| **Trade shows** | Direct meeting | Travel cost | ★★★★★ |
| **Industry associations** | Verified members | Membership | ★★★★ |
| **LinkedIn** | Decision makers | Free | ★★★ |
| **Referrals** | Trusted connections | Free | ★★★★★ |

### 1.2 Factory Qualification Checklist

```
BASIC (phải có):
  □ Business license (valid)
  □ Export license (if applicable)
  □ Factory photos (real, not stock)
  □ Product samples available
  □ English communication capability
  
QUALITY (nên có):
  □ ISO 9001 certification
  □ Industry-specific certs (BSCI, FDA, CE, JIS)
  □ QC team in-house
  □ Lab testing capability
  □ Previous export experience
  
CAPACITY:
  □ Monthly production capacity: [X] units
  □ Current utilization: [X]%
  □ Lead time: [X] days
  □ Equipment age and maintenance schedule
  □ Worker count: [X] permanent, [X] seasonal
  
RED FLAGS 🚩:
  × Không cho visit factory
  × Chỉ có trading company address
  × Giá thấp bất thường (< 70% thị trường)
  × Không có reference clients
  × Yêu cầu 100% payment trước khi sản xuất
```

### 1.3 Supplier Comparison Matrix

```
| Criteria (Weight) | Factory A | Factory B | Factory C |
|---|---|---|---|
| Price (25%) | $2.50 ★★★ | $2.10 ★★★★★ | $2.80 ★★ |
| Quality (25%) | ISO+BSCI ★★★★ | ISO only ★★★ | FDA ★★★★★ |
| MOQ (15%) | 3000 ★★★ | 5000 ★★ | 1000 ★★★★★ |
| Lead time (15%) | 30 days ★★★ | 21 days ★★★★ | 45 days ★★ |
| Communication (10%) | English OK ★★★ | WeChat only ★★ | English fluent ★★★★★ |
| Location (10%) | HCMC ★★★★★ | Guangzhou ★★★ | Bangkok ★★★ |
| **TOTAL** | **3.35** | **3.30** | **3.35** |
```

---

## 2. Incoterms 2020 — Chọn Đúng Điều Kiện

### 2.1 Common Incoterms Matrix

| Incoterm | Seller Responsibility | Buyer Responsibility | Best For |
|----------|---------------------|---------------------|---------|
| **EXW** | Goods at factory gate | Everything from pickup | Experienced buyer |
| **FOB** | Delivery to port + export customs | Freight + insurance + import | Most common |
| **CIF** | + Freight + insurance to port | Import customs + local | Buyer muốn simple |
| **DDP** | Everything to buyer door | Nothing | First-time buyer, small orders |

### 2.2 Incoterms Decision Tree

```
Bạn có forwarder riêng?
  ├── YES → FOB (kiểm soát logistics + giá rẻ hơn)
  └── NO → 
        Order nhỏ (<1 FCL)?
          ├── YES → DDP (seller handle hết)
          └── NO → CIF (tiện, seller arrange freight)
```

### 2.3 Cost Comparison

```yaml
cost_example:
  product: "PP Storage Container"
  quantity: "1x 40ft FCL (~2400 units)"
  origin: "HCMC, Vietnam"
  destination: "Osaka, Japan"
  
  exw:
    unit_price: "$2.00"
    local_transport: "$200"
    export_customs: "$100"
    freight: "$1,800"
    insurance: "$50"
    import_customs: "$0 (CPTPP)"
    total: "$6,950 = $2.90/unit"
    
  fob:
    unit_price: "$2.20"
    freight: "$1,800"
    insurance: "$50"
    import_customs: "$0"
    total: "$7,130 = $2.97/unit"
    
  cif:
    unit_price: "$2.95"
    import_customs: "$0"
    total: "$7,080 = $2.95/unit"
    
  dap:
    unit_price: "$3.20"
    import_customs: "$0"
    total: "$7,680 = $3.20/unit"
    
  note: "CPTPP: Japan import duty = 0% for HS 3924 from Vietnam"
```

---

## 3. Logistics — Vận Chuyển

### 3.1 Shipping Methods

| Method | Transit | Cost | Best For |
|--------|---------|------|---------|
| **Sea FCL** | 15-35 days | $1,500-3,500/container | Large volume, not urgent |
| **Sea LCL** | 20-40 days | $50-100/CBM | Small volume |
| **Air freight** | 3-7 days | $3-8/kg | Urgent, high value, lightweight |
| **Express** | 2-5 days | $5-15/kg | Samples, documents |
| **Rail** | 15-25 days | Between sea and air | VN ↔ CN, VN ↔ EU |

### 3.2 Container Sizes

```
20ft Standard (20GP):
  Internal: 5.9m × 2.35m × 2.39m
  Volume: ~33 CBM
  Weight: ~28 tons max
  
40ft Standard (40GP):
  Internal: 12.0m × 2.35m × 2.39m
  Volume: ~67 CBM
  Weight: ~26 tons max
  
40ft High Cube (40HQ):
  Internal: 12.0m × 2.35m × 2.69m
  Volume: ~76 CBM
  Weight: ~26 tons max
  Best for: lightweight, bulky items
```

### 3.3 Shipping Documents Checklist

```
XUẤT KHẨU (Seller prepare):
  □ Commercial Invoice
  □ Packing List
  □ Bill of Lading (B/L) hoặc Airway Bill (AWB)
  □ Certificate of Origin (C/O) — for CPTPP/EVFTA
  □ Export Declaration
  □ Phytosanitary / Fumigation cert (if applicable)
  □ Quality inspection report
  
NHẬP KHẨU (Buyer prepare):
  □ Import license (if required)
  □ Import Declaration
  □ Duty payment receipt
  □ Product testing/certification at destination
```

---

## 4. Quality Control — Kiểm Soát Chất Lượng

### 4.1 QC Inspection Types

| Stage | Name | When | Purpose |
|-------|------|------|---------|
| **Pre-production** | IPC | Before mass production | Verify materials + first article |
| **During production** | DUPRO | 20-40% complete | Catch issues early |
| **Pre-shipment** | PSI | 80-100% complete | Final check before ship |
| **Container loading** | CLC | During loading | Verify quantity + packing |

### 4.2 AQL (Acceptable Quality Level)

```
AQL SAMPLING TABLE (most common):
  
  Lot Size → Sample Size → Accept/Reject
  
  2-8         → 2          → 0/1
  9-15        → 3          → 0/1
  16-25       → 5          → 0/1
  26-50       → 8          → 0/1
  51-90       → 13         → 1/2
  91-150      → 20         → 1/2
  151-280     → 32         → 2/3
  281-500     → 50         → 3/4
  501-1200    → 80         → 5/6
  1201-3200   → 125        → 7/8
  3201-10000  → 200        → 10/11
  
  Inspection Levels:
  - AQL 1.0: Strict (cosmetics, luxury)
  - AQL 2.5: Normal (consumer goods)
  - AQL 4.0: Relaxed (industrial)
```

### 4.3 Inspection Report Template

```yaml
inspection_report:
  po_number: ""
  product: ""
  factory: ""
  date: ""
  inspector: ""
  
  lot_size: 0
  sample_size: 0
  aql_level: "2.5"
  
  results:
    critical_defects: 0     # Safety/legal issue → 0 allowed
    major_defects: 0        # Function/appearance fail → AQL 2.5
    minor_defects: 0        # Cosmetic minor → AQL 4.0
    
  verdict: ""               # PASS | FAIL | CONDITIONAL
  
  photos: []                # Defect photos with annotations
  
  dimension_check:
    - item: ""
      spec: ""
      actual: ""
      pass: true
      
  packing_check:
    carton_strength: ""
    labeling: ""
    barcode_scan: ""
    
  action_items: []
```

---

## 5. Customs & Compliance

### 5.1 HS Code Basics

```
HS Code structure: XXXX.XX.XX
  XX    → Chapter (product category)
  XXXX  → Heading (specific product type)
  XXXX.XX → Subheading (more specific)
  XXXX.XX.XX → National classification

VÍ DỤ:
  3924    → Plastic tableware, kitchenware, household articles
  3924.10 → Tableware and kitchenware (plastic)
  3924.90 → Other household articles (plastic)
  
IMPORTANT:
  - Sai HS code = sai thuế = phạt + delay
  - Luôn confirm HS code với customs broker
  - HS code quyết định: thuế suất, C/O eligibility, import restrictions
```

### 5.2 FTA Benefits (Vietnam)

| FTA | Partners | Benefit | Key Products |
|-----|---------|---------|-------------|
| **CPTPP** | Japan, Canada, Australia, Mexico... | 0% tariff | Textiles, plastics, seafood |
| **EVFTA** | EU 27 countries | 0-3% (vs 5-15%) | Footwear, textiles, electronics |
| **RCEP** | ASEAN+CN+JP+KR+AU+NZ | Reduced tariffs | Manufacturing, agriculture |
| **ASEAN** | 10 ASEAN countries | 0% most items | Everything intra-ASEAN |

### 5.3 Certificate of Origin (C/O)

```
C/O REQUIRED FOR FTA TARIFF:
  □ Apply qua VCCI hoặc online (ecosys.gov.vn)
  □ Documents needed:
    - Commercial Invoice
    - Packing List
    - B/L
    - HS code proof
    - Production evidence (if required)
  □ Processing: 1-3 ngày
  □ Cost: ~200K-500K VND
  
  C/O TYPES:
  - Form AJ (ASEAN-Japan) → CPTPP
  - Form EUR.1 (EU) → EVFTA
  - Form D (ASEAN) → AFTA
  - Form E (ASEAN-China) → ACFTA
```

---

## 6. Risk Management

### 6.1 Supply Chain Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Supplier delay | Medium | High | Dual sourcing, buffer stock |
| Quality defect | Medium | High | PSI inspection, AQL sampling |
| Shipping delay | Low | Medium | Ship early, track real-time |
| Currency fluctuation | Medium | Medium | Hedge, fixed-price contracts |
| Customs hold | Low | High | Correct docs, experienced broker |
| Natural disaster | Low | Very High | Diversify geography |

---

## Ví Dụ — Full Export Flow VN → Japan

```
TIMELINE: Order → Delivery = ~45 days

Day 0:   PO confirmed, 30% T/T received
Day 1-3: Raw material procurement
Day 4-25: Production (21 days)
Day 20:  DUPRO inspection (khi 40% xong)
Day 24:  PSI inspection (khi 90% xong)
Day 25:  Production complete
Day 26-27: Packing + container loading (CLC)
Day 28:  Export customs clearance
Day 29:  Vessel departure HCMC
Day 29-42: Sea transit (14 days to Osaka)
Day 42:  Arrive Osaka port
Day 43:  Import customs clearance (CPTPP = 0%)
Day 44-45: Delivery to buyer warehouse
Day 45:  70% T/T payment (against B/L copy)

DOCUMENTS SENT ON DAY 29:
  ✉️ Commercial Invoice
  ✉️ Packing List  
  ✉️ B/L copy
  ✉️ C/O Form AJ (CPTPP)
  ✉️ Inspection report
```

---

*Comarai.com — AI Automation Agency*
