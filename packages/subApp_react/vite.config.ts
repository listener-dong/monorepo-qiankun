import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import qiankun from 'vite-plugin-qiankun';

// @vitejs/plugin-react 4.2.0版本 使用 hmr: false 将在开发服务器中禁用所有热模块更换（Hot Module Replacement），包括 React Fast Refresh。
// @vitejs/plugin-react 4.2.0以前的版本，使用 react(fastRefresh:false),
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		qiankun('subApp_react', {
			useDevMode: true
		})
	],
	base: 'http://localhost:8002/',
	server: {
		port: 8002,
		cors: true,
		origin: 'http://localhost:8002',
		hmr: false
	},
	css: {
		//* css模块化
		modules: {
			// css模块化 文件以.module.[css|less|scss]结尾
			generateScopedName: '[name]__[local]___[hash:base64:5]',
			hashPrefix: 'prefix'
		},
		//* 预编译支持less
		preprocessorOptions: {
			scss: {
				// 支持内联 JavaScript
				javascriptEnabled: true
			}
		}
	}
});
