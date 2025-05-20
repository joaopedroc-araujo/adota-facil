module.exports = {
  extends: ['../eslint-config-base', 'next/core-web-vitals', 'plugin:jsx-a11y/recommended'],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/self-closing-comp': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/no-autofocus': 'error'
  }
};
