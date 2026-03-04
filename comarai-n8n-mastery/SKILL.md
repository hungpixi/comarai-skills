---
name: comarai-n8n-mastery
description: >
  Xây dựng n8n workflows production-grade: triggers, architecture, error handling,
  data transformation, sub-workflows, state management, AI integration, monitoring.
  Tối ưu cho Comarai automation stack (self-hosted Coolify).
  Dùng khi: "tạo workflow n8n", "xử lý lỗi trong n8n", "kết nối API", "sub-workflow",
  "tự động hóa quy trình", "n8n + AI", "webhook setup".
metadata:
  vi_triggers:
    - "tạo workflow n8n"
    - "xử lý lỗi n8n"
    - "kết nối API trong n8n"
    - "sub-workflow n8n"
    - "tự động hóa quy trình"
    - "n8n AI integration"
    - "webhook setup n8n"
    - "n8n best practices"
  author: "Comarai.com"
  version: "2.0.0"
  based_on: "Comarai original"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Tạo workflow nhận lead từ form → gửi vào Telegram"* | Step-by-step workflow + error handling |
| *"n8n bị fail khi gọi API, fix thế nào?"* | Error handling pattern + retry config |
| *"Build workflow trading alert: signal → analyze → notify"* | Sub-workflow architecture |
| *"Kết nối n8n với Gemini API"* | AI node config + prompt template |
| *"Setup cron job check email mỗi 30 phút"* | Schedule trigger + dedup logic |

---

# n8n Mastery — Production-Grade Workflow Automation

> Từ "kéo thả test xong quên" → "workflow chạy 24/7, tự heal, tự report".

---

## 1. Architecture Principles

### 1.1 Workflow Naming Convention

```
[trigger-type]-[domain]-[action]-[version]

Ví dụ:
  webhook-lead-capture-v1
  cron-trading-daily-report-v2
  event-email-autorespond-v1
  manual-content-generate-v1
```

### 1.2 Workflow Categories

| Type | Trigger | Ví dụ |
|------|---------|-------|
| **Reactive** | Webhook, Email | Lead form → CRM + Notification |
| **Scheduled** | Cron | Daily trading report, weekly digest |
| **Event-driven** | Database change, API event | New order → fulfillment |
| **Manual** | Button trigger | Generate proposal, run audit |
| **Sub-workflow** | Called by parent | Reusable: send email, enrich lead |

### 1.3 Workflow Complexity Tiers

| Tier | Nodes | Branching | Error Handling | Ví dụ |
|------|-------|-----------|---------------|-------|
| **Simple** | 3-5 | None | Basic | Form → Telegram notify |
| **Standard** | 5-15 | If/Switch | Try/Catch | Lead capture → enrich → CRM |
| **Complex** | 15-30 | Multi-branch | Full | Multi-step sales pipeline |
| **Enterprise** | 30+ | Sub-workflows | Custom | Multi-agent orchestration |

---

## 2. Trigger Patterns

### 2.1 Webhook Triggers

```yaml
webhook_best_practices:
  # LUÔN LÀM
  - validate_payload: true           # Check required fields
  - respond_immediately: true        # 200 OK trước, xử lý sau
  - log_incoming: true               # Log raw payload để debug
  - idempotency_key: "request_id"    # Tránh duplicate processing
  
  # SECURITY
  - auth_method: "header_token"      # Hoặc HMAC signature
  - allowed_ips: ["specific_ips"]    # Whitelist nếu biết source
  - rate_limit: "100/minute"
  
  # FORMAT
  webhook_path: "/lead-capture"      # Descriptive, kebab-case
  http_method: "POST"
  response_mode: "immediately"       # Không để client chờ
```

**Webhook Validation Node (đặt ngay sau trigger):**
```javascript
// Validate required fields
const required = ['name', 'email', 'phone'];
const missing = required.filter(f => !$input.first().json[f]);

if (missing.length > 0) {
  throw new Error(`Missing fields: ${missing.join(', ')}`);
}

// Sanitize
return [{
  json: {
    name: $input.first().json.name.trim(),
    email: $input.first().json.email.toLowerCase().trim(),
    phone: $input.first().json.phone.replace(/\D/g, ''),
    source: $input.first().json.source || 'website',
    timestamp: new Date().toISOString()
  }
}];
```

### 2.2 Schedule/Cron Triggers

```yaml
cron_patterns:
  # COMMON PATTERNS (n8n cron format)
  every_5_min: "*/5 * * * *"
  every_30_min: "*/30 * * * *"
  every_hour: "0 * * * *"
  daily_9am_vn: "0 2 * * *"         # UTC 2:00 = VN 9:00
  daily_6pm_vn: "0 11 * * *"        # UTC 11:00 = VN 18:00
  weekdays_only: "0 2 * * 1-5"      # Mon-Fri 9:00 VN
  weekly_monday: "0 2 * * 1"        # Monday 9:00 VN
  
  # TIPS
  timezone_note: "n8n dùng UTC. VN = UTC+7. Trừ 7 giờ khi set cron"
  stagger_jobs: "Đừng set nhiều cron cùng giờ. Spread ra ±5 phút"
```

### 2.3 Event Triggers

| Trigger | Use Case | n8n Node |
|---------|---------|----------|
| **Email IMAP** | Check inbox mới | Email Trigger (IMAP) |
| **Telegram** | Bot command/message | Telegram Trigger |
| **Database** | Row change/insert | Postgres Trigger hoặc Poll |
| **File** | New file uploaded | S3/FTP Trigger |
| **RSS** | New content published | RSS Feed Read |

---

## 3. Data Transformation Patterns

### 3.1 JSON Mapping

```javascript
// PATTERN: Map API response thành format chuẩn
const items = $input.all().map(item => ({
  json: {
    id: item.json.id,
    name: `${item.json.firstName} ${item.json.lastName}`,
    email: item.json.emailAddress?.toLowerCase(),
    company: item.json.company?.name || 'Unknown',
    score: calculateScore(item.json),
    created: new Date().toISOString()
  }
}));

function calculateScore(data) {
  let score = 0;
  if (data.title?.match(/CEO|CTO|VP|Director/i)) score += 20;
  if (data.company?.employeeCount > 50) score += 15;
  if (data.emailAddress) score += 10;
  return score;
}

return items;
```

### 3.2 Deduplication Pattern

```javascript
// PATTERN: Deduplicate leads by email
const seen = new Set();
const unique = [];

for (const item of $input.all()) {
  const key = item.json.email?.toLowerCase();
  if (key && !seen.has(key)) {
    seen.add(key);
    unique.push(item);
  }
}

return unique;
```

### 3.3 Batch Processing

```javascript
// PATTERN: Process items in batches of N
const batchSize = 10;
const items = $input.all();
const batches = [];

for (let i = 0; i < items.length; i += batchSize) {
  batches.push({
    json: {
      batch: items.slice(i, i + batchSize).map(item => item.json),
      batchIndex: Math.floor(i / batchSize),
      totalBatches: Math.ceil(items.length / batchSize)
    }
  });
}

return batches;
```

### 3.4 Date/Time Handling (VN Timezone)

```javascript
// PATTERN: Convert UTC → VN time
function toVN(utcDate) {
  return new Date(new Date(utcDate).getTime() + 7 * 60 * 60 * 1000);
}

// Format đẹp cho Telegram/Zalo messages
function formatVN(date) {
  const vn = toVN(date);
  return `${vn.getDate()}/${vn.getMonth() + 1}/${vn.getFullYear()} ${vn.getHours()}:${String(vn.getMinutes()).padStart(2, '0')}`;
}

// Check business hours VN
function isBusinessHoursVN() {
  const vnHour = toVN(new Date()).getHours();
  return vnHour >= 8 && vnHour < 18;
}
```

---

## 4. Error Handling — Xử Lý Lỗi

### 4.1 Error Handling Architecture

```
┌─────────────┐
│  Main Flow  │
├─────────────┤
│  Try Node   │
│     │       │
│  [workflow] │──── Success ──── Continue
│     │       │
│  Catch Node │──── Error ──┐
└─────────────┘             │
                            ▼
              ┌─────────────────────┐
              │  Error Handler      │
              ├─────────────────────┤
              │ 1. Log error detail │
              │ 2. Classify severity│
              │ 3. Retry if retryable│
              │ 4. Alert if critical│
              │ 5. Store for review │
              └─────────────────────┘
```

### 4.2 Error Classification

```javascript
// PATTERN: Classify errors for appropriate handling
function classifyError(error) {
  const message = error.message?.toLowerCase() || '';
  
  // RETRYABLE (tự retry)
  if (message.includes('timeout') || 
      message.includes('rate limit') || 
      message.includes('429') ||
      message.includes('503') ||
      message.includes('econnreset')) {
    return { type: 'retryable', action: 'retry', delay: 30000 };
  }
  
  // AUTH ERROR (cần fix credentials)
  if (message.includes('401') || 
      message.includes('403') || 
      message.includes('unauthorized')) {
    return { type: 'auth', action: 'alert', severity: 'high' };
  }
  
  // DATA ERROR (input sai)
  if (message.includes('400') || 
      message.includes('validation') ||
      message.includes('invalid')) {
    return { type: 'data', action: 'log_skip', severity: 'medium' };
  }
  
  // UNKNOWN (cần review)
  return { type: 'unknown', action: 'alert', severity: 'high' };
}
```

### 4.3 Retry Pattern

```yaml
retry_config:
  max_retries: 3
  retry_delays: [5000, 15000, 60000]   # 5s, 15s, 60s (exponential)
  
  # n8n node settings:
  #   Retry On Fail: On
  #   Max Tries: 3
  #   Wait Between Tries: 5000ms
  
  # CUSTOM retry cho rate-limited APIs:
  rate_limit_handling:
    check_header: "x-ratelimit-remaining"
    if_zero: "wait x-ratelimit-reset seconds"
    fallback: "wait 60 seconds"
```

### 4.4 Alert Node Template

```javascript
// PATTERN: Send error alert via Telegram
const error = $input.first().json;

const message = `🚨 *WORKFLOW ERROR*
━━━━━━━━━━━━━━━━
📋 Workflow: ${$workflow.name}
⚠️ Error: ${error.message}
📍 Node: ${error.node || 'Unknown'}
🕐 Time: ${formatVN(new Date())}
🔄 Retries: ${error.retryCount || 0}/3

${error.severity === 'high' ? '‼️ CẦN XỬ LÝ NGAY' : '📝 Review khi rảnh'}`;

return [{ json: { chatId: ADMIN_CHAT_ID, text: message } }];
```

---

## 5. Sub-Workflow Architecture

### 5.1 Khi Nào Dùng Sub-Workflows

| Use Case | Main Workflow | Sub-Workflow |
|----------|-------------|-------------|
| Gửi thông báo | Lead capture | `sub-send-telegram-notify` |
| Enrich dữ liệu | Any pipeline | `sub-enrich-company-data` |
| AI processing | Content generation | `sub-ai-gemini-call` |
| Email sending | Outreach campaign | `sub-send-email-template` |
| Error logging | Any workflow | `sub-log-error` |

### 5.2 Sub-Workflow Design Rules

```yaml
sub_workflow_rules:
  naming: "sub-[domain]-[action]"             # VD: sub-lead-enrich
  input_contract: "Document ALL expected fields in description"
  output_contract: "Always return consistent schema"
  error_handling: "Sub-workflow PHẢI throw error, KHÔNG swallow"
  stateless: true                              # Không giữ state nội bộ
  timeout: 120                                 # Seconds max
  
  # INPUT VALIDATION (node đầu tiên trong sub-workflow)
  first_node: "Validate Input → throw if missing required fields"
```

### 5.3 Sub-Workflow Example: AI Gemini Call

```javascript
// sub-ai-gemini-call
// Input: { prompt, model, max_tokens, temperature }

// Node 1: Validate
const input = $input.first().json;
if (!input.prompt) throw new Error('Missing prompt');

const model = input.model || 'gemini-2.0-flash';
const maxTokens = input.max_tokens || 2048;
const temperature = input.temperature || 0.7;

// Node 2: HTTP Request → Gemini API
// URL: https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent
// Method: POST
// Headers: Content-Type: application/json
// Body:
{
  "contents": [{ 
    "parts": [{ "text": input.prompt }] 
  }],
  "generationConfig": {
    "maxOutputTokens": maxTokens,
    "temperature": temperature
  }
}

// Node 3: Extract response
const response = $input.first().json;
const text = response.candidates?.[0]?.content?.parts?.[0]?.text || '';
const tokens_used = response.usageMetadata?.totalTokenCount || 0;

return [{
  json: {
    result: text,
    tokens_used: tokens_used,
    cost_estimate: tokens_used * 0.000001,  // Rough estimate
    model: model,
    timestamp: new Date().toISOString()
  }
}];
```

---

## 6. Credential & Security

### 6.1 Credential Management

```yaml
credential_rules:
  # NEVER
  never:
    - "Hardcode API keys trong Code nodes"
    - "Log credentials trong error messages"
    - "Share n8n instance credentials giữa environments"
    - "Commit .env files hoặc n8n database files"
  
  # ALWAYS
  always:
    - "Dùng n8n Credentials Manager cho tất cả secrets"
    - "Rotate API keys mỗi 90 ngày"
    - "Dùng separate credentials cho dev/staging/prod"
    - "Set environment variables cho sensitive configs"
    
  # SELF-HOSTED SPECIFIC (Coolify)
  coolify:
    - "Env vars trong Coolify dashboard, KHÔNG trong docker-compose"
    - "Enable encryption at rest cho n8n database"
    - "Restrict n8n UI access qua Cloudflare tunnel + auth"
    - "Backup n8n database daily (PostgreSQL dump)"
```

### 6.2 Webhook Security

```javascript
// PATTERN: HMAC signature verification
const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(JSON.stringify(payload)).digest('hex');
  return `sha256=${digest}` === signature;
}

// Trong webhook validation node:
const signature = $input.first().headers['x-signature'];
const isValid = verifyWebhookSignature(
  $input.first().json, 
  signature, 
  'your-webhook-secret'  // Lấy từ Credentials, KHÔNG hardcode
);

if (!isValid) {
  throw new Error('Invalid webhook signature');
}
```

---

## 7. Monitoring & Observability

### 7.1 Health Check Workflow

```yaml
workflow_health_check:
  name: "cron-system-health-check-v1"
  schedule: "*/30 * * * *"  # Mỗi 30 phút
  
  checks:
    - name: "n8n API responsive"
      method: "HTTP GET /healthz"
      timeout: 5000
      
    - name: "Database connected"
      method: "PostgreSQL query: SELECT 1"
      timeout: 3000
      
    - name: "Gemini API"
      method: "HTTP POST (tiny prompt)"
      timeout: 10000
      
    - name: "Telegram Bot"
      method: "getMe API call"
      timeout: 5000
  
  on_failure:
    alert: "Telegram admin group"
    cooldown: "30 phút giữa alerts cùng loại"
```

### 7.2 Execution Metrics Dashboard

```javascript
// PATTERN: Log workflow metrics cho tracking
// Đặt node này cuối mỗi workflow

const metrics = {
  workflow_name: $workflow.name,
  execution_id: $execution.id,
  status: 'success',
  items_processed: $input.all().length,
  started_at: $execution.startedAt,
  duration_ms: Date.now() - new Date($execution.startedAt).getTime(),
  timestamp: new Date().toISOString()
};

// Gửi vào PostgreSQL/Google Sheets để track
return [{ json: metrics }];
```

### 7.3 Daily Report Workflow

```
WORKFLOW: cron-daily-workflow-report-v1
SCHEDULE: 0 11 * * * (18:00 VN mỗi ngày)

1. Query n8n API: GET /executions?lastId=&limit=100
2. Filter: last 24 hours
3. Aggregate:
   - Total executions
   - Success / Failed / Waiting
   - Per-workflow breakdown
   - Total items processed
   - API costs estimate
4. Format Telegram message:

"📊 *Daily Workflow Report*
━━━━━━━━━━━━━━━━━
📅 ${formatVN(new Date())}

✅ Success: ${success}
❌ Failed: ${failed}
⏳ Running: ${running}

📈 Top Workflows:
${topWorkflows.map(w => `  • ${w.name}: ${w.count}x`).join('\n')}

${failed > 0 ? `⚠️ Failed Workflows:\n${failedList}` : '🎉 All clear!'}

💰 Estimated API cost: $${totalCost.toFixed(2)}"
```

---

## 8. Production Workflow Templates

### 8.1 Lead Capture Pipeline

```yaml
template_lead_capture:
  name: "webhook-lead-capture-v1"
  nodes:
    1_trigger: "Webhook Trigger (/lead-capture)"
    2_validate: "Code: validate required fields"
    3_dedup: "Code: check email exists in CRM"
    4_enrich: "Sub-workflow: sub-lead-enrich"
    5_score: "Code: calculate lead score"
    6_branch:
      tier_a: "→ Telegram alert + Priority CRM tag"
      tier_b: "→ CRM add + Email sequence start"
      tier_c: "→ CRM add + Newsletter"
    7_log: "Google Sheets: log all leads"
    8_respond: "Respond to Webhook: 200 OK"
  
  error_handling:
    catch: "Log error + Telegram alert + return 500"
```

### 8.2 Trading Signal Alert

```yaml
template_trading_alert:
  name: "cron-trading-signal-check-v1"
  schedule: "*/5 * * * *"  # Mỗi 5 phút (khi market open)
  
  nodes:
    1_trigger: "Cron Trigger"
    2_check_session: "Code: isMarketOpen() → skip if closed"
    3_fetch_signals: "HTTP: Get signals from Telegram/API"
    4_parse: "Code: extract symbol, direction, entry, SL, TP"
    5_analyze: "Sub-workflow: sub-ai-gemini-call (analyze signal)"
    6_score: "Code: confluence score -9 to +9"
    7_branch:
      strong_signal: "→ Telegram alert (full analysis)"
      weak_signal: "→ Log only"
    8_journal: "Google Sheets: log signal + analysis"
  
  market_hours:
    london: "14:00-22:00 VN"
    ny: "19:30-02:00 VN"
    skip: "02:00-07:00 VN"
```

### 8.3 Content Pipeline

```yaml
template_content_pipeline:
  name: "cron-content-daily-v1"
  schedule: "0 1 * * *"   # 08:00 VN mỗi ngày
  
  nodes:
    1_trigger: "Cron Trigger"
    2_check_calendar: "Google Sheets: what's scheduled today?"
    3_fetch_trends: "HTTP: trending topics (TikTok, Google)"
    4_generate: "Sub-workflow: sub-ai-gemini-call (content gen)"
    5_format: "Code: format for TikTok script/carousel"
    6_review_queue: "Telegram: send to admin for approval"
    7_on_approve: "Schedule post (via Buffer/Later API)"
    8_log: "Google Sheets: content log + performance tracking"
```

### 8.4 Email Autoresponder

```yaml
template_email_autorespond:
  name: "event-email-autorespond-v1"
  trigger: "IMAP Email Trigger (new email in inbox)"
  
  nodes:
    1_trigger: "Email Trigger (IMAP)"
    2_classify: "Sub-workflow: sub-ai-gemini-call (classify email)"
    3_branch:
      inquiry: "→ Auto-reply with template + log"
      support: "→ Create ticket + assign + acknowledge"
      spam: "→ Archive + skip"
      important: "→ Telegram alert + no auto-reply"
    4_respond: "Send Email: personalized auto-reply"
    5_crm: "Update CRM with interaction"
    6_log: "Google Sheets: email log"
```

### 8.5 Client Report Generator

```yaml
template_client_report:
  name: "cron-client-monthly-report-v1"
  schedule: "0 2 1 * *"   # Ngày 1 hàng tháng, 09:00 VN
  
  nodes:
    1_trigger: "Cron Trigger"
    2_clients: "Google Sheets: get active clients list"
    3_loop: "For each client:"
    4_metrics: "Aggregate: workflow runs, items processed, errors"
    5_generate: "Sub-workflow: sub-ai-gemini-call (write report)"
    6_format: "Code: format HTML email report"
    7_send: "Send Email: monthly report to client"
    8_log: "Google Sheets: report sent log"
```

---

## 9. Performance Optimization

### 9.1 Node Optimization Tips

| Vấn đề | Giải pháp |
|--------|----------|
| Workflow chậm | Split thành parallel branches (IF node) |
| Too many API calls | Batch requests, cache responses |
| Memory issues | Process items in batches of 50-100 |
| Timeout errors | Tăng timeout, dùng async patterns |
| Duplicate processing | Add idempotency checks (hash input) |

### 9.2 Cost Optimization

```yaml
cost_optimization:
  ai_calls:
    - "Dùng Flash model cho simple tasks, Pro cho complex"
    - "Cache AI responses cho identical inputs (24h TTL)"
    - "Batch prompts khi có thể (5 items = 1 call thay vì 5 calls)"
    - "Set max_tokens thấp nhất có thể"
    
  api_calls:
    - "Rate limit outgoing calls (1 call/second max)"
    - "Cache API responses (Redis hoặc in-memory)"
    - "Dùng webhooks thay vì polling khi possible"
    
  database:
    - "Batch inserts (10-50 rows/query)"
    - "Index frequently queried columns"
    - "Archive old data monthly"
```

---

## 10. Troubleshooting Quick Reference

| Lỗi | Nguyên nhân | Fix |
|------|-----------|-----|
| "Workflow could not be started" | Trigger config sai | Check webhook URL, cron syntax |
| "Connection lost" | API key expired | Rotate credential |
| "Execution timed out" | Processing quá lâu | Tăng timeout hoặc split workflow |
| "Too many requests" | Rate limit hit | Add Wait node (delay) |
| "Cannot read property of undefined" | Data structure thay đổi | Add null checks: `item?.field || 'default'` |
| "ECONNRESET" | Network hiccup | Enable retry (3x, exponential) |
| "Insufficient quota" | API quota hết | Check billing, upgrade plan |
| "Invalid JSON" | Response không phải JSON | Wrap trong try/catch, check content-type |

---

