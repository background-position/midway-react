import { defineConfig } from '@midwayjs/hooks';

export default defineConfig({
  source: './src/se/apis',
  routes: [
    {
      baseDir: 'lambda',
      basePath: '/api',
    },
  ],
});
