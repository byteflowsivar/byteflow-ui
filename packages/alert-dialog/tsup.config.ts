import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts', 'src/styles.css'],
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    minify: true,
    external: ['react', 'react-dom', '@byteflow-ui/dialog', '@byteflow-ui/button'],
});
