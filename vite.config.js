import path from 'node:path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	base: '/lab3/',

	plugins: [react()],
	server: {
		host: true,
	},

	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		}
	}
})