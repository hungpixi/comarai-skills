# Tích Hợp Comarai Skills vào AI IDE

## Antigravity (Gemini Code Assist)

### Cách 1: Copy trực tiếp
```bash
# Clone repo
git clone https://github.com/hungpixi/comarai-skills.git

# Copy tất cả skills
cp -r comarai-skills/comarai-* ~/.gemini/antigravity/skills/
```

### Cách 2: Symlink (auto-update khi git pull)
```bash
# Clone sang thư mục cố định
git clone https://github.com/hungpixi/comarai-skills.git ~/comarai-skills

# Link từng skill hoặc cả folder
ln -s ~/comarai-skills/comarai-* ~/.gemini/antigravity/skills/
```

### Cách 3: Đặt trực tiếp trong project
```bash
# Trong mỗi project cần dùng
mkdir -p .gemini/skills
cp -r comarai-skills/comarai-agent-engineering .gemini/skills/
cp -r comarai-skills/comarai-code-reviewer .gemini/skills/
# Chỉ copy skills cần dùng cho project cụ thể
```

## Cách AI Sử Dụng Skills

### Auto-Detection Flow
```
User gõ: "Review code MQL5 của tôi"
    │
    ▼
AI scan tất cả SKILL.md frontmatter
    │
    ▼
Match vi_trigger: "review EA MQL5" → comarai-code-reviewer
    │
    ▼
AI đọc SKILL.md → tìm section MQL5
    │
    ▼
Apply SPEAR framework → output review report
```

### Best Practices

1. **Chỉ copy skills cần dùng** — 19 skills = ~200KB. Copy hết cũng OK nhưng AI sẽ scan lâu hơn
2. **Project-specific skills** — Đặt trong `.gemini/skills/` của project → chỉ active cho project đó
3. **Global skills** — Đặt trong `~/.gemini/antigravity/skills/` → active cho tất cả projects

### Recommended Skills By Role

| Vai trò | Skills nên cài |
|---------|---------------|
| **Developer** | code-reviewer, technical-docs, n8n-mastery, agent-engineering |
| **Trader** | trading-engine, data-analyst |
| **Sales/BD** | lead-hunter, prospect-researcher, proposal-gen, email-engine, vendor-negotiation |
| **Content** | content-engine, copywriting, humanizer |
| **Founder** | agency-blueprint, automation-strategy, competitive-intel |
