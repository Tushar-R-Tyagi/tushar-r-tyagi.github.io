// Create a new post or project from a template.
//   npm run new:post -- "My post title"
//   npm run new:project -- "My project title"
import { existsSync, writeFileSync } from 'node:fs';

const [kind, ...words] = process.argv.slice(2);
const title = words.join(' ').trim();
if (!['post', 'project'].includes(kind) || !title) {
  console.error('Usage: npm run new:post -- "Title"   or   npm run new:project -- "Title"');
  process.exit(1);
}
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const today = new Date().toISOString().slice(0, 10);
const dir = kind === 'post' ? 'content/posts' : 'content/projects';
const file = `${dir}/${slug}.md`;
if (existsSync(file)) {
  console.error(`${file} already exists`);
  process.exit(1);
}
const body =
  kind === 'post'
    ? `---\ntitle: ${title}\ndate: ${today}\ntags: []\ndraft: true\n---\n\nStart writing here.\n`
    : `---\ntitle: ${title}\nfinding: One line: what did you find?\ntag: probes\ndate: ${today}\nfigure: /figures/${slug}.svg\nfigureAlt: What the figure shows\nlink: \ndraft: true\n---\n\nLonger write-up (optional).\n`;
writeFileSync(file, body);
console.log(`Created ${file} (draft: true — set it to false to publish)`);
