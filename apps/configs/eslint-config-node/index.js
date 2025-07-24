module.exports = {
  extends: ['../eslint-config-base', 'plugin:node/recommended'],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off'
  }
};
