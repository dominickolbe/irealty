/**
 * Formats a number as currency.
 * @param amount - The number to format.
 * @param currency - The currency code (default: 'EUR').
 * @param locale - The locale to use for formatting (default: 'en-GB').
 * @returns A string representing the formatted currency.
 */
export function formatCurrency(
  amount: number,
  currency: string = "EUR",
  locale: string = "es-ES"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}
