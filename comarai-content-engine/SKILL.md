---
name: comarai-content-engine
description: >
  Hệ thống sản xuất nội dung đa kênh: brand voice, audience personas, content calendar,
  platform playbooks (TikTok/LinkedIn/Facebook), repurposing pipeline, analytics.
  Focus thị trường VN — kênh "Người Lười Chăm Chỉ" + Comarai branding.
  Dùng khi: "tạo content plan", "viết script TikTok", "lên lịch đăng bài",
  "repurpose video thành bài viết", "phân tích engagement", "tìm trending topic".
metadata:
  vi_triggers:
    - "tạo content plan"
    - "viết script TikTok"
    - "lên lịch đăng bài"
    - "repurpose content"
    - "trending topic"
    - "content calendar"
    - "brand voice"
    - "engagement analysis"
  author: "Comarai.com"
  version: "2.0.0"
  based_on: "Comarai original"
  os: [linux, darwin, win32]
---

## 🇻🇳 Dùng Nhanh

| Bạn nói | Tôi sẽ làm |
|---|---|
| *"Viết 5 script TikTok về trading cho tuần này"* | 5 scripts theo brand voice Người Lười Chăm Chỉ |
| *"Lên content plan tháng 4 cho kênh TikTok"* | Calendar 30 ngày + nội dung gợi ý |
| *"Turn video TikTok này thành bài LinkedIn + Facebook"* | Repurpose pipeline: 1 → 3 formats |
| *"Phân tích engagement tuần qua, video nào hit?"* | Performance analytics + recommendations |
| *"Tìm trending topics liên quan trading/AI automation"* | Trend scan + content angle suggestions |

---

# Content Engine — Sản Xuất Nội Dung Đa Kênh

> 1 ý tưởng → 5 formats → 3 platforms → 7 ngày content. Làm nhiều hơn với ít effort hơn.

---

## 1. Brand Voice Definition

### 1.1 Brand Voice Template

```yaml
brand_voice:
  # COMARAI BRAND
  comarai:
    tone: "Chuyên gia thực chiến, không lý thuyết suông"
    personality: "Thẳng thắn, thực dụng, có chất humor"
    avoid: "Xu nịnh, hứa suông, jargon không cần thiết"
    vocabulary:
      prefer: ["thực chiến", "tối ưu", "tự động hóa", "lean", "compound"]
      avoid: ["hoàn hảo", "dễ dàng", "ai cũng làm được", "miễn phí"]
    
  # KÊNH NGƯỜI LƯỜI CHĂM CHỈ
  nguoi_luoi:
    tagline: "Lười nhưng chăm chỉ — Để AI và hệ thống làm việc thay bạn"
    tone: "Conversational, relatable, hơi mỉa mai tích cực"
    target: "GenZ/Millennial VN (20-35) quan tâm kiếm tiền + tự do thời gian"
    hooks_style: "Controversy → Education → Action"
    cta: "Follow để lười chăm chỉ cùng tôi"
    
    do:
      - "Nói về thất bại + bài học (authentic)"
      - "Show behind-the-scenes (quá trình, không chỉ kết quả)"
      - "Đặt câu hỏi kích thích tranh luận"
      - "Dùng số liệu cụ thể ($100/ngày, 3 giờ/ngày)"
    dont:
      - "Flexing không ngữ cảnh (khoe bừa)"
      - "Hứa giàu nhanh"
      - "Nói xấu đối thủ"
      - "Quá technical (thuật ngữ không giải thích)"
```

### 1.2 Content Voice Rubric — Kiểm Tra Trước Khi Đăng

| Checklist | Pass | Fail |
|-----------|------|------|
| Hook mạnh (3 giây đầu) | "90% trader thua vì cái này..." | "Hôm nay mình chia sẻ..." |
| Authentic voice | Kinh nghiệm thật, số liệu cụ thể | Copy-paste chung chung |
| CTA rõ ràng | "Save lại. Follow để xem phần 2" | Không có CTA |
| Value-first | Viewer học được gì cụ thể | Chỉ nói về mình |
| On-brand | Đúng tone "Lười Chăm Chỉ" | Quá formal hoặc quá casual |

---

## 2. Audience Personas

### 2.1 Primary Personas

```yaml
persona_1:
  ten: "Trader Tay Ngang"
  tuoi: "25-35"
  mo_ta: "Đi làm văn phòng, muốn có thêm thu nhập passive từ trading"
  pain_points:
    - "Không có thời gian ngồi chart cả ngày"
    - "Đã mất tiền vì FOMO/thiếu kỷ luật"
    - "Không biết bắt đầu từ đâu"
  content_needs:
    - "Hướng dẫn trading cơ bản, dễ hiểu"
    - "Bot/EA tự động thay cho manual"
    - "Quản lý rủi ro thực tế"
  platforms: ["TikTok", "Facebook Group"]
  content_time: "12:00-13:00 (lunch), 19:00-22:00 (tối)"

persona_2:
  ten: "SME Owner Muốn Tối Ưu"  
  tuoi: "30-45"
  mo_ta: "Chủ doanh nghiệp nhỏ, muốn dùng AI tăng hiệu quả"
  pain_points:
    - "Team nhỏ, không đủ người"
    - "Quy trình thủ công, tốn thời gian"
    - "Không hiểu AI mà sợ bị bỏ lại"
  content_needs:
    - "Case study automation thực tế"
    - "ROI rõ ràng, dễ tính"
    - "Hướng dẫn step-by-step"
  platforms: ["LinkedIn", "Facebook"]
  content_time: "07:00-08:00 (sáng), 20:00-22:00 (tối)"

persona_3:
  ten: "Freelancer Kỹ Thuật"
  tuoi: "22-30"
  mo_ta: "Developer/marketer freelance, muốn build+sell tools/services"
  pain_points:
    - "Muốn kiếm thêm từ kỹ năng có sẵn"
    - "Không biết cách bán dịch vụ AI"
    - "Cần portfolio và case studies"
  content_needs:
    - "Tutorial build AI tools"
    - "Business model cho freelancer"
    - "Portfolio showcase ideas"
  platforms: ["TikTok", "GitHub", "LinkedIn"]
```

---

## 3. Platform Playbooks

### 3.1 TikTok VN — Primary Channel

```yaml
tiktok_playbook:
  post_frequency: "5-7 bài/tuần"
  best_times_vn: ["12:00", "17:30", "20:00", "21:30"]
  
  content_mix:
    education: 40       # Tips, tutorials, hướng dẫn
    entertainment: 20   # Behind-the-scenes, fails, humor
    inspiration: 20     # Success stories, kết quả
    promotion: 10       # Comarai services, demo
    trending: 10        # Nhảy trend, duet, stitch
  
  format_types:
    talking_head: "60% — Nói thẳng vào camera, caption text"
    carousel: "20% — Slide thông tin, step-by-step"
    screencast: "10% — Demo tool, code, dashboard"
    voiceover_broll: "10% — VO trên footage/stock"
  
  hook_formulas:
    controversy: "90% [đối tượng] sai ở bước này / Ai nói [niềm tin phổ biến] là sai"
    curiosity: "Tôi mất [X] để hiểu ra điều này / Secret mà [group] không nói cho bạn"
    number: "[N] cách/bước/tool để [kết quả] / $[X] mỗi ngày bằng [phương pháp]"
    story: "Từ [tệ] đến [tốt] nhờ [phương pháp] / Tuần trước tôi [sai lầm]..."
    question: "Tại sao [hiện tượng]? / Bạn có biết [fact không ngờ]?"
    
  caption_formula: |
    Hook (câu 1) — gây tò mò
    CONTEXT — 2-3 câu background
    VALUE — 3-5 điểm chính
    CTA — "Follow + Save" hoặc "Kinh nghiệm bạn thế nào?"
    
    #hashtags (5-8):
    Evergreen: #trading #forex #bottrading #passiveincome
    Trend: [tuỳ tuần] #fintok #trader #làmgiàu
    Branded: #nguoiluoichamchi #comarai
```

### 3.2 LinkedIn — Authority Building

```yaml
linkedin_playbook:
  post_frequency: "3-5 bài/tuần"
  best_times_vn: ["07:30", "12:00", "17:30"]
  
  content_mix:
    thought_leadership: 35   # Ý kiến, nhận định về ngành
    case_study: 25           # Showing work + results
    how_to: 20               # Educational posts
    personal_story: 15       # Behind-the-scenes
    engagement: 5            # Polls, questions
    
  post_format: |
    Hook line (1 câu đập mạnh)
    
    [2-3 dòng context]
    
    Here's what I learned:
    
    1. [Point 1]
    2. [Point 2]
    3. [Point 3]
    
    [Takeaway/CTA]
    
    ---
    ♻️ Repost nếu bạn thấy hữu ích
    🔔 Follow Hưng Phạm để theo dõi thêm
    
  # LINKEDIN SPECIFIC
  do:
    - "Document, đừng tạo (chia sẻ quá trình thật)"
    - "Tag relevant people (không spam tag)"
    - "Reply comments trong 2 giờ đầu (algorithm boost)"
  dont:
    - "Links trong post (giảm reach 50%+)"
    - "Hashtags quá nhiều (max 3-5)"
    - "Engagement baiting ('Like nếu bạn đồng ý')"
```

### 3.3 Facebook — Community Building

```yaml
facebook_playbook:
  post_frequency: "3-5 bài/tuần"
  
  content_mix:
    group_value: 40     # Educational, helpful
    discussion: 25      # Questions, polls
    case_study: 20      # Results, testimonials
    promotion: 15       # Comarai services
    
  group_strategy:
    own_group: "Cộng đồng Trader Bot VN"
    external_groups: ["Forex VN", "AI Automation VN", "XNK VN"]
    rules: "Đóng góp giá trị 80%, promote 20%. KHÔNG spam"
```

---

## 4. Content Calendar System

### 4.1 Monthly Calendar Template

```yaml
content_calendar:
  thang: "2026-04"
  
  tuan_1:
    mon:
      tiktok: { topic: "[Topic]", format: "talking_head", hook: "[Hook]" }
      linkedin: { topic: "[Topic]", angle: "thought_leadership" }
    tue:
      tiktok: { topic: "[Topic]", format: "carousel" }
    wed:
      tiktok: { topic: "[Topic]", format: "screencast" }
      facebook: { topic: "[Topic]", type: "discussion" }
    thu:
      tiktok: { topic: "[Topic]", format: "talking_head" }
      linkedin: { topic: "[Topic]", angle: "case_study" }
    fri:
      tiktok: { topic: "[Topic]", format: "trending" }
    sat:
      tiktok: { topic: "[Topic]", format: "carousel" }
    sun:
      rest: true
      
  # NGÀY LỄ VN (lồng trend)
  special_dates:
    "04/30": "Giải phóng miền Nam — content về tự do tài chính"
    "05/01": "Quốc tế Lao động — content về AI thay thế lao động"
```

### 4.2 Weekly Content Batch Protocol

```
CHỦ NHẬT TỐI — Content Prep (2 giờ):
  1. Review performance tuần trước (15 phút)
  2. Scan trending topics (15 phút)
  3. Chọn 5-7 topics cho tuần (15 phút)
  4. Viết hooks cho mỗi video (30 phút)
  5. Draft 3 scripts chi tiết (30 phút)
  6. Chuẩn bị visuals/slides (15 phút)

THỨ 2-6 — Posting:
  - Đăng theo calendar
  - Reply comments trong 2 giờ đầu
  - Cross-post/repurpose trong ngày

THỨ 7 — Review:
  - Performance metrics
  - Top/bottom performers (tại sao?)
  - Adjust plan tuần sau
```

---

## 5. Repurposing Pipeline — 1 → Nhiều

### 5.1 Content Multiplication Matrix

```
1 TikTok Video (60-90s)
  ├── → Instagram Reel (same video, adjust caption)
  ├── → YouTube Short (same video, end card)
  ├── → LinkedIn Post (extract key points → text post)
  ├── → Facebook Post (transcript → story format)
  ├── → Twitter/X Thread (break into 5-7 tweets)
  ├── → Carousel Slides (extract tips → 5-7 slides)
  ├── → Email Newsletter (expand into deeper content)
  └── → Blog Post (full article with examples)
```

### 5.2 Repurposing Templates

**TikTok → LinkedIn Post:**
```
[Hook từ video — adapt cho professional tone]

[Context: tại sao topic này quan trọng]

Key takeaways:
1. [Point 1 — mở rộng hơn video]
2. [Point 2]
3. [Point 3]

[CTA: "What's your experience with [topic]?"]

#AIAutomation #Productivity #LinkedInVietnam
```

**TikTok → Facebook Group Post:**
```
[Hook — casual tone hơn LinkedIn]

[Mở rộng 1 điểm cụ thể từ video]

📌 Tóm tắt:
• [Bullet 1]
• [Bullet 2]
• [Bullet 3]

Link video đầy đủ: [TikTok URL]

Bạn thấy thế nào? Comment chia sẻ kinh nghiệm 👇
```

**TikTok → Email Newsletter:**
```
Subject: [Hook từ video — email-optimized]

Preview text: [1 sentence teaser]

Hi [Name],

Tuần này tôi chia sẻ về [topic] và nhận được rất nhiều câu hỏi.

[Mở rộng content video thành 3-4 paragraphs]
[Thêm ví dụ, data, context]
[Thêm resources/links]

TL;DR:
1. [Key takeaway 1]
2. [Key takeaway 2]
3. [Key takeaway 3]

Reply email này nếu bạn muốn tôi đi sâu hơn. 

— Hưng
Comarai.com
```

---

## 6. Script Templates

### 6.1 TikTok Script Template (60-90s)

```yaml
tiktok_script:
  ten: "[Tiêu đề nội bộ]"
  format: "talking_head"
  do_dai: "60-90s"
  
  hook: "[3 giây đầu — BẮT BUỘC gây tò mò]"
  # Ví dụ: "90% trader mất tiền vì 1 lỗi này — và tôi cũng từng mắc"
  
  context: |
    [10-15 giây — Set up vấn đề]
    Tôi [kinh nghiệm cá nhân]. Sau [X thời gian], tôi nhận ra...
  
  body: |
    [30-40 giây — Nội dung chính]
    Có [N] điều bạn cần biết:
    1. [Point 1 + ví dụ ngắn]
    2. [Point 2 + ví dụ ngắn]  
    3. [Point 3 + ví dụ ngắn]
    
  takeaway: |
    [5-10 giây — Key message]
    Vậy nhớ: [1 câu tóm tắt bài học]
    
  cta: |
    [5 giây — Call to action]
    Follow để xem phần 2 / Save lại để xem lại / 
    Comment kinh nghiệm của bạn
    
  # TEXT ON SCREEN
  text_overlay:
    - time: "0:00-0:03"
      text: "[Hook text — to, bold]"
    - time: "0:15"
      text: "Bước 1: [ngắn gọn]"
    - time: "0:30"
      text: "Bước 2: [ngắn gọn]"
    - time: "0:45"
      text: "Bước 3: [ngắn gọn]"
      
  hashtags: "#trading #forex #bottrading #nguoiluoichamchi #comarai"
  
  music: "[Trending sound hoặc chill beats — check trending]"
```

### 6.2 Carousel Template (7-10 slides)

```yaml
carousel:
  ten: "[Tiêu đề]"
  format: "carousel_slides"
  slides:
    1: # COVER
      headline: "[Hook mạnh — 3-5 từ]"
      subtext: "Swipe →"
      design: "Bold text, gradient background"
      
    2: # PROBLEM
      headline: "Vấn đề"
      body: "[Pain point — relatable]"
      
    3_6: # SOLUTION (3-4 slides)
      headline: "Cách [N]: [Tên]"
      body: "[Giải thích ngắn + ví dụ]"
      visual: "[Icon hoặc screenshot]"
      
    7: # SUMMARY
      headline: "Tóm tắt"
      body: "[5 key points trích từ slides trước]"
      
    8: # CTA
      headline: "Muốn biết thêm?"
      body: "Follow @[handle] | Save bài này"
      brand: "Comarai.com"
```

---

## 7. Engagement Strategy

### 7.1 Comment Response Rules

| Loại comment | Cách response | Timing |
|-------------|-------------|--------|
| Câu hỏi chân thật | Reply chi tiết + pin nếu hay | <2 giờ |
| Khen ngợi | Cảm ơn genuine + đặt câu hỏi tiếp | <4 giờ |
| Phản đối khéo | Thừa nhận góc nhìn + bổ sung | <4 giờ |
| Troll/negative | Reply 1 lần lịch sự hoặc ignore | Khi rảnh |
| Hỏi giá/service | DM + redirect website | <1 giờ |

### 7.2 Community Building

```yaml
community_actions:
  daily:
    - "Reply ALL comments trên bài mới (2 giờ đầu)"
    - "Comment giá trị trên 3-5 creator khác (genuine)"
    - "Like/react 10-15 posts trong niche"
    
  weekly:
    - "Stitch/Duet 1 video trending"
    - "Host Q&A (story hoặc live)"
    - "Feature 1 follower question → content"
    
  monthly:
    - "Collab với 1 creator khác"
    - "Community challenge/contest"
    - "Follower milestone celebration"
```

---

## 8. Analytics & Optimization

### 8.1 KPI Tracking

```yaml
kpi_monthly:
  growth:
    followers_new: 0
    follower_growth_rate: "0%"
    
  reach:
    impressions_total: 0
    avg_views_per_post: 0
    viral_posts: 0               # Views > 10x average
    
  engagement:
    avg_engagement_rate: "0%"    # (likes+comments+shares) / views
    avg_comments: 0
    avg_shares: 0
    avg_saves: 0                 # TikTok saves = high value
    
  conversion:
    profile_visits: 0
    website_clicks: 0
    dm_inquiries: 0
    leads_from_content: 0
    
  content:
    posts_published: 0
    completion_rate: "0%"        # Plans vs actual
    top_format: ""               # talking_head/carousel/screencast
    top_topic: ""                # Which topic performed best
```

### 8.2 Content Performance Grid

| Metric | Tệ | Trung bình | Tốt | Xuất sắc |
|--------|-----|-----------|-----|---------|
| **Views/post** | <500 | 500-2K | 2K-10K | 10K+ |
| **Engagement rate** | <2% | 2-5% | 5-10% | 10%+ |
| **Save rate** | <0.5% | 0.5-2% | 2-5% | 5%+ |
| **Share rate** | <0.3% | 0.3-1% | 1-3% | 3%+ |
| **Comment rate** | <0.5% | 0.5-2% | 2-5% | 5%+ |
| **Follower conversion** | <0.1% | 0.1-0.5% | 0.5-2% | 2%+ |

### 8.3 A/B Testing Framework

```yaml
ab_test:
  test_name: "Hook Style: Controversy vs Question"
  period: "2 tuần (10 posts mỗi variant)"
  
  variant_a:
    hook_style: "Controversy"
    example: "90% trader thua vì không biết điều này"
    
  variant_b:
    hook_style: "Question"
    example: "Bạn có biết tại sao 90% trader thua?"
    
  measure:
    primary: "avg_views"
    secondary: ["engagement_rate", "save_rate", "follower_conversion"]
    
  rules:
    - "Min 10 posts mỗi variant"
    - "Cùng posting time, cùng format"
    - "Chỉ thay đổi 1 variable (hook style)"
    
  result:
    winner: null
    confidence: null
    action: null  # "Scale winner, iterate"
```

---

## 9. Crisis Management

| Tình huống | Action |
|-----------|--------|
| Post bị viral tiêu cực | Đánh giá severity → Reply 1 lần calm → Pin reply → Monitor |
| Báo sai thông tin | Acknowledge ngay → Đính chính → Edit/delete original |
| Bị report/tấn công | Document → Report back → Block nếu cần → Đừng đáp trả |
| Trend nhạy cảm | Đánh giá risk → Chỉ tham gia nếu genuine value → Avoid politics/religion |

---

