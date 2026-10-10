// Project dates are written like "2024-2-11", which not every browser parses.
export const parseDate = (dateStr) => {
  if (!dateStr) return null;
  const [year, month = 1, day = 1] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
};

export const formatDate = (dateStr) => {
  const date = parseDate(dateStr);
  if (!date) return '';
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

export const byNewest = (a, b) => parseDate(b.date) - parseDate(a.date);
