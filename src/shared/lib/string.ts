export function truncateWithPeriod(text: string, limit: number) {
  if (text.length <= limit) {
    return text;
  }

  const truncatedText = text.slice(0, limit);
  const lastPeriodIndex = truncatedText.lastIndexOf('.');

  if (lastPeriodIndex !== -1) {
    return (
      truncatedText
        .slice(0, lastPeriodIndex + 1)
        // 마침표 뒤에 공백 없이 시작하는 문자열을 잘라냅니다.
        .replace(/\.(?!\s).*/, '.')
        .trim()
    );
  }

  return truncatedText.trim();
}
