---
name: comarai-real-estate
description: >
  Quản lý bất động sản: phân tích thị trường, định giá, cho thuê ngắn/dài hạn,
  sửa chữa, Airbnb optimization. Focus Hội An + Đà Nẵng.
  Dùng khi: "phân tích BĐS", "cho thuê nhà", "Airbnb pricing", "sửa chữa nhà",
  "quản lý homestay", "đầu tư BĐS".
metadata:
  vi_triggers:
    - "phân tích BĐS"
    - "cho thuê nhà"
    - "Airbnb pricing"
    - "sửa chữa nhà"
    - "quản lý homestay"
    - "đầu tư BĐS"
    - "rental yield"
  author: "Comarai.com"
  version: "2.0.0"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Phân tích giá cho thuê nhà ở Hội An"* | Market analysis + pricing recommendation |
| *"Set up Airbnb listing cho căn nhà ở An Bàng"* | Full listing optimization |
| *"Lên kế hoạch sửa chữa nhà, budget 200 triệu"* | Repair plan + timeline + cost breakdown |
| *"Tính rental yield cho căn nhà 3 tỷ"* | ROI calculator + cash flow projection |

---

# Real Estate Management — BĐS Thông Minh

> Mua đúng, sửa đúng, cho thuê đúng giá, quản lý bằng hệ thống.

---

## 1. Market Analysis

### 1.1 Property Valuation Factors

```yaml
valuation_factors:
  location:
    tier_1: "Mặt biển, phố cổ Hội An, trung tâm ĐN"
    tier_2: "Cách biển <2km, khu du lịch"
    tier_3: "Ngoại ô, xa trung tâm"
    
  property_type:
    nha_pho: "Nhà phố thương mại"
    biet_thu: "Biệt thự, villa"
    can_ho: "Căn hộ chung cư"
    dat_nen: "Đất nền"
    homestay: "Homestay/mini hotel"
    
  pricing_benchmarks_hoi_an:
    mat_pho_co: "80-150 triệu/m²"
    an_bang_beach: "30-60 triệu/m²"
    cam_an: "20-40 triệu/m²"
    ngoai_o: "10-20 triệu/m²"
```

### 1.2 Comparable Analysis Template

```yaml
comparable_analysis:
  subject_property:
    address: ""
    type: ""
    area: 0          # m²
    condition: ""     # mới/cũ/cần sửa
    
  comparables:
    - address: ""
      type: ""
      area: 0
      sold_price: 0
      sold_date: ""
      price_per_m2: 0
      adjustments: ""
      
  estimated_value:
    low: 0
    mid: 0
    high: 0
    confidence: ""
```

---

## 2. Rental Management

### 2.1 Rental Pricing Strategy

```yaml
rental_pricing:
  long_term:
    formula: "Property value × 4-6% / 12 = monthly rent"
    example:
      property_value: 3000000000  # 3 tỷ
      yield_target: "5%"
      monthly_rent: 12500000     # 12.5 triệu/tháng
      
  short_term_airbnb:
    peak_season: "Dec-Mar (high), Jun-Aug (medium)"
    pricing_formula:
      base: "Comparable listings ± 10%"
      peak: "Base × 1.3-1.5"
      off_peak: "Base × 0.7-0.8"
      last_minute: "Base × 0.5-0.6 (fill empty dates)"
      
    example_hoi_an:
      type: "Villa 2BR, pool, An Bàng"
      peak: "2.500.000 VND/đêm"
      normal: "1.800.000 VND/đêm"
      off_peak: "1.200.000 VND/đêm"
      monthly_avg: "1.600.000 VND/đêm"
      occupancy_target: "65-75%"
      monthly_revenue: "31-37 triệu VND"
```

### 2.2 Airbnb Listing Optimization

```
TITLE FORMULA:
"[Unique Feature] [Property Type] | [Location Highlight] | [Amenity]"
VD: "Beachfront Villa with Pool | 2 Min to An Bàng Beach | Free Bikes"

PHOTOS (min 20):
  1. Hero shot (exterior, golden hour)
  2-4. Living room (3 angles)
  5-7. Bedrooms
  8-9. Bathrooms (clean!)
  10-12. Kitchen + dining
  13-14. Outdoor/pool/garden
  15-16. Views
  17-18. Unique features
  19-20. Neighborhood attractions

DESCRIPTION STRUCTURE:
  Paragraph 1: Hook + unique selling point
  Paragraph 2: Space description
  Paragraph 3: Location highlights
  Paragraph 4: Amenities
  Paragraph 5: Ideal for (couples, families, remote workers)
  
AMENITIES CHECKLIST (must have):
  □ Fast WiFi (speed test screenshot)
  □ Air conditioning
  □ Hot water
  □ Clean linens + towels
  □ Kitchen basics
  □ Coffee/tea
  □ Welcome guide (local tips)
  □ Bike rental / motorbike info
  □ Airport transfer info
```

### 2.3 Guest Management SOP

```yaml
guest_management:
  before_arrival:
    - "Confirm booking + send welcome message (24h before)"
    - "Share check-in instructions + address/map"
    - "Prepare property (cleaning, amenities, AC on)"
    
  check_in:
    - "Greet or self check-in (lockbox/smart lock)"
    - "Property tour (5 min max)"
    - "Share local recommendations (restaurant, beach, ATM)"
    - "Exchange contact for questions"
    
  during_stay:
    - "Day 1: 'Everything OK?' message"
    - "Day 3+: 'Need anything?' message"
    - "Handle issues within 2 hours"
    
  check_out:
    - "Thank you message + ask for review"
    - "Cleaning team arrives within 2 hours"
    - "Property inspection checklist"
    - "Issue refund/charge if needed"
    
  after_stay:
    - "Leave honest review for guest"
    - "Update calendar + pricing"
    - "Maintenance check if needed"
```

---

## 3. Property Renovation

### 3.1 Renovation Budget Template

```yaml
renovation_budget:
  property: "[Address]"
  total_budget: 200000000    # 200 triệu VND
  contingency: "10-15%"      # Luôn để dư
  
  categories:
    structural: # 30-40%
      - item: "Chống thấm mái"
        estimate: 30000000
        actual: null
      - item: "Sơn lại toàn bộ"
        estimate: 25000000
        actual: null
        
    electrical_plumbing: # 15-20%
      - item: "Thay dây điện cũ"
        estimate: 20000000
        actual: null
      - item: "Repair đường ống nước"
        estimate: 15000000
        actual: null
        
    interior: # 25-30%
      - item: "Nội thất phòng ngủ"
        estimate: 40000000
        actual: null
      - item: "Bếp + thiết bị"
        estimate: 30000000
        actual: null
        
    exterior: # 10-15%
      - item: "Sân vườn"
        estimate: 15000000
        actual: null
      - item: "Hồ bơi sửa chữa"
        estimate: 25000000
        actual: null
        
  total_estimate: 200000000
  contingency_amount: 30000000
  grand_total: 230000000
```

### 3.2 Contractor Management

```
CHỌN THỢ:
  □ Hỏi referral từ người local
  □ Xem portfolio/công trình đã làm
  □ Lấy min 3 báo giá
  □ Check đánh giá online/facebook
  □ Yêu cầu lịch thi công chi tiết
  
HỢP ĐỒNG:
  □ Scope rõ ràng (vật liệu + nhân công)
  □ Timeline từng giai đoạn
  □ Payment schedule (30-30-30-10)
  □ Penalty clause nếu trễ
  □ Warranty period (6-12 tháng)
  
GIÁM SÁT:
  □ Visit công trường 2-3 lần/tuần
  □ Photo/video daily progress
  □ Quality check tại milestones
  □ Approve trước khi chuyển phase
```

---

## 4. Investment Analysis

### 4.1 Rental Yield Calculator

```
GROSS YIELD:
  = Annual Rental Income / Property Purchase Price × 100%
  
NET YIELD:
  = (Annual Income - Annual Expenses) / Total Investment × 100%
  
EXPENSES:
  - Thuế BĐS: ~0.03-0.15% giá trị/năm
  - Phí quản lý (nếu thuê): 10-20% rental
  - Bảo trì: 1-2% giá trị/năm
  - Bảo hiểm: ~0.1% giá trị/năm
  - Marketing (Airbnb): 3% booking fee
  - Cleaning: [X] VND/turnover
  - Utilities (nếu include): [X] VND/tháng

VÍ DỤ:
  Purchase: 3 tỷ VND
  Monthly rent: 15 triệu VND (long-term)
  Annual income: 180 triệu VND
  Annual expenses: 55 triệu VND
  
  Gross yield: 180/3000 × 100 = 6.0%
  Net yield: 125/3000 × 100 = 4.2%
```

### 4.2 Airbnb vs Long-term Comparison

```
| Factor | Long-term | Airbnb |
|---|---|---|
| Income/tháng | 12-15 triệu (stable) | 20-40 triệu (seasonal) |
| Occupancy | 100% | 60-80% |
| Quản lý effort | Low | High |
| Wear & tear | Normal | High |
| Legal | Standard lease | Du lịch license needed |
| Flexibility | 6-12 month lock | Day-by-day |
| Tax | TNCN 5% | TNCN 5% + VAT 5% |
```

### 4.3 Cash Flow Projection

```yaml
cash_flow_5_year:
  property: "[Address]"
  purchase: 3000000000
  renovation: 200000000
  total_investment: 3200000000
  
  year_1:
    income: 216000000      # 18M × 12 (Airbnb avg)
    expenses: 72000000     # Management + maintenance + fees
    net_income: 144000000
    appreciation: "5%"     # 150M property value increase
    total_return: 294000000
    
  year_5_cumulative:
    total_net_income: 750000000
    property_value: 3830000000  # 5% compound
    total_return: 1580000000    # 49% over 5 years
    annual_return: "9.8%"
```

---

## 5. Legal & Tax

### 5.1 VN Property Legal Checklist

```
MUA:
  □ Sổ đỏ/sổ hồng (bản gốc)
  □ Không tranh chấp
  □ Không thế chấp
  □ Quy hoạch xác nhận (không nằm trong quy hoạch giải tỏa)
  □ Giấy phép xây dựng (nếu đã xây)
  
CHO THUÊ:
  □ Hợp đồng thuê có công chứng
  □ Đăng ký tạm trú cho khách (nếu Airbnb)
  □ Giấy phép kinh doanh du lịch (Airbnb/homestay)
  □ Phòng cháy chữa cháy (PCCC)
  □ Khai thuế TNCN (5% + VAT 5% cho cho thuê)
```

---

*Comarai.com — AI Automation Agency*
