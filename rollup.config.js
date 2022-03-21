import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';

export default [
    {
        input: "src/auth/index.js",
        output: [
            {file: "dist/auth/index.cjs.js", format: 'cjs'},
            {file: "dist/auth/index.esm.js", format: 'esm'}
        ],
        plugins: [
            external(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled'
            }),
            del({targets: ['dist/auth/*']}),
        ],
        external: Object.keys(pkg.peerDependencies || {})
    },
    {
        input: "src/components/index.js",
        output: [
            {file: "dist/components/index.cjs.js", format: 'cjs'},
            {file: "dist/components/index.esm.js", format: 'esm'}
        ],
        plugins: [
            external(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled'
            }),
            del({targets: ['dist/components/*']}),
        ],
        external: Object.keys(pkg.peerDependencies || {})
    },
    {
        input: "src/functions/index.js",
        output: [
            {file: "dist/functions/index.cjs.js", format: 'cjs'},
            {file: "dist/functions/index.esm.js", format: 'esm'}
        ],
        plugins: [
            external(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled'
            }),
            del({targets: ['dist/functions/*']}),
        ],
        external: Object.keys(pkg.peerDependencies || {})
    },
];