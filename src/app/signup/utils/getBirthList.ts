export const getBirthList = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 1950;
  return Array.from({ length: currentYear - startYear + 1 }, (_, index) => String(startYear + index));
};
