---
name: comarai-trading-engine
description: >
  Hệ thống phân tích đầu tư và quản lý giao dịch toàn diện: thesis development,
  kỹ thuật phân tích, position sizing, trade journal và performance tracking.
  Hỗ trợ Forex/CFD (XAU/USD, FX), Crypto (BTC), Chứng khoán VN.
  Dùng khi: "xây thesis cho trade này", "phân tích setup XAU hôm nay",
  "review trade của tôi", "tính risk:reward", "review hiệu suất giao dịch".
metadata:
  vi_triggers:
    - "xây thesis cho trade"
    - "phân tích setup XAU"
    - "review trade của tôi"
    - "tính risk reward"
    - "hiệu suất giao dịch"
    - "phân tích BTC hiện tại"
    - "lệnh này nên vào không"
    - "journal trade hôm nay"
    - "review EA bot"
    - "backtest kết quả"
  author: "Comarai.com"
  version: "2.0.0"
  based_on: "Comarai original"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Phân tích XAU/USD hôm nay, đang consolidate trên 2680"* | Technical analysis + thesis |
| *"Tôi vào Long BTC ở 92k, SL 88k, TP 100k. Đánh giá"* | Trade review + R:R check |
| *"Review hiệu suất trading tháng 3: 12 lệnh, 7 win"* | Performance analysis |
| *"Xây thesis cho trade VCB theo breakout"* | Investment thesis template |
| *"Review EA PropHelper cho XAU, kết quả backtest 6 tháng"* | EA Bot review framework |
| *"Tính position size: account 1000$, risk 2%, SL 20 pips XAU"* | Position sizing calculator |

> Từ "thấy chart đẹp thì vào" → "có thesis rõ ràng, rules cụ thể, track được kết quả".

---

# Trading Engine — Phân Tích Đầu Tư & Giao Dịch

---

## 1. Health Check Trước Khi Giao Dịch (/8)

Chạy checklist này TRƯỚC mỗi lệnh:

| # | Tiêu chí | ✅ Làm đúng | ❌ Cần fix |
|---|---------|-----------|----------|
| 1 | Có thesis rõ ràng | Viết ra được edge | "Thấy đẹp thì vào" |
| 2 | Position size đúng | Tính toán theo % risk | "Vào nhiều cho chắc" |
| 3 | Stop loss đặt | Có price + thesis stop | Không có SL |
| 4 | Portfolio heat < 15% | Tổng risk đang mở < 15% | Không biết tổng exposure |
| 5 | R:R ≥ 1:2 | Mỗi $1 risk, kỳ vọng $2+ | R:R < 1:1 |
| 6 | Không FOMO | Trade theo plan | Vào vì thấy mọi người vào |
| 7 | Không revenge trade | Chờ setup kế tiếp | Vào ngay sau khi thua |
| 8 | Check lịch kinh tế | Không có news lớn | Không check calendar |

**Score /8. Dưới 5 → KHÔNG trade hôm đó.**

---

## 2. Trading Sessions — Timezone UTC+7 (Việt Nam)

| Session | Giờ VN | Đặc điểm | Phù hợp |
|---------|--------|----------|---------|
| **Asia/Tokyo** | 06:00-14:00 | Volume thấp, range-bound | Scalping, JPY pairs |
| **London** | 14:00-22:00 | Volume cao nhất, breakouts | XAU, EUR, GBP |
| **NY** | 19:30-02:00 | Volatile, news-driven | XAU, USD pairs, BTC |
| **London-NY Overlap** | 19:30-22:00 | Volume cực đại | Entry tốt nhất cho XAU |
| **Dead Zone** | 02:00-06:00 | Spread rộng, ít volume | KHÔNG trade |

**Quy tắc session:**
- XAU/USD: Trade London & NY. London open 14:00 VN thường có breakout
- BTC: 24/7 nhưng volume cao nhất NY session
- VN stocks: 09:00-11:30, 13:00-15:00 VN time
- **NFP/CPI/FOMC**: Thường 19:30 hoặc 01:00 VN → KHÔNG vào lệnh 30 phút trước/sau

---

## 3. Thesis Template — Trước Khi Vào Lệnh

```yaml
thesis_trade:
  # CƠ BẢN
  symbol: "XAU/USD"
  direction: "BUY"       # BUY / SELL
  ngay: "2026-03-04"
  timeframe: "H4"

  # EDGE — Tại sao cơ hội này tồn tại?
  edge:
    loai: "Trend continuation"    # Trend | Breakout | Mean reversion | Catalyst
    mo_ta: "XAU pullback về EMA21 trên H4, trong uptrend rõ ràng của D1"
    tai_sao_nguoi_khac_miss: "Nhiều người sợ pullback sâu do USD tăng ngắn hạn"

  # KỲ VỌNG — 3 scenarios bắt buộc
  scenarios:
    bull:
      xac_suat: 40
      target: 2750
      dieu_kien: "USD tiếp tục yếu, XAU phá ATH"
    base:
      xac_suat: 45
      target: 2720
      dieu_kien: "XAU bounce từ EMA21, test resistance 2720"
    bear:
      xac_suat: 15
      target: 2640
      dieu_kien: "USD tăng mạnh đột ngột, XAU phá SL"

  # TÍNH TOÁN R:R
  entry: 2682
  stop_loss: 2662          # 20 pip SL
  target_1: 2712           # 1:1.5 — chốt 50%
  target_2: 2740           # 1:2.9 — hold runner
  risk_reward_target1: "1:1.5"
  risk_reward_target2: "1:2.9"
  ky_vong_rr: "1:2.2"     # Trung bình có trọng số

  # INVALIDATION (khi nào sai luận điểm)
  price_stop: 2662
  thesis_stop: "XAU đóng cửa H4 dưới EMA50 với nến đỏ mạnh"
  time_stop: "Nếu không có move trong 48h sau entry"

  # KẾT QUẢ (điền sau khi đóng lệnh)
  exit_gia: null
  exit_ly_do: null      # target_hit | stop_hit | thesis_invalid | time_stop
  pnl_dollar: null
  r_multiple: null       # PnL / initial risk amount
  bay_gio_co_lam_lai_khong: null
  bai_hoc: null
  diem: null             # A/B/C/D/F
```

---

## 4. Technical Analysis Framework

### 4.1 Multi-Timeframe Analysis (Top-Down)

```yaml
phan_tich_ky_thuat:
  symbol: "XAU/USD"
  
  # BỨC TRANH LỚN (W1/D1)
  weekly:
    xu_huong: "Uptrend"
    key_level: "Support 2600, Resistance 2800"
    ket_luan: "Bias LONG trên W1"
  
  daily:
    xu_huong: "Uptrend — higher highs, higher lows"
    ema_21: 2675
    ema_50: 2650
    rsi_14: 55
    ket_luan: "Đang pullback nhẹ trong uptrend"
  
  # ENTRY TIMEFRAME (H4/H1)
  h4:
    xu_huong: "Pullback tích lũy"
    pattern: "Bull flag"
    momentum: "RSI 48, MACD sắp bullish cross"
    volume: "Volume giảm trong pullback — sell pressure yếu"
  
  h1:
    xu_huong: "Đang hồi phục"
    entry_trigger: "Nến bullish engulfing tại EMA21 H4"
  
  # KẾT LUẬN
  ket_luan_chung: "D1 uptrend + H4 pullback về EMA21 + Bull flag = BUY setup"
  confluence_score: "+7/9"    # Xem bảng scoring bên dưới
```

### 4.2 Signal Scoring (-9 đến +9)

| Yếu tố | Bullish | Neutral | Bearish |
|---------|---------|---------|---------|
| **Xu hướng D1** | +3 (uptrend) | 0 (range) | -3 (downtrend) |
| **Momentum** | +2 (RSI OK, MACD cross) | 0 | -2 (overbought/sold) |
| **Volume** | +1 (confirm) | 0 | -1 (divergence) |
| **Pattern** | +1 (bull flag/breakout) | 0 | -1 (bear pattern) |
| **Support/Resistance** | +1 (bouncing off support) | 0 | -1 (rejected at resistance) |
| **Ichimoku** | +1 (above cloud) | 0 | -1 (below cloud) |

**Tổng điểm:**
- +7 đến +9: Strong Buy Signal → Full position
- +4 đến +6: Moderate Buy → 50-75% position
- +1 đến +3: Weak Buy → 25-50% position hoặc wait
- -1 đến +1: Neutral → KHÔNG trade
- -4 đến -1: Weak Sell
- -7 đến -4: Strong Sell

### 4.3 Ichimoku Framework (Bổ sung)

```yaml
ichimoku_analysis:
  symbol: "XAU/USD"
  timeframe: "H4"
  
  components:
    tenkan_sen: 2685         # Conversion line (9 periods)
    kijun_sen: 2678          # Base line (26 periods)
    senkou_a: 2681           # Leading span A
    senkou_b: 2665           # Leading span B
    chikou_span: "Above price"  # Lagging span
  
  signals:
    tk_cross: "Bullish"      # Tenkan crossed above Kijun
    price_vs_cloud: "Above"  # Price above Kumo cloud
    cloud_color: "Green"     # Senkou A > Senkou B
    chikou_confirmation: true
  
  ket_luan: "Full bullish setup — 4/4 Ichimoku signals aligned"
  
  entry_strategies:
    conservative: "Wait for price to bounce off Kijun-sen (2678)"
    moderate: "Enter on Tenkan-Kijun bullish cross confirmation"
    aggressive: "Enter on cloud breakout with volume"
```

### 4.4 Key Chart Patterns

| Pattern | Direction | Target | Reliability |
|---------|-----------|--------|------------|
| **Bull Flag** | Long | Flag pole height from breakout | ★★★★ |
| **Head & Shoulders** | Short (inverse = Long) | Head-neckline distance | ★★★★★ |
| **Double Bottom/Top** | Long/Short | Pattern height from neckline | ★★★★ |
| **Ascending Triangle** | Long (usually) | Triangle height from breakout | ★★★★ |
| **Engulfing Candle** | Reversal | Previous swing high/low | ★★★ |
| **Morning/Evening Star** | Reversal | Measure move | ★★★ |
| **Pin Bar/Hammer** | Reversal at key level | Previous resistance/support | ★★★ |

---

## 5. Position Sizing — Công Thức Bắt Buộc

### 5.1 Tính Lot Size

```
Position Size = (Account × Risk%) / (SL_pips × Pip_value)

Ví dụ XAU/USD:
  Account: $1,000
  Risk: 2% = $20
  SL: 20 pips (200 points)
  Pip value (0.01 lot XAU): ~$0.10/pip
  
  Lot Size = $20 / (20 × $10/lot) = 0.10 lot
  
  CHECK: 20 pips × $10/lot × 0.10 lot = $20 risk = 2% ✓
```

### 5.2 Pip Value Reference

| Symbol | 1 Standard Lot | 0.1 Lot | 0.01 Lot |
|--------|---------------|---------|----------|
| **XAU/USD** | $10/pip | $1/pip | $0.10/pip |
| **EUR/USD** | $10/pip | $1/pip | $0.10/pip |
| **GBP/USD** | $10/pip | $1/pip | $0.10/pip |
| **USD/JPY** | ~$6.7/pip | ~$0.67/pip | ~$0.067/pip |
| **BTC/USD** | Varies per exchange | | |

### 5.3 Portfolio Heat Tracker

```yaml
portfolio_heat:
  account_balance: 1000
  max_heat: "15%"           # = $150 max risk đang mở
  
  open_positions:
    - symbol: "XAU/USD"
      direction: "BUY"
      lot: 0.10
      entry: 2682
      sl: 2662
      risk_dollar: 20
      risk_percent: "2%"
    
    - symbol: "EUR/USD"
      direction: "SELL"
      lot: 0.05
      entry: 1.0850
      sl: 1.0900
      risk_dollar: 25
      risk_percent: "2.5%"
  
  total_risk: 45
  total_risk_percent: "4.5%"
  remaining_risk_budget: "10.5%"    # 15% - 4.5%
  status: "OK — dưới 15% heat"
```

---

## 6. Trade Journal — Nhật Ký Giao Dịch

### 6.1 Entry Template

```yaml
trade_journal:
  id: "T-2026-03-042"
  ngay_mo: "2026-03-04"
  ngay_dong: null

  # WHAT & HOW
  symbol: "XAU/USD"
  direction: "BUY"
  lot_size: 0.1
  session: "London open"

  # PRICE LEVELS
  entry: 2682
  sl: 2662
  tp1: 2712
  tp2: 2740

  # SIZING
  tai_khoan: 1000            # USD
  risk_percent: 2              # %
  risk_dollar: 20              # = 1000 × 2%
  pip_gia_tri_0_1lot: 1        # $1/pip với XAU 0.1 lot
  sl_pips: 20
  phan_tram_check: "OK — 20 pips × $1 = $20 risk = 2%"

  # THESIS (summary ngắn)
  thesis: "Bull flag H4 + pullback về EMA21 trong D1 uptrend"
  conviction: 4    # /5
  confluence_score: "+7/9"

  # TÂM LÝ
  cam_xuc_truoc: "Tự tin — setup rõ ràng"
  cam_xuc_trong: null          # Ghi nhận cảm xúc được/mất
  cam_xuc_sau: null

  # KẾT QUẢ
  exit_gia: null
  exit_ly_do: null             # target_hit | stop_hit | thesis_invalid | time_stop | manual
  r_multiple: null
  theo_plan: null              # yes | partly | no
  bai_hoc: null
  diem: null                   # A/B/C/D/F
```

### 6.2 Trade Grading System

| Điểm | Tiêu chí | Ví dụ |
|------|---------|-------|
| **A** | Thesis đúng + Entry đúng + Exit theo plan + Profit | Vào đúng support, TP hit |
| **B** | Thesis đúng + Entry OK + Exit tốt nhưng không max | Chốt sớm nhưng vẫn lãi |
| **C** | Thesis đúng nhưng entry/timing kém | Đúng hướng nhưng SL trước khi TP |
| **D** | Thesis sai nhưng biết cut loss đúng | Sai nhưng SL discipline |
| **F** | Không có thesis + FOMO + Không SL | Vào random, mất tiền |

**Key insight:** Trade grade A với loss VẪN tốt hơn trade grade F với profit. Quality > Results.

---

## 7. EA Bot Review Framework

Đánh giá Expert Advisors / Trading Bots:

### 7.1 EA Evaluation Rubric

```yaml
ea_review:
  ten_ea: "[Tên EA]"
  nguon: "MQL5 Market / Custom"
  phi: "$0 / $X"
  
  # BACKTEST DATA (bắt buộc)
  backtest:
    period: "6 tháng"
    symbol: "XAU/USD"
    timeframe: "H1"
    initial_deposit: 1000
    
    # METRICS
    net_profit: null           # $
    profit_factor: null        # Target > 1.5
    max_drawdown_pct: null     # Target < 25%
    recovery_factor: null      # Net profit / Max DD — target > 3
    total_trades: null         # Target > 100 (statistically significant)
    win_rate: null             # %
    avg_win_r: null            # Avg win / Avg loss — target > 1.5
    sharpe_ratio: null
    
  # QUALITY CHECKS
  quality:
    - check: "Drawdown < 25%?"
      pass: null
    - check: "Profit factor > 1.5?"
      pass: null
    - check: "Trades > 100?"
      pass: null
    - check: "Recovery factor > 3?"
      pass: null
    - check: "Không Martingale?"
      pass: null
    - check: "Có SL trên mỗi lệnh?"
      pass: null
    - check: "Spread test realistic (10-20 cho XAU)?"
      pass: null
    - check: "Forward test / Live results?"
      pass: null
    
  # RISK ASSESSMENT
  risk:
    martingale: false          # TRUE = reject ngay
    grid_trading: false        # Cẩn thận — DD có thể rất lớn
    news_filter: true          # Có filter NFP/CPI không?
    session_filter: true       # Có filter dead zone không?
    max_concurrent_trades: 3   # Target ≤ 5
    
  # VERDICT
  diem: null                   # /100
  ket_luan: null               # "Dùng được" | "Cần test thêm" | "Reject"
  de_xuat: null                # Lot size đề xuất, settings tối ưu
```

### 7.2 EA Red Flags

| Red Flag | Tại sao nguy hiểm | Action |
|----------|-------------------|--------|
| Martingale / Grid | DD vô hạn, sooner or later cháy account | **REJECT** |
| Drawdown > 40% | Account survival quá rủi ro | **REJECT** |
| < 50 backtest trades | Không đủ data | Yêu cầu test dài hơn |
| Profit factor < 1.2 | Barely profitable | Cần forward test |
| Chỉ có backtest, không live | Curve fitting risk | Yêu cầu demo account |
| Spread sensitivity cao | Không chạy được broker thật | Test với spread 15-20 |
| Không có SL | 1 trade sai = cháy account | **REJECT** |

---

## 8. Performance Tracking — Báo Cáo Hiệu Suất

### 8.1 Monthly Report Template

```
═══════════════════════════════════════════
  REPORT HIỆU SUẤT — THÁNG [MM/YYYY]
═══════════════════════════════════════════

📊 TỔNG QUAN
  Tổng lệnh:      __
  Lệnh thắng:     __ (Win rate: __%)
  Lệnh thua:      __
  Lệnh breakeven: __

💰 HIỆU SUẤT
  Profit Factor:  __ (Tổng thắng / Tổng thua — target > 2.0)
  Avg R thắng:    __ R
  Avg R thua:     __ R (thường = 1R nếu giữ SL nghiêm)
  Expectancy:     __ R/lệnh (Win% × AvgR_win - Loss% × 1)
  
📉 RỦI RO
  Max drawdown:   __% tháng này
  Max consecutive losses: __
  Largest single loss: __R
  Portfolio heat max: __%

📈 PHÂN TÍCH THEO BỘ LỌC
  Theo symbol:
    XAU/USD: __ trades, __% win rate, __ R total
    EUR/USD: __ trades, __% win rate, __ R total
    BTC:     __ trades, __% win rate, __ R total
    
  Theo session:
    London:  __ trades, __% win rate
    NY:      __ trades, __% win rate
    Asia:    __ trades, __% win rate
    
  Theo setup type:
    Trend continuation: __ trades, __% win rate
    Breakout:           __ trades, __% win rate
    Mean reversion:     __ trades, __% win rate

⚠️ ĐIỂM YẾU CẦN SỬA
  - Thua nhiều nhất ở: [điều kiện / session]
  - Thoát sớm: [X] lần → cắt TP quá sớm
  - Giữ thua quá lâu: [X] lần → cần tin SL hơn
  - FOMO trades: [X] lần → không có thesis

📝 TOP 3 BÀI HỌC
  1. [...]
  2. [...]
  3. [...]

🎯 ĐIỀU CHỈNH THÁNG SAU
  - [Thay đổi cụ thể trong strategy]
  - [Thay đổi risk management]
  - [Thay đổi psychology/discipline]
```

### 8.2 Weekly Quick Review

```
WEEKLY REVIEW — Tuần [DD/MM - DD/MM]

Trades: __ | Win: __ | Loss: __ | BE: __
P&L: __R | Win rate: __%

Best trade: [symbol] [R multiple] — Vì: [lý do]
Worst trade: [symbol] [R multiple] — Vì: [lý do]

Discipline score: __/5
  - Theo plan: __/5
  - SL discipline: __/5
  - Psychology: __/5

1 điều cần cải thiện tuần tới: [cụ thể]
```

---

## 9. Rules Quản Lý Rủi Ro — KHÔNG ĐƯỢC VI PHẠM

```
╔═══════════════════════════════════════════════╗
║         HARD RULES — BẮT BUỘC                ║
╠═══════════════════════════════════════════════╣
║                                               ║
║  1. Risk tối đa / lệnh: 2%                   ║
║     (max 3% với conviction 5/5)               ║
║                                               ║
║  2. Portfolio heat tối đa: 15%                ║
║     (tổng risk tất cả lệnh đang mở)          ║
║                                               ║
║  3. Không trade cùng hướng > 3 lệnh          ║
║     cùng bị ảnh hưởng bởi 1 yếu tố           ║
║                                               ║
║  4. Daily loss limit: -3% account             ║
║     → DỪNG ngay hôm đó                       ║
║                                               ║
║  5. Weekly loss limit: -5%                    ║
║     → Giảm lot size 50% tuần sau              ║
║                                               ║
║  6. Monthly loss limit: -10%                  ║
║     → Nghỉ 1 tuần, review toàn bộ            ║
║                                               ║
║  7. Sau 3 lệnh thua liên tiếp                ║
║     → PAUSE 24h                               ║
║                                               ║
║  8. Không vào lệnh 30p trước/sau             ║
║     NFP, CPI, Fed meeting                     ║
║                                               ║
║  9. EA bot: chạy demo ít nhất 2 tuần         ║
║     trước khi lên real                        ║
║                                               ║
║  10. Mỗi tuần review journal                  ║
║      Không review = không trade tuần sau      ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

---

## 10. Psychology Checklist — Tâm Lý Giao Dịch

### Trước khi vào lệnh, tự hỏi:

| # | Câu hỏi | Trả lời đúng |
|---|---------|-------------|
| 1 | Tôi có đang FOMO không? | "Không — setup này đã nằm trong watchlist" |
| 2 | Tôi có đang revenge trade không? | "Không — lệnh trước đã close >2 giờ" |
| 3 | Nếu trade này thua, tôi có OK không? | "Có — chỉ rủi ro 2% account" |
| 4 | Trade này có trong plan tuần không? | "Có — setup #3 trong watchlist" |
| 5 | Tôi có đang mệt / stress không? | "Không — tỉnh táo và focused" |

**Nếu 2+ câu trả lời "sai" → KHÔNG vào lệnh.**

### Emotional State Log

Ghi lại cảm xúc mỗi ngày trading:
```yaml
emotional_log:
  ngay: "2026-03-04"
  truoc_session: "Tự tin — đã chuẩn bị plan"   # calm | confident | anxious | excited | tired
  trong_session: "Bình tĩnh — theo plan"
  sau_session: "Hài lòng — 2/3 trades theo plan"
  diem_ky_luat: 4    # /5
  ghi_chu: "Gần move SL khi drawdown nhưng đã giữ vững"
```

---

## Ví Dụ Thực Tế — Trade XAU/USD Hoàn Chỉnh

```yaml
# === VÍ DỤ HOÀN CHỈNH: Từ analysis → entry → exit → review ===

# BƯỚC 1: ANALYSIS
phan_tich:
  symbol: "XAU/USD"
  ngay: "2026-03-04"
  d1_trend: "Uptrend — EMA21 > EMA50, higher highs"
  h4_setup: "Bull flag — breakout sắp xảy ra"
  h1_trigger: "Bullish engulfing tại H4 EMA21 (2678)"
  confluence: "+7/9"
  session: "London open 14:00 VN"

# BƯỚC 2: THESIS
thesis:
  edge: "H4 bull flag trong D1 uptrend, EMA21 support"
  entry: 2682
  sl: 2662
  tp1: 2712
  tp2: 2740
  rr: "1:2.2 average"

# BƯỚC 3: POSITION SIZE
sizing:
  account: 1000
  risk_pct: 2
  risk_usd: 20
  sl_pips: 20
  lot: 0.10
  check: "20 × $1 = $20 = 2% ✓"

# BƯỚC 4: EXECUTION
execution:
  entry_type: "Limit order"
  filled_at: 2682
  time: "14:15 VN"
  sl_set: true
  tp1_set: true

# BƯỚC 5: MANAGEMENT
management:
  "14:45": "Price +10 pips, holding"
  "15:30": "Price +20 pips, move SL to entry (breakeven)"
  "17:00": "TP1 hit (2712), close 50%, move SL to +15 pips"
  "20:00": "Price pullback, runner still open"
  "22:00": "Close runner at 2730 trước NY close"

# BƯỚC 6: REVIEW
review:
  exit_gia: "TP1: 2712 (50%), Runner: 2730 (50%)"
  pnl: "+$39"
  r_multiple: "+1.95R"
  theo_plan: "yes"
  diem: "A"
  bai_hoc: "Breakeven move sau +20 pips giúp bảo vệ capital và giữ calm"
  cam_xuc: "Calm throughout — good discipline"
```

---

