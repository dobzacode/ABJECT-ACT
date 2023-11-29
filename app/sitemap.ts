import { pathnames } from 'navigation';

// Define your SitemapFile type based on your requirements
type SitemapFile = {
  url: string;
  lastModified: string;
  changeFrequency:
    | 'monthly'
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'yearly'
    | 'never'
    | undefined;
  priority: number | undefined;
};

export default function sitemap(): SitemapFile[] {
  const URL = process.env.SITE_URL;

  const routes: SitemapFile[] = Object.entries(pathnames).flatMap(([, value]) => {
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
        url: `${URL}${path[lang as keyof typeof path]}`,
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
