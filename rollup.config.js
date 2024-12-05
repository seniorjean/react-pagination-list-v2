import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'
export default [
    {
        input: './src/index.js', // Entry point of your React component
        output: [
            {
                file: 'dist/index.js', // Output bundle file
                format: 'cjs', // CommonJS format for compatibility with other JavaScript environments
            },
            {
                file: 'dist/index.es.js', // Output bundle file
                format: 'es', // es format for compatibility with other JavaScript environments
                exports: 'named',
            }
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**', // Exclude node_modules from Babel transformation
                presets: ['@babel/preset-react']
            }),
            postcss({
                plugins:[],
                minimize:true
            }),
            external(),
            resolve(),
            terser(),
        ],
        external: ['react', 'react-dom'], // External dependencies that should not be bundled
    }
];