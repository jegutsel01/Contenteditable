import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    build: {
		format: "file",
	},
	
	site: 'https://jegutsel01.github.io',


	base: '/contenteditable'
	
});
