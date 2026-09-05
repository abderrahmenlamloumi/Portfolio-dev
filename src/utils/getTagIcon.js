const iconMap = {
  react: '/assets/react.svg',
  tailwind: '/assets/tailwindcss.png',
  typescript: '/assets/typescript.png',
  kubernetes: '/assets/kubernetes.svg',
  'next.js': '/assets/nextjs.svg',
  next: '/assets/nextjs.svg',
  vhdl: '/assets/vhdl.svg',
  c: '/assets/c.svg',
  java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  algorithms: '/assets/leet.png',
};

export default function getTagIcon(tag) {
  if (!tag) return '/assets/image.png';

  // If the tag provides an explicit path, prefer it.
  if (tag.path) {
    const p = String(tag.path).trim();
    if (/^https?:\/\//.test(p) || p.startsWith('//')) return p;
    if (p.startsWith('/')) return p;
    if (p.startsWith('assets/') || p.startsWith('./assets/') || p.startsWith('./')) return '/' + p.replace(/^\.\//, '');
  }

  const name = String(tag.name || '').toLowerCase();

  // Fallback to mapping based on the tag name
  for (const key of Object.keys(iconMap)) {
    if (name.includes(key)) return iconMap[key];
  }

  return '/assets/image.png';
}
