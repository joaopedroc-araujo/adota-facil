// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";
import airbnb from "eslint-config-airbnb";
import airbnbHooks from "eslint-config-airbnb/hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
// Se usar TypeScript:
import airbnbTypescript from "eslint-config-airbnb-typescript";
import tsPlugin from "@typescript-eslint/eslint-plugin";

const compat = new FlatCompat();

export default [
  ...compat.config({
    extends: ["airbnb", "airbnb/hooks", "airbnb-typescript"],
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
