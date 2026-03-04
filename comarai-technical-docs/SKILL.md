---
name: comarai-technical-docs
description: >
  Viết tài liệu kỹ thuật: API docs, README, changelogs, architecture docs, SOPs, runbooks.
  Dùng khi: "viết README", "API documentation", "changelog", "architecture doc", "SOP".
metadata:
  vi_triggers:
    - "viết README"
    - "API documentation"
    - "changelog"
    - "architecture doc"
    - "viết SOP"
    - "technical writing"
  author: "Comarai.com"
  version: "2.0.0"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Viết README cho project trading bot"* | Full README: overview + setup + usage |
| *"Document API endpoint /api/signals"* | OpenAPI spec + examples |
| *"Viết SOP quy trình deploy lên Coolify"* | Step-by-step SOP |
| *"Changelog version 2.0.0"* | Formatted changelog entry |

---

# Technical Documentation — Viết Docs Người Khác Thực Sự Đọc

> Docs tốt = ít support requests. Docs tệ = inbox đầy câu hỏi.

---

## 1. README.md Template

### 1.1 Full README

```markdown
# 📦 [Project Name]

> [1 sentence — project làm gì]

[Optional: badges — build, version, license]

## ✨ Features
- [Feature 1 — giải thích value, not feature name]
- [Feature 2]
- [Feature 3]

## 🚀 Quick Start

### Prerequisites
- [Tool 1] version [X]+
- [Tool 2]

### Installation
\`\`\`bash
git clone https://github.com/[YOUR_GITHUB]/[project].git
cd [project]
npm install
cp .env.example .env
# Edit .env with your values
npm run dev
\`\`\`

### Environment Variables
| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `API_KEY` | Yes | Gemini API key | `AIza...` |
| `DB_URL` | Yes | PostgreSQL URL | `postgres://...` |

## 📖 Usage

### Basic Example
\`\`\`python
# [Minimal working example]
\`\`\`

### Advanced Example
\`\`\`python
# [Feature showcase]
\`\`\`

## 🏗️ Architecture
\`\`\`
[Simple ASCII diagram]
\`\`\`

## 📁 Project Structure
\`\`\`
project/
├── src/           # Core source
├── tests/         # Test files
├── docs/          # Documentation
├── config/        # Configuration
└── scripts/       # Utility scripts
\`\`\`

## 🤝 Contributing
[How to contribute]

## 📝 License
[License type]

## 👤 Author
**Phạm Phú Nguyễn Hưng** — [Comarai.com](https://comarai.com)
- GitHub: [@[YOUR_GITHUB]](https://github.com/[YOUR_GITHUB])
- Email: [YOUR_EMAIL]
```

### 1.2 README Quality Checklist

```
□ Someone can install + run in under 5 minutes?
□ All env variables documented?
□ At least 1 working code example?
□ Architecture diagram (even simple ASCII)?
□ No broken links?
□ Screenshots/demo (if UI)?
□ License specified?
□ Contact/author info?
```

---

## 2. API Documentation

### 2.1 Endpoint Documentation Template

```yaml
endpoint:
  method: "POST"
  path: "/api/v1/signals"
  description: "Create a new trading signal"
  
  headers:
    Authorization: "Bearer {token}"
    Content-Type: "application/json"
  
  request_body:
    type: "object"
    required: ["symbol", "direction", "entry_price"]
    properties:
      symbol:
        type: "string"
        example: "XAUUSD"
        description: "Trading pair symbol"
      direction:
        type: "string"
        enum: ["BUY", "SELL"]
      entry_price:
        type: "number"
        example: 2650.50
      stop_loss:
        type: "number"
        example: 2640.00
      take_profit:
        type: "number"
        example: 2670.00
        
  responses:
    201:
      description: "Signal created successfully"
      body:
        id: "sig_abc123"
        status: "active"
        created_at: "2026-03-04T10:00:00Z"
    400:
      description: "Invalid request"
      body:
        error: "validation_error"
        message: "entry_price is required"
    401:
      description: "Unauthorized"
      
  example_curl: |
    curl -X POST https://api.comarai.com/v1/signals \
      -H "Authorization: Bearer sk_test_123" \
      -H "Content-Type: application/json" \
      -d '{
        "symbol": "XAUUSD",
        "direction": "BUY",
        "entry_price": 2650.50,
        "stop_loss": 2640.00,
        "take_profit": 2670.00
      }'
```

### 2.2 Error Code Reference

```
| Code | Name | Description | Fix |
|------|------|-------------|-----|
| 400 | Bad Request | Invalid parameters | Check request body |
| 401 | Unauthorized | Missing/invalid token | Check API key |
| 403 | Forbidden | Insufficient permissions | Check role |
| 404 | Not Found | Resource doesn't exist | Check ID/path |
| 429 | Too Many Requests | Rate limit exceeded | Wait + retry |
| 500 | Server Error | Internal error | Contact support |
```

---

## 3. Changelog Format

### 3.1 Keep a Changelog Standard

```markdown
# Changelog

## [2.0.0] - 2026-03-04

### Added
- AI chatbot integration with n8n webhook
- Trading signal dashboard with real-time updates
- Vietnamese language support

### Changed  
- Upgraded PostgreSQL connection to use connection pooling
- Improved error handling in OrderSend function

### Fixed
- Fixed Ichimoku signal not triggering on cloud-break events
- Fixed session filter timezone calculation

### Removed
- Deprecated REST API v1 endpoints

### Security
- Updated dependencies to patch CVE-2026-XXXX
```

### 3.2 Semantic Versioning

```
MAJOR.MINOR.PATCH

MAJOR = Breaking changes (API signature changed)
MINOR = New features (backwards compatible)
PATCH = Bug fixes

Examples:
  1.0.0 → 1.0.1: Bug fix
  1.0.0 → 1.1.0: New feature added
  1.0.0 → 2.0.0: Breaking API change
```

---

## 4. SOP Template

### 4.1 Standard Operating Procedure

```markdown
# SOP: [Process Name]

**Version:** 1.0
**Author:** [Name]
**Last Updated:** [Date]
**Approver:** [Name]

## Purpose
[Why this SOP exists — 1-2 sentences]

## Scope
[What this covers and doesn't cover]

## Prerequisites
- [ ] [Required access/tool/knowledge]
- [ ] [Required access/tool/knowledge]

## Procedure

### Step 1: [Action]
1. [Sub-step with exact commands/clicks]
2. [Sub-step]
3. **Checkpoint:** [How to verify step completed correctly]

### Step 2: [Action]
1. [Sub-step]
2. [Sub-step]
3. **Checkpoint:** [Verification]

### Step 3: [Action]
[...]

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|---------|
| [Symptom] | [Root cause] | [Fix steps] |

## Rollback
[How to undo if something goes wrong]

## Related Documents
- [Link to related SOP/doc]
```

---

## 5. Architecture Decision Record (ADR)

### 5.1 ADR Template

```markdown
# ADR-[NNN]: [Decision Title]

**Date:** [YYYY-MM-DD]
**Status:** [Proposed | Accepted | Deprecated | Superseded]
**Deciders:** [Who made the decision]

## Context
[What is the issue? Why do we need to make a decision?]

## Decision
[What is the change we're making?]

## Consequences
### Positive
- [Benefit 1]
- [Benefit 2]

### Negative
- [Tradeoff 1]
- [Tradeoff 2]

### Neutral
- [Side effect]

## Alternatives Considered
### [Option A]
- Pros: [...]
- Cons: [...] 
- Why rejected: [...]

### [Option B]
[...]
```

---

## 6. Runbook Template

```markdown
# Runbook: [Service/System Name]

## Service Overview
- **What:** [1 sentence description]
- **Owner:** [Team/person]
- **Repository:** [URL]
- **Dashboard:** [URL]
- **Alerts:** [Where alerts go]

## Health Checks
- [ ] Endpoint: `GET /health` → 200 OK
- [ ] Database: connection pool active
- [ ] Queue: message processing

## Common Scenarios

### Scenario: High CPU Usage
**Symptoms:** CPU > 80% for > 5 minutes
**Steps:**
1. Check dashboard: [URL]
2. Identify top process: `top`
3. If worker stuck: restart worker
4. If genuine load: scale horizontally

### Scenario: Database Connection Error
**Symptoms:** "connection refused" in logs
**Steps:**
1. Check DB status: [command]
2. Check connection pool: [command]
3. Restart connection pool if exhausted
4. Escalate to DB admin if persistent

## Escalation
| Level | Contact | When |
|-------|---------|------|
| L1 | [Name/Slack] | Initial investigation |
| L2 | [Name/Slack] | Cannot resolve in 30 min |
| L3 | [Name/Phone] | Data loss or extended downtime |
```

---

## Ví Dụ — README Cho Trading Signal Dashboard

```markdown
# 📊 Trading Signal Dashboard

> Monitor trading signals từ MT5, track performance, 
> generate daily P&L reports. Built for Comarai.

## Quick Start
\`\`\`bash
git clone https://github.com/[YOUR_GITHUB]/trading-dashboard.git
cd trading-dashboard
pip install -r requirements.txt
cp .env.example .env  # Edit with your DB/API keys
python app.py
\`\`\`

## Features
- ✅ Real-time signal tracking (XAU, BTC, Forex)
- ✅ Daily P&L reports (auto-generated, sent to Telegram)
- ✅ Trade journal with screenshot upload
- ✅ Drawdown monitoring + alerts

## Architecture
\`\`\`
[MT5 Bot] → [Telegram Channel] → [n8n Webhook]
                                     ↓
                              [PostgreSQL DB]
                                     ↓
                              [Dashboard (Flask)]
                                     ↓
                              [Daily Report → Telegram]
\`\`\`
```

---

*Comarai.com — AI Automation Agency*
