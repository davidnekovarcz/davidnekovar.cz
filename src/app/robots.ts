import { MetadataRoute } from 'next'
import { DAVID_SEO } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: `${DAVID_SEO.url}/sitemap.xml`,
  }
}
