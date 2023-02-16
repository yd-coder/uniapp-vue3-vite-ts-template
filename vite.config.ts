import { ConfigEnv, UserConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import { resolve } from 'path';
import { loadEnv } from 'vite';

// https://vitejs.cn/config/
export default ({ mode }: ConfigEnv): UserConfig => {
	const root = process.cwd();
	const env = loadEnv(mode, root);
	return {
		base: './',
		resolve: {
			alias: {
				'@': resolve('./src'),
			},
		},
		define: {
			'process.env': {},
		},
		server: {
			host: true,
			// open: true,
			port: env.VITE_PORT as any,
			proxy: {
				'/api': {
					target: env.VITE_BASE_URL,
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, ''),
				},
				'/upload': {
					target: env.VITE_BASE_URL,
					changeOrigin: true,
					rewrite: path => path.replace(/^\/upload/, ''),
				},
			},
		},
		plugins: [
			uni(),
			// eslintPlugin({
			//   include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts'],
			//   exclude: ['./node_modules/**'],
			//   cache: false,
			// }),
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/styles/variables.scss";` // 在所有 SCSS 中注入变量
				}
			},
			postcss: {
				plugins: [
					require('autoprefixer') // 添加浏览器前缀
				]
			}
		},
	};
};
