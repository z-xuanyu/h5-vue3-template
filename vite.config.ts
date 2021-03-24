import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // 打包路径，
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 配置src别名;
      '@api':path.resolve(__dirname,'./src/api'),
      '@cp':path.resolve(__dirname,'./src/components')
    }
  },
  server: {
    port: 4000, // 启动窗口
    open: true,
    proxy: {
      // 选项
      '/api': 'http://123.56.85.24:5000'//代理网址
    },
    cors:true,
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "./src/styles/index.scss";', // 全局样式变量
      }
    }
  }
})
