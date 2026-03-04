---
name: comarai-code-reviewer
description: >
  Code review production-grade theo SPEAR framework: Security, Performance, Error Handling,
  Architecture, Reliability. Hỗ trợ Python, JavaScript, MQL5, SQL.
  Dùng khi: "review code này", "check security", "review EA MQL5",
  "code này có bug gì không", "tối ưu performance".
metadata:
  vi_triggers:
    - "review code này"
    - "check security"
    - "review EA MQL5"
    - "code này có bug gì"
    - "tối ưu performance"
    - "code quality check"
  author: "Comarai.com"
  version: "2.0.0"
  based_on: "Comarai original"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Review file EA MQL5 này"* | SPEAR analysis + MQL5-specific checks |
| *"Check security cho API endpoint Python"* | Security audit + recommendations |
| *"Code n8n node này chạy chậm"* | Performance profiling + optimization |
| *"Review toàn bộ project trước khi deploy"* | Full codebase audit + report |

---

# Code Reviewer Pro — SPEAR Framework

> Review code như senior engineer: có hệ thống, có evidence, có action items.

---

## 1. SPEAR Framework Overview

```
S — SECURITY      → Có lỗ hổng bảo mật nào không?
P — PERFORMANCE   → Code có chạy nhanh, efficient không?
E — ERROR HANDLING → Xử lý lỗi có đầy đủ, graceful không?
A — ARCHITECTURE  → Cấu trúc code có clean, maintainable không?
R — RELIABILITY   → Code có chạy ổn định, predictable không?
```

### 1.1 Review Process

```
1. ĐỌC — Đọc toàn bộ code 1 lượt (hiểu intent)
2. PHÂN TÍCH — Chạy SPEAR checklist
3. ĐÁNH GIÁ — Score mỗi dimension 0-10
4. BÁO CÁO — Issues + severity + recommendations
5. THEO DÕI — Verify fixes
```

---

## 2. Security Review (S)

### 2.1 Universal Security Checks

| Check | Severity | Tìm gì |
|-------|---------|--------|
| **Hardcoded secrets** | 🔴 Critical | API keys, passwords, tokens trong code |
| **SQL Injection** | 🔴 Critical | String concatenation trong queries |
| **XSS** | 🔴 Critical | Unescaped user input trong HTML output |
| **Auth bypass** | 🔴 Critical | Missing auth checks trên endpoints |
| **Path traversal** | 🟠 High | `../` trong file path operations |
| **SSRF** | 🟠 High | User-controlled URLs trong server requests |
| **Data exposure** | 🟠 High | Sensitive data trong logs/responses |
| **Dependency vulns** | 🟡 Medium | Outdated packages với known CVEs |
| **CORS misconfiguration** | 🟡 Medium | Wildcard CORS headers |
| **Rate limiting** | 🟡 Medium | No rate limit trên public endpoints |

### 2.2 Language-Specific Security

**Python:**
```python
# ❌ BAD — SQL Injection
query = f"SELECT * FROM users WHERE email = '{email}'"

# ✅ GOOD — Parameterized
cursor.execute("SELECT * FROM users WHERE email = %s", (email,))

# ❌ BAD — Hardcoded secret
API_KEY = "sk-1234567890"

# ✅ GOOD — Environment variable
API_KEY = os.getenv("API_KEY")

# ❌ BAD — Unsafe deserialization
data = pickle.loads(user_input)

# ✅ GOOD — Safe parsing
data = json.loads(user_input)

# ❌ BAD — Command injection
os.system(f"convert {filename}")

# ✅ GOOD — Safe subprocess
subprocess.run(["convert", filename], check=True)
```

**JavaScript/Node.js:**
```javascript
// ❌ BAD — Prototype pollution
Object.assign(target, userInput);

// ✅ GOOD — Safe merge
const safe = JSON.parse(JSON.stringify(userInput));

// ❌ BAD — eval
eval(userInput);

// ✅ GOOD — Never use eval with user input

// ❌ BAD — XSS
element.innerHTML = userInput;

// ✅ GOOD — Text content
element.textContent = userInput;
```

**MQL5 (Expert Advisors):**
```mql5
// ❌ BAD — No balance check before trade
OrderSend(request, result);

// ✅ GOOD — Verify balance
if(AccountInfoDouble(ACCOUNT_MARGIN_FREE) < requiredMargin) {
   Print("Insufficient margin");
   return;
}

// ❌ BAD — No SL on trade
request.sl = 0;  // No stop loss!

// ✅ GOOD — Always set SL
request.sl = NormalizeDouble(entry - slPips * _Point, _Digits);

// ❌ BAD — Hardcoded lot size
request.volume = 1.0;

// ✅ GOOD — Dynamic position sizing
request.volume = CalculateLotSize(riskPercent, slPips);
```

---

## 3. Performance Review (P)

### 3.1 Performance Checks

| Check | Impact | Tìm gì |
|-------|--------|--------|
| **N+1 queries** | 🔴 High | Loop chứa database call |
| **Missing index** | 🔴 High | WHERE clause trên unindexed column |
| **Memory leaks** | 🟠 Medium | Resources không close/cleanup |
| **Unnecessary computation** | 🟡 Low | Tính toán lặp lại trong loop |
| **Missing caching** | 🟡 Low | Repeated expensive calls |
| **Large payloads** | 🟡 Low | Fetch nhiều hơn cần thiết |

### 3.2 Common Performance Patterns

```python
# ❌ BAD — N+1 query
for user in users:
    orders = db.query(f"SELECT * FROM orders WHERE user_id = {user.id}")

# ✅ GOOD — Batch query
user_ids = [u.id for u in users]
orders = db.query("SELECT * FROM orders WHERE user_id IN (%s)", user_ids)

# ❌ BAD — Repeated computation in loop
for item in items:
    tax = calculate_complex_tax(region)  # Same region each time!
    item.total = item.price + tax

# ✅ GOOD — Compute once
tax = calculate_complex_tax(region)
for item in items:
    item.total = item.price + tax

# ❌ BAD — Load all then filter
all_data = db.query("SELECT * FROM huge_table")
filtered = [d for d in all_data if d.status == 'active']

# ✅ GOOD — Filter at query level
filtered = db.query("SELECT * FROM huge_table WHERE status = 'active'")
```

**MQL5 Performance:**
```mql5
// ❌ BAD — Calculate indicator every tick
void OnTick() {
    double ma = iMA(Symbol(), PERIOD_H1, 21, 0, MODE_EMA, PRICE_CLOSE);
    // ... heavy calculation on every tick
}

// ✅ GOOD — Only on new bar
void OnTick() {
    if(!IsNewBar()) return;
    double ma = iMA(Symbol(), PERIOD_H1, 21, 0, MODE_EMA, PRICE_CLOSE);
}

bool IsNewBar() {
    static datetime lastBar = 0;
    datetime currentBar = iTime(Symbol(), PERIOD_CURRENT, 0);
    if(currentBar != lastBar) { lastBar = currentBar; return true; }
    return false;
}
```

---

## 4. Error Handling Review (E)

### 4.1 Error Handling Checks

| Check | Finding | Fix |
|-------|---------|-----|
| **Bare except/catch** | Swallows all errors silently | Catch specific exceptions |
| **Missing try/catch** | Crash on error | Wrap risky operations |
| **Silent failures** | `except: pass` | Log + handle or re-raise |
| **No input validation** | Trust user input | Validate at boundary |
| **No timeout** | Hang forever | Set timeouts on HTTP/DB calls |
| **No retry logic** | One failure = permanent | Retry with backoff |

### 4.2 Error Handling Patterns

```python
# ❌ BAD — Bare except
try:
    result = api_call()
except:
    pass

# ✅ GOOD — Specific exceptions + logging
try:
    result = api_call()
except requests.Timeout:
    logger.warning("API timeout, retrying...")
    result = api_call()  # retry once
except requests.HTTPError as e:
    logger.error(f"API error: {e.response.status_code}")
    raise
except Exception as e:
    logger.error(f"Unexpected error: {e}", exc_info=True)
    raise

# ❌ BAD — No validation
def process_order(data):
    amount = data['amount']
    
# ✅ GOOD — Validate input
def process_order(data):
    if 'amount' not in data:
        raise ValueError("Missing required field: amount")
    amount = data['amount']
    if not isinstance(amount, (int, float)) or amount <= 0:
        raise ValueError(f"Invalid amount: {amount}")
```

**MQL5 Error Handling:**
```mql5
// ❌ BAD — No error check after OrderSend
OrderSend(request, result);
// Continue assuming success...

// ✅ GOOD — Full error handling
if(!OrderSend(request, result)) {
    int error = GetLastError();
    PrintFormat("OrderSend failed: error %d, retcode %d", error, result.retcode);
    
    if(result.retcode == TRADE_RETCODE_REQUOTE) {
        // Requote — retry with new price
        Sleep(500);
        return RetryOrder(request, result);
    }
    return false;
}
```

---

## 5. Architecture Review (A)

### 5.1 Architecture Checks

| Check | Tìm gì | Best Practice |
|-------|--------|--------------|
| **Single Responsibility** | 1 function/class quá nhiều việc | Split thành focused units |
| **DRY violations** | Copy-paste code | Extract shared logic |
| **Coupling** | Module A depends trực tiếp Module B | Interface/abstraction layer |
| **Naming** | `x`, `temp`, `data` | Descriptive: `user_email`, `active_orders` |
| **File organization** | 1 file 1000+ dòng | Split by feature/domain |
| **Magic numbers** | `if x > 42` | Constants: `MAX_RETRIES = 42` |

### 5.2 Architecture Scoring

| Criteria | Score 0-10 | Hỏi |
|---------|-----------|------|
| Readability | | Có hiểu code ngay lần đọc đầu? |
| Modularity | | Có thể thay 1 phần mà không ảnh hưởng phần khác? |
| Testability | | Có thể viết unit test dễ dàng? |
| Extensibility | | Thêm feature mới có dễ không? |
| Documentation | | Comments/docstrings đủ? |

---

## 6. Reliability Review (R)

### 6.1 Reliability Checks

| Check | Risk | Mitigation |
|-------|------|-----------|
| **Race conditions** | Data corruption | Locks, atomic operations |
| **Resource leaks** | Memory/connection exhaustion | Context managers, finally blocks |
| **Idempotency** | Duplicate execution effects | Idempotency keys, upserts |
| **Graceful shutdown** | Corrupted state | Signal handlers, cleanup |
| **Configuration** | Hardcoded env-specific values | Environment variables |

### 6.2 Reliability Patterns

```python
# ❌ BAD — Resource leak
file = open("data.csv")
data = file.read()
# file never closed if exception occurs

# ✅ GOOD — Context manager
with open("data.csv") as file:
    data = file.read()

# ❌ BAD — No idempotency
def process_payment(order_id, amount):
    charge(amount)  # Called twice = charged twice!
    
# ✅ GOOD — Idempotent
def process_payment(order_id, amount):
    if already_processed(order_id):
        return get_existing_result(order_id)
    result = charge(amount)
    mark_processed(order_id, result)
    return result
```

---

## 7. Review Report Format

### 7.1 Report Template

```
════════════════════════════════════
  📋 CODE REVIEW REPORT
  File: [filename]
  Reviewer: Comarai Code Review
  Date: [date]
════════════════════════════════════

🏆 SPEAR SCORE: [XX]/50

  S — Security:       [X]/10
  P — Performance:    [X]/10
  E — Error Handling: [X]/10
  A — Architecture:   [X]/10
  R — Reliability:    [X]/10

━━━ 🔴 CRITICAL ISSUES ━━━
1. [File:Line] [Description]
   Fix: [Specific recommendation]

━━━ 🟠 HIGH ISSUES ━━━
1. [File:Line] [Description]
   Fix: [Specific recommendation]

━━━ 🟡 MEDIUM ISSUES ━━━
1. [File:Line] [Description]
   Fix: [Specific recommendation]

━━━ 🟢 LOW / SUGGESTIONS ━━━
1. [File:Line] [Description]

━━━ ✅ POSITIVES ━━━
- [What's done well #1]
- [What's done well #2]

━━━ 📊 VERDICT ━━━
[PASS / PASS WITH CONDITIONS / FAIL]
Action items: [N] critical, [N] high, [N] medium
```

### 7.2 Verdict Criteria

| Score | Verdict | Action |
|-------|---------|--------|
| **45-50** | ✅ PASS | Ship it |
| **35-44** | ⚠️ PASS WITH CONDITIONS | Fix highs, ship in next sprint |
| **25-34** | 🔶 MAJOR REVISION | Fix criticals + highs before ship |
| **<25** | ❌ FAIL | Significant rework required |

---

## 8. Quick Checklists — Copy-Paste Ready

### 8.1 Pre-Commit Checklist

```
□ No hardcoded secrets/API keys
□ No console.log/print() debug statements
□ All error paths handled
□ Input validation on user-facing functions
□ Functions < 50 lines
□ Files < 300 lines
□ Variable names are descriptive
□ No commented-out code blocks
□ Dependencies are pinned versions
□ README updated if needed
```

### 8.2 Pre-Deploy Checklist

```
□ All pre-commit checks pass
□ Tests pass (if exist)
□ No new warnings
□ Environment variables configured
□ Database migrations applied
□ Rollback plan documented
□ Monitoring alerts configured
□ Rate limits configured
□ CORS settings verified
□ HTTPS enforced
```

### 8.3 MQL5 EA Pre-Live Checklist

```
□ All trades have Stop Loss
□ Position sizing is dynamic (not hardcoded lots)
□ Spread filter active
□ News filter active (NFP, FOMC)
□ Session filter active (no dead zone trading)
□ Max concurrent trades limited
□ No Martingale/Grid logic
□ Error handling after every OrderSend
□ IsNewBar() check (no unnecessary tick processing)
□ Backtested ≥6 months with realistic spread
□ Forward tested on demo ≥2 weeks
□ Drawdown <25% in backtest
□ Profit factor >1.5
□ Magic number unique per EA instance
```

---

## 9. SQL Review Patterns

### 9.1 SQL Security Checks

```sql
-- ❌ BAD — Dynamic SQL susceptible to injection
EXECUTE('SELECT * FROM users WHERE name = ''' + @name + '''')

-- ✅ GOOD — Parameterized query
SELECT * FROM users WHERE name = @name

-- ❌ BAD — Wildcard SELECT
SELECT * FROM orders WHERE customer_id = 123

-- ✅ GOOD — Explicit columns
SELECT order_id, total, status FROM orders WHERE customer_id = 123

-- ❌ BAD — No LIMIT on potentially large result set
SELECT * FROM logs WHERE created_at > '2025-01-01'

-- ✅ GOOD — Always LIMIT
SELECT * FROM logs WHERE created_at > '2025-01-01' LIMIT 1000
```

### 9.2 SQL Performance Checks

| Smell | Impact | Fix |
|-------|--------|-----|
| Missing WHERE clause on UPDATE/DELETE | 🔴 Catastrophic | ALWAYS have WHERE |
| SELECT * | 🟡 Waste | Select only needed columns |
| No INDEX on JOIN/WHERE columns | 🔴 Slow | Add appropriate indexes |
| Nested subqueries | 🟡 Slow | Convert to JOINs or CTEs |
| ORDER BY without LIMIT | 🟡 Slow | Add LIMIT for pagination |

---

## 10. n8n Code Node Review

### 10.1 Code Node Best Practices

```javascript
// ❌ BAD — No error handling in Code node
const response = await fetch(url);
const data = await response.json();
return [{ json: data }];

// ✅ GOOD — Full error handling
try {
  const response = await fetch(url, { 
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
  });
  
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  
  const data = await response.json();
  
  if (!data || Object.keys(data).length === 0) {
    throw new Error('Empty response from API');
  }
  
  return [{ json: { ...data, _fetched_at: new Date().toISOString() } }];
  
} catch (error) {
  // Return error info instead of crashing workflow
  return [{ json: { 
    error: true, 
    message: error.message,
    url: url,
    timestamp: new Date().toISOString()
  }}];
}
```

### 10.2 n8n Code Node Checklist

```
□ Null/undefined checks trên $input.first().json fields
□ Try/catch wrapper toàn bộ logic
□ Meaningful error messages (không chỉ "Error")
□ Logging quan trọng (để debug production)
□ Return format đúng: [{ json: {...} }]
□ Không hardcode URLs/keys (dùng $env hoặc credentials)
□ Xử lý edge case: empty input, missing fields
□ Timeout cho external calls
□ Rate limit awareness (delay nếu cần)
```

---

