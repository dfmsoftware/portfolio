import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    server: {
        port: 56974,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    }
})