export const getBasePath = () => import.meta.env.BASE_URL || '/';

export const normalizeBasePath = (basePath = getBasePath()) => {
  if (!basePath || basePath === '/') {
    return '/';
  }

  return basePath.replace(/\/+$/, '');
};

export const isAllProjectsRoute = (pathname = window.location.pathname, hash = window.location.hash) => {
  const normalizedPath = (pathname || '').replace(/\/+$/, '');
  const normalizedHash = (hash || '').trim();

  return normalizedHash.startsWith('#/projects') || normalizedHash === '#projects' || normalizedPath.endsWith('/projects');
};

export const getProjectsLink = (basePath = getBasePath()) => {
  const normalizedBasePath = normalizeBasePath(basePath);

  if (normalizedBasePath === '/') {
    return '/#/projects';
  }

  return `${normalizedBasePath}/#/projects`;
};

export const getHomeLink = (basePath = getBasePath()) => {
  const normalizedBasePath = normalizeBasePath(basePath);

  if (normalizedBasePath === '/') {
    return '/';
  }

  return `${normalizedBasePath}/`;
};
