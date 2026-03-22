import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: [
      'js/recommended',
      {
        plugins: {
          prettier: prettierPlugin,
        },
        rules: {
          'prettier/prettier': 'error',
          ...prettierConfig.rules,
        },
      },
    ],
    languageOptions: { globals: globals.node },
  },
]);
