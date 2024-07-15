import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: [
				'resources/sass/app.scss',
				'resources/js/loader.js',
				'resources/js/app.js',
			],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': '/resources/vue',
            'vue': 'vue/dist/vue.esm-bundler.js',
            //'vue3-carousel': 'vue3-carousel/dist/carousel.es.js'
        },
    },
});
