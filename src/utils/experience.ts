// Calculate years of experience from career start date
const CAREER_START_DATE = new Date('2010-01-01');

export const calculateYearsOfExperience = (): number => {
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - CAREER_START_DATE.getTime());
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25)); // Account for leap years
  return diffYears;
};

// Get formatted years string (e.g., "15+")
export const getYearsExperienceString = (): string => {
  return `${calculateYearsOfExperience()}+`;
};

// Get current year
export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

// Export the current years for easy access
export const YEARS_OF_EXPERIENCE = calculateYearsOfExperience();
export const YEARS_OF_EXPERIENCE_STRING = getYearsExperienceString();
export const CURRENT_YEAR = getCurrentYear();
