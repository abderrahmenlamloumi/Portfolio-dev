const ASSETS_BASE = import.meta.env.BASE_URL || '/';

const iconMap = {
  react: `${ASSETS_BASE}assets/react.svg`,
  tailwind: `${ASSETS_BASE}assets/tailwindcss.png`,
  typescript: `${ASSETS_BASE}assets/typescript.png`,
  kubernetes: `${ASSETS_BASE}assets/kubernetes.svg`,
  'next.js': `${ASSETS_BASE}assets/nextjs.svg`,
  next: `${ASSETS_BASE}assets/nextjs.svg`,
  vhdl: `${ASSETS_BASE}assets/vhdl.svg`,
  c: `${ASSETS_BASE}assets/c.svg`,
  java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  algorithms: `${ASSETS_BASE}assets/leet.png`,
};

export default function getTagIcon(tag) {
  if (!tag) return `${ASSETS_BASE}assets/image.png`;

  // If the tag provides an explicit path, prefer it.
  if (tag.path) {
    const p = String(tag.path).trim();
    if (/^https?:\/\//.test(p) || p.startsWith('//')) return p;
    if (p.startsWith('/')) return `${ASSETS_BASE}${p.replace(/^\//, '')}`;
    if (p.startsWith('assets/') || p.startsWith('./assets/') || p.startsWith('./')) return `${ASSETS_BASE}${p.replace(/^\.\/?/, '')}`;
  }

  const name = String(tag.name || '').toLowerCase();

  // Fallback to mapping based on the tag name
  for (const key of Object.keys(iconMap)) {
    if (name.includes(key)) return iconMap[key];
  }

  return `${ASSETS_BASE}assets/image.png`;
}
