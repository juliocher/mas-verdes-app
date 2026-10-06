/**
 * Format currency or numbers for Peruvian Soles or general display
 */
export function formatCurrencyPEN(amount: number): string {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format date string into human readable Spanish date
 */
export function formatDateES(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return new Intl.DateTimeFormat('es-PE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  } catch {
    return dateString;
  }
}

/**
 * Clean and normalize telephone number
 */
export function normalizePhoneNumber(phone: string): string {
  return phone.replace(/[^\d+]/g, '');
}
