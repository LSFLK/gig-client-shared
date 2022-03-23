import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import image from 'rollup-plugin-img';
import pkg from './package.json';

export default [
    {
        input: "src/constants/index.js",
        output: [
            {file: "dist/constants/index.js", format: 'esm'}
        ],
        plugins: [
            image({
                limit: 10000
            }),
            external(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled'
            }),
            del({targets: ['dist/constants/*']}),
        ],
        external: Object.keys(pkg.peerDependencies || {})
    },
    {
        input: "src/routes/index.js",
        output: [
            {file: "dist/routes/index.js", format: 'esm'}
        ],
        plugins: [
            image({
                limit: 10000
            }),
            external(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled'
            }),
            del({targets: ['dist/routes/*']}),
        ],
        external: Object.keys(pkg.peerDependencies || {})
    },
    {
        input: "src/auth/index.js",
        output: [
            {file: "dist/auth/index.js", format: 'esm'}
        ],
        plugins: [
            image({
                limit: 10000
            }),
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
            {file: "dist/components/index.js", format: 'esm'}
        ],
        plugins: [
            image({
                limit: 10000
            }),
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
            {file: "dist/functions/index.js", format: 'esm'}
        ],
        plugins: [
            image({
                limit: 10000
            }),
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