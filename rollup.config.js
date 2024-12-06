import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default [
    {
        input: 'src/index.js', // Entry point of your React component
        output: [
            {
                file: 'dist/index.js', // Output bundle file
                format: 'cjs', // CommonJS format for compatibility with other JavaScript environments
                sourcemap: true,
            },
            {
                file: 'dist/index.es.js', // Output bundle file
                format: 'es', // es format for compatibility with other JavaScript environments
                exports: 'named',
                sourcemap: true,
            }
        ],
        plugins: [
            postcss({
                plugins:[],
                minimize:true
            }),
            external(),
            terser(),
            peerDepsExternal(), // Exclude peer dependencies
            resolve(), // Resolve node_modules
            commonjs(), // Convert CommonJS to ES modules
            babel({
                exclude: 'node_modules/**', // Transpile only source code
                babelHelpers: 'bundled',
                presets: ['@babel/preset-react']
            }),
            terser(), // Minify the bundle
        ],
        external: ['react', 'react-dom'], // External dependencies that should not be bundled
    },
];