export const getFormatedDate = (numDays) => {
  const years = Math.floor(numDays / 356);
  const months = Math.floor(numDays % 365 / 30);
  const days = Math.floor(numDays % 365 % 30)
  return `${years} years, ${months} months, ${days} days`
}