import dayjs from 'dayjs';

export default function formatDate(date: string | Date, customFormat?: string) {
  return dayjs(date).format(customFormat ?? 'MMMM DD, YYYY');
}
