// Turns a Markdown image that sits on its own line and has a title
//   ![alt text](/figures/plot.png "Fig. 1 — what it shows")
// into a numbered-panel <figure> with a caption.
export function rehypeFigures() {
  return (tree) => walk(tree);
}

function walk(node) {
  if (!node.children) return;
  node.children = node.children.map((child) => {
    if (
      child.type === 'element' &&
      child.tagName === 'p' &&
      child.children.filter((c) => !(c.type === 'text' && !c.value.trim())).length === 1
    ) {
      const img = child.children.find((c) => c.type === 'element' && c.tagName === 'img');
      if (img && img.properties?.title) {
        const caption = String(img.properties.title);
        delete img.properties.title;
        return {
          type: 'element',
          tagName: 'figure',
          properties: { className: ['fig'] },
          children: [
            { type: 'element', tagName: 'div', properties: { className: ['fig__frame'] }, children: [img] },
            { type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: caption }] },
          ],
        };
      }
    }
    walk(child);
    return child;
  });
}
