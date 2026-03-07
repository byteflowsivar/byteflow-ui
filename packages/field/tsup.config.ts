import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts', 'src/styles.css'],
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    injectStyle: false,
    external: ['react', '@byteflow-ui/label', '@byteflow-ui/input'],
    minify: true,
});
