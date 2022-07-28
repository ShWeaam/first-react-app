
export function getNumberWithLeadingZeros(number, LEADING_ZEROS_AMOUNT) {
    return String(number).padStart(LEADING_ZEROS_AMOUNT, '0')
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  