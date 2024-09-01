import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

import handlebars from 'rollup-plugin-handlebars-compiler';

import { InputOption, OutputChunk, OutputOptions, rollup, RollupBuild, RollupOptions } from 'rollup';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const filepath = fileURLToPath(import.meta.url)
const __dirname = path.dirname(filepath)


import descriptionHelper from '../samples/modules/descriptionHelper.js';



export type Build = {
    ignoreError?: boolean,
    inputOptions: RollupOptions | (() => Promise<RollupOptions>),
    outputOptionsList: OutputOptions[]
}

interface Builds {
    [key: string]: Build
}



export const RollupTestBuilds: Builds = {
    'simple': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/simple.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'invalid-syntax-error': {
        ignoreError: true,
        inputOptions: {
            input: path.join(__dirname, '../samples/js/invalid-syntax-error.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'invalid-unknown-helpers': {
        ignoreError: true,
        inputOptions: {
            input: path.join(__dirname, '../samples/js/invalid-unknown-helpers.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars({
                    knownHelpersOnly: true
                }),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'with-known-helpers': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/with-known-helpers.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars({
                    helpers: {
                        someKnownHelper: () => 'some known helper'
                    },
                    knownHelpers: {
                        someKnownHelper: true
                    },
                    knownHelpersOnly: true
                }),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'with-helpers-commonjs': {
        inputOptions: {
                input: path.join(__dirname, '../samples/js/with-helpers-commonjs.js'),
                plugins: [
                    nodeResolve(),
                    commonjs(),
                    handlebars({
                        helpers: {
                            descriptionHelper
                        }
                    }),
                ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'with-block-helpers': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/with-block-helpers.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars({
                    helpers: {
                        list: function(items: Array<object>, options) {
                            const itemsAsHtml = items.map(item => "<li>" + options.fn(item) + "</li>");
                            return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
                        }
                    }
                }),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'with-plugin-partial': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/with-plugin-partial.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars({
                    partials: {
                        otherPartial: fs.readFileSync(path.join(__dirname, '../samples/handlebars/partialDirs/anotherDir/otherPartial.hbs')).toString()
                    }
                }),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'with-dir-partials': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/with-dir-partials.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'nested-templates/nested/with-ancestor-dir-partial': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/nested-templates/nested/with-ancestor-dir-partial.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests/nested-templates/nested',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'nested-templates/with-parent-dir-partial': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/nested-templates/with-parent-dir-partial.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests/nested-templates',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'nested-templates/with-cousin-dir-partial': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/nested-templates/with-cousin-dir-partial.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests/nested-templates',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'with-partial-block': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/with-partial-block.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'with-inline-partial': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/with-inline-partial.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
}




export async function generateBundle(buildData: Build) {
    const { inputOptions } = buildData
	let bundle: RollupBuild | null;

    let error = null
	try {
        let inputOptionsValue = inputOptions as RollupOptions
        if (typeof inputOptions === 'function') {
            inputOptionsValue = (await inputOptions()) as RollupOptions
        }
		bundle = await rollup(inputOptionsValue);
	} catch (e) {
		error = e
	}
    return { bundle, error}
}

export async function generateOutput(bundle: RollupBuild, outputOptions: OutputOptions) {

    let outputs: string[] = []
    const { output } = await bundle.generate(outputOptions);

    for (const chunkOrAsset of output) {
        const { code } = chunkOrAsset as OutputChunk
        outputs.push(code)
    }

    return outputs

}

export async function generateOutputs(bundle: RollupBuild, buildData: Build) {
    const { outputOptionsList } = buildData
    const outputs = []
    let error = null
	for (const outputOptions of outputOptionsList) {
        try {
            const currentOutputs = await generateOutput(bundle, outputOptions)
            Array.isArray(currentOutputs) && outputs.push(...currentOutputs)
        } catch (e) {
            error = e
        }
	}
    if (bundle) {
        bundle.close()
    }
    return { outputs, error }
}

export async function writeBundles(bundle: RollupBuild, buildData: Build) {
    const { outputOptionsList } = buildData
	for (const outputOptions of outputOptionsList) {
        await writeBundle(bundle, buildData, outputOptions)
	}
    if (bundle) {
        bundle.close()
    }
}

export async function writeBundle(bundle: RollupBuild, buildData: Build, outputOptions: OutputOptions) {
    let inputOptionsValue = buildData.inputOptions as RollupOptions
    if (typeof buildData.inputOptions === 'function') {
        inputOptionsValue = (await buildData.inputOptions())
    }
    const inputName = inputOptionsValue.input as string
    const basename = path.basename(inputName)
    const outputFile = outputOptions.dir

    try {
        await bundle.write(outputOptions)
        console.log('\x1b[36mGenerated', `${path.join(outputFile, basename)}\x1b[0m`)
    } catch (e) {
        console.error('Could not write', outputFile)
    }
}