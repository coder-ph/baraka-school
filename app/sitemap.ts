import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.barakamtitoacademy.co.ke',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.barakamtitoacademy.co.ke/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.barakamtitoacademy.co.ke/academics',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.barakamtitoacademy.co.ke/admissions',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.barakamtitoacademy.co.ke/admissions/apply',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.barakamtitoacademy.co.ke/admissions/fee-structure',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.barakamtitoacademy.co.ke/school-life',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.barakamtitoacademy.co.ke/news/events',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.4,
    },
    {
      url: 'https://www.barakamtitoacademy.co.ke/news/achievements',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.4,
    },
  ]
}