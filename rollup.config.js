import { builtinModules } from 'module';
import nodeResolve from '@rollup/plugin-node-resolve'
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import copy from '@rollup-extras/plugin-copy';
import del from 'rollup-plugin-delete';
import run from '@rollup/plugin-run';

const getExternals = (matches = []) => {
    matches = Array.isArray(matches) ? matches : [matches]
    const modulesSubstringsToBundle = [
        ...matches,
        ...builtinModules
    ]

    return [
        new RegExp(`^((?!(${modulesSubstringsToBundle.join('|')})).)*$`)
    ]
}

const plugins = [
    typescript({
        declaration: false,
        module: 'ES2020',
    }),
    nodeResolve(),
    commonJS()
]

export default [
    {
        external: getExternals('src\\/utils\\/index'),
        input: 'src/utils/index.ts',
        output: [
            {
                dir: 'tests/es',
                format: 'es',
                preserveModules: true,
                preserveModulesRoot: 'src',
                entryFileNames: '[name].js',
            },
            {
                dir: 'tests/cjs',
                format: 'cjs',
                preserveModules: true,
                preserveModulesRoot: 'src',
                entryFileNames: '[name].cjs',
            },
        ],
        plugins: [
            del({
                hook: "buildStart",
                targets: "./tests",
                runOnce: true
            }),
            ...plugins,
            copy({
                src: 'src/samples/**',
                dest: 'samples',
                copyOnce: false,
                verbose: true
            })
        ]
    },
    {
        external: getExternals('rollup-test-builds'),
        input: 'src/rollup-test-builds.ts',
        output: [
            {
                dir: 'tests/browser',
                format: 'es',
                preserveModules: true,
                preserveModulesRoot: 'src',
                entryFileNames: '[name].js',
            },
        ],
        plugins: [
            ...plugins,
            copy({
                src: 'src/samples/**',
                dest: 'samples',
                copyOnce: false,
                verbose: true
            }),
            run()
        ]
    },
    {
        external: getExternals([
            'plugin-test',
            'src\\/utils\\/index',
        ]),
        input: 'src/plugin-test.ts',
        output: [
            {
                dir: 'tests/es',
                format: 'es',
                preserveModules: true,
                preserveModulesRoot: 'src',
                entryFileNames: '[name]-es.test.js',
            },
            {
                dir: 'tests/cjs',
                format: 'cjs',
                preserveModules: true,
                preserveModulesRoot: 'src',
                entryFileNames: '[name]-cjs.test.js',
            },
        ],
        plugins: [
            ...plugins
        ]
    },
    {
        external: getExternals([
            'dom-test',
            'src\\/utils\\/index',
        ]),
        input: 'src/dom-test.ts',
        output: [
            {
                dir: 'tests/browser',
                format: 'es',
                preserveModules: true,
                preserveModulesRoot: 'src',
                entryFileNames: '[name].test.js',
            },
        ],
        plugins: [
            ...plugins
        ]
    },
];