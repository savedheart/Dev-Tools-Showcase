import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { resolve } from 'node:path';

export default defineConfig({
    base: './',
    plugins: [ViteEjsPlugin({}, { ejs: { root: resolve(import.meta.dirname, 'src/partials') } })],
    build: {
        rollupOptions: {
            input: {
                home: resolve(import.meta.dirname, 'index.html'),
                tools: resolve(import.meta.dirname, 'tools.html'),
                about: resolve(import.meta.dirname, 'about.html'),
                jsonFormatter: resolve(import.meta.dirname, 'tool-details/json-formatter.html'),
                uuidGenerator: resolve(import.meta.dirname, 'tool-details/uuid-generator.html'),
                base64Encoder: resolve(import.meta.dirname, 'tool-details/base64-encoder.html'),
                regexTester: resolve(import.meta.dirname, 'tool-details/regex-tester.html'),
                timestampConverter: resolve(import.meta.dirname, 'tool-details/timestamp-converter.html'),
                hashGenerator: resolve(import.meta.dirname, 'tool-details/hash-generator.html')
            }
        }
    }
});