import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

import Component from "unplugin-vue-components/vite";
import { IonicResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Component({
      resolvers: [
        IonicResolver(),
      ]
    }),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // test: {
  //   globals: true,
  //   environment: 'jsdom'
  // }
})
