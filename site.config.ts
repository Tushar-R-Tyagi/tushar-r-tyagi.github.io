// ─────────────────────────────────────────────────────────────
//  Everything you might want to change about the site, in one
//  place. Content lives in /content, the design in /src.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Tushar Tyagi',
  role: 'Independent AI safety researcher',
  description:
    'Tushar Tyagi — independent AI safety research on interpretability and evals.',

  links: {
    github: 'https://github.com/Tushar-R-Tyagi',
    linkedin: 'https://www.linkedin.com/in/YOUR-LINKEDIN-HANDLE', // TODO
  },

  // Tag name (as written in frontmatter) → colour.
  // Colours: 'sage' | 'butter' | 'lilac' | 'plain' | 'dashed'
  // Use colours for research topics, 'dashed' for post-only tags.
  tags: {
    probes: 'sage',
    evals: 'butter',
    agents: 'lilac',
    steering: 'plain',
    meta: 'dashed',
    list: 'dashed',
    research: 'dashed',
  } as Record<string, TagColour>,

  // Comments on blog posts, powered by giscus (https://giscus.app).
  // Fill these in after enabling Discussions on your repo — see README.
  giscus: {
    repo: 'Tushar-R-Tyagi/tushar-r-tyagi.github.io', // TODO: your repo
    repoId: '', // TODO: from giscus.app
    category: 'Comments',
    categoryId: '', // TODO: from giscus.app
  },
};

export type TagColour = 'sage' | 'butter' | 'lilac' | 'plain' | 'dashed';

export function tagColour(tag: string): TagColour {
  return site.tags[tag.toLowerCase()] ?? 'dashed';
}
