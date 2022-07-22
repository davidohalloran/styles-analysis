import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Pages from 'vite-plugin-pages'
import ViteComponents from 'vite-plugin-components'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
      '@shared': `${resolve(__dirname, 'shared')}/index.ts`,
    },
    dedupe: ['vue'],
  },
  plugins: [
    Vue(),
    WindiCSS(),
    Pages({
      importMode: 'sync',
    }),
    ViteComponents({
      customComponentResolvers: [
      ],
    }),
  ],
  build: {
    outDir: 'dist/app',
  },
  optimizeDeps: {
    include: [
      'vue-router',
      'vue',
      '@vueuse/core',
      '@vueuse/router',
      'fuse.js',
      'prismjs',
    ]
  },
})
