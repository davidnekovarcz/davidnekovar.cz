// Enhanced SEO Configuration Module
// This module centralizes all SEO-related content to ensure DRY principles
// and easy maintenance across all projects with AI-optimized content

// Structured Data Type Definitions
export interface OrganizationSchema {
  "@context": string;
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
  foundingDate?: string;
  jobTitle?: string;
  knowsAbout?: string[];
  hasOccupation?: {
    "@type": "Occupation";
    name: string;
    occupationLocation?: {
      "@type": "Country";
      name: string;
    };
  };
  alumniOf?: {
    "@type": "EducationalOrganization";
    name: string;
  };
  founder?: {
    "@type": "Person";
    name: string;
    url?: string;
  };
  contactPoint?: {
    "@type": "ContactPoint";
    telephone?: string;
    contactType?: string;
    email?: string;
  };
}

export interface WebSiteSchema {
  "@context": string;
  "@type": "WebSite";
  name: string;
  url: string;
  description?: string;
  publisher?: {
    "@type": "Organization";
    name: string;
    url?: string;
  };
  author?: {
    "@type": "Person";
    name: string;
  };
  about?: {
    "@type": "Thing";
    name: string;
  };
  offers?: {
    "@type": "Offer";
    name: string;
    description: string;
    price?: string;
    priceCurrency?: string;
  };
  potentialAction?: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

export interface BreadcrumbListSchema {
  "@context": string;
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

export interface PersonSchema {
  "@context": string;
  "@type": "Person";
  name: string;
  url?: string;
  image?: string;
  jobTitle?: string;
  worksFor?: {
    "@type": "Organization";
    name: string;
  };
  sameAs?: string[];
}

export interface StructuredDataConfig {
  organization: OrganizationSchema;
  website: WebSiteSchema;
  breadcrumb?: BreadcrumbListSchema;
  person?: PersonSchema;
}

export interface SEOConfig {
  // Basic Meta Information
  title: string;
  description: string;
  keywords: string[];
  author: string;
  creator: string;
  publisher: string;
  
  // URLs and Canonical
  url: string;
  canonical: string;
  siteName: string;
  
  // Social Media
  twitter: {
    site: string;
    creator: string;
  };
  
  // Images
  ogImage: string;
  twitterImage: string;
  
  // Verification
  googleVerification?: string;
  
  // Hero Content
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    badge: string;
  };
  
  // Structured Data
  structuredData: StructuredDataConfig;
}

// Enhanced SEO configurations for each project
export const SEO_CONFIGS: Record<string, SEOConfig> = {
  playful: {
    title: "Playful by Smarlify - Free Online Games Hub | Traffic Run, Crossy Road, Space Shooter",
    description: "Play amazing free browser games including Traffic Run, Crossy Road, and Space Shooter. Built with Three.js, WebGL, and Unity 3D. No downloads required - instant play in your browser. Perfect for casual gaming and entertainment.",
    keywords: [
      "free online games", "browser games", "web games", "Traffic Run game", "Crossy Road game", "Space Shooter game",
      "Three.js games", "WebGL games", "Unity 3D games", "instant play games", "casual games", "arcade games",
      "mobile games", "desktop games", "no download games", "playful games", "Smarlify games", "gaming hub",
      "interactive games", "JavaScript games", "HTML5 games", "canvas games", "game development showcase"
    ],
    author: "Smarlify",
    creator: "Smarlify",
    publisher: "Smarlify",
    url: "https://playful.smarlify.co",
    canonical: "https://playful.smarlify.co",
    siteName: "Playful by Smarlify",
    twitter: {
      site: "@smarlify",
      creator: "@smarlify"
    },
    ogImage: "/game-assets/crossy-road.png",
    twitterImage: "/game-assets/crossy-road.png",
    googleVerification: "your-google-verification-code",
    hero: {
      headline: "Playful by Smarlify - Ultimate Gaming Hub",
      subheadline: "Experience cutting-edge browser games built with Three.js, WebGL, and Unity 3D. Play instantly - no downloads required!",
      cta: "Start Playing Now",
      badge: "🎮 Free Browser Games"
    },
    structuredData: {
      organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Smarlify",
        "url": "https://smarlify.co",
        "logo": "https://smarlify.co/smarlify-white.svg",
        "description": "Technology company creating innovative web experiences and games",
        "sameAs": [
          "https://github.com/smarlify",
          "https://twitter.com/smarlify"
        ],
        "foundingDate": "2020",
        "founder": {
          "@type": "Person",
          "name": "David Nekovar"
        }
      },
      website: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Playful by Smarlify",
        "description": "Free online gaming hub with browser-based games",
        "url": "https://playful.smarlify.co",
        "publisher": {
          "@type": "Organization",
          "name": "Smarlify",
          "url": "https://smarlify.co"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://playful.smarlify.co?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "offers": {
          "@type": "Offer",
          "name": "Free Browser Games",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free browser games"
        }
      }
    }
  },

  smarlify: {
    title: "Smarlify.co - Smart Living & Crypto Investment Guide | Financial Freedom Tips",
    description: "Discover smart living strategies combining crypto investments, precious metals, healthy lifestyle, and technology. Join 10,000+ smart investors building wealth and achieving financial freedom through strategic investments.",
    keywords: [
      "smart living", "crypto investment guide", "bitcoin investment", "ethereum investment", "cryptocurrency portfolio",
      "gold investment", "silver investment", "precious metals investing", "financial freedom", "wealth building strategies",
      "healthy lifestyle", "technology solutions", "investment strategies", "portfolio management", "digital assets",
      "blockchain technology", "decentralized finance", "alternative investments", "wealth preservation", "financial independence",
      "smart money management", "investment education", "crypto trading", "long-term investing", "passive income"
    ],
    author: "Smarlify.co",
    creator: "Smarlify",
    publisher: "Smarlify",
    url: "https://smarlify.co",
    canonical: "https://smarlify.co",
    siteName: "Smarlify.co",
    twitter: {
      site: "@smarlify",
      creator: "@smarlify"
    },
    ogImage: "/og-image.jpg",
    twitterImage: "/og-image.jpg",
    googleVerification: "your-google-verification-code",
    hero: {
      headline: "Live Smarter, Invest Wiser",
      subheadline: "Combine freedom, healthy lifestyle, growing investment portfolios in crypto & precious metals, and cutting-edge technology to transform your life.",
      cta: "Start Your Journey",
      badge: "Freedom Through Smart Living 🏝️"
    },
    structuredData: {
      organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Smarlify",
        "url": "https://smarlify.co",
        "logo": "https://smarlify.co/smarlify-white.svg",
        "description": "Smart living and investment education platform focusing on crypto, precious metals, and lifestyle optimization",
        "sameAs": [
          "https://github.com/smarlify",
          "https://twitter.com/smarlify"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "hello@smarlify.co"
        },
        "foundingDate": "2020",
        "founder": {
          "@type": "Person",
          "name": "David Nekovar"
        }
      },
      website: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Smarlify.co",
        "description": "Smart living and investment education platform",
        "url": "https://smarlify.co",
        "publisher": {
          "@type": "Organization",
          "name": "Smarlify"
        },
        "about": {
          "@type": "Thing",
          "name": "Smart Living and Investment Education"
        }
      }
    }
  },

  davidnekovar: {
    title: "David Nekovář - Product Owner & Full Stack Developer | Ruby on Rails, Vue.js, React, AI Solutions Architect",
    description: "Experienced Product Owner & Full Stack Developer with 12+ years building innovative solutions for global brands. Specializing in Ruby on Rails, Vue.js, React, Nuxt.js, Next.js, PWA, Three.js, and AI Solutions Architecture. Available for new opportunities in Prague, Czech Republic.",
    keywords: [
      "David Nekovář", "Product Owner", "Full Stack Developer", "AI Solutions Architect", "Ruby on Rails developer", "Vue.js developer", "React developer",
      "Ruby on Rails expert", "Vue.js expert", "React expert", "Nuxt.js developer", "Next.js developer", "PWA developer", "Three.js developer",
      "TypeScript developer", "PostgreSQL developer", "Node.js developer", "Nest.js developer", "Web Game Development",
      "Product Manager", "Project Manager", "Scrum Master", "CTO", "Co-Founder", "Startup Developer",
      "Investment Portfolio Manager", "Crypto Trading", "Startup Funding", "MVP Development",
      "Prague developer", "Czech Republic developer", "Remote developer", "Freelance developer",
      "Web Development", "Mobile Development", "PWA Development", "Japanese Market", "Global Brands", "AI Solutions"
    ],
    author: "David Nekovář",
    creator: "David Nekovář",
    publisher: "David Nekovář",
    url: "https://www.davidnekovar.cz",
    canonical: "https://www.davidnekovar.cz",
    siteName: "David Nekovář",
    twitter: {
      site: "@davidnekovar",
      creator: "@davidnekovar"
    },
    ogImage: "/dave.jpg",
    twitterImage: "/dave.jpg",
    googleVerification: "your-google-verification-code",
    hero: {
      headline: "Product Owner & Full Stack Developer",
      subheadline: "Building innovative solutions for global brands with 12+ years of experience in Ruby on Rails, Vue.js, React, Nuxt.js, Next.js, PWA, Three.js, and AI Solutions Architecture. Available for new opportunities.",
      cta: "Get in Touch",
      badge: "Available for New Opportunities"
    },
    structuredData: {
      organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "David Nekovar",
        "url": "https://www.davidnekovar.cz",
        "jobTitle": "Full-Stack Developer & Tech Entrepreneur",
        "description": "Experienced full-stack developer specializing in modern web technologies and software engineering",
        "sameAs": [
          "https://github.com/davidnekovarcz",
          "https://linkedin.com/in/davidnekovar",
          "https://twitter.com/davidnekovar"
        ],
        "knowsAbout": [
          "React", "Node.js", "TypeScript", "JavaScript", "Web Development",
          "Full-Stack Development", "Software Engineering", "Tech Entrepreneurship",
          "API Development", "Database Design", "Cloud Computing", "Mobile Development"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Software Developer",
          "occupationLocation": {
            "@type": "Country",
            "name": "Czech Republic"
          }
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Technical University"
        }
      },
      website: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "David Nekovar Portfolio",
        "description": "Full-stack developer portfolio and services",
        "url": "https://www.davidnekovar.cz",
        "author": {
          "@type": "Person",
          "name": "David Nekovar"
        },
        "about": {
          "@type": "Thing",
          "name": "Web Development Services"
        }
      }
    }
  }
};

// Enhanced AI-Friendly Content Generator
export class AIContentGenerator {
  static generateGameDescription(gameName: string, technologies: string[]): string {
    return `Play ${gameName} - an exciting ${technologies.join(', ')} game. Experience immersive gameplay with stunning graphics and smooth controls. Perfect for casual gaming and entertainment.`;
  }

  static generateServiceDescription(service: string, benefits: string[]): string {
    return `Professional ${service} services designed to ${benefits.join(', ')}. Expert solutions tailored to your needs with cutting-edge technology and proven methodologies.`;
  }

  static generateProjectDescription(project: string, techStack: string[], features: string[]): string {
    return `${project} - A ${techStack.join(', ')} project featuring ${features.join(', ')}. Built with modern web technologies and best practices for optimal performance and user experience.`;
  }

  static generateLongTailKeywords(baseKeywords: string[], modifiers: string[]): string[] {
    const longTailKeywords: string[] = [];
    baseKeywords.forEach(base => {
      modifiers.forEach(modifier => {
        longTailKeywords.push(`${base} ${modifier}`);
        longTailKeywords.push(`${modifier} ${base}`);
      });
    });
    return longTailKeywords;
  }

  static generateFAQContent(questions: string[], answers: string[]): Array<{
    "@type": "Question";
    "name": string;
    "acceptedAnswer": {
      "@type": "Answer";
      "text": string;
    };
  }> {
    return questions.map((question, index) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answers[index] || "Contact us for more information."
      }
    }));
  }
}

// Enhanced SEO Helper Functions
export class SEOHelpers {
  static generateMetaTags(config: SEOConfig, additionalTags: Record<string, string> = {}) {
    return {
      title: config.title,
      description: config.description,
      keywords: config.keywords.join(', '),
      author: config.author,
      creator: config.creator,
      publisher: config.publisher,
      'og:title': config.title,
      'og:description': config.description,
      'og:type': 'website',
      'og:url': config.url,
      'og:image': config.ogImage,
      'og:site_name': config.siteName,
      'twitter:card': 'summary_large_image',
      'twitter:site': config.twitter.site,
      'twitter:creator': config.twitter.creator,
      'twitter:title': config.title,
      'twitter:description': config.description,
      'twitter:image': config.twitterImage,
      'canonical': config.canonical,
      'robots': 'index, follow',
      'googlebot': 'index, follow',
      ...additionalTags
    };
  }

  static generateStructuredData(config: SEOConfig, additionalData: unknown[] = []): unknown[] {
    const structuredData: unknown[] = [
      config.structuredData.organization,
      config.structuredData.website,
    ];
    
    if (config.structuredData.breadcrumb) {
      structuredData.push(config.structuredData.breadcrumb);
    }
    
    if (config.structuredData.person) {
      structuredData.push(config.structuredData.person);
    }
    
    return [...structuredData, ...additionalData];
  }

  static generateSitemapUrls(config: SEOConfig, additionalUrls: string[] = []) {
    return [
      {
        url: config.url,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 1
      },
      ...additionalUrls.map(url => ({
        url: `${config.url}${url}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8
      }))
    ];
  }

  static generateBreadcrumbStructuredData(items: Array<{name: string, url: string}>): unknown {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };
  }
}

// Export enhanced configurations
export const PLAYFUL_SEO = SEO_CONFIGS.playful;
export const SMARLIFY_SEO = SEO_CONFIGS.smarlify;
export const DAVID_SEO = SEO_CONFIGS.davidnekovar;