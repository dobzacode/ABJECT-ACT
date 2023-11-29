import { pathnames } from 'navigation';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const URL = process.env.SITE_URL;

  const routes = Object.entries(pathnames).flatMap(([key, value]) => {
    // If the value is a string, it means it's a direct mapping
    if (typeof value === 'string') {
      return [
        {
          url: `${URL}${value}`,
          lastModified: new Date().toISOString(),
          changeFrequency: 'monthly',
          priority: 0.8
        }
      ];
    }

    // If the value is an object, it means it has language-specific mappings
    if (typeof value === 'object') {
      const languageEntries = Object.entries(value);
      return languageEntries.map(([lang, path]) => ({
        url: `${URL}${path[lang]}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.8
      }));
    }

    // Handle other cases if needed

    return [];
  });

  return routes;
}
