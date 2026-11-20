import rss from '@astrojs/rss';
import { getPosts } from '../lib/content';
import { site } from '../../site.config';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: site.name,
    description: site.description,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
      link: `/blog/${p.id}/`,
      categories: p.data.tags,
    })),
  });
}
