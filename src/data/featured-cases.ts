// "Dự án tiêu biểu" section, one object per case.
// Photos go in static/img/du-an/ and are referenced by file name (4:3 crops look best).
// Publish only what the firm has approved: no client names or case details without consent.
export interface FeaturedCase {
  photo: string;
  title: string;
  description: string;
}

export const featuredCases: FeaturedCase[] = [
  {
    photo: '',
    title: '[Tên vụ án / dự án 1]',
    description: '[Mô tả ngắn: bối cảnh vụ việc, vấn đề pháp lý, kết quả đạt được]',
  },
  {
    photo: '',
    title: '[Tên vụ án / dự án 2]',
    description: '[Mô tả ngắn: bối cảnh vụ việc, vấn đề pháp lý, kết quả đạt được]',
  },
  {
    photo: '',
    title: '[Tên vụ án / dự án 3]',
    description: '[Mô tả ngắn: bối cảnh vụ việc, vấn đề pháp lý, kết quả đạt được]',
  },
];
