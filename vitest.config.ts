import { coverageConfigDefaults, defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        coverage: {
            reporter: ['text', 'lcov', 'html'],
            exclude: [...coverageConfigDefaults.exclude, 'src/utils/test/***'],
            include: ['src/**'],
        },
        setupFiles: ['./vite-setup-file.ts'],
        env: {},
    },
});
