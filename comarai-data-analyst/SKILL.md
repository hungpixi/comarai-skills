---
name: comarai-data-analyst
description: >
  Phân tích dữ liệu: cleaning, EDA, visualization, insights, reporting.
  Focus trading performance + business metrics.
  Dùng khi: "phân tích data", "tạo báo cáo", "visualize data",
  "trading performance report", "KPI dashboard".
metadata:
  vi_triggers:
    - "phân tích data"
    - "tạo báo cáo"
    - "visualize data"
    - "trading performance"
    - "KPI dashboard"
    - "phân tích kinh doanh"
  author: "Comarai.com"
  version: "2.0.0"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Phân tích trading results tháng này"* | P&L analysis + metrics + insights |
| *"Tạo dashboard KPI cho agency"* | KPI framework + visualization |
| *"Data này có gì bất thường?"* | Anomaly detection + root cause |
| *"Monthly report cho sếp"* | Executive summary + charts |

---

# Data Analyst — Từ Raw Data Đến Actionable Insights

> Data không có giá trị. INSIGHTS từ data mới có giá trị.

---

## 1. Data Analysis Process — DICE

```
D — DATA:     Thu thập, clean, transform
I — INSIGHTS: Tìm patterns, anomalies, trends
C — COMMUNICATE: Visualize, report, present
E — EXECUTE:   Recommendations → actions
```

---

## 2. Data Cleaning

### 2.1 Cleaning Checklist

```
□ Missing values: identify + handle (fill/drop/interpolate)
□ Duplicates: find + remove
□ Data types: correct types (dates, numbers, strings)
□ Outliers: identify + decide (keep/remove/cap)
□ Consistency: units, formats, naming conventions
□ Accuracy: spot-check against source
□ Completeness: all expected records present?
```

### 2.2 Common Cleaning Patterns (Python)

```python
import pandas as pd

# Load
df = pd.read_csv("data.csv")

# Quick overview
print(f"Shape: {df.shape}")
print(f"Missing:\n{df.isnull().sum()}")
print(f"Types:\n{df.dtypes}")
print(f"Duplicates: {df.duplicated().sum()}")

# Clean
df = df.drop_duplicates()
df['date'] = pd.to_datetime(df['date'])
df['amount'] = pd.to_numeric(df['amount'], errors='coerce')
df['amount'] = df['amount'].fillna(df['amount'].median())

# Outliers (IQR method)
Q1 = df['amount'].quantile(0.25)
Q3 = df['amount'].quantile(0.75)
IQR = Q3 - Q1
df = df[(df['amount'] >= Q1 - 1.5*IQR) & (df['amount'] <= Q3 + 1.5*IQR)]
```

---

## 3. Analysis Templates

### 3.1 Trading Performance Analysis

```yaml
trading_analysis:
  period: "[Month/Week]"
  
  summary:
    total_trades: 0
    winning_trades: 0
    losing_trades: 0
    win_rate: "0%"
    
    gross_profit: "$0"
    gross_loss: "$0"
    net_profit: "$0"
    
    profit_factor: 0         # Gross profit / Gross loss
    avg_win: "$0"
    avg_loss: "$0"
    rr_ratio: 0              # Avg win / Avg loss
    
    max_drawdown: "$0"
    max_drawdown_pct: "0%"
    
    sharpe_ratio: 0
    
  by_pair:
    - pair: "XAUUSD"
      trades: 0
      win_rate: "0%"
      net_pnl: "$0"
      
    - pair: "BTCUSD"
      trades: 0
      win_rate: "0%"
      net_pnl: "$0"
      
  by_session:
    london: { trades: 0, win_rate: "0%", pnl: "$0" }
    new_york: { trades: 0, win_rate: "0%", pnl: "$0" }
    asia: { trades: 0, win_rate: "0%", pnl: "$0" }
    
  by_day_of_week:
    mon: { trades: 0, pnl: "$0" }
    tue: { trades: 0, pnl: "$0" }
    wed: { trades: 0, pnl: "$0" }
    thu: { trades: 0, pnl: "$0" }
    fri: { trades: 0, pnl: "$0" }
    
  insights: []
  recommendations: []
```

### 3.2 Business KPI Dashboard

```yaml
kpi_dashboard:
  period: "[Month]"
  
  revenue:
    total: 0
    vs_target: "0%"
    vs_last_month: "0%"
    by_service:
      automation: 0
      chatbot: 0
      consulting: 0
      
  leads:
    new_leads: 0
    qualified: 0
    conversion_rate: "0%"
    cost_per_lead: 0
    
  clients:
    active: 0
    new: 0
    churned: 0
    nps_score: 0
    
  operations:
    projects_active: 0
    projects_completed: 0
    avg_delivery_days: 0
    client_satisfaction: "0/10"
    
  content:
    posts: 0
    engagement_rate: "0%"
    followers_gained: 0
    website_traffic: 0
```

### 3.3 XNK Performance Metrics

```yaml
xnk_metrics:
  period: "[Quarter]"
  
  sourcing:
    inquiries_received: 0
    quotes_sent: 0
    orders_confirmed: 0
    conversion_rate: "0%"
    avg_order_value: "$0"
    
  delivery:
    shipments: 0
    on_time_delivery: "0%"
    quality_pass_rate: "0%"
    claims: 0
    
  financial:
    total_revenue: "$0"
    gross_margin: "0%"
    avg_payment_days: 0
    outstanding_receivables: "$0"
```

---

## 4. Visualization Guidelines

### 4.1 Chart Selection

| Data Type | Best Chart | When |
|-----------|-----------|------|
| **Trend over time** | Line chart | Monthly revenue, P&L curve |
| **Comparison** | Bar chart | Revenue by service, win rate by pair |
| **Proportion** | Pie/donut | Revenue mix, trade distribution |
| **Distribution** | Histogram | Trade P&L distribution |
| **Correlation** | Scatter plot | Win rate vs position size |
| **KPI single value** | Card/gauge | Current drawdown, win rate |
| **Ranking** | Horizontal bar | Top performing pairs |

### 4.2 Dashboard Layout

```
┌──────────────────────────────────────────┐
│ HEADER: Period selector + refresh        │
├──────────┬──────────┬──────────┬─────────┤
│ Card:    │ Card:    │ Card:    │ Card:   │
│ Revenue  │ Trades   │ Win Rate │ DD      │
├──────────┴──────────┴──────────┴─────────┤
│ LINE CHART: P&L Curve (main visual)      │
├──────────────────────┬───────────────────┤
│ BAR: P&L by Pair     │ PIE: Trade Mix   │
├──────────────────────┴───────────────────┤
│ TABLE: Recent trades (sortable)          │
└──────────────────────────────────────────┘
```

### 4.3 Visualization Best Practices

```
✅ DO:
  - Title mỗi chart rõ ràng
  - Label axes
  - Highlight key numbers (bold, color)
  - Use consistent color scheme
  - Show trends (vs previous period)
  - Mobile-friendly (responsive)

❌ DON'T:
  - 3D charts (distort perception)
  - Pie charts > 5 slices
  - Truncated Y-axis (misleading)
  - Too many colors
  - Data without context
```

---

## 5. Report Templates

### 5.1 Executive Summary Report

```
════════════════════════════════════
  📊 [REPORT NAME]
  Period: [Date Range]
  Prepared by: Comarai Data Team
════════════════════════════════════

📌 KEY HIGHLIGHTS
  ✅ [Good news — metric up X%]
  ⚠️ [Concern — metric down Y%]
  🎯 [On track / Off track for target]

📈 PERFORMANCE SUMMARY
  [3-5 KPI cards with trend arrows]

📊 DETAILED ANALYSIS
  [Charts with short commentary]

💡 INSIGHTS & RECOMMENDATIONS
  1. [Insight → Recommendation → Expected impact]
  2. [Insight → Recommendation → Expected impact]
  3. [Insight → Recommendation → Expected impact]

⏩ NEXT STEPS
  - [Action 1 — owner — deadline]
  - [Action 2 — owner — deadline]
```

### 5.2 Trading Weekly Report

```
═══════ WEEKLY TRADING REPORT ═══════
  [Date Range]

💰 P&L: $[NET] (Target: $700/week)
📊 Trades: [X] total | [Y] win | [Z] loss
📈 Win Rate: [X]%
📉 Max DD: $[X] ([Y]%)

TOP PAIR: [XAUUSD] → $[X]
WORST PAIR: [BTCUSD] → -$[X]

BEST TRADE: [pair] [direction] +$[X] ([R] R)
WORST TRADE: [pair] [direction] -$[X]

⚡ SESSIONS:
  London: [X] trades, $[Y]
  New York: [X] trades, $[Y]

📝 NOTES:
  [What went well]
  [What to improve]
  [Adjustments for next week]
```

---

## 6. Tools & Stack

| Tool | Use Case | Cost |
|------|---------|------|
| **Python + Pandas** | Data cleaning, analysis | Free |
| **Matplotlib/Plotly** | Visualization | Free |
| **Google Sheets** | Quick analysis, sharing | Free |
| **Metabase** | Dashboards (SQL-based) | Free self-host |
| **n8n** | Automated data pipelines | Free self-host |
| **PostgreSQL** | Data storage | Free |

---

*Comarai.com — AI Automation Agency*
