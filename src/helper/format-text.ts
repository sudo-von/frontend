export const reduceLongText = (text: string, size: number) =>
  text.length >= size ? `${text.substring(0, size)}...` : text;

export const formatThousands = (number: number) =>
  Intl.NumberFormat('en', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(number);
