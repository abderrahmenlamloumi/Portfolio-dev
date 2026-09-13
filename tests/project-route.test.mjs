import test from 'node:test';
import assert from 'node:assert/strict';

import { isAllProjectsRoute, getProjectsLink, getHomeLink } from '../src/utils/projectRoutes.js';

test('detects hash-based all-projects route', () => {
  assert.equal(isAllProjectsRoute('#/projects'), true);
  assert.equal(isAllProjectsRoute('#projects'), true);
  assert.equal(isAllProjectsRoute('#/about'), false);
});

test('builds base-aware project links', () => {
  assert.equal(getProjectsLink('/Portfolio-dev/'), '/Portfolio-dev/#/projects');
  assert.equal(getHomeLink('/Portfolio-dev/'), '/Portfolio-dev/');
});
