import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

/**
 * Base rules and plugins without TypeScript ESLint (for use with Nuxt or other frameworks that provide TS config)
 *
 * @type {import("eslint").Linter.Config[]}
 */
const baseRules = [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
      "for-direction": "error",
      "no-unassigned-vars": "error",
      "no-undef": "error",
      "no-unused-vars": "error",
    },
  },
  {
    ignores: ["dist/**"],
  },
];

/**
 * Full ESLint configuration including TypeScript ESLint.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  ...baseRules,
  ...tseslint.configs.recommended
];

/**
 * ESLint configuration for Nuxt projects (without TypeScript ESLint to avoid conflicts).
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const nuxtConfig = baseRules;
