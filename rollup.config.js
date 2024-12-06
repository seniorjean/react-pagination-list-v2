import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default [
    {
        input: 'src/index.js', // Entry point of your React components
        output: [
            {
                file: 'dist/index.js', // CommonJS bundle
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: 'dist/index.es.js', // ES module bundle
                format: 'es',
                exports: 'named',
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(), // Exclude peer dependencies
            resolve({
                extensions: ['.js', '.jsx', '.ts', '.tsx'], // Ensure these file extensions are resolved
            }),
            commonjs(), // Convert CommonJS to ES modules
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled',
                presets: ['@babel/preset-react'], // Ensure React code is transpiled
            }),
            postcss({
                plugins: [],
                minimize: true, // Minify CSS
            }),
        ],
        external: ['react', 'react-dom', '@mui/material'], // Keep MUI as external
    },
];