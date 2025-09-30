import { MetadataRoute } from 'next'
import { DAVID_SEO, SEOHelpers } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const additionalUrls = [
    '/cookies'
  ];

  return SEOHelpers.generateSitemapUrls(DAVID_SEO, additionalUrls);
}
