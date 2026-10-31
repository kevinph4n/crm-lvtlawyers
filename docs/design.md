## Design
- the language: Vietnamese
- Main tone: như design-02.webp trong docs/references
- tuân theo skills/front-end-design/SKILL.md (user-level skill, D:/programming/skills)
- Mobile-first
- Tailwind CSS

## Design system (implemented in src/styles/global.css)
- Mode: Persuade (landing page whose job is to produce leads).
- World: the case dossier (hồ sơ vụ án). Paper, kraft folder covers, navy ink, one red seal.
  Practice areas are kraft folders with a "Hồ sơ" tab; the lead form is an intake slip
  ("Phiếu tiếp nhận") that gets an "ĐÃ TIẾP NHẬN" seal stamp on success (the one authored motion).
- Scene: a client on a phone in daylight, right after a legal problem came up. Light theme only.
- Color: navy is the main tone (2026-10-31, client request). Warm paper/kraft neutrals, navy `ink`
  (hue 258) for text and dark regions, one red accent. Tokens (OKLCH): paper, kraft, kraft-deep,
  ink, ink-soft, ink-on-dark, line, seal (accent, CTAs only), seal-deep (hover).
  Ink owns whole regions (hero overlay, strength card, "Dự án tiêu biểu", contact, footer).
- Signature visual: a guilloche rosette (`Rosette.astro`, the security-print pattern on certificates
  and stamped papers) as a faint watermark in the hero, the strength "call us" card and the contact
  section; it turns once every 4 minutes.
- Type: Literata (display, h1-h3; legal-code book face, Vietnamese subset) + Be Vietnam Pro
  (body/UI, 400/500/600, drawn for Vietnamese diacritics). Body 16px, articles at 68ch.
- Depth: soft offset shadows only (floating header, form card), no borders-as-elevation.
- Placeholders: any data value written as "[...]" renders with a dashed red outline (`ph-slot`)
  so missing firm content is visible during review. None may remain at launch.
- First viewport: full-bleed courtroom photo (congtyluatlvt_1), white floating nav bar,
  slogan, one red CTA ("Nhận tư vấn miễn phí") plus a hotline link; then a 4-cell strength strip
  ending in an ink "call us" cell (design-02 pattern).
- Motion: hero content enters in sequence over a slow photo zoom-out. Scroll reveals via
  `data-reveal` (script in `Base.astro`, CSS in `global.css`): headings rise from their baseline,
  photos wipe in left to right, the form card slides in, cards fade up with a stagger. All of it is
  off under `prefers-reduced-motion`, and content stays visible if JS does not run.
- Featured cases and activities share `MediaList.astro`: small 4:3 photo left, text right.

## Content
- Landing page for:
### Trang chủ (Homepage):
- Hero Section: Slogan mạnh mẽ thể hiện sự uy tín, chuyên nghiệp: "Giải quyết tranh chấp chuyên nghiệp".

- CTA (Kêu gọi hành động) nổi bật: Nút "Nhận tư vấn miễn phí" (nút "Đặt lịch hẹn ngay" đã bỏ vì trùng chức năng).

- Dự án tiêu biểu: ảnh nhỏ bên trái, mô tả vụ án bên phải (không ghi luật sư phụ trách). Dữ liệu trong `src/data/featured-cases.ts`.

- Các hoạt động phổ biến pháp luật: cùng kiểu trình bày với Dự án tiêu biểu.

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