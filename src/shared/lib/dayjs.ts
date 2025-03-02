import dayjs from 'dayjs';
import 'dayjs/locale/ko';

type DateType = string | number | Date | dayjs.Dayjs | null;

export const initializeLocale = () => {
  dayjs.locale('ko');
};

export function format(date?: DateType, template?: string) {
  if (typeof date === 'string') {
    // 2024. 10. 2. 22:43 -> ['2024', '10', '2', '22:43']
    const units = date.split('. ');

    if (units.length === 3) {
      return dayjs(`${units[0]}-${units[1].padStart(2, '0')}-${units[2].padStart(2, '0')}`).format(template);
    }

    if (units.length === 4) {
      return dayjs(`${units[0]}-${units[1].padStart(2, '0')}-${units[2].padStart(2, '0')} ${units[3]}:00`).format(
        template,
      );
    }
  }

  return date ? dayjs(date).format(template) : '';
}

export function formatDate(date?: DateType) {
  return format(date, 'YYYY-MM-DD');
}

export function formatDateTime(date?: DateType) {
  return format(date, 'YYYY-MM-DD HH:mm');
}
