import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts', 'src/styles.css'],
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    injectStyle: false,
    minify: true,
    external: ['react', 'react-dom', '@byteflow-ui/popover', '@byteflow-ui/calendar', '@byteflow-ui/button'],
});
