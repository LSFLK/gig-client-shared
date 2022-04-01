import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import image from 'rollup-plugin-img';
import pkg from './package.json';

export default ["constants", "routes", "auth", "components", "functions"].map((module) => (
    {
        input: "src/" + module + "/index.js",
        output: [
            {file: "dist/" + module + "/index.cjs.js", format: 'cjs'},
            {file: "dist/" + module + "/index.js", format: 'esm'}
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
            del({targets: ['dist/" + module + "/*']}),
        ],
        external: Object.keys(pkg.peerDependencies || {})
    }
));