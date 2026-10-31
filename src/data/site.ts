export const site = {
  name: 'Công ty Luật LVT Lawyers',
  shortName: 'Luật LVT Lawyers',
  slogan: 'Giải quyết tranh chấp chuyên nghiệp',
  description:
    'Công ty Luật LVT tư vấn và tranh tụng về doanh nghiệp, sở hữu trí tuệ, đất đai, hình sự, dân sự – hôn nhân gia đình và thu hồi nợ.',
  yearsOfExperience: '23',
  hotline: '(028) 3929 0797',
  email: 'info@lvtlawyers.com.vn',
  address: 'Tầng 4, Số 454A Nguyễn Thị Minh Khai, Phường Bàn Cờ, TP.Hồ Chí Minh',
  workingHours: '[Giờ làm việc]',
  // https://zalo.me/...: Zalo Official Account.
  zaloUrl: '',
  // The src="" value from Google Maps > Share > Embed a map.
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5583418095953!2d106.67936778293597!3d10.768481461996359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2263dd4109%3A0xd5319c430847d42f!2sLVT%20Lawyers!5e0!3m2!1sen!2s!4v1793378607087!5m2!1sen!2s',
};

export const isPlaceholder = (value: string) => value.startsWith('[') && value.endsWith(']');

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;
