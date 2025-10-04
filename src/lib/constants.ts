// Site Configuration Constants
export const SITE_CONFIG = {
  // Base URLs - always use www for consistency
  BASE_URL: 'https://www.davidnekovar.cz',
  CANONICAL_URL: 'https://www.davidnekovar.cz',
  
  // Social Media URLs
  SOCIAL: {
    LINKEDIN: 'https://www.linkedin.com/in/dave-nekovar/',
    GITHUB: 'https://github.com/smarlify',
    CODEPEN: 'https://codepen.io/smarlify',
    CODERWARS: 'https://www.codewars.com/users/smarlify',
  },
  
  // Contact Information
  CONTACT: {
    EMAIL: 'nekovar.david@gmail.com',
    PHONE: '+420 728 234 648',
    LOCATION: 'Prague, Czech Republic',
  },
  
  // SEO Configuration
  SEO: {
    SITE_NAME: 'David Nekovář',
    DEFAULT_TITLE: 'David Nekovář - Product Owner & Full Stack Developer',
    DEFAULT_DESCRIPTION: 'Experienced Product Owner & Full Stack Developer with 12+ years building innovative solutions for global brands. Specializing in Ruby on Rails, Vue.js, React, Nuxt.js, Next.js, PWA, Three.js, and AI Solutions Architecture.',
    AUTHOR: 'David Nekovář',
    CREATOR: 'David Nekovář',
    PUBLISHER: 'David Nekovář',
  },
  
  // Image URLs
  IMAGES: {
    OG_IMAGE: '/dave.jpg', // Using the personal photo
    FAVICON: '/favicon.ico',
    LOGO: '/logo.png',
  },
} as const;

// Helper function to get full URL
export const getFullUrl = (path: string = '') => {
  return `${SITE_CONFIG.BASE_URL}${path}`;
};

// Helper function to get image URL
export const getImageUrl = (imagePath: string) => {
  return `${SITE_CONFIG.BASE_URL}${imagePath}`;
};
