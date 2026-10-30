## Design
- the language: Vietnamese
- Main tone: như design-02.webp trong docs/references
- tuân theo skills/front-end-design/SKILL.md (user-level skill, D:/programming/skills)
- Mobile-first
- Tailwind CSS

## Design system (implemented in src/styles/global.css)
- Mode: Persuade (landing page whose job is to produce leads).
- World: the case dossier (hồ sơ vụ án). Paper, kraft folder covers, ink, one red seal.
  Practice areas are kraft folders with a "Hồ sơ" tab; the lead form is an intake slip
  ("Phiếu tiếp nhận") that gets an "ĐÃ TIẾP NHẬN" seal stamp on success (the one authored motion).
- Scene: a client on a phone in daylight, right after a legal problem came up. Light theme only.
- Color, restrained: tinted warm neutrals + one accent. Tokens (OKLCH): paper, kraft, kraft-deep,
  ink, ink-soft, ink-on-dark, line, seal (accent, CTAs only), seal-deep (hover).
  Ink owns whole regions (strength card, contact section, footer), following design-02.
- Type: Literata (display, h1-h3; legal-code book face, Vietnamese subset) + Be Vietnam Pro
  (body/UI, 400/500/600, drawn for Vietnamese diacritics). Body 16px, articles at 68ch.
- Depth: soft offset shadows only (floating header, form card), no borders-as-elevation.
- Placeholders: any data value written as "[...]" renders with a dashed red outline (`ph-slot`)
  so missing firm content is visible during review. None may remain at launch.
- First viewport: full-bleed courtroom photo (congtyluatlvt_1), white floating nav bar,
  slogan, two CTAs; then a 4-cell strength strip ending in an ink "call us" cell (design-02 pattern).

## Content
- Landing page for:
### Trang chủ (Homepage):
- Hero Section: Slogan mạnh mẽ thể hiện sự uy tín, chuyên nghiệp (ví dụ: "Giải pháp pháp lý vững chắc cho doanh nghiệp và cá nhân").

- CTA (Kêu gọi hành động) nổi bật: Nút "Nhận tư vấn miễn phí", "Đặt lịch hẹn ngay".

- Thống kê/Điểm mạnh: Số năm kinh nghiệm

- Lĩnh vực hành nghề (Services / Practice Areas):
* Liệt kê rõ các mảng: Tư vấn doanh nghiệp, Sở hữu trí tuệ, Đất đai - Bất động sản, Hình sự, Dân sự - Hôn nhân gia đình, Thu hồi nợ...
* Mỗi lĩnh vực cần có mô tả ngắn gọn về phạm vi hỗ trợ để khách hàng dễ nhận diện đúng vấn đề của mình.

- Đội ngũ luật sư & Chuyên gia (Our Team):
* Hình ảnh chân dung chuyên nghiệp, bằng cấp, chứng chỉ hành nghề và kinh nghiệm của từng luật sư. Đây là yếu tố sống còn để tạo lòng tin trong ngành luật.

- Kiến thức pháp lý / Blog (Insights):
* Các bài viết chia sẻ về quy định mới, các lưu ý pháp lý thường gặp. Mục này cực kỳ quan trọng để làm SEO, giúp khách hàng tự tìm đến website qua Google.

- Biểu mẫu thu thập thông tin khách hàng (Contact / Lead Form):
* Các trường thông tin tối thiểu cần thiết: Họ và tên, Số điện thoại, Email, Lĩnh vực cần tư vấn, Nội dung tóm tắt vụ việc.

- Thông tin liên hệ (Contact Us):
* Địa chỉ văn phòng, Hotline (có nút gọi nhanh trên mobile), Email, Zalo Official Account, bản đồ Google Maps tích hợp.

## Database
- Supabase (main database using table editor) -> Zapier (webhook) -> Google Sheets -> Power BI (through connected Google Sheets) (Power BI: customer counts; legal field; status)