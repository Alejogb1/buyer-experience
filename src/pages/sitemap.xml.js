import { MetadataRoute } from 'next'
import { api } from '~/utils/api'


export default function sitemap() {
  let siteUrl = 'https://www.audiencia.co/'
  const {data: categoryQuery} = api.category.get.useQuery();
  const categoryList = categoryQuery?.map((item) => ({
    url: `${siteUrl}c/${item.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return `
  <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://jsonplaceholder.typicode.com</loc>
      </url>
      <url>
        <loc>https://jsonplaceholder.typicode.com/guide</loc>
      </url>
      ${categoryQuery?.map(({ slug }) => {
          return `
        <url>
            <loc>${`${siteUrl}/${slug}`}</loc>
        </url>
      `;
        })
        .join('')}
    </urlset>
`;}