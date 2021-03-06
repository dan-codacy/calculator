module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
  parser: "babel-eslint",
  ignorePatterns: ["*.json", "node_modules", "build"],
  rules: {
    "quotes": [2, "double", { "avoidEscape": true }]
  }
};
