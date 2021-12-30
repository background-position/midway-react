import { defineConfig } from '@midwayjs/hooks';

export default defineConfig({
    source: './src/service/apis',
    routes: [
        {
            baseDir: 'lambda',
            basePath: '/api',
        },
    ],
});
