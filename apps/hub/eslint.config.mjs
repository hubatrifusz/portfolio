// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import { nuxtConfig } from "@repo/eslint-config";

export default withNuxt(...nuxtConfig, {
  rules: {
    "nuxt/nuxt-config-keys-order": "off",
    "vue/multi-word-component-names": "off",
  },
});
