// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import { nuxtConfig } from "@repo/eslint-config";

export default withNuxt(
  ...nuxtConfig,
  'nuxt/nuxt-config-keys-order': 'off'
);
