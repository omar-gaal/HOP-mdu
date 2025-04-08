import path from 'path';

export default {
  types: path.resolve(__dirname, './src/types'),
  components: path.resolve(__dirname, './src/components'),
  composables: path.resolve(__dirname, './src/composables'),
  pages: path.resolve(__dirname, './src/pages'),
  stores: path.resolve(__dirname, './src/stores'),
  utils: path.resolve(__dirname, './src/utils'),
  pinia: path.resolve(__dirname, './node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs')
};
