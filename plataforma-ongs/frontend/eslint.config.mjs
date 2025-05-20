// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";

import tsPlugin from "@typescript-eslint/eslint-plugin";

const compat = new FlatCompat();

export default [
  ...compat.config({
    extends: ['@adotafacil/eslint-config-react'],
    plugins: {
      import: importPlugin,
      react,
      "jsx-a11y": jsxA11y,
      "react-hooks": reactHooks,
      "@typescript-eslint": tsPlugin,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json",
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  }),
];
