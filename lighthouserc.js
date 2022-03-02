module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/technologies",
        "http://localhost:3000/projects",
        "http://localhost:3000/contact",
        "http://localhost:3000/project/*",
      ],
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.85 }],
        "categories:best-practices": ["error", { minScore: 0.85 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.95 }],
        "categories:pwa": "off",
      },
    },

    upload: {
      target: "temporary-public-storage",
    },
  },
};
