export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const money = (str: string) => {
  if (!str) return '';

  return parseFloat(str)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    .replace(/.(\d{2})$/g, '.$1');
}
