import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts', 'src/styles.css'],
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    injectStyle: false,
    external: ['react'],
    minify: true,
});
