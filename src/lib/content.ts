import { getCollection } from 'astro:content';

// Drafts show up while you run `npm run dev`, never on the live site.
const visible = (e: { data: { draft: boolean } }) => import.meta.env.DEV || !e.data.draft;

export async function getProjects() {
  return (await getCollection('projects', visible)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export async function getPosts() {
  return (await getCollection('posts', visible)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

export function readingTime(body = '') {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

// "==phrase==" in about.md bullets becomes a highlighted phrase.
export function highlight(text: string, colour: string) {
  const esc = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return esc.replace(/==(.+?)==/g, `<mark class="hl hl--${colour}">$1</mark>`);
}
