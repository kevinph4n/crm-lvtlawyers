// Firm contact details. Values written as "[...]" are placeholders the firm must supply;
// components render them highlighted so they are easy to spot before launch.
export const site = {
  name: 'Công ty Luật LVT',
  shortName: 'Luật LVT',
  slogan: 'Giải pháp pháp lý vững chắc cho doanh nghiệp và cá nhân',
  description:
    'Công ty Luật LVT tư vấn và tranh tụng về doanh nghiệp, sở hữu trí tuệ, đất đai, hình sự, dân sự – hôn nhân gia đình và thu hồi nợ.',
  yearsOfExperience: '23',
  hotline: '(028) 3929 0797',
  email: '[Email]',
  address: 'Tầng 4, Số 454A Nguyễn Thị Minh Khai, Phường Bàn Cờ, Quận 3, TP.Hồ Chí Minh',
  workingHours: '[Giờ làm việc]',
  // Full https://zalo.me/... link of the Zalo Official Account.
  zaloUrl: '',
  // The src="" value from Google Maps > Share > Embed a map.
  mapEmbedUrl: '',
};

export const isPlaceholder = (value: string) => value.startsWith('[') && value.endsWith(']');

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;
