// Single source for the practice areas section AND the lead form select.
// `name` is stored verbatim in leads.legal_field and grouped on in Power BI:
// renaming one splits historical data, and the CHECK constraint in
// supabase/migrations/0001_create_leads.sql must list the same values.
export const practiceAreas = [
  {
    name: 'Tư vấn doanh nghiệp',
    scope:
      'Thành lập và thay đổi đăng ký kinh doanh, soạn thảo và rà soát hợp đồng thương mại, quản trị nội bộ, tranh chấp giữa thành viên và cổ đông.',
  },
  {
    name: 'Sở hữu trí tuệ',
    scope:
      'Đăng ký bảo hộ nhãn hiệu, kiểu dáng công nghiệp, quyền tác giả; xử lý hành vi xâm phạm và soạn thảo hợp đồng chuyển giao, li-xăng.',
  },
  {
    name: 'Đất đai - Bất động sản',
    scope:
      'Thủ tục cấp, sang tên Giấy chứng nhận quyền sử dụng đất; rà soát pháp lý giao dịch chuyển nhượng; tranh chấp ranh giới, thừa kế nhà đất.',
  },
  {
    name: 'Hình sự',
    scope:
      'Bào chữa cho người bị buộc tội, bảo vệ quyền lợi bị hại và đương sự, tham gia từ giai đoạn điều tra, truy tố đến xét xử.',
  },
  {
    name: 'Dân sự - Hôn nhân gia đình',
    scope:
      'Ly hôn, chia tài sản chung, quyền nuôi con và cấp dưỡng; tranh chấp hợp đồng dân sự, thừa kế, bồi thường thiệt hại.',
  },
  {
    name: 'Thu hồi nợ',
    scope:
      'Rà soát hồ sơ công nợ, gửi văn bản yêu cầu thanh toán, đàm phán, khởi kiện và theo dõi thi hành án để thu hồi khoản nợ.',
  },
] as const;

// Extra option only in the form, for cases that fit none of the areas above.
export const otherLegalField = 'Lĩnh vực khác';

export const legalFieldOptions = [...practiceAreas.map((area) => area.name), otherLegalField];
