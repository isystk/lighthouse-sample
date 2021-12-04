'use strict';

module.exports = {
  audits: [{
    path: "lighthouse-plugin-example/audits/broken-link.js",
  }],
  category: {
    title: 'Broken links',
    description: 'Results for our new plugin category.',
    auditRefs: [
      {id: 'broken-link', weight: 1},
      {id: 'meta-description', weight: 1},
    ],
  },
};