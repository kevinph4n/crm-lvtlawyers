// Team section. One object = one lawyer card; add an object to add a lawyer.
//
// photo: file name inside static/img/luat-su/ (e.g. 'nguyen-van-a.jpg'), portrait 4:5.
//        Leave '' to show the empty photo frame.
// Values written as "[...]" are placeholders and render highlighted on the page.
export interface Lawyer {
  name: string;
  title: string;
  photo: string;
  yearsOfExperience: string;
  certificateNo: string;
  practiceAreas: string[];
  education: string[];
}

export const lawyers: Lawyer[] = [
  {
    // Sample entry: copy the shape of `education` for the other lawyers.
    name: 'Phan Hồng Việt',
    title: 'Luật sư - Giám đốc',
    photo: '',
    yearsOfExperience: '19',
    certificateNo: '[Số chứng chỉ hành nghề]',
    practiceAreas: ['[Lĩnh vực chính]'],
    education: [
      '[Thạc sĩ Luật – Tên trường, năm tốt nghiệp]',
      '[Cử nhân Luật – Tên trường, năm tốt nghiệp]',
      '[Chứng chỉ đào tạo nghề luật sư – Học viện Tư pháp, năm]',
      '[Thành viên Đoàn Luật sư tỉnh/thành phố]',
    ],
  },
  {
    name: '[Họ và tên luật sư]',
    title: '[Chức danh]',
    photo: '',
    yearsOfExperience: '[Số năm]',
    certificateNo: '[Số chứng chỉ hành nghề]',
    practiceAreas: ['[Lĩnh vực chính]'],
    education: ['[Bằng cấp]'],
  },
  {
    name: '[Họ và tên luật sư]',
    title: '[Chức danh]',
    photo: '',
    yearsOfExperience: '[Số năm]',
    certificateNo: '[Số chứng chỉ hành nghề]',
    practiceAreas: ['[Lĩnh vực chính]'],
    education: ['[Bằng cấp]'],
  },
];
