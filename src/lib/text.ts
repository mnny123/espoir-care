// Turns "[TODO something]" inside copy into a visible highlighted marker,
// and escapes everything else so data strings are safe to render as HTML.
const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function rich(text: string): string {
  return escape(text).replace(/\[(TODO[^\]]*)\]/g, '<mark class="todo">$1</mark>');
}

// For structured data and meta tags: drop TODO notes entirely.
export function plain(text: string): string {
  return text.replace(/\s*\[TODO[^\]]*\]/g, '').trim();
}
