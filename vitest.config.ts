import { defineConfig, mergeConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/tests/setupTests.ts'],
		maxThreads: 15,
		minThreads: 8,
	},
	plugins: [react(), vanillaExtractPlugin()],
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
});
